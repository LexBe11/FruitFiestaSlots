// Define symbols for the reels
const symbols = ['7', '⭐', '🟠', '⚫', '💀', '🟥', '🔵', '🟣', '🌟', '🟢', '🔴', '❌'];

// Define payout combinations with updated payouts and rarity
const payouts = {
    '❌': { amount: 0, rarity: '1 in 2' },
    '🚫': { amount: 0, rarity: '1 in 2' },
    '7': { amount: 1000, rarity: '1 in 10' },
    '⭐': { amount: 500, rarity: '1 in 15' },
    '🟠': { amount: 400, rarity: '1 in 15' },
    '⚫': { amount: 400, rarity: '1 in 15' },
    '💀': { amount: 400, rarity: '1 in 15' },
    '🟥': { amount: 400, rarity: '1 in 15' },
    '🔵': { amount: 400, rarity: '1 in 15' },
    '🟣': { amount: 300, rarity: '1 in 20' },
    '🌟': { amount: 300, rarity: '1 in 20' },
    '🟢': { amount: 300, rarity: '1 in 20' },
    '🔴': { amount: 300, rarity: '1 in 20' },
    '7 7': { amount: 2000, rarity: '1 in 100' },
    '⭐ ⭐': { amount: 1000, rarity: '1 in 75' },
    '🟠 🟠': { amount: 800, rarity: '1 in 75' },
    '⚫ ⚫': { amount: 800, rarity: '1 in 75' },
    '💀 💀': { amount: 800, rarity: '1 in 75' },
    '🟥 🟥': { amount: 800, rarity: '1 in 75' },
    '🔵 🔵': { amount: 800, rarity: '1 in 75' },
    '🟣 🟣': { amount: 600, rarity: '1 in 50' },
    '🌟 🌟': { amount: 600, rarity: '1 in 50' },
    '🟢 🟢': { amount: 600, rarity: '1 in 50' },
    '🔴 🔴': { amount: 600, rarity: '1 in 50' },
    '7 7 7': { amount: 5000, rarity: '1 in 500' },
    '⭐ ⭐ ⭐': { amount: 2500, rarity: '1 in 400' },
    '🟠 🟠 🟠': { amount: 2000, rarity: '1 in 400' },
    '⚫ ⚫ ⚫': { amount: 2000, rarity: '1 in 400' },
    '💀 💀 💀': { amount: 2000, rarity: '1 in 400' },
    '🟥 🟥 🟥': { amount: 2000, rarity: '1 in 400' },
    '🔵 🔵 🔵': { amount: 2000, rarity: '1 in 400' },
    '🟣 🟣 🟣': { amount: 1500, rarity: '1 in 300' },
    '🌟 🌟 🌟': { amount: 1500, rarity: '1 in 300' },
    '🟢 🟢 🟢': { amount: 1500, rarity: '1 in 300' },
    '🔴 🔴 🔴': { amount: 1500, rarity: '1 in 300' },
    '7 7 7 7': { amount: 10000, rarity: '1 in 5000' },
    '⭐ ⭐ ⭐ ⭐': { amount: 5000, rarity: '1 in 4000' },
    '🟠 🟠 🟠 🟠': { amount: 4000, rarity: '1 in 4000' },
    '⚫ ⚫ ⚫ ⚫': { amount: 4000, rarity: '1 in 4000' },
    '💀 💀 💀 💀': { amount: 4000, rarity: '1 in 4000' },
    '🟥 🟥 🟥 🟥': { amount: 4000, rarity: '1 in 4000' },
    '🔵 🔵 🔵 🔵': { amount: 4000, rarity: '1 in 4000' },
    '🟣 🟣 🟣 🟣': { amount: 3000, rarity: '1 in 3000' },
    '🌟 🌟 🌟 🌟': { amount: 3000, rarity: '1 in 3000' },
    '🟢 🟢 🟢 🟢': { amount: 3000, rarity: '1 in 3000' },
    '🔴 🔴 🔴 🔴': { amount: 3000, rarity: '1 in 3000' },
    '7 7 7 7 7': { amount: 20000, rarity: '1 in 50000' },
    '⭐ ⭐ ⭐ ⭐ ⭐': { amount: 10000, rarity: '1 in 40000' },
    '🟠 🟠 🟠 🟠 🟠': { amount: 8000, rarity: '1 in 40000' },
    '⚫ ⚫ ⚫ ⚫ ⚫': { amount: 8000, rarity: '1 in 40000' },
    '💀 💀 💀 💀 💀': { amount: 8000, rarity: '1 in 40000' },
    '🟥 🟥 🟥 🟥 🟥': { amount: 8000, rarity: '1 in 40000' },
    '🔵 🔵 🔵 🔵 🔵': { amount: 8000, rarity: '1 in 40000' },
    '🟣 🟣 🟣 🟣 🟣': { amount: 6000, rarity: '1 in 30000' },
    '🌟 🌟 🌟 🌟 🌟': { amount: 6000, rarity: '1 in 30000' },
    '🟢 🟢 🟢 🟢 🟢': { amount: 6000, rarity: '1 in 30000' },
    '🔴 🔴 🔴 🔴 🔴': { amount: 6000, rarity: '1 in 30000' },
    '7 7 7 7 7 7': { amount: 50000, rarity: '1 in 100000' },
    '⭐ ⭐ ⭐ ⭐ ⭐ ⭐': { amount: 25000, rarity: '1 in 80000' },
    '🟠 🟠 🟠 🟠 🟠 🟠': { amount: 20000, rarity: '1 in 80000' },
    '⚫ ⚫ ⚫ ⚫ ⚫ ⚫': { amount: 20000, rarity: '1 in 80000' },
    '💀 💀 💀 💀 💀 💀': { amount: 20000, rarity: '1 in 80000' },
    '🟥 🟥 🟥 🟥 🟥 🟥': { amount: 20000, rarity: '1 in 80000' },
    '🔵 🔵 🔵 🔵 🔵 🔵': { amount: 20000, rarity: '1 in 80000' },
    '🟣 🟣 🟣 🟣 🟣 🟣': { amount: 15000, rarity: '1 in 60000' },
    '🌟 🌟 🌟 🌟 🌟 🌟': { amount: 15000, rarity: '1 in 60000' },
    '🟢 🟢 🟢 🟢 🟢 🟢': { amount: 15000, rarity: '1 in 60000' },
    '🔴 🔴 🔴 🔴 🔴 🔴': { amount: 15000, rarity: '1 in 60000' },
};

// Function to get a random symbol
function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to spin the reels
function spinReels() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

    // Spin the reels
    const result1 = getRandomSymbol();
    const result2 = getRandomSymbol();
    const result3 = getRandomSymbol();

    // Update the reels
    reel1.textContent = result1;
    reel2.textContent = result2;
    reel3.textContent = result3;

    // Determine payout
    const payoutKey = `${result1} ${result2} ${result3}`;
    const payout = payouts[payoutKey] || { amount: 0, rarity: 'N/A' };

    // Display result
    if (payout.amount > 0) {
        result.textContent = `You won ${payout.amount}! Rarity: ${payout.rarity}`;
    } else {
        result.textContent = 'Try again!';
    }
}

// Add event listener to spin button
document.getElementById('spin').addEventListener('click', spinReels);

