const raptor = document.querySelector('.raptor');
const moves = { arrowup: 'U', arrowdown: 'D', arrowleft: 'L', arrowright: 'R', b: 'B', a: 'A' };
const konami = 'UUDDLRLRBA';
let sequence = '';

document.addEventListener('keydown', event => {
  if (event.repeat) return;
  const move = moves[event.key.toLowerCase()];
  sequence = move ? (sequence + move).slice(-konami.length) : '';
  if (sequence === konami) raptor.hidden = false;
  if (event.key === 'Escape') raptor.hidden = true;
});
raptor.onclick = () => { raptor.hidden = true; };
