// CLI usage example: node scripts/delete-kanary-user.js /Users/atoufali/Dev/blurts-server/kid.txt
// expects text file with single id on each line
// Terminal tip: you can auto-paste the file path by dragging it onto the Terminal window

"use strict";

const AppConstants = require("../app-constants");
const got = require("got");
const fs = require("fs");
const readline = require("readline");
const filepath = process.argv[2];

async function deleteAcctsFromFile() {
  const rl = readline.createInterface({
    input: fs.createReadStream(new URL(`file://${filepath}`)),
    crlfDelay: Infinity,
  });

  rl.on("line", async (kid) => {
    try {
      const res = await got(
        `https://thekanary.com/partner-api/v0/accounts/${kid}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
          },
        }
      );
      return console.log(res.statusCode, kid);
    } catch (e) {
      return console.error(`Error deleting account ${kid}`, e);
    }
  });
}

// async function getAcctsFromFile() {
//   // this function can be used as a test run before delete
//   const rl = readline.createInterface({
//     input: fs.createReadStream(new URL(`file://${filepath}`)),
//     crlfDelay: Infinity,
//   });

//   rl.on("line", async (kid) => {
//     try {
//       const res = await got(
//         `https://thekanary.com/partner-api/v0/accounts/${kid}/`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${AppConstants.KANARY_TOKEN}`,
//           },
//         }
//       );

//       if (res.statusCode === 200) {
//         const jsonBody = JSON.parse(res.body);
//         console.log(res.statusCode, kid, jsonBody.created_at.substring(0, jsonBody.created_at.indexOf("T")));
//       } else {
//         console.log(res.statusCode, kid);
//       }
//     } catch (e) {
//       return console.error(`Error deleting account ${kid}`, e);
//     }
//   });
// }

// getAcctsFromFile();
deleteAcctsFromFile();
