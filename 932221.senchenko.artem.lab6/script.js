let currentLayout = 'both';

function setLayout(layout) {
  const container = document.querySelector('.image-container');
  const buttons = document.querySelectorAll('.control-btn');
  
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  container.classList.remove('left-dominant', 'right-dominant', 'both-dominant');
  
  if (layout === 'left') {
    container.classList.add('left-dominant');
    currentLayout = 'left';
  } else if (layout === 'right') {
    container.classList.add('right-dominant');
    currentLayout = 'right';
  } else {
    container.classList.add('both-dominant');
    currentLayout = 'both';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const middleButton = document.querySelector('.control-btn:nth-child(2)');
  middleButton.classList.add('active');
  setLayout('both');
});
