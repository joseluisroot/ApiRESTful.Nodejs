'use strict';

const model = require('../model/appModel.js');

exports.getUsuarios =  async function (req, res){
    const usuarios = await model.Usuario.findAll();
    res.json(usuarios);
};

exports.getUsuarioId = async function(req,res){
    console.log(req.params.id);
    const usuario = await model.Usuario.findAll(
         {
            //attributes: ['nombres', 'apellidos'],
            where:{
                idUsuario:req.params.id
            }
        }
    );
    res.status(200).json(usuario);
};

exports.postGuardar = async function(req,res){
    const usuario = await model.Usuario.create(req.body);
    res.json(usuario);
};

exports.updateUsuario = async function(req,res,next){    
    
    try {
        const usuario = await model.Usuario.update(req.body,{
            where:{
                idUsuario:req.params.id
            }
        });
    
        res.status(200).json({
            error:true,
            data:usuario,
            message:"se modifico"
        }); 
    } catch (error) {
        next(error)
    }
    
    
}

