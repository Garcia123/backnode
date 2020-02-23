const Model = require('./model');
// mongodb+srv://db_user:<password>@cluster0-fckt1.gcp.mongodb.net/test?retryWrites=true&w=majority

function addUser(usuario) {
    const usuariodb = new Model(usuario);
    return usuariodb.save();
}

function listUser() {
    return Model.find();
}

/* function getMessage(filterUser) {
    console.log(filterUser);
    filterUser = filterUser || {};
    return Model.find(filterUser);
}

async function updateText(_id, message) {
    messagedb = await Model.findOne({ _id, });
    messagedb.message = message;
    return messagedb.save();
}

function deleteMessage(_id) {
    return Model.deleteOne({_id});
} */

module.exports = {
    add: addUser,
    list: listUser
}