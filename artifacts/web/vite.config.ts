import { defineConfig } from 'vite';

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error('PORT environment variable is required');
}

const port = Number(rawPort);

export default defineConfig({
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
  },
  preview: {
    port,
    host: '0.0.0.0',
  },
});
