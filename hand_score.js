function getHandScore(input) {
    const cards = input.split(' ');
    const scores = {
        S: 0,
        C: 0,
        H: 0,
        D: 0
    };

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const suit = card.charAt(0);
        const rank = card.slice(1);
        let score;

        if (rank === 'A') {
            score = 11;
        } else if (['K', 'Q', 'J'].includes(rank)) {
            score = 10;
        } else {
            score = parseInt(rank);
        }

        scores[suit] += score;
    }

    const resultScore = Math.max(...Object.values(scores));

    if (cards.every(card => card.slice(1) === 'A')) {
    return 35;
    }

    return resultScore;
}
console.log(getHandScore("S8 S10 CA"));