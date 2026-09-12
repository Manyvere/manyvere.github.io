import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, ArrowUpRight, Pause, Play, DownloadSimple, CaretDown } from '@phosphor-icons/react';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import { SpaceScene } from './SpaceScene.jsx';
import { Calculation } from './Calculation.jsx';
import { calculate, DEFAULT_INPUTS, DEFAULT_ASSUMPTIONS, LIMITS, inputError, money, number, estimateText } from './model.js';
import { ENTITY_SLIDER_STEPS, positionToEntities, entitiesToPosition } from './slider.js';

const QUESTIONS = [
  { key: 'entities', label: 'Your firm', question: 'How many companies do you audit per year?', help: '', unit: '' },
  { key: 'walkthroughs', label: 'Your work', question: 'How many walkthroughs do you average per client?', help: '', unit: '' },
  { key: 'hours', label: 'Your time', question: 'How many team hours does one walkthrough take?', help: 'Include preparation, the interview, documentation and review.', unit: 'hours' },
];
const STEP_FADE = { out: 120, in: 240 };

function useMotion() {
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return [paused, setPaused];
}

function AnswerSlider({ field, value, unit, help, inputRef, onChange }) {
  const limits = LIMITS[field];
  const progressive = field === 'entities';
  // Keep the thumb at the pointer position while the displayed count is rounded.
  const [position, setPosition] = useState(() => entitiesToPosition(value));
  useEffect(() => {
    if (progressive && positionToEntities(position) !== Number(value)) {
      setPosition(entitiesToPosition(value));
    }
  }, [progressive, value, position]);
  const ratio = progressive ? position / ENTITY_SLIDER_STEPS : (value - limits.min) / (limits.max - limits.min);
  const change = event => {
    const next = Number(event.target.value);
    if (progressive) setPosition(next);
    onChange(progressive ? positionToEntities(next) : next);
  };
  const keyDown = event => {
    if (!progressive) return;
    const moves = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 100, PageDown: -100 };
    let next;
    if (event.key === 'Home') next = limits.min;
    else if (event.key === 'End') next = limits.max;
    else if (event.key in moves) next = Number(value) + moves[event.key];
    else return;
    event.preventDefault();
    next = Math.min(limits.max, Math.max(limits.min, next));
    setPosition(entitiesToPosition(next));
    onChange(next);
  };
  return <div className="slider-wrap">
    <div className="slider-track"><span style={{ width: `${ratio * 100}%` }} /></div>
    <input ref={inputRef} id="answer" className="range-input" type="range"
      min={progressive ? 0 : limits.min} max={progressive ? ENTITY_SLIDER_STEPS : limits.max}
      step={progressive ? 'any' : limits.step} value={progressive ? position : value}
      aria-valuemin={limits.min} aria-valuemax={limits.max} aria-valuenow={Number(value)}
      aria-valuetext={`${number(Number(value))}${unit ? ' '+unit : ''}`}
      aria-describedby={help ? 'answer-help' : undefined} onChange={change} onKeyDown={keyDown} />
  </div>;
}

function Count({ value, paused, format = number }) {
  const [shown, setShown] = useState(paused ? value : 0);
  const entryValue = useRef(value);
  const animateEntry = useRef(!paused);
  useEffect(() => {
    if (paused || value !== entryValue.current) animateEntry.current = false;
    if (!animateEntry.current) { setShown(value); return; }
    let frame;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / 1500);
      setShown(value * (1 - Math.pow(1 - t, 4)));
      if (t < 1) frame = requestAnimationFrame(tick);
      else animateEntry.current = false;
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, paused]);
  return <><span aria-hidden="true">{format(shown)}</span><span className="sr-only">{format(value)}</span></>;
}

function Results({ inputs, assumptions, paused, ready, edit, setAssumptions }) {
  const result = calculate(inputs, assumptions);
  const positive = result.netValue >= 0;
  const heading = useRef(null);
  const [saved, setSaved] = useState(false);
  useEffect(() => { if (ready) heading.current?.focus({ preventScroll: true }); }, [ready]);
  const download = () => {
    const blob = new Blob([estimateText(inputs, assumptions, result)], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lineage-estimate-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSaved(true);
  };
  return <main className={`result-stage ${positive ? '' : 'negative-result'}`}><section className="result-hero" aria-labelledby="result-title">
    <p className="result-kicker">Estimated annual capacity value after Lineage fees</p>
    <h1 id="result-title" className="result-number" ref={heading} tabIndex={-1}><Count value={result.netValue} paused={paused} format={money} /><span className="per-year">/ year</span></h1>
    <p className="result-subtitle">{positive ? 'Staff time valued at internal cost. A cash saving requires lower spending.' : 'At these assumptions, the value of freed staff time is lower than the Lineage fees.'}</p>
    <div className="result-metrics">
      <div><strong><Count value={result.hoursSaved} paused={paused} /></strong><span>team hours freed up / year</span></div>
      <div><strong><Count value={result.daysSaved} paused={paused} /></strong><span>equivalent eight-hour staff days</span></div>
    </div>
    <section className="time-comparison" aria-label="Team hours per walkthrough">
      <div className="comparison-title"><h2>Time per walkthrough</h2><span>{number(result.reduction * 100)}% less</span></div>
      <div className="comparison-row"><div><span>Current workflow</span><span>{number(Number(inputs.hours), 2)} h</span></div><div className="bar-track"><div className="bar before" /></div></div>
      <div className="comparison-row"><div><span>With Lineage</span><span>{number(result.hoursAfterPerWalkthrough, 2)} h</span></div><div className="bar-track"><div className="bar after" style={{ width: `${(1 - result.reduction) * 100}%` }} /></div></div>
    </section>
    <div className="result-actions"><button className="primary-button" onClick={edit}><ArrowLeft size={17} /> Adjust my numbers</button><button className="secondary-button" onClick={download}><DownloadSimple size={18} /> {saved ? 'Download again' : 'Save estimate'}</button></div>
    <p className="download-status sr-only" role="status">{saved ? 'Your estimate download has started.' : ''}</p>
    <a className="calculation-jump" href="#calculation" onClick={event => {
      event.preventDefault();
      document.getElementById('calculation-title')?.focus({ preventScroll: true });
      document.getElementById('calculation')?.scrollIntoView({ behavior: paused ? 'instant' : 'smooth', block: 'start' });
    }}>See the calculation <CaretDown size={18} weight="light" /></a>
    <p className="result-note">{number(result.count)} walkthroughs a year · Pricing excludes VAT.</p>
    </section>
    <Calculation inputs={inputs} assumptions={assumptions} result={result} setAssumptions={setAssumptions} paused={paused} />
  </main>;
}

export function App() {
  const [inputs, setInputs] = useState({ ...DEFAULT_INPUTS });
  useEffect(() => {
    setInputs(current => {
      const next = Object.fromEntries(Object.entries(current).map(([key, value]) =>
        [key, Math.min(LIMITS[key].max, Math.max(LIMITS[key].min, Math.round(Number(value))))]));
      return Object.keys(next).some(key => next[key] !== current[key]) ? next : current;
    });
  }, []);
  const [assumptions, setAssumptions] = useState({ ...DEFAULT_ASSUMPTIONS, rates: [...DEFAULT_ASSUMPTIONS.rates] });
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');
  const [paused, setPaused] = useMotion();
  const input = useRef(null);
  const questionLabel = useRef(null);
  const [motionPhase, setMotionPhase] = useState('idle');
  const [motionScope, setMotionScope] = useState('question');
  const phaseRef = useRef('idle');
  const navigationLock = useRef(false);
  const pendingView = useRef(null);
  const focusNewQuestion = useRef(false);
  const setPhase = phase => { phaseRef.current = phase; setMotionPhase(phase); };
  const commitView = view => {
    setStep(view.step);
    setShowResult(view.result);
    setError(view.error);
    if (view.result !== showResult) window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const finishPhase = expected => {
    if (phaseRef.current !== expected) return;
    if (expected === 'out') {
      const target = pendingView.current;
      pendingView.current = null;
      if (target) commitView(target);
      setPhase('in');
    } else {
      navigationLock.current = false;
      setPhase('idle');
    }
  };
  const navigateTo = (nextStep, result = false, error = '') => {
    if (navigationLock.current || (nextStep === step && result === showResult)) return;
    const target = { step: nextStep, result, error };
    focusNewQuestion.current = !result;
    if (paused) { commitView(target); return; }
    navigationLock.current = true;
    pendingView.current = target;
    setMotionScope(result !== showResult ? 'page' : 'question');
    setPhase('out');
  };
  const onNavigationAnimationEnd = event => {
    if (event.target !== event.currentTarget) return;
    if (event.animationName === 'question-fade-out') finishPhase('out');
    if (event.animationName === 'question-fade-in') finishPhase('in');
  };
  useEffect(() => {
    if (motionPhase === 'idle') return;
    // A canceled or suppressed CSS animation must never leave navigation locked.
    const fallback = setTimeout(() => finishPhase(motionPhase), STEP_FADE[motionPhase] + 160);
    return () => clearTimeout(fallback);
  }, [motionPhase]);
  useEffect(() => {
    if (!paused || phaseRef.current === 'idle') return;
    if (pendingView.current) commitView(pendingView.current);
    pendingView.current = null;
    navigationLock.current = false;
    setPhase('idle');
  }, [paused]);
  useEffect(() => {
    if (motionPhase === 'idle' && !showResult && focusNewQuestion.current) {
      focusNewQuestion.current = false;
      questionLabel.current?.focus({ preventScroll: true });
    }
  }, [motionPhase, step, showResult]);
  const question = QUESTIONS[step];
  const value = inputs[question.key];
  const unit = question.unit === 'hours' && Number(value) === 1 ? 'hour' : question.unit;
  const setValue = next => { if (navigationLock.current) return; setInputs(p => ({ ...p, [question.key]: next })); setError(''); };
  const changeStep = (next, error = '') => navigateTo(next, false, error);
  const jumpTo = next => {
    if (navigationLock.current) return;
    const issue = next > step ? inputError(question.key,value) : '';
    if (issue) { setError(issue); input.current?.focus(); return; }
    changeStep(next);
  };
  useEffect(() => { if (error) input.current?.focus({preventScroll:true}); }, [error,step]);
  const submit = event => {
    event.preventDefault();
    if (navigationLock.current) return;
    const issue = inputError(question.key, value);
    if (issue) { setError(issue); input.current.focus(); return; }
    if (step < 2) changeStep(step + 1);
    else {
      const invalid = QUESTIONS.findIndex(q => inputError(q.key,inputs[q.key]));
      if (invalid >= 0) { changeStep(invalid, inputError(QUESTIONS[invalid].key,inputs[QUESTIONS[invalid].key])); return; }
      navigateTo(step, true);
    }
  };
  return <div className={`experience ${paused ? 'motion-paused' : ''} ${showResult ? 'showing-result' : ''}`}>
    <a className="skip-link" href="#calculator">Skip to calculator</a>
    <SpaceScene key="warm-continuous-horizon" paused={paused} result={showResult} onInteract={() => setPaused(false)} />
    <header className="site-header">
      <a className="brand" href="/lineage/" aria-label="Lineage home"><img className="brand-mark" src="/lineage/brand/mark.png?v=20260912-seal" alt="" /><img className="brand-wordmark" src="/lineage/brand/wordmark.svg" alt="Lineage" /></a>
      <nav aria-label="Page and account"><a className="login-link" href="https://manyvere.com/lineage/login/">Log in</a><a className="account-link" href="https://manyvere.com/lineage/login/">Create account <ArrowUpRight size={15} /></a><button type="button" className="motion-toggle" aria-label={paused ? 'Play animations' : 'Pause animations'} title={paused ? 'Play animations' : 'Pause animations'} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={16} weight="fill" /> : <Pause size={17} weight="regular" />}</button></nav>
    </header>
    <div id="calculator" data-motion-phase={motionPhase} data-motion-scope={motionScope} aria-busy={motionPhase !== 'idle'} onAnimationEnd={onNavigationAnimationEnd} style={{ '--step-out-duration': `${STEP_FADE.out}ms`, '--step-in-duration': `${STEP_FADE.in}ms` }}>
      {showResult ? <div inert={motionPhase !== 'idle'}><Results inputs={inputs} assumptions={assumptions} paused={paused} ready={motionPhase === 'idle'} edit={() => navigateTo(0)} setAssumptions={setAssumptions} /></div> :
        <main className="question-stage">
          <h1><span>Curious to see how much</span><span>your firm could <em>save?</em></span></h1>
          <form className="calculator-form" onSubmit={submit} noValidate>
            <div className="question-content" key={step} inert={motionPhase !== 'idle'} onAnimationEnd={onNavigationAnimationEnd}>
              <div className="question-prompt"><label ref={questionLabel} tabIndex={-1} className="question-label" htmlFor="answer">{question.question}</label>
              {question.help && <p className="question-help" id="answer-help">{question.help}</p>}</div>
              <div className="number-control">
                <div className="number-input-wrap"><output htmlFor="answer" className="number-display" aria-hidden="true">{number(Number(value))}</output>{unit && <span className="input-unit">{unit}</span>}</div>
              </div>
              <AnswerSlider field={question.key} value={Number(value)} unit={unit} help={question.help} inputRef={input} onChange={setValue} />
              {error && <p className="field-error" id="answer-error" role="alert">{error}</p>}
            </div>
            <nav className="calculator-nav" aria-label="Calculator questions">
              {step > 0 && <button className="previous-control" type="button" aria-disabled={motionPhase !== 'idle'} onClick={() => jumpTo(step-1)}><ArrowLeft size={18} weight="light" /> Previous</button>}
              <div className="step-buttons">{QUESTIONS.map((q,index) => <button key={q.key} type="button" className={step === index ? 'current-step' : ''} aria-disabled={motionPhase !== 'idle'} aria-label={`Question ${index+1}: ${q.question}`} aria-current={step === index ? 'step' : undefined} onClick={() => jumpTo(index)}><span /></button>)}</div>
              <button className="next-control" type="submit" aria-disabled={motionPhase !== 'idle'}>{step === 2 ? 'See savings' : 'Next'}<ArrowRight size={18} weight="light" /></button>
            </nav>
          </form>
        </main>}
    </div>
  </div>;
}
