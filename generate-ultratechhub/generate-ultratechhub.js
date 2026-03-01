import fs from 'fs';
import path from 'path';

// Create project root folder
const root = path.join(process.cwd(), 'ultratechhub');
if (!fs.existsSync(root)) fs.mkdirSync(root, { recursive: true });

// Create src folder
const src = path.join(root, 'src');
if (!fs.existsSync(src)) fs.mkdirSync(src);

// Create public/assets folder
const assets = path.join(root, 'public', 'assets');
if (!fs.existsSync(assets)) fs.mkdirSync(assets, { recursive: true });

// ====== 1. index.html ======
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ultratech Hub</title>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body>
  <!-- Background video -->
  <video autoplay muted loop id="background-video">
    <source src="/public/assets/Smoke.mp4" type="video/mp4">
  </video>

  <!-- Logo -->
  <img src="/public/assets/logo.png" alt="Ultratech Hub Logo" id="logo">

  <div id="app"></div>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'index.html'), indexHtml);

// ====== 2. src/main.js ======
const mainJs = `const app = document.getElementById('app');
app.innerHTML = \`<h1>Welcome to Ultratech Hub</h1>\`;
console.log("Ultratech Hub effects loaded");
`;
fs.writeFileSync(path.join(src, 'main.js'), mainJs);

// ====== 3. src/style.css ======
const styleCss = `#background-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
}

#logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
  height: auto;
}

#app {
  position: relative;
  z-index: 1;
  color: white;
  font-family: sans-serif;
  text-align: center;
  margin-top: 50px;
}`;
fs.writeFileSync(path.join(src, 'style.css'), styleCss);

// ====== 4. vite.config.js ======
const viteConfig = `import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});`;
fs.writeFileSync(path.join(root, 'vite.config.js'), viteConfig);

// ====== 5. package.json ======
const packageJson = `{
  "name": "ultratechhub",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.4.21"
  }
}`;
fs.writeFileSync(path.join(root, 'package.json'), packageJson);

// ====== 6. netlify.toml ======
const netlifyToml = `[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  PAYNOW_INTEGRATION_ID = ""
  PAYNOW_INTEGRATION_KEY = ""
  PAYNOW_RESULT_URL = ""
  PAYNOW_RETURN_URL = ""`;
fs.writeFileSync(path.join(root, 'netlify.toml'), netlifyToml);

// ====== 7. Placeholder files for assets ======
['Smoke.mp4', 'logo.png'].forEach(file => {
  const filePath = path.join(assets, file);
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '');
});

console.log('✅ Ultratech Hub folder generated at:', root);
console.log('Place your actual Smoke.mp4 and logo.png in public/assets/');