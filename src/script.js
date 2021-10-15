var fact_log = [1, 1];
function factorial(num){
    let anchor=1;
    for(let i = 2; i <= num; i++){
        anchor = anchor * i;
        fact_log.push(anchor);
    }
    return anchor;
}

