// const express = require("express");
const CelebrityModel = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/", (req, res, next) => {
    CelebrityModel.find()
      .then((celebrities) => {
        res.render("celebrities/celebrities", { celebrities });
      })
      .catch((err) =>
        console.log("Error while searching for all celebrities:", err)
      );
  });

router.get('/create', (req, res, next) => {
    res.render("celebrities/new-celebrity.hbs")
});

router.post('/create', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    CelebrityModel.create( { name, occupation, catchPhrase } )
    .then((celebrities) => {
        res.redirect('/celebrities')
    }).catch((err) => {
        console.log("An error occured while creating a new celebrity.", err)
        res.render('new-celebrity.hbs')
    });
})





module.exports = router;
