import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Replicate __dirname in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Check if dist exists
if (!fs.existsSync(distPath)) {
    console.error(`[ERROR] 'dist' directory not found at ${distPath}. Did you run 'npm run build'?`);
} else {
    console.log(`[INFO] Serving static files from ${distPath}`);
}

// 1. Serve static files from the 'dist' directory
// Add cache control to avoid caching stale index.html
app.use(express.static(distPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

app.get('/', (_req, res) => {
  res.redirect(301, '/uz/');
});

// 2. Handle SPA Routing (Wildcard Route)
app.get('*', (req, res) => {
  const route = req.path.startsWith('/ru') ? 'ru' : req.path.startsWith('/uz') ? 'uz' : '';
  const indexPath = route
    ? path.join(distPath, route, 'index.html')
    : path.join(distPath, 'index.html');
  
  if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
  } else {
      console.error(`[ERROR] index.html not found at ${indexPath}`);
      res.status(404).send('Application build not found. Please run "npm run build" on the server.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
