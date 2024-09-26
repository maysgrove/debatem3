// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Simulate a browser environment for testing
    globals: true, // Enables global test methods like describe, it, expect
  },
});