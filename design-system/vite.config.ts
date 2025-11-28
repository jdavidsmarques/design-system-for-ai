import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Library build configuration
  if (mode === 'lib') {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/lib/index.ts'),
          name: 'DesignSystemLibrary',
          formats: ['es'],
          fileName: 'index',
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.names && assetInfo.names.length > 0 && assetInfo.names[0] === 'style.css') {
                return 'index.css';
              }
              return assetInfo.names?.[0] || 'assets/[name]-[hash][extname]';
            },
          },
        },
        outDir: 'dist',
        emptyOutDir: true,
      },
    };
  }

  // Preview application configuration
  return {
    plugins: [react()],
    root: '.',
    build: {
      outDir: 'dist-preview',
      emptyOutDir: true,
    },
  };
});
