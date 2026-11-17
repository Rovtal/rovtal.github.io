(() => {
  "use strict";

  const TEXT = {
    en: {
      meta_title: "Rovtal | AI Agents & Offline Local Work Automation",
      meta_desc:
        "Rovtal builds open-source AI agent workflows, local automation tooling, and offline verification utilities for Excel, CSV, and UBL-TR e-invoice auditing.",
      og_desc:
        "Open-source local automation tools and offline Excel / CSV / UBL-TR e-invoice reconciliation pipelines.",
      skip_link: "Skip to main content",
      nav_aria: "Primary",
      nav_tracks: "Workstreams",
      nav_workflow: "Workflow",
      nav_contact: "Contact",
      lang_aria: "Language",
      theme_to_light: "Light mode",
      theme_to_dark: "Dark mode",
      hero_heading: "AI agents and zero-error local work automation.",
      hero_lead:
        "Rovtal builds open-source AI agent systems and local developer utilities. It turns repetitive spreadsheet consolidation, accounting verification, and e-invoice checks into offline desktop tools with zero cloud dependency.",
      hero_trust:
        "Open-source Python cores · Offline Excel and UBL-TR reconciliation · Zero cloud upload and zero token cost.",
      wb_title: "Live Output: ubl-audit demo",
      wb_badge: "6 docs · 0.05 TRY tolerance",
      filter_aria: "Filter by status",
      filter_all: "All (6)",
      filter_pass: "Passed (1)",
      filter_warn: "Warning (2)",
      filter_err: "Error (3)",
      wb_caption: "Sample audit results for 6 UBL-TR invoices, sorted best to worst",
      col_invoice: "Invoice No",
      col_supplier: "Supplier",
      col_payable: "Payable",
      col_status: "Status",
      pill_pass: "● Passed",
      pill_warn: "▲ Warning",
      pill_err: "■ Error",
      ins_dt_source: "Source",
      ins_dt_values: "Expected / Actual",
      pillars_heading: "Two Workstreams: Open Engineering and Real Business Tools",
      pillars_intro:
        "Rovtal unites public open-source AI/automation engineering with offline data utilities built for accounting and back-office operations.",
      track1_heading: "AI Agents and Open Tooling",
      track1_body:
        "Instead of abstract demos, Rovtal publishes reproducible agent workflows, local CLI utilities, and zero-subscription desktop automation architectures.",
      track1_b1:
        "Agent-assisted code and automation built against real file inputs, unit tests, and terminal verification",
      track1_b2:
        "Replacing recurring paid SaaS subscriptions with local Python and desktop automation pipelines",
      track1_b3:
        "Shipping open-source codebases alongside reproducible test suites and sample fixtures",
      track2_heading: "Accounting, Office and Data Automation",
      track2_body:
        "Time-consuming spreadsheet consolidation, tax base cross-checks, and invoice audits are turned into deterministic offline Excel workflows.",
      track2_b1:
        "Bulk XML and nested ZIP parsing and mathematical auditing for Turkish UBL-TR e-Invoice / e-Archive schemas",
      track2_b2:
        "Cleaning multi-source Excel/CSV exports, catching conflicting duplicates, and mapping columns to ERP templates",
      track2_b3:
        "Delivering audit-ready workbooks with live Excel formulas, breakdowns, and strict edge-case flags",
      track2_cta: "Project Inquiries",
      tool1_heading: "Tool #1: ubl-invoice-audit v0.1.0",
      tool1_p1_a: "An open-source in-memory auditing core for nested",
      tool1_p1_b: "and",
      tool1_p1_c: "UBL-TR invoice archives from Turkish Revenue Administration (GIB) portals, hardened against XML external entities (",
      tool1_p1_d: ") and path traversal (",
      tool1_p1_e: ").",
      tool1_b1_a: "Exact",
      tool1_b1_b: "line-total, multi-rate VAT, and",
      tool1_b1_c: "verification with zero floating-point rounding drift",
      tool1_b2_a: "Detects duplicate",
      tool1_b2_b: "records, repeated supplier invoice numbers, and same supplier + date + amount probable duplicates",
      tool1_b3_a: "Supports both corporate",
      tool1_b3_b: "entities and sole-proprietor",
      tool1_b3_c: "schemas",
      tool1_b4_a: "Includes",
      tool1_b4_b: "flag returning exit code",
      tool1_b4_c: "plus JSON summary output for automated batch pipelines",
      tool1_cli_aria: "ubl-invoice-audit command line usage",
      tool1_caption: "5-Sheet Excel (.xlsx) Output Architecture",
      col_sheet: "Sheet Name",
      col_desc1: "Contents and Calculations",
      t1_r1_a: "Live",
      t1_r1_b: "Excel formulas, status breakdown, and VAT rate summary",
      t1_r2: "Full invoice ledger with ETTN, tax ID, net base, VAT, withholding, payable total, and audit status",
      t1_r3: "Detected arithmetic mismatches, duplicate ETTN records, and probable duplicate pairs",
      t1_r4: "Tax rate and withholding tax code breakdowns",
      t1_r5: "Line-item quantities, unit prices, and net line amounts per invoice",
      tool2_heading: "Tool #2: excel-merge-audit v0.1.0",
      tool2_p1_a: "An open-source offline engine that consolidates heterogeneous",
      tool2_p1_b: "and",
      tool2_p1_c: "tables without requiring",
      tool2_p1_d: "or",
      tool2_p1_e: ", aligning bilingual column schemas and auditing decimal totals.",
      tool2_b1_a: "Auto-detects",
      tool2_b1_b: "(Windows-1254), and",
      tool2_b1_c: "encodings with",
      tool2_b1_d: "delimiters",
      tool2_b2_a: "Skips top report banner rows, prevents sparse OpenXML empty-cell column shifting, and normalizes Excel serial dates to",
      tool2_b3_a: "Separates exact duplicates, flags conflicting same-document rows with different amounts, and strips repeated",
      tool2_b3_b: "summary rows",
      tool2_b4_a: "Hardened against",
      tool2_b4_b: ", and spreadsheet formula injection (",
      tool2_b4_c: ")",
      tool2_cli_aria: "excel-merge-audit command line usage",
      tool2_caption: "4-Sheet Reconciliation (.xlsx) Output Architecture",
      col_desc2: "Contents and Verification",
      t2_r1_a: "Dynamic",
      t2_r1_b: "formulas and zero-drift check for Raw - Duplicates = Clean",
      t2_r2: "Normalized dates, document IDs, tax IDs, Net/VAT/Gross amounts, and per-row audit status",
      t2_r3: "Detected encoding, delimiter, header row index, and gross total contribution per source file",
      t2_r4: "Extracted duplicate rows, conflicting records, scientific-notation ID warnings, and formula error cells",
      model_heading: "Workflow and Delivery Principles",
      model_intro:
        "Unlike rigid cloud SaaS subscriptions, every utility is built to match your existing accounting layout and stays fully under your control.",
      m1_dt: "Build First, Verify Live",
      m1_dd:
        "A working tool is assembled locally against 3–5 anonymized sample files or spreadsheet templates before delivery, so expected output is verified directly.",
      m2_dt: "Strict Local Data Privacy",
      m2_dd:
        "No XML invoice, ledger extract, or business spreadsheet is uploaded to third-party APIs or external clouds; parsing and reconciliation run offline on local Python runtimes.",
      m3_dt: "Accounting-Ready Output",
      m3_dd_a: "End users never deal with raw scripts or JSON logs; output ships as formula-driven, filterable",
      m3_dd_b: "workbooks aligned with Logo, Zirve, or internal reporting layouts.",
      m4_dt: "Test-Verified Delivery",
      m4_dd:
        "Every published repository ships with unit tests covering malformed encodings, decimal rounding, and security edge cases.",
      footer_tagline: "AI agents, local automation systems, and offline office data tools.",
      footer_contact_title: "Direct Contact",
      copy_btn: "Copy",
      copy_email_btn: "Copy address",
      footer_links_title: "Verified Channels",
      copy_cmd_ok: "Command copied to clipboard.",
      copy_email_ok: "Email copied to clipboard: rovtalai@gmail.com",
      copy_err: "Clipboard access blocked; select the text and copy manually.",
      filter_status: (visible, total) =>
        `Showing ${visible} of ${total} records (sorted best to worst). Select a row to inspect.`,
    },
    tr: {
      meta_title: "Rovtal | Yapay Zeka Ajanları ve Yerel İş Otomasyonu",
      meta_desc:
        "Rovtal; yapay zeka ajanları, yerel otomasyon sistemleri ile ön muhasebe, Excel ve GİB UBL-TR e-Fatura doğrulama süreçleri için çevrimdışı çalışan pratik araçlar geliştirir.",
      og_desc:
        "Yapay zeka destekli yerel otomasyon sistemleri, açık kaynak araçlar ve çevrimdışı Excel / UBL-TR e-Fatura denetim akışları.",
      skip_link: "Ana içeriğe geç",
      nav_aria: "Birincil",
      nav_tracks: "Odak Alanları",
      nav_workflow: "Çalışma Modeli",
      nav_contact: "İletişim",
      lang_aria: "Dil seçimi",
      theme_to_light: "Açık görünüm",
      theme_to_dark: "Koyu görünüm",
      hero_heading: "Yapay zeka ajanları ve sıfır hatalı yerel iş otomasyonu.",
      hero_lead:
        "Rovtal; yapay zeka ajan sistemleri ve açık kaynak geliştirici araçları üreten bir teknoloji kanalıdır. Aynı zamanda ofis, ön muhasebe ve veri operasyonlarındaki tekrarlayan e-Fatura ile Excel işlerini internetsiz çalışan yerel araçlara dönüştürür.",
      hero_trust:
        "Açık kaynak Python çekirdekleri · Çevrimdışı Excel ve UBL-TR mutabakatı · Sıfır bulut ve sıfır kontör maliyeti.",
      wb_title: "Canlı Çıktı: ubl-audit demo",
      wb_badge: "6 belge · 0.05 TRY tolerans",
      filter_aria: "Duruma göre filtrele",
      filter_all: "Tümü (6)",
      filter_pass: "Geçti (1)",
      filter_warn: "Uyarı (2)",
      filter_err: "Hata (3)",
      wb_caption: "Örnek 6 UBL-TR faturasının denetim sonuçları, iyiden kötüye sıralı",
      col_invoice: "Fatura No",
      col_supplier: "Satıcı",
      col_payable: "Ödenecek",
      col_status: "Durum",
      pill_pass: "● Geçti",
      pill_warn: "▲ Uyarı",
      pill_err: "■ Hata",
      ins_dt_source: "Kaynak",
      ins_dt_values: "Beklenen / Gerçek",
      pillars_heading: "İki Çalışma Hattı: İçerik ve Gerçek İş Uygulamaları",
      pillars_intro:
        "Rovtal hem geliştiriciler için üretilen açık kaynak AI/otomasyon yayınlarını hem de ofis ve ön muhasebe pratiğindeki veri otomasyonu çözümlerini tek çatı altında birleştirir.",
      track1_heading: "Yapay Zeka Ajanları ve İçerik Üretimi",
      track1_body:
        "Kuramsal demo yerine doğrudan bilgisayarda çalışan ajan akışları, yerel komut satırı araçları ve abonelik maliyeti olmayan otomasyon mimarileri geliştirilir ve paylaşılır.",
      track1_b1:
        "Ajan destekli kod ve otomasyon akışlarının gerçek dosya, test ve terminal doğrulamasıyla üretilmesi",
      track1_b2:
        "Harici ücretli API yerine yerel Python ve masaüstü betikleriyle tekrarlı işlerin devralınması",
      track1_b3:
        "Tüm kaynak kodların ve test kapsamlarının açık kaynak olarak paylaşılması",
      track2_heading: "Ofis, Ön Muhasebe ve Veri Otomasyonu",
      track2_body:
        "Günlük muhasebe, tedarik ve operasyon masalarında saat alan dağınık dosya birleştirme, matrah doğrulama ve fatura kontrol işleri hatasız Excel akışlarına bağlanır.",
      track2_b1:
        "GİB UBL-TR e-Fatura / e-Arşiv XML ve iç içe ZIP paketlerinden toplu veri çıkarımı ve kontrol",
      track2_b2:
        "Çoklu Excel/CSV dosyalarını temizleme, çift kayıt yakalama ve Logo/Zirve/ofis şablonlarına uyarlama",
      track2_b3:
        "İleri Excel formülleri, pivot ve dinamik özet sayfalarıyla denetime hazır rapor teslimi",
      track2_cta: "Proje ve İş Görüşmesi",
      tool1_heading: "Araç #1: ubl-invoice-audit v0.1.0",
      tool1_p1_a: "GİB ve özel entegratör arşivlerinden çıkan iç içe",
      tool1_p1_b: "ve",
      tool1_p1_c: "faturalarını bellekte ayrıştıran, dış varlık enjeksiyonuna (",
      tool1_p1_d: ") ve arşiv yol taşmasına (",
      tool1_p1_e: ") karşı kilitli açık kaynak denetim çekirdeği.",
      tool1_b1_a: "Kayan nokta yuvarlama sapması olmadan tam",
      tool1_b1_b: "satır, çoklu KDV oranı ve",
      tool1_b1_c: "tevkifat kontrolü",
      tool1_b2_a: "Aynı",
      tool1_b2_b: ", aynı satıcıda tekrar eden fatura numarası ve aynı satıcı + tarih + tutarlı olası çift kayıt yakalama",
      tool1_b3_a: "Hem kurumsal",
      tool1_b3_b: "şirketleri hem şahıs firmalarını (",
      tool1_b3_c: ") okuma",
      tool1_b4_a: "Otomasyon boru hatları için",
      tool1_b4_b: "bayrağı ile hatalı partide çıkış kodu",
      tool1_b4_c: "döndürme ve JSON özet çıktısı",
      tool1_cli_aria: "ubl-invoice-audit komut satırı kullanımı",
      tool1_caption: "5 Sayfalı Excel (.xlsx) Çıktı Mimarisi",
      col_sheet: "Sayfa Adı",
      col_desc1: "İçerik ve Hesaplama",
      t1_r1_a: "Canlı",
      t1_r1_b: "Excel formülleri, durum dağılımı ve KDV oran özeti",
      t1_r2: "Tüm belgelerin ETTN, VKN/TCKN, matrah, KDV, tevkifat, ödenecek ve denetim durumu",
      t1_r3: "Yakalanan matematik sapmaları, çift ETTN kayıtları ve olası mükerrer eşleşmeler",
      t1_r4: "Oran bazlı KDV ve tevkifat kod kırılımları",
      t1_r5: "Fatura satırı bazında miktar, birim fiyat ve satır net tutar dökümü",
      tool2_heading: "Araç #2: excel-merge-audit v0.1.0",
      tool2_p1_a: "Farklı formatlardaki çoklu",
      tool2_p1_b: "ve",
      tool2_p1_c: "tablolarını",
      tool2_p1_d: "veya",
      tool2_p1_e: "gerektirmeden çevrimdışı birleştiren, sütun eşleyen ve kuruş mutabakatını denetleyen açık kaynak araç.",
      tool2_b1_a: "Otomatik",
      tool2_b1_b: "(Türkçe ANSI) ve",
      tool2_b1_c: "kodlamalarıyla",
      tool2_b1_d: "ayırıcılarını algılama",
      tool2_b2_a: "Üstteki şirket/başlık satırlarını atlama, atlanmış boş OpenXML hücrelerinde kaymayı önleme ve Excel seri tarihlerini biçimlendirme:",
      tool2_b3_a: "Birebir mükerrer satırların yanı sıra aynı belge no + tarafla farklı tutarda gelen çakışan kayıtları ve",
      tool2_b3_b: "tekrarlarını ayıklama",
      tool2_b4_a: "Güvenli metin koruma katmanı:",
      tool2_b4_b: "ve Excel hücre formül enjeksiyonu (",
      tool2_b4_c: ") korumalı",
      tool2_cli_aria: "excel-merge-audit komut satırı kullanımı",
      tool2_caption: "4 Sayfalı Mutabakat (.xlsx) Çıktı Mimarisi",
      col_desc2: "İçerik ve Doğrulama",
      t2_r1_a: "Dinamik",
      t2_r1_b: "formülleri ve Ham − Mükerrer − Temiz sıfır sapma kontrolü",
      t2_r2: "Hizalanmış tarih, belge no, VKN/taraf, Net/KDV/Brüt tutar ve satır bazlı denetim durumu",
      t2_r3: "Her dosyanın algılanan kodlaması, ayırıcısı, başlık satırı ve brüt toplam katkısı",
      t2_r4: "Çıkarılan mükerrerler, çakışan belgeler, bilimsel VKN bozulmaları ve formül hata hücreleri",
      model_heading: "Çalışma Modeli ve Teslim İlkeleri",
      model_intro:
        "Hazır SaaS aboneliklerinin aksine, mevcut muhasebe veya ofis Excel düzeninize birebir uyan, kontrol edilebilir yerel sistemler kurulur.",
      m1_dt: "Önce Hazırla, Sonra Göster",
      m1_dd:
        "Anonimleştirilmiş 3–5 örnek belge veya Excel şablonunuz üzerinden çalışan araç yerel ortamda hazırlanır. Beklenen çıktıyı canlı görüp doğruladıktan sonra teslim edilir.",
      m2_dt: "Tam Yerel Veri Güvenliği",
      m2_dd:
        "Hiçbir XML faturası, cari hesap listesi veya işletme dosyası üçüncü parti web servislerine yüklenmez; tüm ayrıştırma ve doğrulama Windows masaüstünde yerel Python ikilisiyle yürür.",
      m3_dt: "Ofis ve Muhasebe Uyumlu Çıktı",
      m3_dd_a: "Son kullanıcıya ham kod veya karmaşık JSON bırakılmaz; doğrudan Logo, Zirve veya şirket içi kontrol düzenine uygun, formüllü ve filtreli",
      m3_dd_b: "dosyası üretilir.",
      m4_dt: "Test ve Doğrulama Disiplini",
      m4_dd:
        "Yayına alınan her araç birim testlerinden ve sınır durum kontrollerinden geçirilerek açık kaynak deposuyla birlikte sunulur.",
      footer_tagline: "Yapay zeka ajanları, yerel otomasyon sistemleri ve çevrimdışı ofis/veri araçları.",
      footer_contact_title: "Doğrudan İletişim",
      copy_btn: "Kopyala",
      copy_email_btn: "Adresi kopyala",
      footer_links_title: "Doğrulanmış Kanallar",
      copy_cmd_ok: "Komut panoya kopyalandı.",
      copy_email_ok: "E-posta adresi panoya kopyalandı: rovtalai@gmail.com",
      copy_err: "Pano erişimi engellendi; metni seçip elle kopyalayabilirsiniz.",
      filter_status: (visible, total) =>
        `Gösterilen kayıt: ${visible} / ${total} (iyiden kötüye sıralı). İncelemek için bir satıra tıklayın.`,
    },
  };

  const INVOICE_DETAILS = {
    RVT2026000000000: {
      code: "KURAL_TAMAM",
      source: "RVT2026000000000.xml",
      en: {
        title: "RVT2026000000000 — Reconciliation Passed",
        msg: "Line base (1,500.00), 20% VAT (300.00), and payable total (1,800.00) matched exactly within the 0.05 TRY tolerance.",
        values: "1.800,00 TRY / 1.800,00 TRY",
      },
      tr: {
        title: "RVT2026000000000 — Mutabakat Tamam",
        msg: "Satır matrahı (1.500,00), %20 KDV (300,00) ve ödenecek toplam (1.800,00) 0,05 TRY toleransı içinde birebir doğrulandı.",
        values: "1.800,00 TRY / 1.800,00 TRY",
      },
    },
    SHS2026000000002: {
      code: "OLASI_CIFT_KAYIT",
      source: "SHS2026000000002.xml",
      en: {
        title: "SHS2026000000002 — Probable Duplicate Entry",
        msg: "Same supplier (10000000146), date (2026-11-11), and payable amount (2,200.00) appeared under different invoice numbers: SHS2026000000002, SHS2026000000009.",
        values: "Unique tx check / 2 matching records",
      },
      tr: {
        title: "SHS2026000000002 — Olası Çift Kayıt Şüphesi",
        msg: "Aynı satıcı (10000000146), tarih (2026-11-11) ve ödenecek tutarda (2.200,00) farklı fatura numaraları var: SHS2026000000002, SHS2026000000009.",
        values: "Tekil işlem kontrolü / 2 eşleşen belge",
      },
    },
    SHS2026000000009: {
      code: "OLASI_CIFT_KAYIT",
      source: "toplu_gib_arsiv.zip!/SHS2026000000009.xml",
      en: {
        title: "SHS2026000000009 — Probable Duplicate Entry",
        msg: "Same supplier (10000000146), date (2026-11-11), and payable amount (2,200.00) appeared under different invoice numbers: SHS2026000000002, SHS2026000000009.",
        values: "Unique tx check / 2 matching records",
      },
      tr: {
        title: "SHS2026000000009 — Olası Çift Kayıt Şüphesi",
        msg: "Aynı satıcı (10000000146), tarih (2026-11-11) ve ödenecek tutarda (2.200,00) farklı fatura numaraları var: SHS2026000000002, SHS2026000000009.",
        values: "Tekil işlem kontrolü / 2 eşleşen belge",
      },
    },
    ERR2026000000003: {
      code: "VERGI_HESAPLAMA_HATASI",
      source: "toplu_gib_arsiv.zip!/alt_paket.zip!/klasor/ERR2026000000003.xml",
      en: {
        title: "ERR2026000000003 — VAT Calculation Error",
        msg: "20% VAT amount does not match tax base x rate (1,000.00 x 20%).",
        values: "200,00 TRY / 150,00 TRY",
      },
      tr: {
        title: "ERR2026000000003 — KDV Hesaplama Hatası",
        msg: "%20 oranlı KDV vergisi matrah × oran ile uyuşmuyor (1.000,00 × %20).",
        values: "200,00 TRY / 150,00 TRY",
      },
    },
    RVT2026000000001: {
      code: "MUKERRER_ETTN",
      source: "RVT2026000000001.xml",
      en: {
        title: "RVT2026000000001 — Duplicate ETTN",
        msg: "Identical ETTN (UUID) detected across 2 separate files (RVT2026000000001, RVT2026000000004).",
        values: "Unique ETTN / 11111111-1111-4111-8111-111111111111",
      },
      tr: {
        title: "RVT2026000000001 — Mükerrer ETTN",
        msg: "Aynı ETTN (UUID) 2 farklı dosyada tespit edildi (RVT2026000000001, RVT2026000000004).",
        values: "Tekil ETTN / 11111111-1111-4111-8111-111111111111",
      },
    },
    RVT2026000000004: {
      code: "MUKERRER_ETTN",
      source: "toplu_gib_arsiv.zip!/alt_paket.zip!/klasor/RVT2026000000004.xml",
      en: {
        title: "RVT2026000000004 — Duplicate ETTN",
        msg: "Identical ETTN (UUID) detected across 2 separate files (RVT2026000000001, RVT2026000000004).",
        values: "Unique ETTN / 11111111-1111-4111-8111-111111111111",
      },
      tr: {
        title: "RVT2026000000004 — Mükerrer ETTN",
        msg: "Aynı ETTN (UUID) 2 farklı dosyada tespit edildi (RVT2026000000001, RVT2026000000004).",
        values: "Tekil ETTN / 11111111-1111-4111-8111-111111111111",
      },
    },
  };

  let currentLang = "en";
  let currentSelectedInvoice = "RVT2026000000000";
  let currentVisibleCount = 6;
  const totalRows = 6;

  function safeStorageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Storage unavailable; session state still applies cleanly.
    }
  }

  function safeStorageRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Ignore storage restrictions.
    }
  }

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const paramLang = (params.get("lang") || "").toLowerCase();
    if (paramLang === "en" || paramLang === "tr") {
      return paramLang;
    }
    const storedLang = safeStorageGet("rovtal-lang");
    if (storedLang === "en" || storedLang === "tr") {
      return storedLang;
    }
    const navLangs = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    for (const entry of navLangs) {
      if (typeof entry === "string" && /^tr\b/i.test(entry)) {
        return "tr";
      }
    }
    return "en";
  }

  function updateThemeButtonLabel(isDark) {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) {
      return;
    }
    const dict = TEXT[currentLang] || TEXT.en;
    toggleBtn.textContent = isDark ? dict.theme_to_light : dict.theme_to_dark;
  }

  function syncThemeFromPreference() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) {
      return;
    }
    const root = document.documentElement;
    const schemeMeta = document.querySelector('meta[name="color-scheme"]');
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = safeStorageGet("rovtal-theme");

    let isDark = prefersDark.matches;
    if (stored === "dark" || stored === "light") {
      isDark = stored === "dark";
      root.setAttribute("data-theme", stored);
      if (schemeMeta) {
        schemeMeta.setAttribute("content", stored);
      }
    } else {
      root.removeAttribute("data-theme");
      if (schemeMeta) {
        schemeMeta.setAttribute("content", "light dark");
      }
    }
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    updateThemeButtonLabel(isDark);
  }

  function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) {
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    syncThemeFromPreference();

    toggleBtn.addEventListener("click", () => {
      const renderedDark = toggleBtn.getAttribute("aria-pressed") === "true";
      const target = renderedDark ? "light" : "dark";
      const systemScheme = prefersDark.matches ? "dark" : "light";

      if (target === systemScheme) {
        safeStorageRemove("rovtal-theme");
      } else {
        safeStorageSet("rovtal-theme", target);
      }
      syncThemeFromPreference();
    });

    prefersDark.addEventListener("change", () => {
      // Only refresh if following system preference; keep explicit override pinned.
      if (!safeStorageGet("rovtal-theme")) {
        syncThemeFromPreference();
      }
    });
  }

  function renderInvoiceInspector(invoiceId) {
    const item = INVOICE_DETAILS[invoiceId];
    if (!item) {
      return;
    }
    currentSelectedInvoice = invoiceId;
    const loc = item[currentLang] || item.en;

    const insTitle = document.getElementById("ins-title");
    const insCode = document.getElementById("ins-code");
    const insMsg = document.getElementById("ins-msg");
    const insSource = document.getElementById("ins-source");
    const insValues = document.getElementById("ins-values");

    if (insTitle) insTitle.textContent = loc.title;
    if (insCode) insCode.textContent = item.code;
    if (insMsg) insMsg.textContent = loc.msg;
    if (insSource) insSource.textContent = item.source;
    if (insValues) insValues.textContent = loc.values;
  }

  function renderFilterStatus() {
    const statusLine = document.getElementById("filter-status");
    if (!statusLine) {
      return;
    }
    const dict = TEXT[currentLang] || TEXT.en;
    statusLine.textContent = dict.filter_status(currentVisibleCount, totalRows);
  }

  function applyLanguage(lang, persistChoice = false) {
    currentLang = lang === "tr" ? "tr" : "en";
    const dict = TEXT[currentLang];

    document.documentElement.lang = currentLang;
    document.title = dict.meta_title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta_desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict.meta_title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict.og_desc);

    const ariaMappings = [
      ["primary-nav", dict.nav_aria],
      ["lang-switch", dict.lang_aria],
      ["filter-bar", dict.filter_aria],
      ["cli-box-ubl", dict.tool1_cli_aria],
      ["cli-box-merge", dict.tool2_cli_aria],
    ];
    for (const [id, label] of ariaMappings) {
      const el = document.getElementById(id);
      if (el) {
        el.setAttribute("aria-label", label);
      }
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && typeof dict[key] === "string") {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === currentLang;
      btn.setAttribute("aria-pressed", String(active));
    });

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      updateThemeButtonLabel(toggleBtn.getAttribute("aria-pressed") === "true");
    }

    renderFilterStatus();
    renderInvoiceInspector(currentSelectedInvoice);

    ["copy-feedback", "copy-merge-feedback", "email-feedback"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });

    if (persistChoice) {
      safeStorageSet("rovtal-lang", currentLang);
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", currentLang);
        window.history.replaceState(null, "", url.toString());
      } catch {
        // Ignore history restriction on non-HTTP origins.
      }
    }
  }

  function setupLanguageSwitcher() {
    const buttons = Array.from(document.querySelectorAll(".lang-btn"));
    applyLanguage(detectInitialLang(), false);

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextLang = btn.dataset.lang;
        if (nextLang === "tr" || nextLang === "en") {
          applyLanguage(nextLang, true);
        }
      });
    });

    window.addEventListener("storage", (ev) => {
      if (ev.key === "rovtal-lang" && (ev.newValue === "en" || ev.newValue === "tr")) {
        applyLanguage(ev.newValue, false);
      } else if (ev.key === "rovtal-theme") {
        syncThemeFromPreference();
      }
    });
  }

  function setupAuditWorkbench() {
    const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
    const rows = Array.from(document.querySelectorAll(".audit-row"));
    const rowTriggers = Array.from(document.querySelectorAll(".row-trigger"));

    if (!filterButtons.length || !rows.length) {
      return;
    }

    const selectInvoice = (invoiceId) => {
      if (!INVOICE_DETAILS[invoiceId]) {
        return;
      }
      rows.forEach((row) => {
        row.classList.toggle("is-selected", row.dataset.invoice === invoiceId);
      });
      rowTriggers.forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.dataset.invoice === invoiceId));
      });
      renderInvoiceInspector(invoiceId);
    };

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = btn.dataset.filter || "ALL";
        filterButtons.forEach((other) => {
          other.setAttribute("aria-pressed", String(other === btn));
        });

        let visibleCount = 0;
        let firstVisibleId = null;
        let selectedVisible = false;

        rows.forEach((row) => {
          const match = chosen === "ALL" || row.dataset.status === chosen;
          row.hidden = !match;
          if (match) {
            visibleCount += 1;
            if (!firstVisibleId) {
              firstVisibleId = row.dataset.invoice || null;
            }
            if (row.classList.contains("is-selected")) {
              selectedVisible = true;
            }
          }
        });

        currentVisibleCount = visibleCount;
        renderFilterStatus();

        if (!selectedVisible && firstVisibleId) {
          selectInvoice(firstVisibleId);
        }
      });
    });

    rowTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        if (trigger.dataset.invoice) {
          selectInvoice(trigger.dataset.invoice);
        }
      });
    });
  }

  function setupCopyButton(buttonId, textProvider, feedbackId, successKey) {
    const btn = document.getElementById(buttonId);
    const feedback = document.getElementById(feedbackId);
    if (!btn || !feedback) {
      return;
    }

    btn.addEventListener("click", async () => {
      const value = textProvider();
      const dict = TEXT[currentLang] || TEXT.en;
      if (!value) {
        return;
      }
      try {
        await navigator.clipboard.writeText(value);
        feedback.textContent = dict[successKey];
      } catch {
        feedback.textContent = dict.copy_err;
      }
    });
  }

  setupThemeToggle();
  setupAuditWorkbench();
  setupLanguageSwitcher();
  setupCopyButton(
    "copy-cli-btn",
    () => (document.getElementById("cli-command")?.textContent || "").trim(),
    "copy-feedback",
    "copy_cmd_ok"
  );
  setupCopyButton(
    "copy-merge-cli-btn",
    () => (document.getElementById("merge-cli-command")?.textContent || "").trim(),
    "copy-merge-feedback",
    "copy_cmd_ok"
  );
  setupCopyButton(
    "copy-email-btn",
    () => "rovtalai@gmail.com",
    "email-feedback",
    "copy_email_ok"
  );
})();
