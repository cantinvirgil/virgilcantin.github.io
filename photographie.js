 const buttons = document.querySelectorAll('#filters button');
  const items = document.querySelectorAll('#grid figure');
 
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(item => {
        if(f === 'tout' || item.dataset.cat === f){
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
 
  // Visionneuse plein écran
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  let currentIndex = 0;
 
  function visibleItems(){
    return Array.from(items).filter(item => !item.classList.contains('hide'));
  }
 
  function openLightbox(index){
    const visible = visibleItems();
    if(!visible.length) return;
    currentIndex = (index + visible.length) % visible.length;
    const item = visible[currentIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('open');
  }
 
  function closeLightbox(){
    lightbox.classList.remove('open');
  }
 
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const visible = visibleItems();
      const index = visible.indexOf(item);
      openLightbox(index);
    });
  });
 
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(currentIndex - 1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(currentIndex + 1); });
 
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
  });
 
  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') openLightbox(currentIndex + 1);
    if(e.key === 'ArrowLeft') openLightbox(currentIndex - 1);
  });