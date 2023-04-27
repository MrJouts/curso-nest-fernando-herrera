// Definir clase de una forma explícita
// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//         console.log("constructor llamado");
//     }
// }

// Definir clase de forma corta
export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(public readonly id: number, public name: string) {
        console.log("constructor llamado");
    }
}

export const charmander = new Pokemon(4, "Charmander");

console.log(charmander);
