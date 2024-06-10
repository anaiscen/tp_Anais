
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 *
 * contrainte:
 *   - le mot clée "function" est interdis
 */
let a = 5;
let arrow1 = (a) => {
    return a + 1;
}
console.log(arrow1(a));

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */
let b = 10;
let arrow2 = (b) => b + 1;
console.log(arrow2(b));

module.exports = {arrow1, arrow2};