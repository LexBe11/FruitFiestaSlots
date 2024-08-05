// Define symbols for the reels
const symbols = ['7', '⭐', '🟠', '⚫', '💀', '🟥', '🔵', '🟣', '🌟', '🟢', '🔴', '❌'];

// Define payout combinations with updated payouts and rarity
const payouts = {
    '❌': { amount: 0, rarity: '1 in 2' },                  // No Win
    '🚫': { amount: 0, rarity: '1 in 2' },                  // Nothing
    '7': { amount: 1000, rarity: '1 in 10' },               // Single Seven
    '⭐': { amount: 500, rarity: '1 in 15' },                // Single Star
    '🟠': { amount: 400, rarity: '1 in 15' },                // Single Orange Circle
    '⚫': { amount: 400, rarity: '1 in 15' },                // Single Black Circle
    '💀': { amount: 400, rarity: '1 in 15' },                // Single Skull
    '🟥': { amount: 400, rarity: '1 in 15' },                // Single Red Square
    '🔵': { amount: 400, rarity: '1 in 15' },                // Single Blue Circle
    '🟣': { amount: 300, rarity: '1 in 20' },                // Single Purple Circle
    '🌟': { amount: 300, rarity: '1 in 20' },                // Single Star
    '🟢': { amount: 300, rarity: '1 in 20' },                // Single Green Circle
    '🔴': { amount: 300, rarity: '1 in 20' },                // Single Red Circle
    '7 7': { amount: 2000, rarity: '1 in 100' },            // Two Sevens
    '⭐ ⭐': { amount: 1000, rarity: '1 in 75' },             // Two Stars
    '🟠 🟠': { amount: 800, rarity: '1 in 75' },             // Two Orange Circles
    '⚫ ⚫': { amount: 800, rarity: '1 in 75' },             // Two Black Circles
    '💀 💀': { amount: 800, rarity: '1 in 75' },             // Two Skulls
    '🟥 🟥': { amount: 800, rarity: '1 in 75' },             // Two Red Squares
    '🔵 🔵': { amount: 800, rarity: '1 in 75' },             // Two Blue Circles
    '🟣 🟣': { amount: 600, rarity: '1 in 50' },             // Two Purple Circles
    '🌟 🌟': { amount: 600, rarity: '1 in 50' },             // Two Stars
    '🟢 🟢': { amount: 600, rarity: '1 in 50' },             // Two Green Circles
    '🔴 🔴': { amount: 600, rarity: '1 in 50' },             // Two Red Circles
    '7 7 7': { amount: 5000, rarity: '1 in 500' },          // Three Sevens
    '⭐ ⭐ ⭐': { amount: 2500, rarity: '1 in 400' },         // Three Stars
    '🟠 🟠 🟠': { amount: 2000, rarity: '1 in 400' },       // Three Orange Circles
    '⚫ ⚫ ⚫': { amount: 2000, rarity: '1 in 400' },        // Three Black Circles
    '💀 💀 💀': { amount: 2000, rarity: '1 in 400' },        // Three Skulls
    '🟥 🟥 🟥': { amount: 2000, rarity: '1 in 400' },        // Three Red Squares
    '🔵 🔵 🔵': { amount: 2000, rarity: '1 in 400' },        // Three Blue Circles
    '🟣 🟣 🟣': { amount: 1500, rarity: '1 in 300' },        // Three Purple Circles
    '🌟 🌟 🌟': { amount: 1500, rarity: '1 in 300' },        // Three Stars
    '🟢 🟢 🟢': { amount: 1500, rarity: '1 in 300' },        // Three Green Circles
    '🔴 🔴 🔴': { amount: 1500, rarity: '1 in 300' },        // Three Red Circles
    '7 7 7 7': { amount: 10000, rarity: '1 in 5000' },      // Four Sevens
    '⭐ ⭐ ⭐ ⭐': { amount: 5000, rarity: '1 in 4000' },     // Four Stars
    '🟠 🟠 🟠 🟠': { amount: 4000, rarity: '1 in 4000' },    // Four Orange Circles
    '⚫ ⚫ ⚫ ⚫': { amount: 4000, rarity: '1 in 4000' },     // Four Black Circles
    '💀 💀 💀 💀': { amount: 4000, rarity: '1 in 4000' },    // Four Skulls
    '🟥 🟥 🟥 🟥': { amount: 4000, rarity: '1 in 4000' },    // Four Red Squares
    '🔵 🔵 🔵 🔵': { amount: 4000, rarity: '1 in 4000' },    // Four Blue Circles
    '🟣 🟣 🟣 🟣': { amount: 3000, rarity: '1 in 3000' },    // Four Purple Circles
    '🌟 🌟 🌟 🌟': { amount: 3000, rarity: '1 in 3000' },    // Four Stars
    '🟢 🟢 🟢 🟢': { amount: 3000, rarity: '1 in 3000' },    // Four Green Circles
    '🔴 🔴 🔴 🔴': { amount: 3000, rarity: '1 in 3000' },    // Four Red Circles
    '7 7 7 7 7': { amount: 20000, rarity: '1 in 50000' },  // Five Sevens
    '⭐ ⭐ ⭐ ⭐ ⭐': { amount: 10000, rarity: '1 in 40000' }, // Five Stars
    '🟠 🟠 🟠 🟠 🟠': { amount: 8000, rarity: '1 in 40000' },// Five Orange Circles
    '⚫ ⚫ ⚫ ⚫ ⚫': { amount: 8000, rarity: '1 in 40000' }, // Five Black Circles
    '💀 💀 💀 💀 💀': { amount: 8000, rarity: '1 in 40000' },// Five Skulls
    '🟥 🟥 🟥 🟥 🟥': { amount: 8000, rarity: '1 in 40000' },// Five Red Squares
    '🔵 🔵 🔵 🔵 🔵': { amount: 8000, rarity: '1 in 40000' },// Five Blue Circles
    '🟣 🟣 🟣 🟣 🟣': { amount: 6000, rarity: '1 in 30000' },// Five Purple Circles
    '🌟 🌟 🌟 🌟 🌟': { amount: 6000, rarity: '1 in 30000' },// Five Stars
    '🟢 🟢 🟢 🟢 🟢': { amount: 6000, rarity: '1 in 30000' },// Five Green Circles
    '🔴 🔴 🔴 🔴 🔴': { amount: 6000, rarity: '1 in 30000' },// Five Red Circles
    '7 7 7 7 7 7': { amount: 50000, rarity: '1 in 100000' }, // Six Sevens
    '⭐ ⭐ ⭐ ⭐ ⭐ ⭐': { amount: 25000, rarity: '1 in 80000' }, // Six Stars
    '🟠 🟠 🟠 🟠 🟠 🟠': { amount: 20000, rarity: '1 in 80000' },// Six Orange Circles
    '⚫ ⚫ ⚫ ⚫ ⚫ ⚫': { amount: 20000, rarity: '1 in 80000' },// Six Black Circles
    '💀 💀 💀 💀 💀 💀': { amount: 20000, rarity: '1 in 80000' },// Six Skulls
    '🟥 🟥 🟥 🟥 🟥 🟥': { amount: 20000, rarity: '1 in 80000' },// Six Red Squares
    '🔵 🔵 🔵 🔵 🔵 🔵': { amount: 20000, rarity: '1 in 80000' },// Six Blue Circles
    '🟣 🟣 🟣 🟣 🟣 🟣': { amount: 15000, rarity: '1 in 60000' },// Six Purple Circles
    '🌟 🌟 🌟 🌟 🌟 🌟': { amount: 15000, rarity: '1 in 60000' },// Six Stars
    '🟢 🟢 🟢 🟢 🟢 🟢': { amount: 15000, rarity: '1 in 60000' },// Six Green Circles
    '🔴 🔴 🔴 🔴 🔴 🔴': { amount: 15000, rarity: '1 in 60000' },// Six Red Circles
    '7 7 7 7 7 7 7': { amount: 100000, rarity: '1 in 500000' }, // Seven Sevens
    '⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐': { amount: 50000, rarity: '1 in 400000' }, // Seven Stars
    '🟠 🟠 🟠 🟠 🟠 🟠 🟠': { amount: 40000, rarity: '1 in 400000' },// Seven Orange Circles
    '⚫ ⚫ ⚫ ⚫ ⚫ ⚫ 🟠': { amount: 40000, rarity: '1 in 400000' },// Seven Black Circles
    '💀 💀 💀 💀 💀 💀 💀': { amount: 40000, rarity: '1 in 400000' },// Seven Skulls
    '🟥 🟥 🟥 🟥 🟥 🟥 🟥': { amount: 40000, rarity: '1 in 400000' },// Seven Red Squares
    '🔵 🔵 🔵 🔵 🔵 🔵 🔵': { amount: 40000, rarity: '1 in 400000' },// Seven Blue Circles
    '🟣 🟣 🟣 🟣 🟣 🟣 🟣': { amount: 30000, rarity: '1 in 300000' },// Seven Purple Circles
    '🌟 🌟 🌟 🌟 🌟 🌟 🌟': { amount: 30000, rarity: '1 in 300000' },// Seven Stars
    '🟢 🟢 🟢 🟢 🟢 🟢 🟢': { amount: 30000, rarity: '1 in 300000' },// Seven Green Circles
    '🔴 🔴 🔴 🔴 🔴 🔴 🔴': { amount: 30000, rarity: '1 in 300000' },// Seven Red Circles
    '7 7 7 7 7 7 7 7': { amount: 200000, rarity: '1 in 1000000' }, // Eight Sevens
    '⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐': { amount: 100000, rarity: '1 in 800000' }, // Eight Stars
    '🟠 🟠 🟠 🟠 🟠 🟠 🟠 🟠': { amount: 80000, rarity: '1 in 800000' },// Eight Orange Circles
    '⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ 🟠': { amount: 80000, rarity: '1 in 800000' },// Eight Black Circles
    '💀 💀 💀 💀 💀 💀 💀 💀': { amount: 80000, rarity: '1 in 800000' },// Eight Skulls
    '🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥': { amount: 80000, rarity: '1 in 800000' },// Eight Red Squares
    '🔵 🔵 🔵 🔵 🔵 🔵 🔵 🔵': { amount: 80000, rarity: '1 in 800000' },// Eight Blue Circles
    '🟣 🟣 🟣 🟣 🟣 🟣 🟣 🟣': { amount: 60000, rarity: '1 in 600000' },// Eight Purple Circles
    '🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟': { amount: 60000, rarity: '1 in 600000' },// Eight Stars
    '🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢': { amount: 60000, rarity: '1 in 600000' },// Eight Green Circles
    '🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴': { amount: 60000, rarity: '1 in 600000' },// Eight Red Circles
    '7 7 7 7 7 7 7 7 7': { amount: 500000, rarity: '1 in 5000000' }, // Nine Sevens
    '⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐': { amount: 250000, rarity: '1 in 4000000' }, // Nine Stars
    '🟠 🟠 🟠 🟠 🟠 🟠 🟠 🟠 🟠': { amount: 200000, rarity: '1 in 4000000' },// Nine Orange Circles
    '⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ 🟠': { amount: 200000, rarity: '1 in 4000000' },// Nine Black Circles
    '💀 💀 💀 💀 💀 💀 💀 💀 💀': { amount: 200000, rarity: '1 in 4000000' },// Nine Skulls
    '🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥': { amount: 200000, rarity: '1 in 4000000' },// Nine Red Squares
    '🔵 🔵 🔵 🔵 🔵 🔵 🔵 🔵 🔵': { amount: 200000, rarity: '1 in 4000000' },// Nine Blue Circles
    '🟣 🟣 🟣 🟣 🟣 🟣 🟣 🟣 🟣': { amount: 150000, rarity: '1 in 3000000' },// Nine Purple Circles
    '🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟': { amount: 150000, rarity: '1 in 3000000' },// Nine Stars
    '🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢': { amount: 150000, rarity: '1 in 3000000' },// Nine Green Circles
    '🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴': { amount: 150000, rarity: '1 in 3000000' },// Nine Red Circles
    '7 7 7 7 7 7 7 7 7 7': { amount: 1000000, rarity: '1 in 10000000' }, // Ten Sevens
    '⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐': { amount: 500000, rarity: '1 in 8000000' }, // Ten Stars
    '🟠 🟠 🟠 🟠 🟠 🟠 🟠 🟠 🟠 🟠': { amount: 400000, rarity: '1 in 8000000' },// Ten Orange Circles
    '⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ ⚫ 🟠': { amount: 400000, rarity: '1 in 8000000' },// Ten Black Circles
    '💀 💀 💀 💀 💀 💀 💀 💀 💀 💀': { amount: 400000, rarity: '1 in 8000000' },// Ten Skulls
    '🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥': { amount: 400000, rarity: '1 in 8000000' },// Ten Red Squares
    '🔵 🔵 🔵 🔵 🔵 🔵 🔵 🔵 🔵 🔵': { amount: 400000, rarity: '1 in 8000000' },// Ten Blue Circles
    '🟣 🟣 🟣 🟣 🟣 🟣 🟣 🟣 🟣 🟣': { amount: 300000, rarity: '1 in 6000000' },// Ten Purple Circles
    '🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟': { amount: 300000, rarity: '1 in 6000000' },// Ten Stars
    '🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢': { amount: 300000, rarity: '1 in 6000000' },// Ten Green Circles
    '🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴': { amount: 300000, rarity: '1 in 6000000' },// Ten Red Circles
};

I’ve added some rare combinations with high numbers of items and very low rarity, as well as rare symbols with the highest rarities. This should create a more balanced and exciting system.
