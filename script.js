const symbols = ['💀', '🌸', 'BAR', '7️⃣'];
const reels = Array.from(document.querySelectorAll('.reel'));
const spinButton = document.getElementById('spinButton');
const result = document.getElementById('result');
const balanceDisplay = document.getElementById('balance');

let balance = 150; // Starting balance
const spinCost = 10; // Cost to spin

// Define prize amounts
const prizeAmounts = {
  '💀': 50,
  '🌸': 100,
  'BAR': 200,
  '7️⃣': 500
};

spinButton.addEventListener('click', () => {
  const betAmount = parseFloat(document.getElementById('bet-amount').value) || spinCost;

  if (balance < betAmount) {
    result.textContent = 'Insufficient balance!';
    return;
  }
  
  balance -= betAmount; // Deduct bet amount
  balanceDisplay.textContent = `Balance: $${balance}`;
  result.textContent = '';
  spinButton.disabled = true;

  // Add spinning animation class
  reels.forEach(reel => reel.classList.add('spin'));

  // Simulate spinning results
  setTimeout(() => {
    let results = [];
    for (let i = 0; i < reels.length; i++) {
      results.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    // Remove spinning animation class
    reels.forEach(reel => reel.classList.remove('spin'));

    // Update reels with results
    updateReels(results);
    checkWin(results);
  }, 1000); // Duration of the spinning animation
});

function updateReels(results) {
  results.forEach((symbol, index) => {
    reels[index].textContent = symbol;
  });
}

function checkWin(results) {
  const symbolCounts = {};
  results.forEach(symbol => {
    symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1;
  });

  let winAmount = 0;
  for (const [symbol, count] of Object.entries(symbolCounts)) {
    if (count === 3) {
      winAmount += prizeAmounts[symbol];
    }
  }

  if (winAmount > 0) {
    result.textContent = `You Win $${winAmount}!`;
    balance += winAmount; // Add win amount to balance
  } else {
    result.textContent = 'Try Again!';
  }

  balanceDisplay.textContent = `Balance: $${balance}`;
  spinButton.disabled = false;
}
