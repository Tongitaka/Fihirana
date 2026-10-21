# Baiboly sy fihirana Jesosy Mamonjy — APK

Ny `www/` no app web (offline). GitHub Actions no manao ny APK (Capacitor).

## Fomba haka ny APK (tsotra)
1. Mamoròna repository vaovao ao amin'ny GitHub, ampidiro ny votoatin'ity dossier ity (ny `.github` ao anatiny koa).
2. Alefaso (push) amin'ny branch `main`.
3. GitHub → **Actions** → **Build APK** → rehefa vita (~5-8 min) → **Artifacts** → `Baiboly-Fihirana-JM-debug` → misintona ny `app-debug.apk`.
4. Apetraho amin'ny telefaona (avelao ny "Install unknown apps").

## APK sonia (ho an'ny Play Store / fandefasana ofisialy) — tsy voatery
Mamoròna keystore indray mandeha:
```
keytool -genkeypair -v -keystore release.keystore -alias jm -keyalg RSA -keysize 2048 -validity 10000
base64 -w0 release.keystore   # (Mac: base64 -i release.keystore)
```
GitHub → Settings → Secrets and variables → Actions → ampidiro:
`KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`.
Tehirizo tsara ny keystore — raha very dia tsy azo havaozina ny app.

## Fanavaozana ny hira / Baiboly
Ovay ao amin'ny `www/` (ohatra `hira-data.js`), ovay ny `CACHE_NAME` ao amin'ny `www/sw.js`,
ovay ny `version` ao amin'ny `package.json`, dia push indray.

## Rakitra
- `www/` — ny app web
- `assets/` — sary fototra (icon, splash) ho an'ny Android
- `android-overrides/MainActivity.java` — mametraka ny loko accent amin'ny status bar sy nav bar
- `capacitor.config.json` — appId `com.jesosymamonjy.app`, anarana
- `.github/workflows/build-apk.yml` — fanamboarana ny APK
