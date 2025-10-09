let curtainLifted = false;
let lightOn = false;
let isRabbitVisible = true;

function liftCurtain() {
  if (!curtainLifted) {
    const curtain = document.querySelector('.curtain');
    curtain.classList.add('lifted');
    curtainLifted = true;
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

function toggleLight() {
  const light = document.querySelector('.light');
  lightOn = !lightOn;
  light.classList.toggle('on');
}

function switchCharacters() {
  const rabbit = document.querySelector('.rabbit');
  const dove = document.querySelector('.dove');

  if (isRabbitVisible) {
    rabbit.classList.add('hidden');
    setTimeout(() => {
      dove.classList.add('visible');
    }, 500); 
  } else {
    dove.classList.remove('visible');
    setTimeout(() => {
      rabbit.classList.remove('hidden');
    }, 500); 
  }
  isRabbitVisible = !isRabbitVisible;
}