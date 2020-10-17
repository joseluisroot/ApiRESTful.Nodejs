'use strict';

const model = require('../model/appModel.js');

exports.getEstilos =  async function (req, res ){
    const redes = await model.Estilos.findAll();
    res.json(redes);
};

exports.getEstilosId = async function(req,res){
    console.log(req.params.id);
    const estilo = await model.Estilos.findAll(
         {
            //attributes: ['nombres', 'apellidos'],
            where:{
                idEstilo:req.params.id
            }
        }
    );
    res.json(estilo);
};

exports.saveEstilo = async function(req,res){
    const estilo = await model.Estilos.create(req.body);
    res.json(estilo);
};

exports.updateEstilo = async function(req,res,next){    
    
    try {
        const estilo = await model.Estilos.update(req.body,{
            where:{
                idEstilo:req.params.id
            }
        });
    
        res.json({
            error:true,
            data:estilo,
            message:"se modifico"
        }); 
    } catch (error) {
        next(error)
    }
    
    
}

