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
const envPath = path.join(__dirname, '.env');

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const separatorIndex = line.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(envPath);

// Check if dist exists
if (!fs.existsSync(distPath)) {
    console.error(`[ERROR] 'dist' directory not found at ${distPath}. Did you run 'npm run build'?`);
} else {
    console.log(`[INFO] Serving static files from ${distPath}`);
}

app.use(express.json());

function formatTelegramMessage(payload) {
  if (payload.formType === 'partner') {
    return [
      'New Partner Form Submission',
      '',
      `Name: ${payload.name || '-'}`,
      `Phone: ${payload.phone || '-'}`,
      `Email: ${payload.email || '-'}`,
      `Interest: ${payload.interest || '-'}`,
      '',
      'Message:',
      payload.message || '-'
    ].join('\n');
  }

  return [
    'New Lab Contact Submission',
    '',
    `Name: ${payload.name || '-'}`,
    `Email: ${payload.email || '-'}`,
    '',
    'Message:',
    payload.message || '-'
  ].join('\n');
}

app.post('/api/form-submit.php', async (req, res) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ success: false, error: 'Telegram bot is not configured.' });
    return;
  }

  const { formType, name, email, phone, interest, message } = req.body || {};

  if (!formType || !name || !email || !message || (formType === 'partner' && (!phone || !interest))) {
    res.status(400).json({ success: false, error: 'Missing required fields.' });
    return;
  }

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatTelegramMessage({ formType, name, email, phone, interest, message }),
        disable_web_page_preview: true
      })
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error('Telegram API error:', errorText);
      res.status(502).json({ success: false, error: 'Telegram API request failed.' });
      return;
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Telegram submission failed:', error);
    res.status(500).json({ success: false, error: 'Unable to send message.' });
  }
});

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

app.get('/brochure', (_req, res) => {
  res.redirect(301, '/uz/brochure');
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
