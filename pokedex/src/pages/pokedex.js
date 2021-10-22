const COUNT = 1118;
let [limit, page] = [16, 0];
const last = Math.floor(COUNT / limit);
let offset;

class Index {
    constructor() {
        offset = Math.floor(limit * page);
        const pokemonsPage = new PokemonsPage();
        pokemonsPage.clearView();
        pokemonsPage.setView();
    }
}

const index = new Index();