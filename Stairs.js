function climbingStairs(stepcost) {
    for (i = stepcost.length - 3; ~i; i--)
        stepcost[i] += Math.min(stepcost[i+1], stepcost[i+2])
    return Math.min(stepcost[0], stepcost[1])
};
climbingStairs([0, 2, 2, 1]) 
climbingStairs([0, 2, 3, 2]) 
climbingStairs([10, 15, 20]) 
climbingStairs([0, 0, 0, 0, 0, 0])
