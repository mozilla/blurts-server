"use strict";

const HIBP = require("../hibp");

// https://stackoverflow.com/a/8528531
function dhm(t){
  const cd = 24 * 60 * 60 * 1000,
      ch = 60 * 60 * 1000,
      pad = (n) => { return n < 10 ? "0" + n : n; };
  let d = Math.floor(t / cd),
      h = Math.floor( (t - d * cd) / ch),
      m = Math.round( (t - d * cd - h * ch) / 60000);
  if( m === 60 ){
    h++;
    m = 0;
  }
  if( h === 24 ){
    d++;
    h = 0;
  }
  return [d, pad(h), pad(m)].join(":");
}


(async () => {
  const breaches = await HIBP.req("/breaches");
  // Sort by AddedDate oldest-to-newest
  breaches.body.sort((a,b) => {return new Date(a.AddedDate) - new Date(b.AddedDate)});
  breaches.body.sort((a,b) => {return a.PwnCount > b.PwnCount});

  let oldestBreachDate = new Date();
  let oldestBreach = "";
  let fastestResponseTime = Math.abs(new Date() - new Date(0));
  let fastestResponseBreach = "";

  for (const breach of breaches.body) {
    const breachDate = new Date(breach.BreachDate);
    const addedDate = new Date(breach.AddedDate);
    console.log("breach: ", breach.Name, ", domain: ", breach.Domain, ", date: ", addedDate, ", count: ", breach.PwnCount);
    if (breachDate < oldestBreachDate){
      oldestBreachDate = breachDate;
      oldestBreach = breach.Name;
    }
    const responseTime = Math.abs(breachDate - new Date(breach.AddedDate));
    if (responseTime < fastestResponseTime) {
      fastestResponseTime = responseTime;
      fastestResponseBreach = breach.Name;
    }
  }

  console.log("===========================");
  console.log("oldest breach: ", oldestBreach, " on date: ", oldestBreachDate);
  console.log("fastest breach response time (dd:hh:mm): ", dhm(Math.abs(fastestResponseTime)), " for breach: ", fastestResponseBreach);
})();

