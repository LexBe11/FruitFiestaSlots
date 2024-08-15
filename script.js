document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.getElementById('spin-button');
    const shootButton = document.getElementById('shoot-button');
    const playerList = document.getElementById('player-list');
    const playersContainer = document.getElementById('players');
    const scoreDisplay = document.getElementById('score');
    const spinPriceDisplay = document.getElementById('spin-price');
    const inventoryList = document.getElementById('inventory-list');
    const playerSelector = document.getElementById('player-selector');
    const selectBestButton = document.getElementById('select-best-button');
    
    let score = 0;
    let spinPrice = 50;
    
    // Define player types with scores
    const legends = [
        { name: 'Michael Jordan - Prime', score: 100 },
        { name: 'Michael Jordan - In The Zone', score: 120 },
        { name: 'LeBron James - Prime', score: 105 },
        { name: 'LeBron James - In The Zone', score: 125 },
        { name: 'Stephen Curry - Prime', score: 110 },
        { name: 'Stephen Curry - In The Zone', score: 130 },
        { name: 'Kobe Bryant - Prime', score: 115 },
        { name: 'Kobe Bryant - In The Zone', score: 135 }
    ];
    
    const sevenFeetPlayers = [
        { name: 'Giannis Antetokounmpo', score: 95 },
        { name: 'Rudy Gobert', score: 90 },
        { name: 'Kristaps Porzingis', score: 85 }
    ];
    
    const goodPlayers = [
        { name: 'Damian Lillard', score: 95 },
        { name: 'Klay Thompson', score: 90 },
        { name: 'Jimmy Butler', score: 92 }
    ];
    
    const midPlayers = [
        { name: 'D\'Angelo Russell', score: 80 },
        { name: 'Malcolm Brogdon', score: 82 },
        { name: 'Tobias Harris', score: 84 },
        { name: 'Fred VanVleet', score: 83 }
    ];
    
    const badPlayers = [
        { name: 'Tommy Flop', score: 56 },
        { name: 'Jimmy Fumble', score: 58 },
        { name: 'Billy Miss', score: 60 },
        { name: 'Johnny NoHoops', score: 62 },
        { name: 'Danny Benchwarmer', score: 64 }
    ];
    
    // Inventory to store selected players
    let inventory = [
        ...midPlayers.slice(0, 3),
        ...goodPlayers.slice(0, 1),
        ...badPlayers.slice(0, 3)
    ];
    
    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }
    
    function addPlayerToList(playerName, score) {
        const li = document.createElement('li');
        li.textContent = `${playerName} (Score: ${score})`;
        playerList.appendChild(li);
    }
    
    function updateInventoryList() {
        inventoryList.innerHTML = ''; // Clear previous inventory
        playerSelector.innerHTML = ''; // Clear previous selector options
        
        inventory.forEach(player => {
            const li = document.createElement('li');
            li.textContent = `${player.name} (Score: ${player.score})`;
            inventoryList.appendChild(li);
            
            // Add to player selector dropdown
            const option = document.createElement('option');
            option.value = player.name;
            option.textContent = `${player.name} (Score: ${player.score})`;
            playerSelector.appendChild(option);
        });
    }
    
    function getRandomPlayers() {
        const allPlayers = [
            ...legends,
            ...sevenFeetPlayers,
            ...goodPlayers,
            ...midPlayers,
            ...badPlayers
        ];
        const shuffled = allPlayers.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 7);
    }
    
    function calculateShootingProbability(playerType) {
        if (playerType === 'legend') return 0.9;
        if (playerType === 'good') return 0.7;
        if (playerType === 'mid') return 0.5;
        if (playerType === 'bad') return 0.3;
        return 0.5;
    }
    
    function getShootingPoints() {
        const rand = Math.random();
        if (rand < 0.2) return 55; // Dunk
        if (rand < 0.5) return Math.floor(Math.random() * 26) + 20; // 2-pointer (20-45)
        if (rand < 0.8) return Math.floor(Math.random() * 31) + 50; // 3-pointer (50-80)
        return 30; // Layup
    }
    
    function shoot(playerType) {
        const probability = calculateShootingProbability(playerType);
        const rand = Math.random();
        if (rand < probability) {
            const points = getShootingPoints();
            score += points;
            updateScore();
            alert(`You scored ${points} points!`);
        } else {
            alert('Missed the shot!');
        }
    }
    
    function selectBestPlayer() {
        if (inventory.length === 0) {
            alert('No players in inventory!');
            return;
        }
        const bestPlayer = inventory.reduce((best, player) => {
            if (best === null || player.score > best.score) {
                return player;
            }
            return best;
        }, null);
        
        if (bestPlayer) {
            alert(`Best player selected: ${bestPlayer.name} (Score: ${bestPlayer.score})`);
            shoot('legend'); // Example, adjust as needed
        }
    }
    
    spinButton.addEventListener('click', () => {
        const newPlayers = getRandomPlayers();
        playersContainer.innerHTML = ''; // Clear previous players
        playerList.innerHTML = ''; // Clear previous list
        
        newPlayers.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.textContent = `${player.name} (Score: ${player.score})`;
            playersContainer.appendChild(playerDiv);
            
            // Determine player type for shooting probability
            let playerType = 'mid';
            if (legends.includes(player)) playerType = 'legend';
            else if (goodPlayers.includes(player)) playerType = 'good';
            else if (sevenFeetPlayers.includes(player)) playerType = 'sevenFeet';
            else if (badPlayers.includes(player)) playerType = 'bad';
            
            addPlayerToList(player.name, player.score);
            
            // Add to inventory if not already present
            if (!inventory.find(p => p.name === player.name)) {
                inventory.push(player);
                updateInventoryList();
            }
        });
    });
    
    shootButton.addEventListener('click', () => {
        const selectedPlayer = playerSelector.value;
        const player = inventory.find(p => p.name === selectedPlayer);
        
        if (player) {
            shoot(player.score > 80 ? 'legend' : 'mid');
        } else {
            alert('Please select a valid player.');
        }
    });
    
    selectBestButton.addEventListener('click', selectBestPlayer);
    
    updateInventoryList();
    updateScore();
});

