function isDigisible(n) {
    const digits = String(n).split('');
    const uniqueDi = new Set(digits);

    if (uniqueDi.size !== digits.length) {
        return false;
    }

    if (digits.includes('0')) {
        return false;
    }

    for (const digit of digits) {
        if (n % digit !== 0) {
        return false;
        }
    }

    return true;
}

console.log(isDigisible(12));