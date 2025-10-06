let currentPopupHandler = null;

function showDetail(newsId) {

  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none';
  });

 
  const modal = document.getElementById('modal' + newsId);
  if (modal) {
    modal.style.display = 'block';
  }


  document.querySelectorAll('.article').forEach(article => {
    article.style.opacity = '0.3';
  });

  
  if (currentPopupHandler) {
    document.removeEventListener('click', currentPopupHandler);
  }
  currentPopupHandler = (event) => {
    const modals = document.querySelectorAll('.modal');
    let shouldClose = true;
    modals.forEach(m => {
      if (m.style.display === 'block' && (m.contains(event.target) || event.target.closest('button'))) {
        shouldClose = false;
      }
    });
    if (shouldClose) {
      hideDetail();
    }
  };
  document.addEventListener('click', currentPopupHandler);
}

function hideDetail() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none';
  });

  document.querySelectorAll('.article').forEach(article => {
    article.style.opacity = '1';
  });

  if (currentPopupHandler) {
    document.removeEventListener('click', currentPopupHandler);
    currentPopupHandler = null;
  }
}