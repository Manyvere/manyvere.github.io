import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: '/lineage/', build: { outDir: '../lineage', emptyOutDir: true }, plugins: [react()] });
