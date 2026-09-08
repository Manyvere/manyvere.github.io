import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Real-time geometry is intentional: the owner requested rotating Earth, reflections
// and independently twinkling stars. The rocky albedo matches the selected mock.
export function SpaceScene({ paused, result, onInteract }) {
  const host = useRef(null);
  const dragSurface = useRef(null);
  const reposition = useRef(() => {});
  const controls = useRef({ paused, result, onInteract });
  const [available, setAvailable] = useState(false);
  useEffect(() => { controls.current = { paused, result, onInteract }; reposition.current(); }, [paused, result, onInteract]);

  useEffect(() => {
    const element = host.current;
    let disposed = false;
    let frame = 0;
    let scrollFrame = 0;
    let timer = 0;
    let lastFrame = 0;
    let lastTick = performance.now();
    let width = 1;
    let height = 1;
    let radius = 1;
    let horizonDocument = 0;
    const baseSpeed = .013;
    let velocity = baseSpeed;
    let dragging = false;
    let activePointer = null;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let lastPointerTime = 0;
    const hitArea = dragSurface.current;
    const fallback = element.querySelector('.space-fallback');
    let texturesReady = false;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x040706, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = .85;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    element.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 20000);
    camera.position.z = 8000;

    const planet = new THREE.Group();
    scene.add(planet);
    const sphereGeometry = new THREE.SphereGeometry(1, 192, 144);
    // The light is behind the globe. Projected distance to its silhouette keeps
    // the illuminated rock within the very narrow band in the approved image.
    const surfaceMaterial = new THREE.ShaderMaterial({
      uniforms: { uMap: { value: null }, uRadius: { value: 1 } },
      vertexShader: `
        varying vec3 vLocal;
        varying vec3 vNormal;
        void main() {
          vLocal = position;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        uniform float uRadius;
        varying vec3 vLocal;
        varying vec3 vNormal;
        void main() {
          vec3 n = normalize(vNormal);
          vec3 local = normalize(vLocal);
          // Continuous triplanar relief stays seamless through a full rotation.
          vec3 weights = pow(abs(local),vec3(6.0));
          weights /= dot(weights,vec3(1.0));
          vec3 tex = texture2D(uMap,local.yz*2.4+vec2(0.23,0.17)).rgb*weights.x
                   + texture2D(uMap,local.xz*2.4+vec2(0.23,0.17)).rgb*weights.y
                   + texture2D(uMap,local.xy*2.4+vec2(0.23,0.17)).rgb*weights.z;
          float rock = dot(tex,vec3(0.333));
          float relief = pow(clamp((rock-0.14)*2.7,0.0,1.0),1.7);
          float depth = max(0.0,uRadius*(1.0-length(n.xy)));
          float lateral = exp(-5.0*n.x*n.x);
          float light = (0.43*exp(-depth/13.0)+0.09*exp(-depth/65.0))*lateral;
          vec3 night = vec3(0.004,0.011,0.007);
          vec3 reflected = vec3(0.96,0.87,0.72)*light*(0.28+relief*1.25);
          vec3 rim = vec3(0.95,0.78,0.51)*exp(-depth/0.95)*(0.6+rock*0.4)*lateral;
          gl_FragColor = vec4(night+reflected+rim,1.0);
        }
      `,
    });
    const surface = new THREE.Mesh(sphereGeometry, surfaceMaterial);
    surface.rotation.set(0, 0, 0);
    planet.add(surface);

    const hazeMaterial = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: {
        uCenter: { value: new THREE.Vector2() }, uRadius: { value: 1 },
        uWidth: { value: 1 }, uRatio: { value: renderer.getPixelRatio() }, uTime: { value: 0 },
      },
      vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform vec2 uCenter;
        uniform float uRadius;
        uniform float uWidth;
        uniform float uRatio;
        uniform float uTime;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
        }
        void main() {
          vec2 p = gl_FragCoord.xy / uRatio;
          float distance = length(p-uCenter)-uRadius;
          float d = max(0.0, distance);
          float x = (p.x-uCenter.x)/uWidth;
          float centreLight = 0.28 + 0.72 * exp(-x*x*8.0);
          float smoke = noise(vec2(p.x*0.017+uTime*0.012,d*0.07-uTime*0.009));
          float fine = noise(vec2(p.x*0.047-uTime*0.015,d*0.13));
          float haze = exp(-d/5.0)*0.62 + exp(-d/24.0)*0.08 + exp(-d/60.0)*0.014;
          haze *= (0.80+0.15*smoke+0.05*fine)*centreLight;
          vec3 colour = mix(vec3(0.65,0.61,0.43),vec3(1.0,0.78,0.47),smoke*0.3+0.6);
          vec3 scatter = colour*haze;
          float wisp = sin(uTime*0.27) * (noise(vec2(p.x*0.012+uTime*0.022,d*0.04))-0.3);
          scatter *= 1.0+wisp*0.16;
          float glintX = uCenter.x+uWidth*0.3*sin(uTime*0.09+0.9);
          float glint = exp(-pow((p.x-glintX)/18.0,2.0))*pow(max(sin(uTime*0.8+0.3),0.0),8.0)*exp(-d/3.0)*0.10;
          scatter += vec3(0.95,0.80,0.56)*glint;
          // A low atmospheric shimmer, a few pixels above the illuminated limb.
          // It drifts laterally; it never develops into a billowing smoke cloud.
          float crest = 11.0+sin(p.x*0.014-uTime*0.16)*2.0+sin(p.x*0.031+uTime*0.11)*1.5;
          float ribbon = exp(-pow((d-crest)/7.0,2.0))*exp(-d/38.0);
          float threads = pow(noise(vec2(p.x*0.018-uTime*0.07,d*0.035+uTime*0.02)),3.0);
          scatter += vec3(0.95,0.70,0.39)*ribbon*threads*0.034*centreLight;
          gl_FragColor = vec4(scatter, smoothstep(-0.5,0.5,distance));
        }
      `,
    });
    const hazeGeometry = new THREE.PlaneGeometry(1, 1);
    const haze = new THREE.Mesh(hazeGeometry, hazeMaterial);
    haze.position.z = -1500;
    scene.add(haze);

    // Seeded positions keep the sky stable between renders and responsive resizes.
    let seed = 417;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const starSeeds = Array.from({ length: 42 }, () => ({ x: random(), y: random(), phase: random() * Math.PI * 2, speed: .12 + random() * .18, size: .65 + random() * .65 }));
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starSeeds.length * 3);
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('aPhase', new THREE.Float32BufferAttribute(starSeeds.map(s => s.phase), 1));
    starGeometry.setAttribute('aSpeed', new THREE.Float32BufferAttribute(starSeeds.map(s => s.speed), 1));
    starGeometry.setAttribute('aSize', new THREE.Float32BufferAttribute(starSeeds.map(s => s.size), 1));
    const starMaterial = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uTime: { value: 0 }, uRatio: { value: renderer.getPixelRatio() } },
      vertexShader: `
        attribute float aPhase;
        attribute float aSpeed;
        attribute float aSize;
        uniform float uTime;
        uniform float uRatio;
        varying float vLight;
        void main() {
          float pulse = pow(0.5 + 0.5 * sin(uTime * aSpeed + aPhase), 12.0);
          vLight = 0.33 + pulse * 0.4;
          gl_PointSize = (2.6 + pulse * 2.2) * aSize * uRatio;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float vLight;
        void main() {
          float r = length(gl_PointCoord - vec2(0.5));
          float core = exp(-r * r * 40.0);
          float halo = exp(-r * r * 14.0) * 0.16;
          gl_FragColor = vec4(0.92, 0.85, 0.71, (core + halo) * vLight);
        }
      `,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    stars.frustumCulled = false;
    scene.add(stars);

    const render = () => {
      if (disposed || !texturesReady) return;
      renderer.render(scene, camera);
      element.dataset.rotation = surface.rotation.y.toFixed(5);
      element.dataset.skyTime = timer.toFixed(2);
      element.dataset.velocity = velocity.toFixed(4);
    };

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const horizon = horizonDocument - scrollY;
      const visibleHeight = height - horizon;
      hitArea.style.clipPath = `circle(${radius}px at 50% ${horizon + radius}px)`;
      planet.position.y = -height / 2 - radius + visibleHeight;
      hazeMaterial.uniforms.uCenter.value.set(width / 2, visibleHeight - radius);
      if (fallback) fallback.style.transform = `translateX(-50%) translateY(${-scrollY}px)`;
      element.dataset.horizon = horizon.toFixed(2);
      element.dataset.horizonDocument = horizonDocument.toFixed(2);
      element.dataset.scrollY = scrollY.toFixed(2);
      render();
    };

    const resize = () => {
      const nextWidth = element.clientWidth;
      const nextHeight = element.clientHeight;
      // Content can reflow independently of the viewport. Only resize the GPU
      // drawing buffer when the fixed scene's actual dimensions have changed.
      if (nextWidth !== width || nextHeight !== height) {
        width = nextWidth;
        height = nextHeight;
        renderer.setSize(width, height);
        camera.left = -width / 2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = -height / 2;
        camera.updateProjectionMatrix();
        radius = Math.max(width * 1.32, height * .9);
        planet.scale.setScalar(radius);
        surfaceMaterial.uniforms.uRadius.value = radius;
        haze.scale.set(width, height, 1);
        hazeMaterial.uniforms.uRadius.value = radius;
        hazeMaterial.uniforms.uWidth.value = width;
        starSeeds.forEach((s, i) => {
          positions[i * 3] = (s.x - .5) * width;
          positions[i * 3 + 1] = (.5 - s.y * .88) * height;
          positions[i * 3 + 2] = -3000;
        });
        starGeometry.attributes.position.needsUpdate = true;
      }
      const scrollY = window.scrollY;
      const hero = document.querySelector('.result-hero');
      const anchor = hero
        ? hero.querySelector('.calculation-jump') || hero.querySelector('.result-note')
        : document.querySelector('.calculator-nav, .result-note');
      const heroTop = hero ? hero.getBoundingClientRect().top + scrollY : 0;
      const anchorBottom = anchor ? anchor.getBoundingClientRect().bottom + scrollY : 0;
      // Measure in document space, so a resize or pause while scrolled cannot
      // move the horizon relative to the content. Keep the original .833 rule.
      horizonDocument = Math.max(heroTop + height * .833, anchorBottom ? anchorBottom + 56 : 0);
      updateScroll();
    };

    const scroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        if (!disposed) updateScroll();
      });
    };
    window.addEventListener('scroll', scroll, { passive: true });

    const tick = now => {
      if (disposed) return;
      frame = requestAnimationFrame(tick);
      if (document.hidden) { lastTick = now; return; }
      if (now - lastFrame < 32) return;
      const delta = Math.min((now - lastTick) / 1000, .08);
      lastTick = now;
      lastFrame = now;
      if (controls.current.paused && !dragging) return;
      timer += delta;
      if (!dragging) {
        surface.rotation.y += delta * velocity;
        velocity = baseSpeed + (velocity-baseSpeed)*Math.exp(-delta*.38);
        surface.rotation.x *= Math.exp(-delta*.22);
      }
      starMaterial.uniforms.uTime.value = timer;
      hazeMaterial.uniforms.uTime.value = timer;
      render();
    };

    const pointerDown = event => {
      if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
      controls.current.onInteract?.();
      activePointer = event.pointerId;
      dragging = true;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastPointerTime = performance.now();
      hitArea.setPointerCapture(event.pointerId);
      hitArea.dataset.dragging = 'true';
    };
    const pointerMove = event => {
      if (!dragging || event.pointerId !== activePointer) return;
      const now = performance.now();
      const seconds = Math.max(.008,(now-lastPointerTime)/1000);
      const dx = event.clientX-lastPointerX;
      const dy = event.clientY-lastPointerY;
      surface.rotation.y += dx*.006;
      surface.rotation.x = THREE.MathUtils.clamp(surface.rotation.x+dy*.0015,-.16,.16);
      velocity = THREE.MathUtils.lerp(velocity,THREE.MathUtils.clamp(dx*.006/seconds,-1.25,1.25),.6);
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      lastPointerTime = now;
      render();
    };
    const pointerUp = event => {
      if (event.pointerId !== activePointer) return;
      if (hitArea.hasPointerCapture(event.pointerId)) hitArea.releasePointerCapture(event.pointerId);
      dragging = false;
      activePointer = null;
      hitArea.dataset.dragging = 'false';
      if (event.type === 'pointercancel') velocity = baseSpeed;
    };
    const keyDown = event => {
      if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      controls.current.onInteract?.();
      velocity = THREE.MathUtils.clamp(velocity+(event.key === 'ArrowRight' ? .3 : -.3),-1.25,1.25);
    };
    hitArea.addEventListener('pointerdown',pointerDown);
    hitArea.addEventListener('pointermove',pointerMove);
    hitArea.addEventListener('pointerup',pointerUp);
    hitArea.addEventListener('pointercancel',pointerUp);
    hitArea.addEventListener('keydown',keyDown);

    const loader = new THREE.TextureLoader();
    const textures = [];
    const load = (path, color = false) => new Promise((resolve, reject) => {
      loader.load(path, texture => {
        if (disposed) { texture.dispose(); resolve(null); return; }
        if (color) texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
        textures.push(texture);
        resolve(texture);
      }, undefined, reject);
    });
    load('/lineage/images/rock-albedo.jpg').then(map => {
      if (disposed) return;
      map.wrapS = map.wrapT = THREE.MirroredRepeatWrapping;
      surfaceMaterial.uniforms.uMap.value = map;
      texturesReady = true;
      resize();
      setAvailable(true);
      frame = requestAnimationFrame(tick);
    }).catch(() => {
      if (!disposed) setAvailable(false);
    });

    const observer = new ResizeObserver(resize);
    observer.observe(element);
    const content = document.querySelector('.experience');
    if (content) observer.observe(content);
    let stage = null;
    reposition.current = () => {
      const next = document.querySelector('.result-hero') || document.querySelector('.question-stage, .result-stage');
      if (stage !== next) {
        if (stage) observer.unobserve(stage);
        if (next) observer.observe(next);
        stage = next;
      }
      resize();
    };
    reposition.current();
    const lost = event => { event.preventDefault(); setAvailable(false); cancelAnimationFrame(frame); };
    renderer.domElement.addEventListener('webglcontextlost', lost);
    return () => {
      disposed = true;
      reposition.current = () => {};
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener('scroll', scroll);
      observer.disconnect();
      hitArea.removeEventListener('pointerdown',pointerDown);
      hitArea.removeEventListener('pointermove',pointerMove);
      hitArea.removeEventListener('pointerup',pointerUp);
      hitArea.removeEventListener('pointercancel',pointerUp);
      hitArea.removeEventListener('keydown',keyDown);
      renderer.domElement.removeEventListener('webglcontextlost', lost);
      textures.forEach(t => t.dispose());
      sphereGeometry.dispose();
      surfaceMaterial.dispose();
      hazeMaterial.dispose();
      hazeGeometry.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <><div className={`space-scene ${available ? 'is-ready' : ''}`} ref={host} aria-hidden="true" data-testid="space-scene">
    <img className="space-fallback" src="/lineage/images/reference-horizon.png" alt="" />
  </div><button className="planet-control" ref={dragSurface} type="button" disabled={!available} aria-label="Rotate planet with the pointer or arrow keys" data-testid="planet-control" /></>;
}
