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
    for (i = start; i <= end && i >= 0; i = i + step) {

        console.log(nums.push(i));
    }
    return nums;
}
