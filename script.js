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