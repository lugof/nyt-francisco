const db = require("../models");

module.exports = {
    
    getSavedBooks : (req,res)=>{
        db.Book.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err.message))
    },

    saveBook : (req,res) => {
    console.log("we getting here!");
        db.Book.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err.message))
    }, 

    deleteBook : (req,res) => {
        const id = req.params.id;
        db.Book.findOneAndDelete({_id: id})
        .then(results => res.json(results))
    }

}