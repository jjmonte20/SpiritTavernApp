var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("home", {
        title: "Home Page!",
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/points", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("points", {
        title: "Points Page!",
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/breweries", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("breweries", {
        title: "Breweries Page!",
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/login", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("login", {
        title: "Log In!",
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/createaccount", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("createaccount", {
        title: "Create an Account!",
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {
      title: "Page Not Found"
    });
  });
};
