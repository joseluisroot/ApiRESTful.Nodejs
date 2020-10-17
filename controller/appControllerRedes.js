'use strict';

const model = require('../model/appModel.js');

exports.getRedes =  async function (req, res ){
    const redes = await model.Redes.findAll();
    res.json(redes);
};

exports.getRedesId = async function(req,res){
    console.log(req.params.id);
    const redes = await model.Redes.findAll(
         {
            //attributes: ['nombres', 'apellidos'],
            where:{
                idRed:req.params.id
            }
        }
    );
    res.json(redes);
};

exports.saveRed = async function(req,res){
    const redes = await model.Redes.create(req.body);
    res.json(redes);
};

exports.updateRed = async function(req,res,next){    
    
    try {
        const redes = await model.Redes.update(req.body,{
            where:{
                idRed:req.params.id
            }
        });
    
        res.json({
            error:true,
            data:redes,
            message:"se modifico"
        }); 
    } catch (error) {
        next(error)
    }
    
    
}

