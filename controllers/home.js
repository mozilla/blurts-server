"use strict";


function home(req, res) {
  const passwordTips = TIPS.getPasswordTips();
  let featuredBreach = null;
  if (req.query.breach) {
    const reqBreachName = req.query.breach.toLowerCase();
    featuredBreach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];
  }
  res.render("monitor", {
    title: "Firefox Monitor",
    featuredBreach: featuredBreach,
    passwordTips: passwordTips,
  });
}


function notFound(req, res) {
  res.status(404);
  res.render("404");
}

module.exports = {
  home,
  notFound,
};
