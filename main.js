function isEven(num) {
    switch (num) {
    case 0:
        return true;

    case 1:
        return false;

    default:
        if (num >= 0) {
            console.log(num);
            return isEven(num - 2);
        }
    }
}

function countBs(word) {
    var count = 0,
        i = 0;
    for (i = 0; i <= word.length; i++) {
        if (word.charAt(i) === "B") {
            count++;
        }
    }
    return count;
}

function countChar(p, w) {
    var count = 0,
        i = 0;
    for (i = 0; i <= p.length; i++) {
        if (p.charAt(i) === w) {
            count++;
        }
    }
    return count;
}
