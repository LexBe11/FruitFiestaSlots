document.addEventListener('DOMContentLoaded', () => {
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];
    let playerHand = [];
    let aiHand = [];
    let pile = [];
    let result = document.getElementById('result');

    // Initialize deck
    function createDeck() {
        deck = [];
        for (let suit of suits) {
            for (let value of values) {
                deck.push({ value, suit });
            }
        }
        // Add custom WILD and MINI WILD cards
        deck.push({ value: 'WILD', suit: '' });
        deck.push({ value: 'MINI WILD', suit: '' });
        deck = shuffleDeck(deck);
    }

    // Shuffle deck
    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    // Deal card
    function dealCard() {
        return deck.pop();
    }

    // Display cards
    function displayCards() {
        const playerHandContainer = document.getElementById('player-hand');
        const aiHandContainer = document.getElementById('ai-hand');
        const pileContainer = document.getElementById('pile');

        playerHandContainer.innerHTML = '';
        aiHandContainer.innerHTML = '';
        pileContainer.innerHTML = '';

        playerHand.forEach(card => {
            const cardElement = createCardElement(card);
            cardElement.draggable = true;
            cardElement.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', `${card.value} of ${card.suit}`);
            });
            playerHandContainer.appendChild(cardElement);
        });

        aiHand.forEach(card => {
            const cardElement = createCardElement(card);
            aiHandContainer.appendChild(cardElement);
        });

        pile.forEach(card => {
            const cardElement = createCardElement(card);
            cardElement.addEventListener('dragover', (e) => e.preventDefault());
            cardElement.addEventListener('drop', (e) => {
                e.preventDefault();
                const cardData = e.dataTransfer.getData('text/plain').split(' of ');
                const [value, suit] = cardData;
                const droppedCard = { value, suit };
                if (pile.length < 2) {
                    pile.push(droppedCard);
                    playerHand = playerHand.filter(c => c.value !== value || c.suit !== suit);
                    displayCards();
                    checkWinner();
                }
            });
            pileContainer.appendChild(cardElement);
        });
    }

    // Create card element
    function createCardElement(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        
        if (card.value === 'WILD') {
            cardElement.classList.add('wild');
            cardElement.innerHTML = `
                <div class="number">${card.value}</div>
            `;
        } else if (card.value === 'MINI WILD') {
            cardElement.classList.add('mini-wild');
            cardElement.innerHTML = `
                <div class="number">${card.value}</div>
            `;
        } else {
            cardElement.classList.add(card.suit); // Add class based on suit for styling
            cardElement.innerHTML = `
                <div class="suit">${card.suit}</div>
                <div class="number">${card.value}</div>
                <div class="suit" style="bottom: 10px; right: 10px; position: absolute;">${card.suit}</div>
            `;
        }
        
        return cardElement;
    }

    // Start game
    function startGame() {
        createDeck();
        playerHand = [dealCard(), dealCard()];
        aiHand = [dealCard(), dealCard()];
        pile = [];
        displayCards();
    }

    // Hit button handler
    document.getElementById('hit-btn').addEventListener('click', () => {
        playerHand.push(dealCard());
        displayCards();
        checkWinner();
    });

    // Stand button handler
    document.getElementById('stand-btn').addEventListener('click', () => {
        // Simple AI logic to play against the player
        while (calculateHandValue(aiHand) < 17) {
            aiHand.push(dealCard());
        }
        displayCards();
        checkWinner();
    });

    // Calculate hand value
    function calculateHandValue(hand) {
        let value = 0;
        let numAces = 0;
        
        hand.forEach(card => {
            if (card.value === 'WILD' || card.value === 'MINI WILD') {
                value += card.value === 'WILD' ? 16 : 15;
            } else if (['J', 'Q', 'K'].includes(card.value)) {
                value += 10;
            } else if (card.value === 'A') {
                value += 11;
                numAces += 1;
            } else {
                value += parseInt(card.value);
            }
        });

        while (value > 21 && numAces > 0) {
            value -= 10;
            numAces -= 1;
        }

        return value;
    }

    // Check winner
    function checkWinner() {
        const playerValue = calculateHandValue(playerHand);
        const aiValue = calculateHandValue(aiHand);

        if (playerValue > 21) {
            result.textContent = 'Player busts! AI wins.';
        } else if (aiValue > 21) {
            result.textContent = 'AI busts! Player wins.';
        } else if (playerValue === 21) {
            result.textContent = 'Blackjack! Player wins.';
        } else if (aiValue === 21) {
            result.textContent = 'Blackjack! AI wins.';
        } else if (aiValue >= 17) {
            if (playerValue > aiValue) {
                result.textContent = 'Player wins!';
            } else if (aiValue > playerValue) {
                result.textContent = 'AI wins!';
            } else {
                result.textContent = 'It\'s a tie!';
            }
        }
    }

    startGame();
});
