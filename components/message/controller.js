const store = require('./store');

function addMessage(user, message) {

    if (!user || !message) {
        console.error('[messageController] No hay usuario o mensaje');
        Promise.reject('Los datos son incorrectos');
        return false;
    }
    
    const fullMenssage = {
        user, message, date: new Date()
    }
    return store.add(fullMenssage); 
}

function getMessage(filterUser){
    return store.list(filterUser);
}

function updateMessage(id, message) {
    if (!id || !message) {
        Promise.reject('Invalid data');
    }
    return store.updateText(id, message);
}

function deleteMessage(id) {
    return store.deleteMessage(id);
}

module.exports = {
    addMessage, getMessage, updateMessage, deleteMessage
}