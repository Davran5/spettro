<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function loadEnvFile(string $path): void
{
    if (!is_file($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $rawLine) {
        $line = trim($rawLine);
        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }

        $separatorIndex = strpos($line, '=');
        if ($separatorIndex === false) {
            continue;
        }

        $key = trim(substr($line, 0, $separatorIndex));
        $value = trim(substr($line, $separatorIndex + 1));

        if (($value[0] ?? '') === '"' && str_ends_with($value, '"')) {
            $value = substr($value, 1, -1);
        } elseif (($value[0] ?? '') === "'" && str_ends_with($value, "'")) {
            $value = substr($value, 1, -1);
        }

        if (getenv($key) === false) {
            putenv("$key=$value");
            $_ENV[$key] = $value;
        }
    }
}

loadEnvFile(dirname(__DIR__) . '/.env');
loadEnvFile(dirname(__DIR__, 2) . '/.env');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

$token = getenv('TELEGRAM_BOT_TOKEN') ?: '';
$chatId = getenv('TELEGRAM_CHAT_ID') ?: '';

if ($token === '' || $chatId === '') {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Telegram bot is not configured.']);
    exit;
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload.']);
    exit;
}

$formType = (string)($payload['formType'] ?? '');
$name = trim((string)($payload['name'] ?? ''));
$email = trim((string)($payload['email'] ?? ''));
$phone = trim((string)($payload['phone'] ?? ''));
$interest = trim((string)($payload['interest'] ?? ''));
$message = trim((string)($payload['message'] ?? ''));

if ($formType === '' || $name === '' || $email === '' || $message === '' || ($formType === 'partner' && ($phone === '' || $interest === ''))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields.']);
    exit;
}

if ($formType === 'partner') {
    $text = implode("\n", [
        'New Partner Form Submission',
        '',
        "Name: $name",
        "Phone: $phone",
        "Email: $email",
        "Interest: $interest",
        '',
        'Message:',
        $message,
    ]);
} else {
    $text = implode("\n", [
        'New Lab Contact Submission',
        '',
        "Name: $name",
        "Email: $email",
        '',
        'Message:',
        $message,
    ]);
}

$telegramPayload = json_encode([
    'chat_id' => $chatId,
    'text' => $text,
    'disable_web_page_preview' => true,
], JSON_UNESCAPED_UNICODE);

$telegramUrl = "https://api.telegram.org/bot{$token}/sendMessage";

$success = false;
$responseBody = '';

if (function_exists('curl_init')) {
    $ch = curl_init($telegramUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_POSTFIELDS => $telegramPayload,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
    ]);
    $responseBody = (string)curl_exec($ch);
    $statusCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $success = $statusCode >= 200 && $statusCode < 300;
    curl_close($ch);
} else {
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => $telegramPayload,
            'timeout' => 15,
        ]
    ]);
    $responseBody = (string)@file_get_contents($telegramUrl, false, $context);
    $statusCode = 0;
    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $matches) === 1) {
        $statusCode = (int)$matches[1];
    }
    $success = $statusCode >= 200 && $statusCode < 300;
}

if (!$success) {
    http_response_code(502);
    echo json_encode([
        'success' => false,
        'error' => 'Telegram API request failed.',
        'details' => $responseBody,
    ]);
    exit;
}

echo json_encode(['success' => true]);
