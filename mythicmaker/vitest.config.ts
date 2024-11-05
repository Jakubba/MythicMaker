import { defineConfig } from 'vite';
import react from '@vitejs/plugin-vue'; // Use this line if you are using Vue
// import react from '@vitejs/plugin-react'; // Uncomment this line if you are using React

export default defineConfig({
  plugins: [
    react(), // Uncomment this line if you are using React
  ],
  server: {
    port: 3000, // Specify the port for the development server
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'dist', // Specify the output directory for production builds
  },
  resolve: {
    alias: {
      '@': '/src', // Create an alias for easier imports
    },
  },
});
