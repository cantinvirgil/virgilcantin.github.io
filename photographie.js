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