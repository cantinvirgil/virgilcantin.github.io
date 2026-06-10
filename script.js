let lang = 'fr';

const translations = {
  fr: {
    'hero-sub': 'Etudiant en master Culture et métiers du web',
    'btn-continuer': 'continuer',
    'cat-eyebrow': 'Mes travaux',
    'cat-title': 'Choisissez une catégorie',
    'card1-title': 'Photo&shy;graphie',
    'card1-desc': 'Argentique, numérique & portraits',
    'card2-title': 'Web&shy;design',
    'card2-desc': 'Interfaces, UX & prototypes',
    'card3-title': 'Projet<br>Scolaire',
    'card3-desc': 'Travaux académiques & briefs',
    'lang-btn': '🇬🇧 Passer en Anglais',
  },
  en: {
    'hero-sub': 'Master student in Web Culture & Professions',
    'btn-continuer': 'continue',
    'cat-eyebrow': 'My work',
    'cat-title': 'Choose a category',
    'card1-title': 'Photo&shy;graphy',
    'card1-desc': 'Film, digital & portraits',
    'card2-title': 'Web&shy;design',
    'card2-desc': 'Interfaces, UX & prototypes',
    'card3-title': 'School<br>Project',
    'card3-desc': 'Academic work & briefs',
    'lang-btn': '🇫🇷 Switch to French',
  }
};

function toggleLang() {
  lang = lang === 'fr' ? 'en' : 'fr';
  const t = translations[lang];
  Object.entries(t).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  });
  document.querySelector('.lang-btn').textContent = t['lang-btn'].replace('&shy;','');
  document.querySelector('.lang-btn').innerHTML = t['lang-btn'];
}

function toggleDark() {
  document.body.classList.toggle('dark', document.getElementById('darkToggle').checked);
}

function navigate(page) {
  // Placeholder navigation — replace with real href
  event.preventDefault();
  alert(`Navigation vers : ${page}`);
}