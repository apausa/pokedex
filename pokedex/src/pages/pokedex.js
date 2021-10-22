class Index {
    constructor() {
        offset = multiply(limit, page);
        const pokemonsPage = new PokemonsPage();
        pokemonsPage.clearView();
        pokemonsPage.setView();
    }
}

let offset;
let [limit, page] = [16, 0];
const multiply = (a, b) => Math.floor(a * b);
const COUNT = 1118;
const last = Math.floor(COUNT / limit);
const index = new Index();