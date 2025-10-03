function showBanner(newsId) {
  const popup = document.getElementById('popup');
  popup.innerHTML = `<h2>Новость ${newsId}</h2><p>Новость ${newsId}<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.</p>`;
  popup.style.display = 'block';
  document.body.classList.add('dimmed');

  document.addEventListener('click', function closePopup(e) {
    if (!popup.contains(e.target) && e.target.tagName !== 'BUTTON') {
      popup.style.display = 'none';
      document.body.classList.remove('dimmed');
      document.removeEventListener('click', closePopup);
    }
  });
}