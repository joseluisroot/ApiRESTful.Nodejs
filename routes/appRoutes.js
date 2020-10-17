'use strict';
module.exports = function(app) {
    const todoList = require('../controller/appController');

    const usuario = require('../controller/appControllerUsuario');
    const redes = require('../controller/appControllerRedes');
    const estilos = require('../controller/appControllerEstilos')

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);
   
    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/usuarios')
        .get(usuario.getUsuarios)
        .post(usuario.postGuardar);

    app.route('/usuarios/:id')
        .get(usuario.getUsuarioId)
        .put(usuario.updateUsuario);

    app.route('/redes')
        .get(redes.getRedes)
        .post(redes.saveRed); 
        
    app.route('/redes/:id')
        .get(redes.getRedesId)
        .put(redes.updateRed);

    //Estilos
    app.route('/estilos')
        .get(estilos.getEstilos)
        .post(estilos.saveEstilo); 
        
    app.route('/estilos/:id')
        .get(estilos.getEstilosId)
        .put(estilos.updateEstilo);



};



