function climbstairs(stepcost,minstepcost){  
    let steps = [];

    for (i = 2; i < stepcost.length; i++){
        steps[0] = stepcost[0];
    steps[1] = stepcost[1];
        steps[i] = stepcost[i] + Math.min(steps[i-2], steps[i-1]);
    }
    
    minstepcost = Math.min((steps[stepcost.length-2]),(steps[stepcost.length-1]));                                                                                      
    console.log(minstepcost);
}

(climbstairs([0, 2, 2, 1]));
(climbstairs([0, 2, 3, 2])); 
(climbstairs([10, 15, 20]));
(climbstairs([0, 0, 0, 0, 0, 0]));
