const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
   /*  console.log(req.headers);
    res.header({
        'custom-header' : 'valor personalizado'
    }) */
    //res.status(201).send({error:'', body:'listando correctamente'});
    const filterrMessage = req.query || null;
    controller.getMessage(filterrMessage)
        .then(list => response.success(req, res, list, 200))
        .catch(e => response.error(req, res, 'Error inesperado', 500, e));
    // response.success(req, res, 'lista de mensajes');
});

router.post('/', (req, res) => {

    // console.log(req.body);
    // console.log(req.query);
    // res.send(`mensaje ${req.body.text} se agrego`);

    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => response.success(req, res, fullMessage, 201))
        .catch(error => response.error(req, res, error, 400, 
            'error en el controller message'));
    /*if (req.query.error === 'ok') {
        response.error(req, res, 'Error inenperado', 500, 
        'es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'creado correctamente', 201);
    }*/
});

router.patch('/:id', (req, res) => {
    // console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, 'Error interno', 500, error));
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(data => response.success(req, res, data, 200))
        .catch(error => response.error(req, res, 'Error interno', 500, error));
});

module.exports = router;