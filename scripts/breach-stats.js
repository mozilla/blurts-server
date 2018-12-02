"use strict";

const psl = require("psl");

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
  const breachesResponse = await HIBP.req("/breaches");
  const breaches = breachesResponse.body;
  const dataClassesResponse = await HIBP.req("/dataclasses");
  const dataClassesArray = dataClassesResponse.body;
  const dataClasses = dataClassesArray.map(dataClassStr => { 
    const dataClass = {
      name: dataClassStr,
      PwnCount: 0,
    };
    return dataClass;
  });

  let breachTLDs = {};
  let oldestBreachDate = new Date();
  let oldestBreach = "";
  let fastestResponseTime = Math.abs(new Date() - new Date(0));
  let fastestResponseBreach = "";

  for (const breach of breaches) {
    const breachDate = new Date(breach.BreachDate);
    const addedDate = new Date(breach.AddedDate);
    const parsedDomainTLD = psl.parse(breach.Domain).tld;
    if (breachTLDs.hasOwnProperty(parsedDomainTLD)) {
      breachTLDs[parsedDomainTLD]++;
    } else {
      breachTLDs[parsedDomainTLD] = 1;
    }
    for (const breachDataClass of breach.DataClasses) {
      const dC = dataClasses.find(dataClass => dataClass.name === breachDataClass)
      dC.PwnCount += breach.PwnCount;
    }

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

  // Sort by AddedDate oldest-to-newest
  //breaches.sort((a,b) => {return new Date(a.AddedDate) - new Date(b.AddedDate)});
  breaches.sort((a,b) => { return a.PwnCount - b.PwnCount });
  for (const breach of breaches) {
    console.log("breach: ", breach.Name, ", domain: ", breach.Domain, ", count: ", breach.PwnCount.toLocaleString("en-US"));
  }
  dataClasses.sort((a,b) => { return a.PwnCount - b.PwnCount });
  for (const dataClass of dataClasses) {
    console.log("individual ", dataClass.name, " exposed ", dataClass.PwnCount.toLocaleString("en-US"), " times.");
  }

  console.log("===========================");
  console.log("oldest breach: ", oldestBreach, " on date: ", oldestBreachDate);
  console.log("fastest breach response time (dd:hh:mm): ", dhm(Math.abs(fastestResponseTime)), " for breach: ", fastestResponseBreach);
})();

