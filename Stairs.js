function climbingStairs(stepcost){
                 
    var step = [];                           
    step[1] = stepcost[1];
    step[2] = stepcost[2];
 
    for (i = 3; i<stepcost.length; i++){
        step[i] = stepcost[i] + (step[i-2]);  
    }

    let mincosts = Math.min((step[stepcost.length-2])); 
    console.log(mincosts);               
}

climbingStairs([0, 2, 2, 1]) 
climbingStairs([0, 2, 3, 2]) 
climbingStairs([10, 15, 20]) 
climbingStairs([0, 0, 0, 0, 0, 0])