const store = require('./store');


function addUser(name) {
    const user = {name};
    return store.add(user);
}

function listUser() {
    return store,list();
}

module.exports = {addUser};