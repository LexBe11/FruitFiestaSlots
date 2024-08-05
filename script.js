// JavaScript for Slot Machine

const symbols = [
    '🔴', '🟢', '🔵', '🟣', '🌟', '💀', '🟥', '🟠', '⚫', '🍉', '🍋', '🍒', '🍎', '🍏', '7', '🚫'
];

// Define symbol weights
const symbolWeights = {
    '🔴': 1,
    '🟢': 1,
    '🔵': 1,
    '🟣': 1,
    '🌟': 1,
    '💀': 1,
    '🟥': 1,
    '🟠': 1,
    '⚫': 1,
    '🍉': 1,
    '🍋': 1,
    '🍒': 1,
    '🍎': 1,
    '🍏': 1,
    '7': 1,
    '🚫': 11 // "No Win" symbol with a 1 in 12 chance
};

// Define jackpot types with rarities
const jackpots = {
    'Mini Jackpot': { amount: 100, rarity: '1 in 200' },
    'Minor Jackpot': { amount: 500, rarity: '1 in 1,000' },
    'Major Jackpot': { amount: 5,000, rarity: '1 in 10,000' },
    'Grand Jackpot': { amount: 50,000, rarity: '1 in 100,000' },
    'Mega Jackpot': { amount: 500,000, rarity: '1 in 500,000' },
    'Ultra Grand Jackpot': { amount: { min: 500_000, max: 1_200_000 }, rarity: '1 in 1,000,000' }
};

// Function to generate a reel with weighted symbols
function generateReel(symbolCount = 3) {
    const reel = [];
    const totalWeight = Object.values(symbolWeights).reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < symbolCount; i++) {
        let randomWeight = Math.random() * totalWeight;
        for (let symbol of Object.keys(symbolWeights)) {
            randomWeight -= symbolWeights[symbol];
            if (randomWeight <= 0) {
                reel.push(symbol);
                break;
            }
        }
    }
    return reel;
}

// Function to check for jackpots
function checkJackpot(reels) {
    const reelString = reels.map(r => r.join(' ')).join(' | ');
    let payout = 0;
    let jackpotType = '';
    
    const allSymbols = reels.flat();
    const symbolCount = {};
    
    for (const symbol of allSymbols) {
        symbolCount[symbol] = (symbolCount[symbol] || 0) + 1;
    }
    
    const maxSymbol = Object.keys(symbolCount).reduce((a, b) => symbolCount[a] > symbolCount[b] ? a : b);
    
    switch (symbolCount[maxSymbol]) {
        case 12:
            payout = jackpots['Ultra Grand Jackpot'].amount.min + Math.random() * (jackpots['Ultra Grand Jackpot'].amount.max - jackpots['Ultra Grand Jackpot'].amount.min);
            jackpotType = 'Ultra Grand Jackpot';
            break;
        case 9:
            payout = jackpots['Mega Jackpot'].amount;
            jackpotType = 'Mega Jackpot';
            break;
        case 7:
            payout = jackpots['Grand Jackpot'].amount;
            jackpotType = 'Grand Jackpot';
            break;
        case 6:
            payout = jackpots['Major Jackpot'].amount;
            jackpotType = 'Major Jackpot';
            break;
        case 5:
            payout = jackpots['Minor Jackpot'].amount;
            jackpotType = 'Minor Jackpot';
            break;
        case 3:
            payout = jackpots['Mini Jackpot'].amount;
            jackpotType = 'Mini Jackpot';
            break;
        case 1:
            payout = symbolCount['🚫'] >= 1 ? 0 : 'Nothing';
            jackpotType = 'Nothing';
            break;
        default:
            payout = 0;
            jackpotType = 'No Win';
            break;
    }

    return { payout, jackpotType, reelString };
}

// Spin the slot machine
function spin() {
    const reels = [generateReel(), generateReel(), generateReel()];
    const { payout, jackpotType, reelString } = checkJackpot(reels);

    // Display results
    document.getElementById('reel1').innerText = reels[0].join(' ');
    document.getElementById('reel2').innerText = reels[1].join(' ');
    document.getElementById('reel3').innerText = reels[2].join(' ');
    document.getElementById('result').innerText = `Result: ${reelString}`;
    document.getElementById('payout').innerText = `Payout: ${payout}`;
    document.getElementById('jackpot').innerText = `Jackpot Type: ${jackpotType}`;
    
    if (payout > 0) {
        // Play animations
        if (jackpotType.includes('Jackpot')) {
            playJackpotAnimation(jackpotType);
        }
    }
}

// Play jackpot animations
function playJackpotAnimation(jackpotType) {
    const animationContainer = document.createElement('div');
    animationContainer.className = 'animation';
    document.body.appendChild(animationContainer);

    const message = document.createElement('div');
    message.className = 'jackpot-message';
    message.innerText = `Congratulations! You've won the ${jackpotType}!`;
    animationContainer.appendChild(message);

    // Add confetti effect
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    animationContainer.appendChild(confetti);
    
    // Add a fade-in effect for the message
    message.style.opacity = 0;
    message.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => message.style.opacity = 1, 100);

    // Remove animation container after animation
    setTimeout(() => document.body.removeChild(animationContainer), 5000);
}

// Add event listener for the spin button
document.getElementById('spinButton').addEventListener('click', spin);

// Play background music
const audio = new Audio('path-to-your-music.mp3'); // Replace with the path to your music file
audio.loop = true; // Set to loop
audio.play();
