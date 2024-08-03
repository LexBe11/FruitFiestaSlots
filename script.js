const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];
const reels = Array.from(document.querySelectorAll('.reel'));
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');
const winningLine = document.createElement('div');
winningLine.className = 'winning-line';
document.querySelector('.slot-machine').appendChild(winningLine);

spinButton.addEventListener('click', () => {
  result.textContent = '';
  winningLine.style.display = 'none';
  spinButton.disabled = true;

  reels.forEach((reel, index) => {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    setTimeout(() => {
      reel.style.transform = 'rotateX(360deg)';
      setTimeout(() => {
        reel.textContent = randomSymbol;
        reel.style.transform = 'rotateX(0deg)';
        if (index === reels.length - 1) checkWin();
      }, 500);
    }, index * 100);
  });
});

function checkWin() {
  const firstSymbol = reels[0].textContent;
  const isWin = reels.every(reel => reel.textContent === firstSymbol);

  if (isWin) {
    result.textContent = 'You Win!';
    winningLine.style.display = 'block';
  } else {
    result.textContent = 'Try Again!';
  }

  spinButton.disabled = false;
}
