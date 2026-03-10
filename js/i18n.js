async function loadLanguage(lang) {

  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (translations[key]) {
      element.textContent = translations[key];
    }

  });

  localStorage.setItem("lang", lang);
}

const userLang = localStorage.getItem("lang") || "fr";

loadLanguage(userLang);
