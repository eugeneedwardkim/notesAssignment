var express = require('express');
var router = express.Router();
var note = require('../models/note');

router.get('/', function( req, res ) {
    Note.find( function(err, note) {
        res.render('note', { title: 'Notes App!', note: note } );
    });
});

router.post('/', function( req, res ) {
    new Note({
        title: req.body.title,
        description: req.body.description,
        updatedAt: Date.now()
    }).save( function( err, note ) {
        res.redirect('/notes');
    });
});

router.get('/:id', function ( req, res ) {
    Note.findById(req.params.id, function( err, note ) { 
      res.render('note', { title: note.title, note: note});
    });
});

router.delete('/:id', function( req, res ) {
    Note.findById(req.params.id, function (err, note) {
        note.remove( function ( err, note ) { 
            res.redirect('/notes');
        });
    });
});

router.put('/:id', function( req, res ) {
    var body = {
        title: req.body.title, 
        description: req.body.description, 
        updatedAt: Date.now()
    }

    Note.findByIdAndUpdate(req.params.id, 
    { 
        $set: body  
    }, 
    function ( err, note ) {
        res.redirect('/notes/'+req.params.id);
    });
});






module.exports = router;