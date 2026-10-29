---
layout: page
title: Site Blocked - Security Risk
permalink: /403/
sitemap: false
noindex: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>Access Restricted - 403 Forbidden</title>
    <link rel="icon" href="/assets/images/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Roboto:wght@400;700&display=swap" rel="stylesheet">

    <style>
        * {
            box-sizing: border-box;
        }

        body, html {
            margin: 0;
            padding: 0;
            background-color: #000121;
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .scene-wrapper {
            position: relative;
            width: 100%;
            max-width: 800px;
            height: 480px;
            margin: 20px auto 0 auto;
            overflow: hidden;
        }

        .maincontainer {
            position: relative;
            background: url("https://aimieclouse.com/Media/Portfolio/Error403Forbidden/HauntedHouseBackground.png") no-repeat center;
            background-size: 700px 600px;
            width: 800px;
            height: 600px;
            margin: 0 auto;
            top: -20px;
        }

        .foregroundimg {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 5;
            pointer-events: none;
        }

        .bat {
            opacity: 0;
            position: absolute;
            transform-origin: center;
            z-index: 3;
        }

        .bat:nth-child(1) {
            top: 380px;
            left: 120px;
            transform: scale(0.5);
            animation: 13s 1s flyBat1 infinite linear;
        }

        .bat:nth-child(2) {
            top: 280px;
            left: 80px;
            transform: scale(0.3);
            animation: 8s 4s flyBat2 infinite linear;
        }

        .bat:nth-child(3) {
            top: 200px;
            left: 150px;
            transform: scale(0.4);
            animation: 12s 2s flyBat3 infinite linear;
        }

        .body {
            position: relative;
            width: 50px;
            top: 12px;
        }

        .wing {
            width: 150px;
            position: relative;
            transform-origin: right center;
        }

        .leftwing {
            left: 30px;
            animation: 0.8s flapLeft infinite ease-in-out;
        }

        .rightwing {
            left: -180px;
            transform: scaleX(-1);
            animation: 0.8s flapRight infinite ease-in-out;
        }

        @keyframes flapLeft {
            0% { transform: rotateZ(0); }
            50% { transform: rotateZ(10deg) rotateY(40deg); }
            100% { transform: rotateZ(0); }
        }

        @keyframes flapRight {
            0% { transform: scaleX(-1) rotateZ(0); }
            50% { transform: scaleX(-1) rotateZ(10deg) rotateY(40deg); }
            100% { transform: scaleX(-1) rotateZ(0); }
        }

        @keyframes flyBat1 {
            0% { opacity: 1; transform: scale(0.5); }
            25% { opacity: 1; transform: scale(0.5) translate(-400px, -330px); }
            50% { opacity: 1; transform: scale(0.5) translate(400px, -800px); }
            75% { opacity: 1; transform: scale(0.5) translate(600px, 100px); }
            100% { opacity: 1; transform: scale(0.5) translate(100px, 300px); }
        }

        @keyframes flyBat2 {
            0% { opacity: 1; transform: scale(0.3); }
            25% { opacity: 1; transform: scale(0.3) translate(200px, -330px); }
            50% { opacity: 1; transform: scale(0.3) translate(-300px, -800px); }
            75% { opacity: 1; transform: scale(0.3) translate(-400px, 100px); }
            100% { opacity: 1; transform: scale(0.3) translate(100px, 300px); }
        }

        @keyframes flyBat3 {
            0% { opacity: 1; transform: scale(0.4); }
            25% { opacity: 1; transform: scale(0.4) translate(-350px, -330px); }
            50% { opacity: 1; transform: scale(0.4) translate(400px, -800px); }
            75% { opacity: 1; transform: scale(0.4) translate(-600px, 100px); }
            100% { opacity: 1; transform: scale(0.4) translate(100px, 300px); }
        }

        .header-content {
            text-align: center;
            margin: -30px auto 20px auto;
            position: relative;
            z-index: 10;
            padding: 0 15px;
        }

        .errorcode {
            font-family: 'Creepster', cursive;
            color: #ffffff;
            text-align: center;
            font-size: 5em;
            letter-spacing: 0.1em;
            margin: 0;
            text-shadow: 0 0 10px rgba(251, 209, 48, 0.4);
        }

        .errortext {
            color: #FBD130;
            text-align: center;
            text-transform: uppercase;
            font-size: 1.5em;
            font-weight: 700;
            letter-spacing: 0.05em;
            margin: 5px 0 15px 0;
        }

        .subtext {
            color: #d1d5db;
            font-size: 1.1em;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.5;
        }

        .info-card {
            color: white;
            max-width: 720px;
            margin: 20px auto 40px auto;
            padding: 24px;
            background-color: #05082e;
            border: 1px solid #1e295f;
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }

        .info-card h2 {
            margin-top: 0;
            margin-bottom: 12px;
            font-size: 1.4em;
            color: #FBD130;
        }

        .info-card p {
            color: #cbd5e1;
            line-height: 1.5;
            margin-top: 0;
            margin-bottom: 16px;
        }

        .diagnostic-data {
            font-family: monospace;
            background-color: #00021f;
            border: 1px solid #1a224d;
            padding: 16px;
            border-radius: 6px;
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .diagnostic-row {
            display: flex;
            flex-wrap: wrap;
            word-break: break-all;
        }

        .diagnostic-row strong {
            width: 160px;
            flex-shrink: 0;
            color: #94a3b8;
        }

        .diagnostic-row span {
            color: #38bdf8;
            flex-grow: 1;
        }

        .btn-group {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
        }

        .btn-submit {
            display: inline-block;
            padding: 12px 24px;
            background-color: #FBD130;
            color: #000121;
            text-decoration: none;
            font-weight: bold;
            border-radius: 4px;
            transition: background-color 0.2s ease, transform 0.1s ease;
            border: none;
            cursor: pointer;
            font-size: 1em;
        }

        .btn-submit:hover {
            background-color: #ffe066;
            transform: translateY(-1px);
        }

        .btn-secondary {
            display: inline-block;
            padding: 12px 20px;
            background-color: #1e295f;
            color: #ffffff;
            text-decoration: none;
            font-weight: 500;
            border-radius: 4px;
            transition: background-color 0.2s ease;
            border: none;
            cursor: pointer;
            font-size: 0.95em;
        }

        .btn-secondary:hover {
            background-color: #2e3d87;
        }

        .copy-feedback {
            font-size: 0.85em;
            color: #4ade80;
            display: none;
        }

        @media (max-width: 820px) {
            .scene-wrapper {
                height: 380px;
            }
            .maincontainer {
                transform: scale(0.65);
                transform-origin: top center;
            }
            .errorcode {
                font-size: 3.5em;
            }
            .errortext {
                font-size: 1.2em;
            }
            .info-card {
                margin: 20px 15px 40px 15px;
            }
            .diagnostic-row strong {
                width: 100%;
                margin-bottom: 2px;
            }
        }
    </style>
</head>
<body>

    <div class="scene-wrapper" aria-hidden="true">
        <div class="maincontainer">
            <div class="bat">
                <img class="wing leftwing" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" alt="">
                <img class="body" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png" alt="">
                <img class="wing rightwing" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" alt="">
            </div>
            <div class="bat">
                <img class="wing leftwing" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" alt="">
                <img class="body" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png" alt="">
                <img class="wing rightwing" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" alt="">
            </div>
            <div class="bat">
                <img class="wing leftwing" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" alt="">
                <img class="body" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png" alt="">
                <img class="wing rightwing" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png" alt="">
            </div>
            <img class="foregroundimg" src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/HauntedHouseForeground.png" alt="haunted house">
        </div>
    </div>

    <div class="header-content">
        <h1 class="errorcode">ERROR 403</h1>
        <div class="errortext">Access Restricted &bull; Turn Back Now</div>
        <p class="subtext">This website has been blocked by DNS filtering policy. It may violate security guidelines, match a restricted content category, or currently be uncategorized.</p>
    </div>

    <div class="info-card">
        <h2>Diagnostic Information</h2>
        <p>Our systems have intercepted a request that may violate policy or present a security threat. By clicking the button below, a ticket will be opened with the help desk containing the details needed to evaluate this block.</p>
        
        <div class="diagnostic-data">
            <div class="diagnostic-row"><strong>Blocked Domain:</strong> <span id="val-domain">Loading...</span></div>
            <div class="diagnostic-row"><strong>Referring URL:</strong> <span id="val-referrer">Loading...</span></div>
            <div class="diagnostic-row"><strong>IP Address:</strong> <span id="val-ip">Loading...</span></div>
            <div class="diagnostic-row"><strong>Categories:</strong> <span id="val-categories">Loading...</span></div>
            <div class="diagnostic-row"><strong>Policy:</strong> <span id="val-policy">Loading...</span></div>
        </div>

        <div class="btn-group">
            <a href="mailto:help@blking.net" id="mailto-btn" class="btn-submit">Submit Help Desk Ticket</a>
            <button type="button" id="copy-btn" class="btn-secondary">Copy Details</button>
            <span id="copy-status" class="copy-feedback">Copied to clipboard!</span>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const rawQuery = window.location.search || window.location.hash.replace(/^#\??/, '?');
            const urlParams = new URLSearchParams(rawQuery);

            const domain = urlParams.get('domain') || urlParams.get('site') || urlParams.get('host') || urlParams.get('url') || 'Not provided';
            const ip = urlParams.get('ip') || urlParams.get('client_ip') || urlParams.get('clientip') || 'Not provided';
            const policy = urlParams.get('policy') || urlParams.get('policy_name') || urlParams.get('filtering_policy') || 'Not provided';
            let categories = urlParams.get('categories') || urlParams.get('category') || urlParams.get('cats') || 'Not provided';
            const referringUrl = document.referrer || 'Direct Navigation / Unavailable';

            try {
                if (categories.startsWith('[') && categories.endsWith(']')) {
                    const parsed = JSON.parse(categories);
                    categories = Array.isArray(parsed) ? parsed.join(', ') : categories;
                }
            } catch (e) {}

            document.getElementById('val-domain').textContent = domain;
            document.getElementById('val-referrer').textContent = referringUrl;
            document.getElementById('val-ip').textContent = ip;
            document.getElementById('val-policy').textContent = policy;
            document.getElementById('val-categories').textContent = categories;

            const emailSubject = encodeURIComponent(`Blocked Page Review Request: ${domain}`);
            const emailBody = encodeURIComponent(
                `Blocked Domain: ${domain}\n` +
                `Referring URL: ${referringUrl}\n` +
                `Client IP: ${ip}\n` +
                `Categories: ${categories}\n` +
                `Policy: ${policy}\n`
            );

            document.getElementById('mailto-btn').href = `mailto:help@blking.net?subject=${emailSubject}&body=${emailBody}`;

            const copyBtn = document.getElementById('copy-btn');
            const copyStatus = document.getElementById('copy-status');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    const diagnosticSummary = 
                        `Blocked Domain: ${domain}\n` +
                        `Referring URL: ${referringUrl}\n` +
                        `Client IP: ${ip}\n` +
                        `Categories: ${categories}\n` +
                        `Policy: ${policy}`;
                    navigator.clipboard.writeText(diagnosticSummary).then(() => {
                        copyStatus.style.display = 'inline';
                        setTimeout(() => {
                            copyStatus.style.display = 'none';
                        }, 3000);
                    }).catch(() => {
                        const textarea = document.createElement('textarea');
                        textarea.value = diagnosticSummary;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);
                        copyStatus.style.display = 'inline';
                        setTimeout(() => {
                            copyStatus.style.display = 'none';
                        }, 3000);
                    });
                });
            }
        });
    </script>
</body>
</html>
