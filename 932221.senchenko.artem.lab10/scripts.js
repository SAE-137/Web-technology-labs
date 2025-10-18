let curtainLifted = false;
let lightOn = false;
let isRabbitVisible = true;

function liftCurtain() {
  if (!curtainLifted) {
    const curtain = document.querySelector('.curtain');
    const lamp = document.querySelector('.lamp');
    const light = document.querySelector('.light');
    const hat = document.querySelector('.hat');
    const rabbit = document.querySelector('.rabbit');
    const dove = document.querySelector('.dove');
    const magician = document.querySelector('.magician');
    curtain.classList.add('lifted');
    curtainLifted = true;
    // Показываем объекты после поднятия кулис
    lamp.style.opacity = '1';
    light.style.opacity = '0'; // Свет выключен по умолчанию
    hat.style.opacity = '0'; // Шляпа видна только при свете
    rabbit.style.opacity = '0';
    dove.style.opacity = '0';
    magician.style.opacity = '1';
  }
}

function toggleSwitch(down) {
  const lamp = document.querySelector('.lamp');
  if (down) {
    lamp.classList.add('switched');
  } else {
    lamp.classList.remove('switched');
  }
}

function toggleLight(event) {
  event.stopPropagation(); // Предотвращаем повторный вызов liftCurtain
  if (curtainLifted) {
    const light = document.querySelector('.light');
    const hat = document.querySelector('.hat');
    const rabbit = document.querySelector('.rabbit');
    const dove = document.querySelector('.dove');
    lightOn = !lightOn;
    light.classList.toggle('on');
    hat.classList.toggle('visible');
    if (lightOn) {
      rabbit.style.opacity = isRabbitVisible ? '1' : '0';
      dove.style.opacity = !isRabbitVisible ? '1' : '0';
    } else {
      rabbit.style.opacity = '0';
      dove.style.opacity = '0';
    }
  }
}

function switchCharacters(event) {
  event.stopPropagation(); // Предотвращаем повторный вызов liftCurtain
  if (lightOn && curtainLifted) {
    const rabbit = document.querySelector('.rabbit');
    const dove = document.querySelector('.dove');

    if (isRabbitVisible) {
      rabbit.classList.add('hidden');
      setTimeout(() => {
        dove.classList.add('visible');
      }, 500);
    } else {
      dove.classList.add('hidden');
      setTimeout(() => {
        rabbit.classList.remove('hidden');
      }, 500);
    }
    isRabbitVisible = !isRabbitVisible;
    toggleLight(event); // Обновляем видимость после переключения
  }
}