// On récupère tous les boutons et toutes les photos de la page
const boutons = document.querySelectorAll('.btn-filtre');
const photos = document.querySelectorAll('.photo');

// On ajoute une action au clic sur chaque bouton
boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    // On récupère le nom de la catégorie liée au bouton cliqué
    const categorieChoisie = bouton.getAttribute('data-filter');

    // On passe en revue chaque photo
    photos.forEach(photo => {
      const categoriePhoto = photo.getAttribute('data-category');

      // Si la photo correspond à la catégorie (ou si on clique sur "Toutes")
      if (categorieChoisie === 'all' || categorieChoisie === categoriePhoto) {
        photo.classList.remove('cache'); // On s'assure qu'elle est visible
      } else {
        photo.classList.add('cache'); // On la cache
      }
    });
  });
});