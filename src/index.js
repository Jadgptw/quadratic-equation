module.exports = function solveEquation(equation) {
  // your implementation
    let coeffients = equation.match(/[^x\^]-?\s?\d+/g);
    let a = coeffients[0];
    let b = coeffients[1].replace(/\s+/g, '');
    let c = coeffients[2].replace(/\s+/g, '');
    let d = Math.pow(b,2) - 4 * a * c;
    let x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
    let x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
    return [x1, x2].sort((a, b) => {
        return a - b;
    });
}
