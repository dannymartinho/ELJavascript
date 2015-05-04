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

//Chapter 4

function range(start, end) {
    var nums = [],
        i = 0;
    for (i = start; i <= end; i++) {
        nums.push(i);
    }
    return nums;
}

function rangeTotal(nums) {

    var numslength = nums.length,
        total = 0,
        i = 0;
    for (i = 0; i < numslength; i++) {
        total += nums[i];
    }
    return total;
}

function rangemod(start, end, step) {
    var nums = [],
        i = 0;
    if (step > 0) {

        for (i = start; i <= end; i = i + step) {

            console.log(nums.push(i));
        }
    } else if (step < 0) {
        for (j = end; j > start; j = j + step) {

            console.log(nums.push(j));
        }
    }

    return nums;

}

function reverseArray() {

}

function reverseArrayInPlace() {

}
