let superHeroes = ["Spider Man", "Wonder Woman", "Thor", "Batman"];

/**
 * Array.find
 * Encontra um elemento especifico
 * retorna esse elemento sem modificar a lista original
 */
const foundHero = superHeroes.find((hero) => hero === 'Spider Man' || hero === 'Thor');
console.log(foundHero);
console.log(superHeroes);

/**
 * Array.filter
 * Encontra varios elementos
 * e os retorna em um formato de lista SEM modificar a lista original
 */
const filteredHeroes = superHeroes.filter((hero) => hero === 'Spider Man' || hero === 'Thor');
console.log(filteredHeroes);
console.log(superHeroes);

/**
 * Array.map
 * Cria uma nova lista com o mesmo numero de elementos da lista de entrada
 * e a retorna sem modificar a lista original
 */
const mappedHeroes = superHeroes.map((hero) => {
    let publisher = 'Marvel';
    if (hero === 'Wonder Woman' || hero === 'Batman') {
        publisher = 'DC';
    }

    return {
        hero: hero,
        publisher: publisher
    }
});
console.log(superHeroes);
console.log(mappedHeroes);

/**
 * Array.reduce
 * Cria qualquer coisa a partir de uma lista
 * e a retorna sem modificar a lista original
 */
const initialPublishers = { marvel: [], dc: [] };
const reducedHeroes = superHeroes.reduce((publishers, hero) => {
    if (hero === 'Wonder Woman' || hero === 'Batman') {
        publishers.dc.push(hero);
    } else {
        publishers.marvel.push(hero);
    }

    return publishers;
}, initialPublishers);
console.log(reducedHeroes);
console.log(superHeroes);

const values = [10, 20, 30, 40, 50];
let initialValue = 0;

const sum = values.reduce((accumulator, value) => accumulator + value, initialValue);
console.log(sum);