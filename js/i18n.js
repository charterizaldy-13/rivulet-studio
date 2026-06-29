(function(){
  var STORAGE_KEY = 'rivulet_lang';

  var LOCALES = {
    en: {
      nav: { services:'Services', portfolio:'Portfolio', about:'About', startProject:'Start a Project' },
      footer: { tagline:'Build & Craft — Creative-Tech Studio' },
      cta: { heading:"Have a project that needs both technical and visual work?", button:'Discuss Your Project' },
      pillar: { build:'Build', craft:'Craft' },
      marquee: { website:'WEBSITE', webapp:'WEB APPLICATION', automation:'AUTOMATION', motion:'MOTION GRAPHIC', video:'VIDEO EDITING', graphic:'GRAPHIC DESIGN', photo:'PHOTO EDITING' },

      home: {
        title:'Rivulet Studio — Build & Craft',
        eyebrow:'Rivulet Studio — Build & Craft',
        hero:{
          headline:'Systems that hold.<br>Visuals that <em>stay.</em>',
          sub:"We build websites, applications, and automation — and design the motion, video, and visual identity behind your brand. One studio, two disciplines, one consistent standard.",
          ctaPrimary:'Start a Project', ctaSecondary:'View Services'
        },
        whatWeDo:{
          eyebrow:'What we do', heading:'Two disciplines, one studio.',
          buildTitle:'A technical foundation you can rely on.',
          buildDesc:'Websites, web applications, and automation — systems that work correctly behind the scenes.',
          buildLink:'View Build services →',
          craftTitle:'Visual content that stays with people.',
          craftLink:'View Craft services →'
        },
        portfolio:{
          eyebrow:'Portfolio', heading:"A few projects we've delivered.",
          everafter:{ cat:'Build — Website', title:'Ever After Wedding Organizer', desc:'A company profile website for a wedding organizer, built with a dark theme and lime accent, complete with service and package structure.' },
          ireem:{ cat:'Build — Institutional Website', title:'IREEM', desc:'An institutional website for an energy and environmental organization, with program structure and multilingual impact portfolio.' }
        }
      },

      services:{
        title:'Rivulet Studio — Services',
        eyebrow:'Services — Rivulet Studio', heading:'Two disciplines, one studio.',
        build:{
          title:'A technical foundation you can rely on.',
          desc:"Systems that work correctly behind the scenes — from company profile websites to automation that saves your team's working hours.",
          items:{
            website:'Website Company / Organization', websiteTag:'Regular · Premium',
            webapp:'Web-based Application', webappTag:'Calculator · POS · Custom',
            automation:'Automation', automationTag:'n8n · Custom Workflow'
          }
        },
        craft:{
          title:'Visual content that stays with people.',
          items:{
            motion:'Motion Graphic', motionDesc:'Promo animation & brand identity',
            video:'Video Editing', videoDesc:'Color grading & editing',
            graphic:'Graphic Design', graphicDesc:'Visual identity & promo materials',
            photo:'Photo Editing', photoDesc:'Retouching & color correction'
          }
        },
        detail:{ eyebrow:'In Detail', heading:'Every service, one at a time.', sub:'Seven services. Two disciplines. Scroll to explore.' }
      },

      about:{
        title:'Rivulet Studio — About',
        eyebrow:'About Rivulet Studio', heading:'We start with questions, not templates.',
        sub:"Rivulet Studio is a small team of specialists — not one generalist trying to do everything. Every project starts with research, not a blank canvas.",
        process:{
          eyebrow:'Our Process', heading:'Research first. Build and Craft, separately. Then one result.',
          lead:{ title:'We talk before we design.', desc:'Every project starts with a deep conversation — about your goals, your constraints, and what "done well" looks like for you specifically. We don\'t open a template until we understand the brief.' },
          step1:{ title:'Specialists, not one generalist.', desc:"Build and Craft are handled by different specialists on our team. A developer doesn't try to be a motion designer, and a motion designer doesn't try to be a backend engineer. Each side gets full attention from someone who's actually good at it." },
          step2:{ title:'One result, reviewed together.', desc:'Before anything ships, the technical and creative sides come back together — checked against the same brief, the same goals. What you get is coherent, not stitched together.' }
        },
        why:{
          eyebrow:'Why Two Disciplines', heading:'A good website needs both — and most studios are only strong at one.',
          build:{ title:'Code that works correctly is non-negotiable.', desc:"Our technical side is handled by people who care about performance, maintainability, and getting the logic right — not just making something that looks finished in a demo." },
          craft:{ title:'Visuals carry the first impression.', desc:"Our creative side is handled by people trained in motion, color, and composition — the details most technical teams don't have time to perfect." }
        },
        cta:{ heading:"Want to know how we'd approach your project?", button:'Talk to Us' }
      },

      portfolio:{
        title:'Rivulet Studio — Portfolio',
        eyebrow:'Portfolio — Rivulet Studio', heading:'Selected work, shipped and live.',
        sub:"A handful of projects we've built end to end. Click through to see each one running in production — not a static mockup.",
        visit:'Visit live site',
        everafter:{ cat:'Build — Website', title:'Ever After Wedding Organizer', desc:'A company profile website for a wedding organizer, built with a dark theme and lime accent, complete with service and package structure.' },
        ireem:{ cat:'Build — Institutional Website', title:'IREEM', desc:'An institutional website for an energy and environmental organization, with program structure and multilingual impact portfolio.' },
        youthfinance:{ cat:'Build — Web Application', title:'YouthFinance', desc:"A web-based financial check-up application that turns a user's financial health into a clear, shareable score." },
        teletbriket:{ cat:'Build — Website', title:'Telet Briket', desc:'A company profile website for a coconut-shell briquette exporter, built to support international buyer trust and inquiries.' }
      }
    },

    id: {
      nav: { services:'Layanan', portfolio:'Portofolio', about:'Tentang', startProject:'Mulai Project' },
      footer: { tagline:'Build & Craft — Studio Kreatif-Teknologi' },
      cta: { heading:'Punya project yang butuh sisi teknis sekaligus visual?', button:'Diskusikan Project Anda' },
      pillar: { build:'Build', craft:'Craft' },
      marquee: { website:'WEBSITE', webapp:'APLIKASI WEB', automation:'AUTOMATION', motion:'MOTION GRAPHIC', video:'VIDEO EDITING', graphic:'GRAPHIC DESIGN', photo:'PHOTO EDITING' },

      home: {
        title:'Rivulet Studio — Build & Craft',
        eyebrow:'Rivulet Studio — Build & Craft',
        hero:{
          headline:'Sistem yang kokoh.<br>Visual yang <em>melekat.</em>',
          sub:'Kami membangun website, aplikasi, dan automation — sekaligus merancang motion, video, dan identitas visual di balik brand Anda. Satu studio, dua keahlian, satu standar yang konsisten.',
          ctaPrimary:'Mulai Project', ctaSecondary:'Lihat Layanan'
        },
        whatWeDo:{
          eyebrow:'Yang Kami Kerjakan', heading:'Dua keahlian, satu studio.',
          buildTitle:'Fondasi teknis yang bisa diandalkan.',
          buildDesc:'Website, aplikasi web, dan automation — sistem yang bekerja dengan benar di balik layar.',
          buildLink:'Lihat layanan Build →',
          craftTitle:'Konten visual yang membekas di benak orang.',
          craftLink:'Lihat layanan Craft →'
        },
        portfolio:{
          eyebrow:'Portofolio', heading:'Beberapa project yang telah kami selesaikan.',
          everafter:{ cat:'Build — Website', title:'Ever After Wedding Organizer', desc:'Website company profile untuk wedding organizer, dibangun dengan tema gelap dan aksen lime, lengkap dengan struktur layanan dan paket.' },
          ireem:{ cat:'Build — Website Institusi', title:'IREEM', desc:'Website institusi untuk organisasi energi dan lingkungan, dengan struktur program dan portofolio dampak multibahasa.' }
        }
      },

      services:{
        title:'Rivulet Studio — Layanan',
        eyebrow:'Layanan — Rivulet Studio', heading:'Dua keahlian, satu studio.',
        build:{
          title:'Fondasi teknis yang bisa diandalkan.',
          desc:'Sistem yang bekerja dengan benar di balik layar — dari website company profile hingga automation yang menghemat waktu kerja tim Anda.',
          items:{
            website:'Website Company / Organization', websiteTag:'Regular · Premium',
            webapp:'Aplikasi Berbasis Web', webappTag:'Kalkulator · POS · Custom',
            automation:'Automation', automationTag:'n8n · Workflow Custom'
          }
        },
        craft:{
          title:'Konten visual yang membekas di benak orang.',
          items:{
            motion:'Motion Graphic', motionDesc:'Animasi promosi & identitas brand',
            video:'Video Editing', videoDesc:'Color grading & penyuntingan',
            graphic:'Graphic Design', graphicDesc:'Identitas visual & materi promosi',
            photo:'Photo Editing', photoDesc:'Retouching & koreksi warna'
          }
        },
        detail:{ eyebrow:'Lebih Detail', heading:'Setiap layanan, satu per satu.', sub:'Tujuh layanan. Dua keahlian. Scroll untuk menjelajah.' }
      },

      about:{
        title:'Rivulet Studio — Tentang',
        eyebrow:'Tentang Rivulet Studio', heading:'Kami mulai dari pertanyaan, bukan template.',
        sub:'Rivulet Studio adalah tim kecil yang terdiri dari spesialis — bukan satu generalis yang mencoba mengerjakan semuanya. Setiap project dimulai dari riset, bukan kanvas kosong.',
        process:{
          eyebrow:'Proses Kami', heading:'Riset dulu. Build dan Craft, terpisah. Lalu satu hasil.',
          lead:{ title:'Kami berdiskusi sebelum mendesain.', desc:'Setiap project dimulai dengan diskusi mendalam — tentang tujuan Anda, batasan Anda, dan seperti apa "hasil yang baik" menurut Anda secara spesifik. Kami tidak membuka template sebelum memahami brief-nya.' },
          step1:{ title:'Spesialis, bukan satu generalis.', desc:'Build dan Craft ditangani oleh spesialis yang berbeda di tim kami. Developer tidak mencoba menjadi motion designer, dan motion designer tidak mencoba menjadi backend engineer. Setiap sisi mendapat perhatian penuh dari orang yang memang ahli di bidangnya.' },
          step2:{ title:'Satu hasil, ditinjau bersama.', desc:'Sebelum apa pun dirilis, sisi teknis dan kreatif kembali disatukan — diperiksa terhadap brief yang sama, tujuan yang sama. Hasil yang Anda dapatkan utuh, bukan sekadar ditempel-tempel.' }
        },
        why:{
          eyebrow:'Mengapa Dua Keahlian', heading:'Website yang baik butuh keduanya — dan kebanyakan studio hanya kuat di salah satu.',
          build:{ title:'Kode yang bekerja dengan benar adalah hal yang tidak bisa dikompromikan.', desc:'Sisi teknis kami ditangani oleh orang-orang yang peduli pada performa, kemudahan pemeliharaan, dan logika yang benar — bukan sekadar membuat sesuatu yang terlihat selesai saat demo.' },
          craft:{ title:'Visual membawa kesan pertama.', desc:'Sisi kreatif kami ditangani oleh orang-orang yang terlatih dalam motion, warna, dan komposisi — detail yang biasanya tidak punya waktu untuk disempurnakan oleh tim teknis.' }
        },
        cta:{ heading:'Ingin tahu bagaimana kami akan mendekati project Anda?', button:'Hubungi Kami' }
      },

      portfolio:{
        title:'Rivulet Studio — Portofolio',
        eyebrow:'Portofolio — Rivulet Studio', heading:'Pilihan karya yang sudah rilis dan live.',
        sub:'Beberapa project yang kami kerjakan dari awal sampai akhir. Klik untuk melihat masing-masing berjalan langsung di production — bukan sekadar mockup statis.',
        visit:'Kunjungi situs live',
        everafter:{ cat:'Build — Website', title:'Ever After Wedding Organizer', desc:'Website company profile untuk wedding organizer, dibangun dengan tema gelap dan aksen lime, lengkap dengan struktur layanan dan paket.' },
        ireem:{ cat:'Build — Website Institusi', title:'IREEM', desc:'Website institusi untuk organisasi energi dan lingkungan, dengan struktur program dan portofolio dampak multibahasa.' },
        youthfinance:{ cat:'Build — Aplikasi Web', title:'YouthFinance', desc:'Aplikasi web cek kesehatan finansial yang mengubah kondisi keuangan pengguna menjadi skor yang jelas dan mudah dibagikan.' },
        teletbriket:{ cat:'Build — Website', title:'Telet Briket', desc:'Website company profile untuk eksportir briket arang batok kelapa, dibangun untuk mendukung kepercayaan dan pertanyaan dari pembeli internasional.' }
      }
    }
  };

  function getLang(){
    var saved = localStorage.getItem(STORAGE_KEY);
    return (saved === 'id' || saved === 'en') ? saved : 'en';
  }

  function resolve(dict, path){
    return path.split('.').reduce(function(o,k){ return (o && o[k] !== undefined) ? o[k] : undefined; }, dict);
  }

  function t(key){
    var lang = getLang();
    var val = resolve(LOCALES[lang], key);
    if(val === undefined) val = resolve(LOCALES.en, key);
    return val;
  }

  function apply(){
    var lang = getLang();
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if(val === undefined) return;
      if(el.hasAttribute('data-i18n-html')) el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      var spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(function(pair){
        var parts = pair.split(':');
        if(parts.length !== 2) return;
        var attr = parts[0].trim(), key = parts[1].trim();
        var val = t(key);
        if(val !== undefined) el.setAttribute(attr, val);
      });
    });

    var titleKey = document.documentElement.getAttribute('data-i18n-title');
    if(titleKey){
      var titleVal = t(titleKey);
      if(titleVal !== undefined) document.title = titleVal;
    }

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang){
    if(lang !== 'en' && lang !== 'id') return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply();
    window.dispatchEvent(new CustomEvent('rivulet:langchange', { detail:{ lang:lang } }));
  }

  document.addEventListener('click', function(e){
    var btn = e.target.closest('.lang-switch [data-lang]');
    if(btn) setLang(btn.getAttribute('data-lang'));
  });

  window.RivuletI18n = { apply:apply, setLang:setLang, getLang:getLang, t:t };

  apply();
})();
