const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');
const MOVEMENT_AMOUNT = 50;
const { width, height } = canvas;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.strokeStyle = ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(key) {
  ctx.strokeStyle = ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVEMENT_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVEMENT_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVEMENT_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVEMENT_AMOUNT;
      break;
    default:
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  const { key } = e;

  if (key.includes('Arrow')) {
    draw(key);
  }
}

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', () => {
    canvas.classList.remove('shake');
  });
}

window.addEventListener('keydown', handleKey);
shake.addEventListener('click', clearCanvas);
