/**
 * Mametraka icon + splash ao amin'ny projet Android (aorian'ny `npx cap add android`).
 * Tsy mila @capacitor/assets — miasa amin'ny GitHub Actions.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const android = path.join(root, 'android');
const res = path.join(android, 'app', 'src', 'main', 'res');

if (!fs.existsSync(android)) {
  console.log('Tsy mbola misy android/ — alefaso aloha: npx cap add android');
  process.exit(0);
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}
function copy(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn('Tsy hita:', src);
    return false;
  }
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
  console.log('OK', path.relative(root, dest));
  return true;
}

// --- Icons (mipmap) ---
const iconMap = [
  ['icons/icon-48.png', 'mipmap-mdpi/ic_launcher.png'],
  ['icons/icon-72.png', 'mipmap-hdpi/ic_launcher.png'],
  ['icons/icon-96.png', 'mipmap-xhdpi/ic_launcher.png'],
  ['icons/icon-144.png', 'mipmap-xxhdpi/ic_launcher.png'],
  ['icons/icon-192.png', 'mipmap-xxxhdpi/ic_launcher.png'],
  ['icons/icon-48.png', 'mipmap-mdpi/ic_launcher_round.png'],
  ['icons/icon-72.png', 'mipmap-hdpi/ic_launcher_round.png'],
  ['icons/icon-96.png', 'mipmap-xhdpi/ic_launcher_round.png'],
  ['icons/icon-144.png', 'mipmap-xxhdpi/ic_launcher_round.png'],
  ['icons/icon-192.png', 'mipmap-xxxhdpi/ic_launcher_round.png'],
  ['icons/icon-48.png', 'mipmap-mdpi/ic_launcher_foreground.png'],
  ['icons/icon-72.png', 'mipmap-hdpi/ic_launcher_foreground.png'],
  ['icons/icon-96.png', 'mipmap-xhdpi/ic_launcher_foreground.png'],
  ['icons/icon-144.png', 'mipmap-xxhdpi/ic_launcher_foreground.png'],
  ['icons/icon-192.png', 'mipmap-xxxhdpi/ic_launcher_foreground.png'],
];
for (const [src, dest] of iconMap) {
  copy(path.join(root, src), path.join(res, dest));
}

// --- Splash drawables ---
const splashSrc = path.join(root, 'resources', 'splash.png');
const splashPortrait = path.join(root, 'splash', 'splash-portrait-xxhdpi.png');
const splashFiles = [
  ['drawable/splash.png', splashSrc],
  ['drawable-port/splash.png', splashPortrait],
  ['drawable-land/splash.png', path.join(root, 'splash', 'splash-landscape-xxhdpi.png')],
  ['drawable/splash_icon.png', path.join(root, 'splash', 'splash-icon.png')],
];
for (const [dest, src] of splashFiles) {
  copy(src, path.join(res, dest));
}

// colors.xml — background splash
const values = path.join(res, 'values');
ensureDir(values);
const colorsPath = path.join(values, 'colors.xml');
let colors = fs.existsSync(colorsPath) ? fs.readFileSync(colorsPath, 'utf8') : '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n</resources>\n';
if (!colors.includes('name="splash_background"')) {
  colors = colors.replace('</resources>', '    <color name="splash_background">#8B0015</color>\n    <color name="colorPrimary">#8B0015</color>\n</resources>');
  fs.writeFileSync(colorsPath, colors);
  console.log('OK colors.xml splash_background');
}

// styles — splash theme if present
const stylesPath = path.join(values, 'styles.xml');
if (fs.existsSync(stylesPath)) {
  let styles = fs.readFileSync(stylesPath, 'utf8');
  if (styles.includes('AppTheme.NoActionBarLaunch') && !styles.includes('splash_background')) {
    styles = styles.replace(
      /(<style name="AppTheme\.NoActionBarLaunch"[\s\S]*?>)/,
      '$1\n        <item name="android:background">@color/splash_background</item>'
    );
    fs.writeFileSync(stylesPath, styles);
    console.log('OK styles.xml splash');
  }
}

console.log('Android branding vonona.');
