function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addShapes(shapeType) {
  const canvas = document.getElementById('canvas');
  const countInput = document.getElementById('count-input');
  const count = parseInt(countInput.value);

  if (count < 1 || count > 50) {
    alert('Количество фигур должно быть от 1 до 50!');
    return;
  }

  for (let i = 0; i < count; i++) {
    const size = getRandomInt(20, 200);
    const shape = document.createElement('div');
    shape.className = `shape ${shapeType}`;
    
    if (shapeType === 'triangle') {
      shape.style.borderBottomWidth = `${size * 0.866}px`;
      shape.style.borderLeftWidth = `${size / 2}px`;
      shape.style.borderRightWidth = `${size / 2}px`;
    } else {
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    }

    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;
    shape.style.left = `${getRandomInt(0, maxX)}px`;
    shape.style.top = `${getRandomInt(0, maxY)}px`;

    shape.addEventListener('click', () => {
      document.querySelectorAll('.shape').forEach(s => s.classList.remove('selected'));
      shape.classList.add('selected');
    });

    shape.addEventListener('dblclick', () => {
      shape.remove();
      checkOverlaps();
    });

    canvas.appendChild(shape);
  }
  checkOverlaps();
}

function checkOverlaps() {
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach(shape => {
    shape.classList.remove('overlap');
    shapes.forEach(otherShape => {
      if (shape !== otherShape) {
        const rect1 = shape.getBoundingClientRect();
        const rect2 = otherShape.getBoundingClientRect();
        if (rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
          shape.classList.add('overlap');
        }
      }
    });
  });
}

window.addEventListener('resize', checkOverlaps);