"use strict";

const express = require("express");


function home(req, res) {
  let breach = null;
  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    breach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];
  }
  res.render("monitor", {
    title: "Firefox Monitor",
    breach: breach,
  });
}


function notFound(req, res) {
  res.status(404)
  res.render("404");
}

module.exports = {
  home,
  notFound,
}
