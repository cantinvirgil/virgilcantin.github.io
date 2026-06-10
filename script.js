const themeCheckbox = document.getElementById('checkbox-theme');

const themeSauvegarde = localStorage.getItem('theme-portfolio');

if (themeSauvegarde) {
    document.body.classList.remove('clair', 'sombre');
    document.body.classList.add(themeSauvegarde);

    if (themeSauvegarde === 'sombre') {
        themeCheckbox.checked = true;
    }
}

themeCheckbox.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.remove('clair');
        document.body.classList.add('sombre');
        localStorage.setItem('theme-portfolio', 'sombre');
    } else {
        document.body.classList.remove('sombre');
        document.body.classList.add('clair');
        localStorage.setItem('theme-portfolio', 'clair');
    }
});


// Notre dictionnaire de traductions
const traductions = {
    fr: {
    "titre": "Portfolio de Virgil Cantin",
    "profil": "Mon profil",
    "Photo": "Photographie",
    "Projet": "Mes projets",
    "Contact": "Me contacter"
    },
    en: {
    "titre": "Virgil Cantin's Portfolio",
    "profil": "My Profile",
    "Photo": "Photography",
    "Projet": "My Projects",
    "Contact": "Contact Me"
    }
};

let langueActuelle = 'fr'; // La langue par défaut

const btnLangue = document.getElementById('btn-langue');
const titreElement = document.getElementById('titre');
const profilElement = document.getElementById('profil');
const photoElement = document.getElementById('Photo');
const projetsElement = document.getElementById('projets');
const contactElement = document.getElementById('contact');

// Quand on clique sur le bouton
btnLangue.addEventListener('click', function() {
    // On bascule la langue
    if (langueActuelle === 'fr') {
        langueActuelle = 'en';
    } else {
        langueActuelle = 'fr';
    }

    // On remplace le texte dans le HTML selon la langue choisie
    titreElement.textContent = traductions[langueActuelle].titre;
    profilElement.textContent = traductions[langueActuelle].profil;
    photoElement.textContent= traductions [languesActuelle].photo;
    projetsElement.textContent= traductions[langueActuelle].projets;
    contactElement.textContent= traductions[langueActuelle].contact;
    btnLangue.textContent = traductions[langueActuelle].bouton;
});

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
        'hero-sub': 'Master s student in Web Culture & Professions',
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