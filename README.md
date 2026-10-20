# HIRA+ — Boky fihirana nomerika

**Vonona ho GitHub Pages + APK Android** (Capacitor).

## Dossier

```
hira-plus-github/
├── www/                      ← web app (Pages + Capacitor)
├── icons/                    ← 48–512 + maskable
├── splash/                   ← splash portrait/landscape
├── resources/                ← icon 1024 + splash 2732
├── scripts/
│   ├── sync-www.js
│   └── apply-android-branding.js
├── .github/workflows/
│   ├── build-apk.yml         ← APK
│   └── deploy-pages.yml      ← Pages
├── capacitor.config.json
├── package.json
├── index.html, hira-data.js, baiboly.js, …
└── TOROLALANA_APK_MG.txt
```

**App ID:** `mg.jesosymamonjy.hiraplus`  
**Anarana:** HIRA+

## 1. Alefa GitHub

```bash
cd hira-plus-github
git init
git add .
git commit -m "HIRA+ v4.7 — vonona APK"
git branch -M main
git remote add origin https://github.com/USERNAME/hira-plus.git
git push -u origin main
```

> Soloy `USERNAME/hira-plus` amin’ny anaran’ny repo-nao.

## 2. GitHub Pages (HTTPS)

1. **Settings → Pages → Source:** GitHub Actions  
2. **Actions → Deploy GitHub Pages → Run workflow**  
3. URL: `https://USERNAME.github.io/hira-plus/`

## 3. Manamboatra APK

1. **Actions → Build Android APK → Run workflow**  
2. Rehefa vita (5–15 min): **Artifacts → HIRA-plus-debug**  
3. Download `.apk` → apetraho amin’ny finday  

*(Mila ekena ny « Install unknown apps ».)*

## 4. Fanavaozana hira isan-taona

1. Ovay `hira-data.js`  
2. Ovay `CACHE_NAME` ao `sw.js`  
3. `node scripts/sync-www.js`  
4. `git push`  
5. Run indray **Build Android APK**

## 5. Eo an-toerana (optional)

```bash
npm install
npm run build
npx cap add android
npx cap sync android
node scripts/apply-android-branding.js
cd android && ./gradlew assembleDebug
```

APK: `android/app/build/outputs/apk/debug/app-debug.apk`

## Copyright

© 2024–2026 Fihirana Jesosy Mamonjy · HIRA+ · Zo rehetra voatokana
