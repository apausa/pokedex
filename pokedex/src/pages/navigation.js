function after() {
    if (page === last) return;
    page += 1;
    const index = new Index();
}

function before() {
    if (page === 0) return;
    page -= 1;
    const index = new Index();
}

function pagination(items) {
    limit = (items === 16) ? items : limit; 
    limit = (items === 32) ? items : limit; 
    limit = (items === 64) ? items : limit; 
    limit = (items === 128) ? items : limit; 
    page = 0; 
    const index = new Index();
}
