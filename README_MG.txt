HIRA+ — TOROLALANA AMIN'NY TENY MALAGASY
========================================

INONA NO AO ANATINY?
- index.html: ilay application sy ny kaody HTML/CSS/JavaScript.
- manifest.json: mamaritra ny anaran'ny app rehefa apetraka amin'ny finday.
- sw.js: mitahiry ny pejy ilaina mba hiasa offline.

FOMBA FAMPIASANA TSOTRA
1. Esory (Extract) ny rakitra ZIP.
2. Sokafy ny index.html amin'ny navigateur raha hijery ny endrika sy hampiasa ny ankamaroan'ny fiasa.
3. Ampidiro amin'ny boky fihirana ny tononkira ampiasainareo.
4. Mandehana any amin'ny Fikirana sy tahiry > Misintona tahiry mba hanaovana sauvegarde.

FANAMARIHANA MOMBA NY OFFLINE
- Miasa offline tanteraka ny PWA rehefa alefa amin'ny localhost na tranonkala HTTPS ary efa nosokafana indray mandeha ka voatahiry ny rakitra.
- Raha sokafana mivantana amin'ny file:// (fanindriana index.html fotsiny), mety tsy ho afaka ny Service Worker, ka tsy azo antoka ny fametrahana sy ny offline cache. Na izany aza, miasa ny fitadiavana, ny tononkira ary ny fitahirizana eo an-toerana amin'ny navigateur maro.

FOMBA FITSAPANA AMIN'NY ORDINATEUR
Raha efa manana Python 3 ianao:
1. Sokafy ny terminal ao amin'ny lahatahiry HIRA+.
2. Alefaso: python -m http.server 8000
3. Sokafy amin'ny navigateur: http://localhost:8000
4. Sokafy indray mandeha ny pejy raha mbola misy Internet tsy ilaina, dia afaka andramana ny offline.

FOMBA FITSIDIHANA AMIN'NY FINDAY
- Mba hampiasana amin'ny finday, apetraho amin'ny HTTPS hosting (ohatra GitHub Pages) na alefaso amin'ny serveur local ao amin'ny tambajotrao.
- Rehefa sokafana amin'ny Chrome, tadiavo ny menio > Add to Home screen / Install app.
- Ny PWA dia tsy afaka mametraka ny tenany amin'ny finday raha tsy avy amin'ny navigateur.

FITAHIRIANA SY FIAROVANA NY TONONKIRA
- Voatahiry ao amin'ny localStorage an'ilay navigateur ny hira sy ny hira ankafizina.
- Tsy mifindra ho azy amin'ny navigateur na fitaovana hafa ny hira. Ampiasao ny fanondranana JSON ary ampidiro amin'ilay fitaovana vaovao.
- Raha mamafa ny data an'ilay navigateur ianao, mety ho voafafa koa ny hira. Manaova sauvegarde matetika.
- Misy hira santionany roa ao amin'ny fanombohana. Soloinao amin'ny tononkira tena ampiasain'ny fiangonanareo ireo.


FANAMARIHANA KINOVA 1.1:
- Namboarina ho an'ny Fihirana Jesosy Mamonjy.
- Responsive kokoa amin'ny finday sy ordinateur.
- Afaka mampihena sy mampitombo ny soratra ao amin'ny pejy famakiana.
- Afaka manisy marika hira ankafizina ny mpampiasa.
- Nesorina ny fiasa fampidirana sy fanovana hira amin'ny interface.
- Tsy nampidirina ny tononkira feno satria mbola tsy nomena ny rakitra/boky nomerika.
- Rehefa misy rakitra tononkira nahazoana alalana, dia azo amboarina ho tahiry voaomana amin'ny fanavaozana manaraka.


FOMBA HANAMPIANA HIRA AMIN'NY KAODY (hira.js)
------------------------------------------------
1. Sokafy amin'ny VS Code ny dossier hira_plus.
2. Sokafy ny fichier hira.js. ITO no fichier hanoratana ny hira rehetra.
3. Ampidiro ny hira amin'ity endrika ity (soraty eo anelanelan'ny [ sy ]):

  {
    id: 'hira-001',
    number: '001',
    title: 'Lohatenin’ny hira',
    author: 'Fihirana Jesosy Mamonjy',
    lyrics: `Andininy voalohany...

Fiverenana...

Andininy faharoa...`
  },

4. Raha hira maromaro, asio faingo (,) aorian'ny } isaky ny hira, afa-tsy ilay hira farany.
5. Tehirizo (Ctrl+S) ny hira.js, dia avereno sokafana/refresh HIRA+.
6. Raha efa napetraka ho app offline ilay HIRA+, mety mbola hampiasa cache taloha. Akatona sy sokafy indray, na esory ny cache/site data raha tsy hita ny fanovana.

Fanamarihana: tsy misy tononkira ofisialy efa nampidirina ato amin'ity fonosana ity. Ampidiro ireo tononkira azonao ampiasaina. Ny HIRA+ dia maka ny lisitry ny hira ao amin'ny hira.js isaky ny misokatra; ny hira ankafizina kosa tehirizina ao amin'ny navigateur.


FANAMPIM-PANAZAVANA (KINOVA 1.2)
- Ny hira dia ao amin'ny hira.js.
- Apetraho ao anaty backtick (`...`) ny tononkira; afaka misy apostrophe (') ao anatiny.
- Hira voalohany efa tafiditra: 001 — Masina ny lanitra.
- Raha manampy hira hafa dia saraho amin'ny faingo ny singa ao amin'ny lisitra.
- Raha tsy miseho ny fanovana rehefa offline, havaozy ny cache/service worker na sokafy indray amin'ny navigateur rehefa misy Internet.


KINOVA 4.0 — BAIBOLY SY LOHAHEVITRA
-----------------------------------
- Rakitra vaovao: baiboly.js (Baiboly malagasy feno, ~4,5 Mo), lohahevitra.js (155 lohahevitra), bible-app.js (interface).
- Rakitra niova: index.html, sw.js. (hira.js sy manifest.json tsy niova.)
- Alehero ao anaty lahatahiry iray ihany ny rakitra rehetra (miaraka amin'ny hira.js), dia sokafy indray ny app.
- Fidirana: bokotra boky eo amin'ny lohateny (Fihirana), na "Baiboly" ao amin'ny menio, na tsindrio ny andininy ao amin'ny menio.
- Ao amin'ny Baiboly: Baiboly (famakiana), Lohahevitra, # (boky/toko/andininy), Tiako (andininy), Fihirana (miverina).
- Karohy: teny na toerana (ohatra "Jaona 3:16"). Tsindrio ny andininy raha hanao kopia/zara/tiako.
- Anaran'ny Tompo: Jesosy na Jesoa (ao amin'ny fikirana famakiana).
- Ny Baiboly dia misintona indray mandeha rehefa misokatra voalohany, ary voatahiry ho offline avy eo.
- Raha misy hira misy sokajy mitovy amin'ny lohahevitra (ohatra Fitiavana), misy bokotra "Andininy" ao amin'ny sivana sokajy, ary bokotra "Hira" ao amin'ny lohahevitra.

KINOVA 4.1 — FANATSIMBOHANA
---------------------------
- Nesorina ny safidy Jesosy / Jesoa: Jesosy ihany no ampiasaina (tsy misy fanovana anarana).
- Copyright © 2024–2026 Fihirana Jesosy Mamonjy nampidirina ao amin'ny menio (drawer) sy ao amin'ny Option > Momba.
- Transition sy animation natao fluid kokoa (cubic-bezier toy ny macOS) amin'ny drawer, sheet, overlay ary fiovan'ny pejy.
- Responsive nohatsaraina (efijery kely <420px sy <340px, ary desktop >761px).
- Ny hira dia mbola ao amin'ny hira.js (format JS array). Io no fomba mora indrindra hanavaozana isan-taona: ovay ny hira.js, havaozy ny CACHE_NAME ao amin'ny sw.js, dia alefa ny rakitra vaovao. Ny fanavahana ho .txt dia tsy natao satria ny tononkira dia multiline ary mila parser manokana — ny hira.js dia efa "data file" azo ovaina mora foana.


KINOVA 4.2 — HIRA-DATA.JSON
---------------------------
Ny hira (1460) dia ao amin'ny rakitra **hira-data.json** (JSON).
Ny hira.js dia loader fotsiny: misintona hira-data.json ary manome window.HIRA_SONGS.

FANAVAOZANA ISAN-TAONA (mora)
1. Sokafy hira-data.json (VS Code / Notepad++).
2. Ampio na ovay ny zavatra ao amin'ny array JSON, ohatra:

  {
    "id": "hira-205",
    "number": "205",
    "title": "Lohatenin'ny hira",
    "author": "Fihirana Jesosy Mamonjy",
    "category": "Famonjena",
    "book": "JM",
    "year": "2027",
    "key": "Do dia F",
    "lyrics": "[VERSE 1]\nAndalana voalohany...\n\n[Refrain]\nIsan'andininy..."
  }

  - Ampiasao \\n ho an'ny andalana vaovao ao anaty "lyrics".
  - Asio faingo (,) aorian'ny } isaky ny hira, afa-tsy ny farany.
  - id tokana (unique), ohatra "hira-205".

3. Tehirizo hira-data.json.
4. Ovay ny CACHE_NAME ao amin'ny sw.js (ohatra hira-plus-v4-3) mba handraisan'ny offline ny kinova vaovao.
5. Alefa / alefaso indray ny app (HTTPS na localhost).

Fanamarihana:
- Offline: hira-data.json voatahiry ao amin'ny Service Worker (miaraka amin'ny app).
- Raha sokafana amin'ny file:// mivantana, mety tsy mandeha ny fetch; aleo python -m http.server 8000.
- Ny Baiboly dia mbola ao amin'ny baiboly.js (tsy niova).

KINOVA 4.3 — HIRA-DATA.JS
-------------------------
Ny tononkira dia ao amin'ny **hira-data.js** (window.HIRA_SONGS).
Ny index.html dia mampiasa: <script src="./hira-data.js"></script>

FANAMPINA HIRA VAOVAO ISAN-TAONA
1. Sokafy hira-data.js amin'ny VS Code.
2. Mitady ny ] farany amin'ny array (alohan'ny ;).
3. Asio faingo (,) aorian'ny hira farany taloha, dia ampio objet vaovao:

  {
    "id": "hira-210",
    "number": "210",
    "title": "Lohatenin'ny hira vaovao",
    "author": "Fihirana Jesosy Mamonjy",
    "category": "Fiderana",
    "book": "JM",
    "year": "2027",
    "key": "Do dia F",
    "lyrics": "[VERSE 1]\nAndalana 1...\n\n[Refrain]\nIsan'andininy..."
  }

4. Tehirizo.
5. Ovay CACHE_NAME ao sw.js (ohatra hira-plus-v4-4).
6. Alefa indray ny app.

Fanamarihana: ny "lyrics" dia string iray; andalana vaovao = \n.
