const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];
const reels = Array.from(document.querySelectorAll('.reel'));
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');
const balanceDisplay = document.getElementById('balance');
const winningLine = document.createElement('div');
winningLine.className = 'winning-line';
document.querySelector('.slot-machine').appendChild(winningLine);

let balance = 150; // Starting balance

// Define prize amounts
const prizeAmounts = {
  '🍒': 10,
  '🍋': 20,
  '🍊': 30,
  '🍉': 40,
  '🍇': 50,
  '🍓': 60
};

spinButton.addEventListener('click', () => {
  if (balance < 10) {
    result.textContent = 'Insufficient balance!';
    return;
  }
  
  balance -= 10; // Cost to spin
  balanceDisplay.textContent = `Balance: $${balance}`;
  result.textContent = '';
  winningLine.style.display = 'none';
  spinButton.disabled = true;

  const win = Math.random() < 1 / 36; // 1 in 36 chance of winning

  reels.forEach((reel, index) => {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    setTimeout(() => {
      reel.style.transform = 'rotateX(360deg)';
      setTimeout(() => {
        reel.textContent = randomSymbol;
        reel.style.transform = 'rotateX(0deg)';
        if (index === reels.length - 1) {
          checkWin(win);
        }
      }, 500);
    }, index * 100);
  });
});

function checkWin(win) {
  if (win) {
    const symbolCounts = {};
    reels.forEach(reel => {
      const symbol = reel.textContent;
      symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1;
    });

    let winAmount = 0;
    for (const [symbol, count] of Object.entries(symbolCounts)) {
      if (count === 3) {
        winAmount = prizeAmounts[symbol];
      } else if (count === 6) {
        winAmount = prizeAmounts[symbol] * 2;
      } else if (count === 9) {
        winAmount = prizeAmounts[symbol] * 3;
      }
    }

    if (winAmount > 0) {
      balance += winAmount; // Add win amount to balance
      result.textContent = `You Win $${winAmount}!`;
      winningLine.style.display = 'block';
    } else {
      result.textContent = 'Try Again!';
    }
  } else {
    result.textContent = 'Try Again!';
  }

  spinButton.disabled = false;
}
