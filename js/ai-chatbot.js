
(function () {
  'use strict';

  const KNOWLEDGE_BASE = {
    profile: {
      name: "Farhan Saefulah, S.T.",
      title: "Fullstack Web Developer, Mobile Engineer & Creative Designer",
      degree: "Sarjana Komputer / Teknik (S.T. / S.Kom) - Universitas Muhammadiyah Cirebon",
      gpa: "3.47 / 4.00",
      location: "Cirebon, Jawa Barat, Indonesia (Tersedia untuk Remote, Hybrid, atau On-site di Bandung, Jakarta, dll)",
      email: "farhansaefulah505@gmail.com",
      github: "https://github.com/hansaefulah",
      linkedin: "https://www.linkedin.com/in/farhan-saefulah-s-t-72a5b21b9/",
      cvFile: "CV FARHAN SAEFULAH.pdf",
      experienceYears: "4+ Tahun Pengalaman Profesional"
    },

    experience: [
      {
        company: "PT Bank Rakyat Indonesia (Persero) Tbk (Bank BRI)",
        role: "Programmer & IT Support",
        period: "2024 - Sekarang",
        desc: "Mengembangkan dan mengelola dashboard internal monitoring serta reporting transaksi ritel (Retail Transaction Dept). Menangani pemeliharaan infrastruktur TI, troubleshooting jaringan, dan otomatisasi workflow digital perbankan."
      },
      {
        company: "Komisi Pemilihan Umum (KPU)",
        role: "IT Specialist & Operator SIREKAP",
        period: "2024",
        desc: "Bertanggung jawab atas operasional SIREKAP (Sistem Informasi Rekapitulasi Suara Pemilu), verifikasi data rekapitulasi digital secara real-time, pengamanan jaringan data pemilu, dan troubleshooting teknis di lapangan."
      },
      {
        company: "Sekretariat DPRD",
        role: "IT & Administrative Assistant",
        period: "2023 - 2024",
        desc: "Mengelola sistem dokumentasi digital rapat dewan, sistem pengarsipan elektronik, portal administrasi internal, dan dukungan operasional infrastruktur TI harian."
      },
      {
        company: "CV Percetakan & Digital Imaging",
        role: "Graphic Designer & Digital Print Specialist",
        period: "2022 - 2023",
        desc: "Mendesain identitas visual, branding, marketing material, prepress digital untuk cetakan beresolusi tinggi, serta konsultasi desain untuk klien korporat dan retail."
      },
      {
        company: "Junior Web Developer & Freelancer",
        role: "Tech Freelancer",
        period: "2020 - 2022",
        desc: "Membangun berbagai landing page, company profile, dan aplikasi web kustom untuk pelaku UMKM dan startup lokal."
      }
    ],

    projects: [
      {
        id: "ourmoment",
        name: "OurMoment - Undangan Digital Web",
        badge: "Next-Gen Wedding Web",
        tech: "HTML5, Modern CSS, JavaScript, Responsive Mobile-First, WebGL Fluid",
        desc: "Platform undangan pernikahan digital modern yang elegan dan responsif. Dilengkapi fitur interaktif: RSVP online konfirmasi kehadiran, pemutar background musik otomatis, real-time countdown timer acara, integrasi Google Maps interaktif, galeri foto slider/grid modern, buku tamu digital, dan amplop digital (transfer Bank / QRIS).",
        highlight: "Fitur favorit calon pengantin untuk berbagi momen bahagia secara instan dan tanpa ribet!"
      },
      {
        id: "ecommerce",
        name: "Modern E-Commerce Platform",
        badge: "Fullstack Web",
        tech: "React, PHP / Laravel, MySQL, REST API, Tailwind CSS",
        desc: "Toko online canggih dengan arsitektur modern: katalog produk dengan live filter & search, keranjang belanja real-time, sistem checkout terenkripsi, manajemen status pesanan, serta integrasi multi-payment gateway."
      },
      {
        id: "chat-app",
        name: "Real-Time Chat & Collaboration App",
        badge: "Web Application",
        tech: "Node.js, WebSocket, JavaScript, Modern CSS Glassmorphism",
        desc: "Aplikasi obrolan pesan instan real-time dengan status online/offline, indikator sedang mengetik, pengiriman file dan media, enkripsi data, dan UI ultra responsif."
      },
      {
        id: "analytics",
        name: "Interactive Analytics Dashboard",
        badge: "Enterprise Dashboard",
        tech: "JavaScript, Chart.js, CSS Grid, PHP, MySQL",
        desc: "Dashboard monitoring metrik bisnis dan KPI transaksi dengan visualisasi grafik interaktif, filter rentang tanggal dinamis, dark mode sleek, dan performa query database berkecepatan tinggi."
      },
      {
        id: "task-mgmt",
        name: "Smart Task & Workflow Management",
        badge: "Productivity Tool",
        tech: "JavaScript, LocalStorage/Cloud API, CSS Modern Layout",
        desc: "Sistem manajemen tugas bergaya papan Kanban: drag-and-drop tugas, manajemen prioritas (High/Medium/Low), deadline countdown, filter label kategori, dan kolaborasi tim."
      },
      {
        id: "portfolio-3d",
        name: "Premium Brand & 3D Portfolio Experience",
        badge: "Creative Web Experience",
        tech: "240-Frame Canvas Scroll Animation, ReactBits WebGL Splash Cursor, 3D Tilt, Frosted Glassmorphism",
        desc: "Website portofolio yang sedang Anda jelajahi ini! Mengombinasikan visual animasi scroll kanvas 240 frame, interaksi splash fluid cursor WebGL, efek 3D tilt pada kartu proyek, dan AI chatbot cerdas ini."
      }
    ],

    skills: {
      frontend: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Canvas & WebGL", "Responsive Design"],
      backend: ["PHP", "Laravel", "CodeIgniter", "Node.js", "RESTful API", "WebSocket"],
      database: ["MySQL", "PostgreSQL", "Firebase"],
      mobile: ["Flutter", "Kotlin", "Android Studio"],
      tools: ["Git & GitHub", "Figma (UI/UX)", "CorelDRAW", "Adobe Photoshop", "Canva", "CapCut", "Postman", "XAMPP", "VS Code"]
    },

    services: [
      {
        name: "Jasa Pembuatan Website Kustom",
        desc: "Company Profile instansi/perusahaan, Landing Page promosi bisnis, Web Portofolio, hingga Web Aplikasi kustom yang cepat, modern, dan SEO-friendly."
      },
      {
        name: "Pembuatan Website Undangan Digital (Wedding / Event)",
        desc: "Undangan online eksklusif dengan musik, RSVP digital, amplop online, peta lokasi, dan tema mewah (seperti project OurMoment)."
      },
      {
        name: "Pembuatan Toko Online / E-Commerce",
        desc: "Website jualan lengkap dengan katalog, keranjang belanja, integrasi ongkir otomatis, dan payment gateway."
      },
      {
        name: "Desain UI/UX & Grafis Branding",
        desc: "Desain antarmuka aplikasi/web di Figma, logo branding perusahaan, banner, poster, dan materi promosi digital."
      },
      {
        name: "Konsultasi IT & Maintenance",
        desc: "Optimasi kecepatan website, perbaikan bug/error, setup server/hosting, integrasi API, dan pelatihan sistem."
      }
    ]
  };

  // --- AUDIO SYNTHESIS ENGINE (Subtle Chime without External MP3) ---
  let soundEnabled = true;
  function playNotificationChime() {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc2.frequency.setValueAtTime(880.00, ctx.currentTime + 0.08); // A5

      gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.12);
      osc2.start(ctx.currentTime + 0.08);
      osc2.stop(ctx.currentTime + 0.35);
    } catch (e) {
      // AudioContext not allowed or unsupported
    }
  }

  // --- CHATBOT UI INJECTION ---
  function renderChatbotDOM() {
    if (document.getElementById('ai-chatbot-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'ai-chatbot-widget';
    widget.className = 'ai-chatbot-widget';

    widget.innerHTML = `
      <!-- Backdrop Overlay for Mobile -->
      <div class="ai-chat-backdrop" id="ai-chat-backdrop" aria-hidden="true"></div>

      <!-- Tooltip Bubble -->
      <div class="ai-launcher-tooltip" id="ai-launcher-tooltip" title="Klik untuk tanya Farhan AI">
        <span class="ai-tooltip-sparkle">✨</span>
        <span>Tanya apa saja tentang Farhan di sini!</span>
        <button class="ai-tooltip-close" id="ai-tooltip-close" title="Tutup pesan">&times;</button>
      </div>

      <!-- Launcher Button -->
      <button class="ai-launcher-btn" id="ai-launcher-btn" aria-label="Buka Chat AI Portofolio Farhan" title="Farhan AI Assistant">
        <div class="ai-launcher-ring"></div>
        <div class="ai-icon-open">
          <svg viewBox="0 0 24 24">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5Z"/>
          </svg>
        </div>
        <div class="ai-icon-close">
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </div>
        <div class="ai-launcher-badge" id="ai-launcher-badge">1</div>
      </button>

      <!-- Chat Window Modal -->
      <div class="ai-chat-window" id="ai-chat-window" role="dialog" aria-label="Jendela Chat Farhan AI">
        <!-- Mobile Grabber -->
        <div class="ai-mobile-grabber" aria-hidden="true"></div>

        <!-- Header -->
        <div class="ai-chat-header">
          <div class="ai-header-left">
            <div class="ai-avatar-wrapper">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5Z"/>
              </svg>
              <span class="ai-status-dot"></span>
            </div>
            <div>
              <div class="ai-header-title">
                <span>Farhan AI</span>
                <span class="ai-badge-pro">SMART AI</span>
              </div>
              <div class="ai-header-sub">
                <span class="dot"></span>
                <span>Asisten Portofolio • Respon Cepat</span>
              </div>
            </div>
          </div>
          <div class="ai-header-actions">
            <button class="ai-header-btn" id="ai-sound-btn" title="Nyalakan / Matikan Suara" aria-label="Toggle sound">
              <svg id="ai-sound-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </button>
            <button class="ai-header-btn" id="ai-clear-btn" title="Bersihkan Obrolan" aria-label="Reset chat">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
            </button>
            <button class="ai-header-btn" id="ai-close-btn" title="Tutup Chat" aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Body Messages -->
        <div class="ai-chat-body" id="ai-chat-body">
          <!-- Messages will be rendered here dynamically -->
        </div>

        <!-- Quick Chips Bar -->
        <div class="ai-suggestions-bar" id="ai-suggestions-bar">
          <button class="ai-chip-btn" data-query="Ceritakan tentang Farhan">👤 Profil Farhan</button>
          <button class="ai-chip-btn" data-query="Apa saja pengalaman kerja Farhan?">💼 Pengalaman Kerja</button>
          <button class="ai-chip-btn" data-query="Jelaskan project Undangan Digital (OurMoment)">💍 Undangan Digital</button>
          <button class="ai-chip-btn" data-query="Apa saja keahlian dan tech stack Farhan?">🛠️ Keahlian & Tech</button>
          <button class="ai-chip-btn" data-query="Proyek apa saja yang pernah dibuat?">🚀 Semua Proyek</button>
          <button class="ai-chip-btn" data-query="Berapa biaya / jasa pembuatan website?">💰 Layanan & Biaya</button>
          <button class="ai-chip-btn" data-query="Bagaimana cara menghubungi Farhan?">📞 Kontak & WhatsApp</button>
          <button class="ai-chip-btn" data-query="Download CV Farhan">📄 Download CV</button>
        </div>

        <!-- Footer Input -->
        <div class="ai-chat-footer">
          <form class="ai-input-form" id="ai-input-form" autocomplete="off">
            <textarea
              class="ai-chat-input"
              id="ai-chat-input"
              placeholder="Tanyakan apa saja tentang Farhan..."
              rows="1"
              required
            ></textarea>
            <button type="submit" class="ai-send-btn" id="ai-send-btn" aria-label="Kirim Pesan">
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
          <div class="ai-input-note">
            <span>⚡ Farhan AI • Powered by Instant Knowledge Base</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(widget);
  }

  // --- NATURAL LANGUAGE INTENT PARSER & RESPONSE GENERATOR ---
  function analyzeIntent(rawQuery) {
    const q = rawQuery.toLowerCase().trim();

    // 1. GREETING & INTRO
    if (/^(halo|hai|hi|hello|hei|hey|pagi|siang|sore|malam|assalam|assalamualaikum|permisi|tes|test|ping)/i.test(q)) {
      return {
        type: 'greeting',
        text: `Halo! Senang bertemu dengan Anda. Saya **Farhan AI Assistant**, asisten pintar virtual dari **Farhan Saefulah, S.T.**.\n\nSaya tahu semua hal tentang riwayat karir Farhan di **Bank BRI**, proyek-proyek unggulan seperti **Undangan Digital (OurMoment)**, skill pemrograman, hingga jasa pembuatan website.\n\nApa yang ingin Anda ketahui lebih lanjut?`,
        actions: [
          { text: "💼 Pengalaman Kerja", query: "Apa saja pengalaman kerja Farhan?" },
          { text: "💍 Undangan Digital", query: "Ceritakan project OurMoment Undangan Digital" },
          { text: "🚀 Proyek Lainnya", query: "Lihat semua proyek Farhan" }
        ]
      };
    }

    // 2. IDENTITY / BIO / ABOUT FARHAN
    if (/(siapa farhan|tentang farhan|profil farhan|biodata|bio|latar belakang|background|ceritakan tentang farhan|siapa kamu)/i.test(q)) {
      return {
        type: 'profile',
        text: `**Farhan Saefulah, S.T.** adalah seorang **Fullstack Web Developer, Mobile Engineer, dan Creative Designer** dengan lebih dari 4 tahun pengalaman profesional.\n\n📌 **Ringkasan Profil:**\n• **Lulusan:** Sarjana Komputer/Teknik dari *Universitas Muhammadiyah Cirebon* dengan **IPK 3.47 / 4.00**.\n• **Pengalaman Enterprise:** Mantan Programmer di **PT Bank Rakyat Indonesia (Persero) Tbk (Bank BRI)** & IT Specialist di **KPU**.\n• **Domisili:** Cirebon, Jawa Barat (Open to Remote / Hybrid / On-site).\n• **Karakter Kerja:** Fokus pada performa tinggi, desain modern berestetika premium (*frosted glass, 3D tilt, micro-interactions*), dan kode yang rapi serta scalable.`,
        actions: [
          { text: "💼 Riwayat Karir", query: "Pengalaman kerja Farhan" },
          { text: "📄 Unduh CV Resmi", link: "CV FARHAN SAEFULAH.pdf", download: true, style: "emerald" },
          { text: "🔍 Lihat Bagian About", targetId: "about" }
        ]
      };
    }

    // 3. WORK EXPERIENCE / CAREER / BANK BRI / KPU / DPRD
    if (/(pengalaman|kerja|karir|career|riwayat pekerjaan|pernah kerja|bri|bank bri|kpu|pemilu|dprd|percetakan|kantor|perusahaan)/i.test(q)) {
      let extra = "";
      if (q.includes("bri") || q.includes("bank")) {
        extra = `\n\n🏦 **Khusus di Bank BRI:** Farhan bertindak sebagai Programmer & IT Support yang berhasil membangun monitoring dashboard transaksi ritel dan memastikan otomasi workflow perbankan berjalan 24/7 tanpa kendala.`;
      } else if (q.includes("kpu") || q.includes("pemilu") || q.includes("sirekap")) {
        extra = `\n\n🗳️ **Khusus di KPU:** Farhan bertanggung jawab atas keandalan aplikasi SIREKAP, keamanan jaringan data suara real-time, dan validasi data berakurasi tinggi selama pemilu.`;
      }

      return {
        type: 'experience',
        text: `Berikut rekam jejak profesional **Farhan Saefulah**:${extra}\n\n1. **PT Bank Rakyat Indonesia (Persero) Tbk (2024 - Sekarang)**\n   • *Programmer & IT Support* — Monitoring dashboard & digital transaction support.\n2. **Komisi Pemilihan Umum / KPU (2024)**\n   • *IT Specialist & Operator SIREKAP* — Pengelolaan rekapitulasi data digital pemilu real-time.\n3. **Sekretariat DPRD (2023 - 2024)**\n   • *IT & Administrative Assistant* — Sistem administrasi portal dewan & digitalisasi arsip.\n4. **CV Percetakan & Digital Imaging (2022 - 2023)**\n   • *Graphic Designer & Digital Print Specialist* — Branding identitas, merchandise & digital prepress.\n5. **Freelance Web Developer (2020 - 2022)**\n   • Mengembangkan website kustom untuk berbagai UMKM dan instansi.`,
        actions: [
          { text: "📍 Scroll ke Timeline Karir", targetId: "experience" },
          { text: "📄 Unduh CV Lengkap", link: "CV FARHAN SAEFULAH.pdf", download: true, style: "emerald" },
          { text: "🚀 Lihat Proyek Hasil Kerja", targetId: "projects" }
        ]
      };
    }

    // 4. WEDDING DIGITAL INVITATION / OURMOMENT
    if (/(undangan|nikah|wedding|ourmoment|manten|resepsi|fitur undangan|undangan digital|pernikahan)/i.test(q)) {
      return {
        type: 'ourmoment',
        text: `💍 **OurMoment - Next-Gen Digital Wedding Invitation** adalah salah satu karya unggulan Farhan Saefulah!\n\n✨ **Fitur-Fitur Premium yang Dimiliki:**\n• **RSVP & Konfirmasi Tamu:** Tamu bisa mengkonfirmasi kehadiran dan jumlah tamu secara instan.\n• **Background Music Player:** Musik otomatis yang romantis dengan kontrol pause/play estetik.\n• **Live Countdown Timer:** Penghitung mundur hari H pernikahan secara presisi.\n• **Navigasi Google Maps:** Peta lokasi resepsi dan akad yang terhubung langsung ke Google Maps / Waze.\n• **Galeri Foto Interaktif:** Tampilan foto prewedding responsif (*grid view & full slider*).\n• **Amplop & Hadiah Digital:** Fitur transfer cashless (Nomor Rekening Bank & QRIS) untuk kemudahan tamu memberi kado.\n• **Buku Tamu & Ucapan Doa:** Tamu dapat mengirimkan ucapan selamat secara langsung di website.\n\n*Tertarik membuat undangan digital seperti ini untuk acara Anda? Farhan siap membuatkannya dengan desain kustom dan harga sangat ramah!*`,
        actions: [
          { text: "👀 Lihat Kartu Undangan di Web", targetId: "projects" },
          { text: "💬 Tanya Jasa Undangan via WhatsApp", link: "https://wa.me/628999401803?text=Halo%20Farhan,%20saya%20tertarik%20dengan%20Jasa%20Web%20Undangan%20Digital%20OurMoment", style: "orange" },
          { text: "💰 Cek Estimasi Biaya", query: "Berapa biaya pembuatan undangan digital?" }
        ]
      };
    }

    // 5. ALL PROJECTS & PORTFOLIO SHOWCASE
    if (/(proyek|project|portfolio|karya|hasil kerja|buat apa saja|bikin apa saja|showcase|aplikasi yang dibuat)/i.test(q)) {
      return {
        type: 'projects',
        text: `Farhan telah merancang dan membangun 6 proyek showcase utama di portofolio ini:\n\n1. 💍 **OurMoment (Undangan Digital Web):** Web pernikahan interaktif dengan RSVP, musik, galeri, countdown, dan amplop digital.\n2. 🛒 **Modern E-Commerce Platform:** Toko online dinamis dengan katalog, cart, checkout terenkripsi, dan integrasi payment gateway.\n3. 💬 **Real-Time Chat & Collaboration App:** Chat instan berbasis WebSocket dengan status online dan media sharing.\n4. 📊 **Interactive Analytics Dashboard:** Visualisasi grafik KPI transaksi ritel dengan filter cepat dan dark mode sleek.\n5. 📋 **Smart Task & Workflow Management:** Manajemen tim ala papan Kanban dengan drag-and-drop dan deadline tracker.\n6. 🌐 **3D Canvas & Splash Cursor Portfolio:** Website ini sendiri yang dilengkapi simulasi fluid WebGL dan animasi scroll 240 frame!`,
        actions: [
          { text: "🚀 Buka Galeri Proyek", targetId: "projects" },
          { text: "💍 Detail Undangan Digital", query: "Ceritakan fitur undangan digital OurMoment" },
          { text: "💬 Diskusikan Pembuatan Web", targetId: "contact", style: "orange" }
        ]
      };
    }

    // 6. SKILLS, TECH STACK & PROGRAMMING LANGUAGES
    if (/(skill|keahlian|kemampuan|tech stack|bahasa pemrograman|coding|bisa apa|react|laravel|php|javascript|flutter|python|figma|css|html|database|mysql)/i.test(q)) {
      return {
        type: 'skills',
        text: `🛠️ **Tech Stack & Keahlian Farhan Saefulah:**\n\n• **Frontend:** JavaScript (ES6+), React.js, HTML5, Modern CSS3/SCSS, Tailwind CSS, Bootstrap, WebGL Fluid & Canvas Animation.\n• **Backend & API:** PHP (Laravel, CodeIgniter), Node.js, RESTful API, WebSocket.\n• **Database:** MySQL, PostgreSQL, Firebase.\n• **Mobile Development:** Flutter, Kotlin, Android Studio.\n• **UI/UX & Creative Tools:** Figma, CorelDRAW, Adobe Photoshop, Canva, CapCut.\n• **DevOps & Tools:** Git, GitHub, Postman, XAMPP, VS Code.\n\nFarhan menggabungkan keahlian logika back-end yang kokoh dengan estetika visual front-end modern.`,
        actions: [
          { text: "⚡ Lihat Bagian Tech & Tools", targetId: "tools" },
          { text: "📄 Cek Sertifikasi di CV", link: "CV FARHAN SAEFULAH.pdf", download: true, style: "emerald" },
          { text: "💼 Pengalaman Implementasi", targetId: "experience" }
        ]
      };
    }

    // 7. SERVICES & PRICING / HIRE / JASA PEMBUATAN WEB
    if (/(biaya|harga|jasa|layanan|bisa buat|tarif|ongkos|bikin web|pesan web|hire|sewa|kerja sama|freelance|bisa joki|bisa bantu)/i.test(q)) {
      return {
        type: 'services',
        text: `💼 **Layanan yang Disediakan oleh Farhan Saefulah:**\n\n1. **Jasa Pembuatan Website Kustom:**\n   • Company Profile instansi & perusahaan\n   • Landing Page penjualan / promosi produk\n   • Web Aplikasi bisnis & sistem custom\n2. **Website Undangan Pernikahan / Event Digital (OurMoment):**\n   • Desain mewah, RSVP, musik latar, amplop digital, dan navigasi map.\n3. **Toko Online / E-Commerce:**\n   • Katalog produk, hitung ongkir otomatis, dan payment gateway.\n4. **Desain UI/UX & Branding Identitas:**\n   • Desain aplikasi mobile/web Figma, logo, dan materi promosi.\n\n💰 **Biaya & Estimasi:**\nHarga sangat fleksibel dan disesuaikan dengan kebutuhan fitur serta deadline proyek Anda. Konsultasi awal **100% Gratis!**`,
        actions: [
          { text: "💬 Chat Langsung via WhatsApp", link: "https://wa.me/6285721869814?text=Halo%20Farhan,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website", style: "orange" },
          { text: "✉️ Kirim Pesan Lewat Formulir", targetId: "contact" },
          { text: "💍 Khusus Undangan Digital", query: "Info lengkap undangan digital OurMoment" }
        ]
      };
    }

    // 8. EDUCATION & CERTIFICATIONS
    if (/(pendidikan|kuliah|sekolah|lulusan|universitas|jurusan|ipk|gelar|sertifikat|sertifikasi|bnsp|dicoding|aws)/i.test(q)) {
      return {
        type: 'education',
        text: `🎓 **Latar Belakang Pendidikan & Sertifikasi:**\n\n• **Pendidikan Formal:** Sarjana Komputer / Teknik Informatika dari **Universitas Muhammadiyah Cirebon (UMC)** dengan **IPK 3.47 / 4.00**.\n• **Sertifikasi Kompetensi Resmi:**\n  1. **BNSP:** Sertifikasi Kompetensi Nasional Bidang Rekayasa Perangkat Lunak / Web Engineering.\n  2. **Dicoding Academy:** Pengembang Web dan Aplikasi Multi-Platform.\n  3. **AWS (Amazon Web Services):** Cloud Practitioner & Architecture Fundamentals.\n  4. **MikroTik Certified:** Jaringan & Manajemen Infrastruktur Data.`,
        actions: [
          { text: "📄 Unduh CV Lengkap (PDF)", link: "CV FARHAN SAEFULAH.pdf", download: true, style: "emerald" },
          { text: "📍 Lihat Bagian About", targetId: "about" }
        ]
      };
    }

    // 9. CONTACT / EMAIL / WHATSAPP / SOCIAL MEDIA / CV
    if (/(kontak|hubungi|contact|whatsapp|wa|nomor|telp|email|sosmed|github|linkedin|cv|resume|download cv)/i.test(q)) {
      return {
        type: 'contact',
        text: `📬 **Cara Menghubungi Farhan Saefulah:**\n\n• **Email Resmi:** [farhansaefulah505@gmail.com](mailto:farhansaefulah505@gmail.com)\n• **WhatsApp:** Tersedia untuk diskusi proyek & konsultasi instan.\n• **GitHub:** [github.com/hansaefulah](https://github.com/hansaefulah)\n• **LinkedIn:** [Farhan Saefulah, S.T.](https://www.linkedin.com/in/farhan-saefulah-s-t-72a5b21b9/)\n• **Lokasi:** Cirebon, Jawa Barat (Open to Remote / Hybrid / On-site).`,
        actions: [
          { text: "💬 Hubungi via WhatsApp", link: "https://wa.me/6285721869814?text=Halo%20Farhan,%20saya%20melihat%20portofolio%20Anda", style: "orange" },
          { text: "📄 Download CV Resmi (PDF)", link: "CV FARHAN SAEFULAH.pdf", download: true, style: "emerald" },
          { text: "✉️ Buka Form Kontak Web", targetId: "contact" }
        ]
      };
    }

    // 10. LOCATION / DOMISILI
    if (/(lokasi|tinggal|domisili|daerah|kota|tempat tinggal|cirebon|bandung|jakarta|bisa remote)/i.test(q)) {
      return {
        type: 'location',
        text: `📍 **Lokasi & Ketersediaan Kerja Farhan:**\n\nFarhan berdomisili di **Cirebon, Jawa Barat, Indonesia**.\n\n🌐 **Ketersediaan Kolaborasi:**\n• **Remote Work:** Siap bekerja jarak jauh (full remote) untuk klien atau perusahaan di seluruh Indonesia maupun global.\n• **On-site / Hybrid:** Sangat terbuka untuk penempatan on-site atau hybrid di area **Cirebon, Bandung, Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)**, maupun kota lainnya.`,
        actions: [
          { text: "✉️ Kontak Farhan Sekarang", targetId: "contact", style: "orange" },
          { text: "💼 Cek Riwayat Karir", targetId: "experience" }
        ]
      };
    }

    // 11. PRAISE / THANKS / CHIT-CHAT
    if (/(keren|hebat|bagus|mantap|terima kasih|makasih|thanks|thank you|ok|oke|siap|baik)/i.test(q)) {
      return {
        type: 'chit-chat',
        text: `Sama-sama! Senang sekali bisa membantu Anda. 😊\n\nJika ada kebutuhan pembuatan website, konsultasi sistem IT, atau peluang kolaborasi kerja, jangan ragu untuk langsung menghubungi Farhan, ya!`,
        actions: [
          { text: "💬 Chat WhatsApp Farhan", link: "https://wa.me/6285721869814", style: "orange" },
          { text: "🚀 Eksplorasi Proyek", targetId: "projects" },
          { text: "📄 Unduh CV Farhan", link: "CV FARHAN SAEFULAH.pdf", download: true, style: "emerald" }
        ]
      };
    }

    // 12. SMART FALLBACK WITH HELPFUL PROMPTS
    return {
      type: 'fallback',
      text: `Pertanyaan yang menarik! Saya adalah **Farhan AI Assistant** yang dirancang khusus untuk memberikan informasi seputar:\n\n• 👤 **Profil & Pendidikan** Farhan Saefulah, S.T.\n• 💼 **Pengalaman Kerja** di Bank BRI, KPU, DPRD, dan Freelance\n• 💍 **Proyek Undangan Digital (OurMoment)** & 5 proyek web lainnya\n• 🛠️ **Tech Stack & Keahlian Pemrograman** (React, Laravel, Mobile, UI/UX)\n• 💰 **Jasa & Biaya Pembuatan Website**\n• 📞 **Kontak WhatsApp, Email & Download CV**\n\nSilakan klik salah satu menu cepat di bawah ini atau ketikkan pertanyaan Anda:`,
      actions: [
        { text: "💼 Pengalaman Kerja", query: "Pengalaman kerja Farhan" },
        { text: "💍 Undangan Digital", query: "Jelaskan proyek undangan digital OurMoment" },
        { text: "🛠️ Keahlian & Stack", query: "Keahlian dan tech stack Farhan" },
        { text: "📞 Kontak & WhatsApp", query: "Bagaimana cara menghubungi Farhan?" }
      ]
    };
  }

  // --- CONTROLLER & EVENT HANDLING ---
  function initChatbotController() {
    renderChatbotDOM();

    const widget = document.getElementById('ai-chatbot-widget');
    const launcherBtn = document.getElementById('ai-launcher-btn');
    const chatWindow = document.getElementById('ai-chat-window');
    const closeBtn = document.getElementById('ai-close-btn');
    const clearBtn = document.getElementById('ai-clear-btn');
    const soundBtn = document.getElementById('ai-sound-btn');
    const soundIcon = document.getElementById('ai-sound-icon');
    const tooltip = document.getElementById('ai-launcher-tooltip');
    const tooltipClose = document.getElementById('ai-tooltip-close');
    const badge = document.getElementById('ai-launcher-badge');
    const chatBody = document.getElementById('ai-chat-body');
    const inputForm = document.getElementById('ai-input-form');
    const chatInput = document.getElementById('ai-chat-input');
    const sendBtn = document.getElementById('ai-send-btn');
    const suggestionsBar = document.getElementById('ai-suggestions-bar');

    let isChatOpen = false;
    let isTyping = false;

    // Load initial sound state
    const savedSound = localStorage.getItem('farhan_ai_sound');
    if (savedSound !== null) {
      soundEnabled = savedSound === 'true';
      updateSoundIcon();
    }

    function updateSoundIcon() {
      if (!soundIcon) return;
      if (soundEnabled) {
        soundIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
        soundBtn.title = "Matikan Suara";
      } else {
        soundIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
        soundBtn.title = "Nyalakan Suara";
      }
    }

    const backdrop = document.getElementById('ai-chat-backdrop');

    // Toggle Chat Window
    function toggleChat(forceOpen) {
      if (typeof forceOpen === 'boolean') {
        isChatOpen = forceOpen;
      } else {
        isChatOpen = !isChatOpen;
      }

      if (isChatOpen) {
        widget.classList.add('is-open');
        chatWindow.classList.add('is-active');
        document.body.classList.add('ai-chat-open');
        if (tooltip) tooltip.style.display = 'none';
        if (badge) badge.style.display = 'none';
        setTimeout(() => chatInput && chatInput.focus(), 300);
      } else {
        widget.classList.remove('is-open');
        chatWindow.classList.remove('is-active');
        document.body.classList.remove('ai-chat-open');
      }
    }

    launcherBtn.addEventListener('click', () => toggleChat());
    closeBtn.addEventListener('click', () => toggleChat(false));
    if (backdrop) {
      backdrop.addEventListener('click', () => toggleChat(false));
    }
    
    if (tooltip) {
      tooltip.addEventListener('click', (e) => {
        if (e.target !== tooltipClose) toggleChat(true);
      });
    }

    if (tooltipClose) {
      tooltipClose.addEventListener('click', (e) => {
        e.stopPropagation();
        tooltip.style.display = 'none';
      });
    }

    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('farhan_ai_sound', soundEnabled);
      updateSoundIcon();
      if (soundEnabled) playNotificationChime();
    });

    clearBtn.addEventListener('click', () => {
      sessionStorage.removeItem('farhan_ai_history');
      chatBody.innerHTML = '';
      sendWelcomeMessage();
    });

    // Handle Quick Chips
    if (suggestionsBar) {
      suggestionsBar.addEventListener('click', (e) => {
        const chip = e.target.closest('.ai-chip-btn');
        if (!chip || isTyping) return;
        const query = chip.dataset.query;
        if (query) {
          handleUserSubmit(query);
        }
      });
    }

    // Auto-expand textarea
    chatInput.addEventListener('input', () => {
      chatInput.style.height = 'auto';
      chatInput.style.height = Math.min(chatInput.scrollHeight, 80) + 'px';
    });

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        inputForm.dispatchEvent(new Event('submit'));
      }
    });

    // Handle Form Submit
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (!val || isTyping) return;
      chatInput.value = '';
      chatInput.style.height = '24px';
      handleUserSubmit(val);
    });

    // Append Message to Chat DOM
    function appendMessage(sender, text, actions = []) {
      const row = document.createElement('div');
      row.className = `ai-msg-row ${sender}`;

      const avatar = document.createElement('div');
      avatar.className = 'ai-msg-avatar';
      avatar.innerHTML = sender === 'bot' ? '🤖' : '👤';

      const content = document.createElement('div');
      content.className = 'ai-msg-content';

      const bubble = document.createElement('div');
      bubble.className = 'ai-msg-bubble';

      // Parse markdown-style formatting
      bubble.innerHTML = formatMarkdown(text);

      // Render Action Buttons if available
      if (actions && actions.length > 0) {
        const actionWrap = document.createElement('div');
        actionWrap.className = 'ai-action-buttons';

        actions.forEach(act => {
          if (act.targetId) {
            // Scroll to element action
            const btn = document.createElement('button');
            btn.className = `ai-action-btn ${act.style || ''}`;
            btn.innerHTML = `${act.text}`;
            btn.addEventListener('click', () => {
              const el = document.getElementById(act.targetId);
              if (el) {
                toggleChat(false);
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                el.classList.add('ai-highlight-target');
                setTimeout(() => el.classList.remove('ai-highlight-target'), 2200);
              }
            });
            actionWrap.appendChild(btn);
          } else if (act.link) {
            // External link or download
            const a = document.createElement('a');
            a.className = `ai-action-btn ${act.style || ''}`;
            a.href = act.link;
            a.innerHTML = `${act.text}`;
            if (act.download) {
              a.setAttribute('download', '');
            } else {
              a.target = '_blank';
              a.rel = 'noopener';
            }
            actionWrap.appendChild(a);
          } else if (act.query) {
            // Query shortcut button
            const btn = document.createElement('button');
            btn.className = `ai-action-btn ${act.style || ''}`;
            btn.innerHTML = `${act.text}`;
            btn.addEventListener('click', () => {
              if (!isTyping) handleUserSubmit(act.query);
            });
            actionWrap.appendChild(btn);
          }
        });

        bubble.appendChild(actionWrap);
      }

      const time = document.createElement('div');
      time.className = 'ai-msg-time';
      const now = new Date();
      time.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

      content.appendChild(bubble);
      content.appendChild(time);

      row.appendChild(avatar);
      row.appendChild(content);

      chatBody.appendChild(row);
      scrollToBottom();
      saveChatHistory();
    }

    // Markdown Formatter (Bold, Lists, Links, Paragraphs)
    function formatMarkdown(str) {
      if (!str) return '';
      let res = str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Bold **text**
      res = res.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Italic *text*
      res = res.replace(/\*(.*?)\*/g, '<em>$1</em>');
      // Links [title](url)
      res = res.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color:#818cf8;text-decoration:underline;">$1</a>');
      // Convert newlines to paragraphs / linebreaks
      const lines = res.split('\n');
      let out = '';
      let inList = false;

      for (let line of lines) {
        let trimmed = line.trim();
        if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
          if (!inList) {
            out += '<ul>';
            inList = true;
          }
          out += `<li>${trimmed.substring(2)}</li>`;
        } else {
          if (inList) {
            out += '</ul>';
            inList = false;
          }
          if (trimmed.length > 0) {
            out += `<p>${line}</p>`;
          }
        }
      }
      if (inList) out += '</ul>';
      return out;
    }

    function scrollToBottom() {
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Display Typing Indicator
    function showTypingIndicator() {
      const row = document.createElement('div');
      row.id = 'ai-typing-row';
      row.className = 'ai-msg-row bot';
      row.innerHTML = `
        <div class="ai-msg-avatar">🤖</div>
        <div class="ai-msg-content">
          <div class="ai-typing-indicator">
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
          </div>
        </div>
      `;
      chatBody.appendChild(row);
      scrollToBottom();
    }

    function removeTypingIndicator() {
      const el = document.getElementById('ai-typing-row');
      if (el) el.remove();
    }

    // User Message Processing with Fast Simulated Streaming
    function handleUserSubmit(userText) {
      appendMessage('user', userText);
      isTyping = true;
      sendBtn.disabled = true;

      // Show typing dots
      showTypingIndicator();

      // Compute Answer
      const response = analyzeIntent(userText);

      // Fast response delay (280ms - 450ms for realistic AI feeling)
      setTimeout(() => {
        removeTypingIndicator();
        playNotificationChime();
        appendMessage('bot', response.text, response.actions);
        isTyping = false;
        sendBtn.disabled = false;
      }, 350);
    }

    // Welcome Message Initialization
    function sendWelcomeMessage() {
      const welcomeText = `Halo! 👋 Selamat datang di portofolio resmi **Farhan Saefulah, S.T.**\n\nSaya **Farhan AI Assistant**, siap menjawab segala hal tentang keahlian pemrograman, proyek **Undangan Digital (OurMoment)**, riwayat karir di **Bank BRI & KPU**, hingga konsultasi jasa pembuatan website.\n\nApa yang ingin Anda tanyakan hari ini?`;
      appendMessage('bot', welcomeText, [
        { text: "💼 Pengalaman Kerja", query: "Apa saja pengalaman kerja Farhan?" },
        { text: "💍 Undangan Digital", query: "Ceritakan project OurMoment Undangan Digital" },
        { text: "🛠️ Keahlian & Stack", query: "Apa saja keahlian dan tech stack Farhan?" },
        { text: "📄 Download CV", link: "CV FARHAN SAEFULAH.pdf", download: true, style: "emerald" }
      ]);
    }

    // Chat History Persistence
    function saveChatHistory() {
      try {
        const msgs = [];
        const rows = chatBody.querySelectorAll('.ai-msg-row:not(#ai-typing-row)');
        rows.forEach(r => {
          const isBot = r.classList.contains('bot');
          const bubble = r.querySelector('.ai-msg-bubble');
          if (bubble) {
            msgs.push({
              sender: isBot ? 'bot' : 'user',
              html: bubble.innerHTML
            });
          }
        });
        sessionStorage.setItem('farhan_ai_history', JSON.stringify(msgs.slice(-25)));
      } catch (e) {}
    }

    function loadChatHistory() {
      try {
        const raw = sessionStorage.getItem('farhan_ai_history');
        if (raw) {
          const msgs = JSON.parse(raw);
          if (Array.isArray(msgs) && msgs.length > 0) {
            msgs.forEach(m => {
              const row = document.createElement('div');
              row.className = `ai-msg-row ${m.sender}`;
              row.innerHTML = `
                <div class="ai-msg-avatar">${m.sender === 'bot' ? '🤖' : '👤'}</div>
                <div class="ai-msg-content">
                  <div class="ai-msg-bubble">${m.html}</div>
                </div>
              `;
              chatBody.appendChild(row);
            });
            scrollToBottom();
            return true;
          }
        }
      } catch (e) {}
      return false;
    }

    // Initialize Initial Chat State
    const hasHistory = loadChatHistory();
    if (!hasHistory) {
      sendWelcomeMessage();
    }
  }

  // Auto initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbotController);
  } else {
    initChatbotController();
  }

})();
