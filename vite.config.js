import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: true,
        historyApiFallback: true,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '/index.html')
            },
        },
    },
})