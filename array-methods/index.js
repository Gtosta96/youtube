let superHeroes = ['Spider Man', 'Wonder Woman', 'Thor', 'Batman'];

/**
 * Array.push
 * Adiciona um elemento no final de uma lista
 * e retorna o tamanho (Array.length)
 */
console.log(superHeroes);
superHeroes.push('Captain Marvel');
console.log(superHeroes);

/**
 * Array.pop
 * Remove o ultimo elemento da lista e o retorna
 */
console.log(superHeroes);
const lastHero = superHeroes.pop();
console.log(lastHero);
console.log(superHeroes);

/**
 * Array.unshift
 * Adiciona um elemento no inicio da nossa lista
 * retorna o tamanho (array.length) da lista
 */
console.log(superHeroes);
superHeroes.unshift('Captain America');
console.log(superHeroes);

/**
 * Array.shift
 * Remove o primeiro elemento da lista e o retorna
 */
console.log(superHeroes);
const firstHero = superHeroes.shift();
console.log(firstHero);
console.log(superHeroes);

/**
 * Array.splice
 * Modifica uma lista adicionando novos elemento
 * enquanto remove elementos antigos e os retornando
 * le-se: a partir do indice X, vou remover Y elementos e adicionar Z
 */
console.log(superHeroes);
superHeroes.splice(2, 0, 'Venom');
console.log(superHeroes);