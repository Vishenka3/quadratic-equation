module.exports = function solveEquation(equation) {
  // your implementation
    let arr = equation.split(' ');
    let D = Math.pow(arr[4],2) - 4* arr[0] * (arr[7]+arr[8]);
    let answ = [,];
    answ[0] = Math.round(-1 * (arr[3]+arr[4]) + Math.sqrt(D))/(2*arr[0]);
    answ[1] = Math.round(-1 * (arr[3]+arr[4]) - Math.sqrt(D))/(2*arr[0]);
    return answ.sort((a,b) => a-b);
};
