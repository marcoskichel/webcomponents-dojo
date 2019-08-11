const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/dialog/runtime.js',
    './dist/dialog/polyfills.js',
    './dist/dialog/scripts.js',
    './dist/dialog/main.js',
  ];
  await fs.ensureDir('elements');
  await concat(files, 'elements/carlitos-dialog.js');
})();
