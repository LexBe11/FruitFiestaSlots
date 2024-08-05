let cashBalance = 150;
let pesosBalance = 150;
let currentGame = 'fiesta';

const symbols = {
    fiesta: ['🍹', '🌮', '🎉', '🎶', '🍉'],
    aztecas: ['🪙', '🏛️', '🎭', '🐍', '📜'],
    tropical: ['🍍', '🥥', '🏄', '🌅', '🦩'],
    space: ['🚀', '🪐', '⭐', '👽', '🌕'],
    wildwest: ['🤠', '🍀', '🔫', '💰', '⭐']
};

document.querySelectorAll('.game-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentGame = button.dataset.game;
        initializeReels();
        document.getElementById('result').textContent = '';
    });
});

document.getElementById('spin').addEventListener('click', () => {
    if (cashBalance < 10) { // Example cost to spin
        document.getElementById('result').textContent = 'Not enough cash to spin!';
        return;
    }

    // Deduct cost for the spin
    cashBalance -= 10;
    document.getElementById('cash-balance').textContent = cashBalance;

    const reels = document.querySelectorAll('.reel');
    reels.forEach(reel => {
        reel.classList.add('spin');
    });

    setTimeout(() => {
        reels.forEach(reel => {
            reel.classList.remove('spin');
            const symbolsArray = symbols[currentGame];
            const symbolElems = reel.querySelectorAll('.symbol');
            const topSymbol = symbolElems[0];
            reel.appendChild(topSymbol);

            // Add symbols to reels
            symbolElems.forEach((symbolElem, index) => {
                symbolElem.textContent = symbolsArray[index % symbolsArray.length];
            });
        });

        // Check result
        const symbolElems1 = document.querySelectorAll('#reel1 .symbol');
        const symbolElems2 = document.querySelectorAll('#reel2 .symbol');
        const symbolElems3 = document.querySelectorAll('#reel3 .symbol');

        const symbol1 = symbolElems1[0].textContent;
        const symbol2 = symbolElems2[0].textContent;
        const symbol3 = symbolElems3[0].textContent;

        if (symbol1 === symbol2 && symbol2 === symbol3) {
            const winAmount = 50; // Example win amount
            pesosBalance += winAmount;
            document.getElementById('pesos-balance').textContent = pesosBalance;
            document.getElementById('result').textContent = `You Win! ${symbol1} Jackpot!`;
        } else {
            document.getElementById('result').textContent = `Try Again! ${symbol1} ${symbol2} ${symbol3}`;
        }
    }, 1000);
});

function initializeReels() {
    document.querySelectorAll('.reel').forEach(reel => {
        reel.innerHTML = '';
        const symbolsArray = symbols[currentGame];
        symbolsArray.forEach(symbol => {
            const symbolElem = document.createElement('div');
            symbolElem.className = 'symbol';
            symbolElem.textContent = symbol;
            reel.appendChild(symbolElem);
        });
    });
}

// Initialize the reels with the default game
initializeReels();
