// On attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Ajout de l'événement clic sur chaque bouton
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Gérer l'état actif des boutons
            document.querySelector('.filter-btn.active').classList.remove('active');
            button.classList.add('active');

            // 2. Filtrer les images
            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.classList.remove('hide'); // Afficher
                    item.classList.add('show');    // Ajouter l'animation
                } else {
                    item.classList.add('hide');    // Masquer
                    item.classList.remove('show'); // Enlever l'animation
                }
            });
        });
    });
});