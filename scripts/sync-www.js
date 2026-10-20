/** Mandika ny rakitra app + icons + splash mankany amin'ny www/ (Capacitor / Android / Pages). */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const www = path.join(root, 'www');

const files = [
  'index.html', 'hira-data.js', 'hira.js', 'bible-app.js', 'baiboly.js',
  'lohahevitra.js', 'sw.js', 'manifest.json', 'logo-jm.jpg',
  'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'icon.svg',
  '.nojekyll'
];

const dirs = ['icons', 'splash'];

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

if (!fs.existsSync(www)) fs.mkdirSync(www, { recursive: true });

for (const f of files) {
  const src = path.join(root, f);
  if (fs.existsSync(src)) {
    copyFile(src, path.join(www, f));
    console.log('OK', f);
  } else {
    console.warn('Tsy hita:', f);
  }
}

function copyDir(name) {
  const srcDir = path.join(root, name);
  const destDir = path.join(www, name);
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  for (const f of fs.readdirSync(srcDir)) {
    const s = path.join(srcDir, f);
    if (fs.statSync(s).isFile()) {
      copyFile(s, path.join(destDir, f));
      console.log('OK', name + '/' + f);
    }
  }
}
dirs.forEach(copyDir);

// well-known for TWA (optional)
const wk = path.join(root, '.well-known');
if (fs.existsSync(wk)) {
  const dest = path.join(www, '.well-known');
  fs.mkdirSync(dest, { recursive: true });
  for (const f of fs.readdirSync(wk)) {
    copyFile(path.join(wk, f), path.join(dest, f));
    console.log('OK .well-known/' + f);
  }
}

console.log('www/ vonona ho an\'ny Capacitor / GitHub Pages.');
