import axios from "axios";
export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(public readonly id: number, public name: string) {
        console.log("constructor llamado");
    }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves() {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/4");

        console.log("res", data.moves);
        return data.moves;
    }
}

export const charmander = new Pokemon(4, "Charmander");

// console.log(charmander);
// charmander.speak();
// charmander.scream();

console.log(charmander.getMoves());
