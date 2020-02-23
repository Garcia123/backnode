const express = require('express');
const bodyParse = require('body-parser');
//const router  = require('./components/message/network');
const router  = require('./network/routes');
const db = require('./db');

db.conect('mongodb+srv://db_user:josemar21@cluster0-fckt1.gcp.mongodb.net/test?retryWrites=true&w=majority')
const app = express();
 
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));
// app.use(router);

router(app);

app.use('/app', express.static('public'));
app.listen(3000); 
console.log('la aplicacion esta escuchando por el puerto http://127.0.0.1:3000');