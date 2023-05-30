const Gonderi = require('../models/gonderiModel');

const createGonderi = (req, res) => {
    try {
        const gonderi = Gonderi.create(req.body);
        res.status(201).json({
            succeded: true,
            photo,
        });   
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const getAllGonderis = async (req, res) => {
    try {
        const gonderis = await Gonderi.find({})
        res.status(200).render('blog', {
            gonderis
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const getAGonderi = async (req, res) => {
    try {
        const gonderi = await Gonderi.findById({_id : req.params.id })
        res.status(200).render('gonderi-details', {
            gonderi
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}


module.exports = { createGonderi, getAllGonderis, getAGonderi };