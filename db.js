const db = require('mongoose');

// 'mongodb+srv://db_user:josemar21@cluster0-fckt1.gcp.mongodb.net/test?retryWrites=true&w=majority'
db.Promise = global.Promise
function conect(url) {
    db.connect(url, {
        useNewUrlParser : true
    }).then(() => {
        console.log('[db] Conectada con exito');
    });
}

module.exports = { conect };