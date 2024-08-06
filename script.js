function spin() {
    const symbols = ['🍒', '🍊', '🍏', '🍌', '7🔴', '7🟢', '7🔵', '7🟡', '7🟣', '⭐', '💎', '🔔', 'BAR'];
    const results = [];

    // Random number to determine which pattern to use
    const randomNumber = Math.random() * 100;

    // Define patterns with different probabilities
    if (randomNumber < 2) {
        results.push('7🔴', '7🔴', '7🔴'); // 2% chance for 3x 7🔴
    } else if (randomNumber < 4) {
        results.push('7🟢', '7🟢', '7🟢'); // 2% chance for 3x 7🟢
    } else if (randomNumber < 6) {
        results.push('7🔵', '7🔵', '7🔵'); // 2% chance for 3x 7🔵
    } else if (randomNumber < 8) {
        results.push('7🟡', '7🟡', '7🟡'); // 2% chance for 3x 7🟡
    } else if (randomNumber < 10) {
        results.push('7🟣', '7🟣', '7🟣'); // 2% chance for 3x 7🟣
    } else if (randomNumber < 20) {
        results.push('🍒', '7🔴', '7🔴'); // 10% chance for Cherry, 2x 7🔴
    } else if (randomNumber < 30) {
        results.push('🍊', '7🟢', '7🟢'); // 10% chance for Orange, 2x 7🟢
    } else if (randomNumber < 40) {
        results.push('🍏', '7🔵', '7🔵'); // 10% chance for Apple, 2x 7🔵
    } else if (randomNumber < 50) {
        results.push('🍌', '7🟡', '7🟡'); // 10% chance for Banana, 2x 7🟡
    } else if (randomNumber < 60) {
        results.push('⭐', '7🟣', '7🟣'); // 10% chance for Star, 2x 7🟣
    } else if (randomNumber < 70) {
        results.push('💎', '🍒', '🍊'); // 10% chance for Diamond, Cherry, Orange
    } else if (randomNumber < 80) {
        results.push('🔔', '🍏', '🍌'); // 10% chance for Bell, Apple, Banana
    } else if (randomNumber < 90) {
        results.push('BAR', '⭐', '💎'); // 10% chance for BAR, Star, Diamond
    } else if (randomNumber < 95) {
        results.push('🍒', '🍊', '🍏'); // 5% chance for Cherry, Orange, Apple
    } else if (randomNumber < 100) {
        results.push('🍌', '⭐', '🔔'); // 5% chance for Banana, Star, Bell
    } else {
        results.push('BAR', 'BAR', 'BAR'); // Default: 1% chance for 3x BAR
    }

    updateSlots(results);
    checkWin(results);
}

function updateSlots(results) {
    document.getElementById('slot1').textContent = results[0];
    document.getElementById('slot2').textContent = results[1];
    document.getElementById('slot3').textContent = results[2];
}

function checkWin(results) {
    const resultText = document.getElementById('result');

    if (results[0] === results[1] && results[1] === results[2]) {
        if (results[0].includes('7')) {
            resultText.textContent = 'Jackpot! 🎉 You got 3x ' + results[0] + '!';
        } else if (results[0] === 'BAR') {
            resultText.textContent = 'You got 3x BAR!';
        } else {
            resultText.textContent = 'You got 3x ' + results[0] + '!';
        }
    } else {
        resultText.textContent = 'Try again!';
    }
}

function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        document.getElementById('user-info').textContent = 'Signed in as: ' + user.displayName;
    }).catch((error) => {
        console.error('Error signing in: ', error);
    });
}
