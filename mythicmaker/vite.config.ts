import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Main configuration options
    globals: true, // Enables the use of global functions like `describe` and `it`
    environment: 'jsdom', // Sets the test environment (e.g., 'node', 'jsdom')
    setupFiles: './setupTests.ts', // File to run before tests
    // Other configuration options
    include: ['src/**/*.{test,spec}.{js,ts}'], // Pattern to find test files
    exclude: ['node_modules/**', '**/*.config.{js,ts}'], // Excludes unnecessary files
    coverage: {
      provider: 'istanbul', // Tool for collecting coverage information
      reporter: ['text', 'json', 'html'], // Coverage report formats
      exclude: ['**/*.d.ts', '**/node_modules/**'], // Exclude files from coverage
    },
  },
});
