document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("langToggle");
  if (!langToggle) return;

  let currentLang = localStorage.getItem("lang") || "fr";
  let translations = {};

  async function loadLang(lang) {
    try {
      const res = await fetch(`js/lang/${lang}.json`);
      translations = await res.json();
      applyTranslations();
      localStorage.setItem("lang", lang);
      currentLang = lang;

      langToggle.textContent = lang === "fr" ? "EN" : "FR";

    } catch (err) {
      console.error("Erreur chargement langue:", err);
    }
  }

  function applyTranslations() {
    
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) el.textContent = translations[key];
    });

    
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[key]) el.placeholder = translations[key];
    });
  }

  
  langToggle.addEventListener("click", function () {
    const newLang = currentLang === "fr" ? "en" : "fr";
    loadLang(newLang);
  });

 
  loadLang(currentLang);
});