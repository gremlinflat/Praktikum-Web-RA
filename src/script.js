var fact_log = [];
function factorial(num) {
  if (num > 0) {
    fact_log = [1, 1];
    let anchor = 1;
    for (let i = 2; i <= num; i++) {
      anchor = anchor * i;
      fact_log.push(anchor);
    }
    return anchor;
  } else {
      return -1;
  }
}
