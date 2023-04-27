export const pokemonIds = [1, 20, 30, 34, 66];
pokemonIds.push(+"1");

interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur",
};

export const charmander: Pokemon = {
    id: 2,
    name: "Charmander",
    age: 1,
};

console.log(pokemonIds);

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur, charmander);

console.log(pokemons);
