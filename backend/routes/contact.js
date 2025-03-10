const router = require('express').Router();
const contact = require('../models/contact');


router.post('/post', async (req, res) => {
    try {
        const {name, number, Address, state, city, message} = req.body;
        const newContact = new contact({
            name,
            number,
            Address,
            state,
            city,
            message
        });
        await newContact.save().then(() => {
            res.status(200).json({message: "Data saved successfully"});
        }).catch((error) => {
            res.status(400).json({message: "Data not saved"});
        });
        
        
    } catch (error) {
        res.status(400).json({message: "Technical error Occured"});
    }


});


module.exports = router;


