// https://github.com/FatehAK/vite-plugin-image-optimizer

export default {
   test: /\.(jpg|jpeg|png|gif|webp|svg)$/i,
   svg: {
      multipass: true,
      plugins: [
         {
            name: 'preset-default',
            params: {
               overrides: {
                  cleanupNumericValues: false,
                  removeViewBox: false,
               },
               cleanupIDs: {
                  minify: true,
                  remove: false,
               },
               convertPathData: false,
            },
         },
         'sortAttrs',
         {
            name: 'addAttributesToSVGElement',
            params: {
               attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
         },
      ],
   },
   png: { quality: 95, compressionLevel: 7, progressive: true },
   jpg: { quality: 85, progressive: true },
   jpeg: { quality: 85, progressive: true },
   gif: { progressive: true },
   webp: { quality: 90 },
};