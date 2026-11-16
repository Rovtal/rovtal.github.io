(() => {
  "use strict";

  const INVOICE_DETAILS = {
    RVT2026000000000: {
      title: "RVT2026000000000 — Mutabakat Tamam",
      code: "KURAL_TAMAM",
      msg: "Satır matrahı (1.500,00), %20 KDV (300,00) ve ödenecek toplam (1.800,00) 0,05 TRY toleransı içinde birebir doğrulandı.",
      source: "RVT2026000000000.xml",
      values: "1.800,00 TRY / 1.800,00 TRY",
    },
    SHS2026000000002: {
      title: "SHS2026000000002 — Olası Çift Kayıt Şüphesi",
      code: "OLASI_CIFT_KAYIT",
      msg: "Aynı satıcı (10000000146), tarih (2026-11-11) ve ödenecek tutarda (2.200,00) farklı fatura numaraları var: SHS2026000000002, SHS2026000000009.",
      source: "SHS2026000000002.xml",
      values: "Tekil işlem kontrolü / 2 eşleşen belge",
    },
    SHS2026000000009: {
      title: "SHS2026000000009 — Olası Çift Kayıt Şüphesi",
      code: "OLASI_CIFT_KAYIT",
      msg: "Aynı satıcı (10000000146), tarih (2026-11-11) ve ödenecek tutarda (2.200,00) farklı fatura numaraları var: SHS2026000000002, SHS2026000000009.",
      source: "toplu_gib_arsiv.zip!/SHS2026000000009.xml",
      values: "Tekil işlem kontrolü / 2 eşleşen belge",
    },
    ERR2026000000003: {
      title: "ERR2026000000003 — KDV Hesaplama Hatası",
      code: "VERGI_HESAPLAMA_HATASI",
      msg: "%20 oranlı KDV vergisi matrah × oran ile uyuşmuyor (1.000,00 × %20).",
      source: "toplu_gib_arsiv.zip!/alt_paket.zip!/klasor/ERR2026000000003.xml",
      values: "200,00 TRY / 150,00 TRY",
    },
    RVT2026000000001: {
      title: "RVT2026000000001 — Mükerrer ETTN",
      code: "MUKERRER_ETTN",
      msg: "Aynı ETTN (UUID) 2 farklı dosyada tespit edildi (RVT2026000000001, RVT2026000000004).",
      source: "RVT2026000000001.xml",
      values: "Tekil ETTN / 11111111-1111-4111-8111-111111111111",
    },
    RVT2026000000004: {
      title: "RVT2026000000004 — Mükerrer ETTN",
      code: "MUKERRER_ETTN",
      msg: "Aynı ETTN (UUID) 2 farklı dosyada tespit edildi (RVT2026000000001, RVT2026000000004).",
      source: "toplu_gib_arsiv.zip!/alt_paket.zip!/klasor/RVT2026000000004.xml",
      values: "Tekil ETTN / 11111111-1111-4111-8111-111111111111",
    },
  };

  function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) {
      return;
    }
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const applyState = (isDark) => {
      root.setAttribute("data-theme", isDark ? "dark" : "light");
      toggleBtn.setAttribute("aria-pressed", String(isDark));
      toggleBtn.textContent = isDark ? "Açık görünüm" : "Koyu görünüm";
    };

    let storedTheme = null;
    try {
      storedTheme = window.localStorage.getItem("rovtal-theme");
    } catch {
      storedTheme = null;
    }

    if (storedTheme === "dark" || storedTheme === "light") {
      applyState(storedTheme === "dark");
    } else {
      const initialDark = prefersDark.matches;
      toggleBtn.setAttribute("aria-pressed", String(initialDark));
      toggleBtn.textContent = initialDark ? "Açık görünüm" : "Koyu görünüm";
    }

    toggleBtn.addEventListener("click", () => {
      const nextDark = toggleBtn.getAttribute("aria-pressed") !== "true";
      applyState(nextDark);
      try {
        window.localStorage.setItem("rovtal-theme", nextDark ? "dark" : "light");
      } catch {
        // Storage unavailable; session state still applies cleanly.
      }
    });
  }

  function setupAuditWorkbench() {
    const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
    const rows = Array.from(document.querySelectorAll(".audit-row"));
    const rowTriggers = Array.from(document.querySelectorAll(".row-trigger"));
    const statusLine = document.getElementById("filter-status");
    const insTitle = document.getElementById("ins-title");
    const insCode = document.getElementById("ins-code");
    const insMsg = document.getElementById("ins-msg");
    const insSource = document.getElementById("ins-source");
    const insValues = document.getElementById("ins-values");

    if (!filterButtons.length || !rows.length || !statusLine) {
      return;
    }

    const selectInvoice = (invoiceId) => {
      const data = INVOICE_DETAILS[invoiceId];
      if (!data) {
        return;
      }
      rows.forEach((row) => {
        const active = row.dataset.invoice === invoiceId;
        row.classList.toggle("is-selected", active);
      });
      rowTriggers.forEach((btn) => {
        const active = btn.dataset.invoice === invoiceId;
        btn.setAttribute("aria-pressed", String(active));
      });

      insTitle.textContent = data.title;
      insCode.textContent = data.code;
      insMsg.textContent = data.msg;
      insSource.textContent = data.source;
      insValues.textContent = data.values;
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

        statusLine.textContent = `Gösterilen kayıt: ${visibleCount} / ${rows.length} (iyiden kötüye sıralı). İncelemek için bir satıra tıklayın.`;

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

  function setupCopyButton(buttonId, textProvider, feedbackId, successText) {
    const btn = document.getElementById(buttonId);
    const feedback = document.getElementById(feedbackId);
    if (!btn || !feedback) {
      return;
    }

    btn.addEventListener("click", async () => {
      const value = textProvider();
      if (!value) {
        return;
      }
      try {
        await navigator.clipboard.writeText(value);
        feedback.textContent = successText;
      } catch {
        feedback.textContent = "Pano erişimi engellendi; metni seçip elle kopyalayabilirsiniz.";
      }
    });
  }

  setupThemeToggle();
  setupAuditWorkbench();
  setupCopyButton(
    "copy-cli-btn",
    () => (document.getElementById("cli-command")?.textContent || "").trim(),
    "copy-feedback",
    "Komut panoya kopyalandı."
  );
  setupCopyButton(
    "copy-merge-cli-btn",
    () => (document.getElementById("merge-cli-command")?.textContent || "").trim(),
    "copy-merge-feedback",
    "Komut panoya kopyalandı."
  );
  setupCopyButton(
    "copy-email-btn",
    () => "rovtalai@gmail.com",
    "email-feedback",
    "E-posta adresi panoya kopyalandı: rovtalai@gmail.com"
  );
})();
