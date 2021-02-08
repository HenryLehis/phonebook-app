const date = require('../getDate.js');

const mongoose = require('mongoose');
const Phone = mongoose.model('Phone');
//const Phone = require('../models/PhoneFromFile');


exports.getMainPage = (req, res)=> {
    let today = date.getDate();
    Phone.find((error, phones) => {
        if(!error){
            res.render('index.ejs', {date: today, phoneItems: phone});
        } else {
            console.log('Failed to retrieve data.');
        }
    });

   
};

exports.postnewPhone = (req, res) => {
    let item = req.body.newPhone;//!!
    let newPhone = new Phone();
    newPhone.description = item;

    newPhone.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to save data.");
        }
    })
}

exports.deletePhone = (req, res) => {
    const chekedItemId = req.body.checkbox;
    
    Task.findByIdAndRemove(chekedItemId, (error)=>{
        if(!error){
            res.redirect("/");
        } else {
            console.log("failed to remove an item");
        }
    });
}

exports.getNewUser= (req, res)=> {

}