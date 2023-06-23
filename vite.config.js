// vite.config.js
import { defineConfig } from 'vite';
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import imageOptimizerConfig from "./vite/image-optimizer.config";
import pages from "./vite/pages.config";

const pagesInput = {}

pages.forEach(page => pagesInput[page.name] = page.path);

export default defineConfig({
   build: {
      target: 'es2017',
      outDir: 'build',
      rollupOptions: {
         output: {
            assetFileNames: (assetInfo) => {
               let extType = assetInfo.name.split('.').at(1);
               if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                  extType = 'images';
               } else if (/woff|woff2|ttf|otf/i.test(extType)) {
                  extType = 'fonts';
               }
               return `assets/${extType}/[name][extname]`;
            },
            chunkFileNames: 'assets/js/[name].js',
            entryFileNames: 'assets/js/[name].js',
         },
         input: {
            ...pagesInput
         },
      },
   },
   server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: true,
   },
   plugins: [
      injectHTML(),
      ViteImageOptimizer(imageOptimizerConfig),
   ],
});