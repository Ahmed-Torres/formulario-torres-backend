const express = require("express");
const router = express.Router();
const clienteModel = require("../models/ClientModel")

router.get('/', async (req,res)=>{
    const clientes = await clienteModel.find()
    console.log(clientes)
    res.json({clientes: clientes});
});

router.post('/', async(req,res)=>{
    const {nombreYapellido, numeroDocumento, correo, celular, product, coment} = req.body

    const agregarCliente = await new clienteModel({
        fullname: nombreYapellido, 
        document: numeroDocumento, 
        email: correo, 
        phone: celular, 
        product: product, 
        coment: coment
    })
    await agregarCliente.save();
    res.json({
        status: 'cliente guardado'
    })
})

module.exports = router;