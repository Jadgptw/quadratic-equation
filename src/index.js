module.exports = function solveEquation(equation) {
  // your implementation
    let coeff = equation.match(/([^x\^]-?\s?\d+)[\s+\*]?/g);
    let a = coeff[0];
    let b = coeff[1].replace(/(\s+)/g, '');
    let c = coeff[2].replace(/(\s)+/g, '');
    let d = Math.pow(b,2) - 4 * a * c;
    let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    let x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
    return [x1, x2].sort(function (a, b) {
        return a - b;
    });
}
