// routes/contact.js
var express = require('express');
var router = express.Router();

// Handle POST request when the form is submitted
router.post('/', function(req, res, next) {
    // Retrieve form data from req.body and handle the submission (e.g., send an email)
    const { firstName, lastName, contactNumber, email, message } = req.body;
    
    // You can add code here to send an email or store the message in a database

    // Redirect back to the Home Page after form submission
    res.redirect('/');
});

module.exports = router;
