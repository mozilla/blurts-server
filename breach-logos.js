"use strict";

const got = require("got");
const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);

/* eslint-disable node/no-unpublished-require */
const imagemin = require("imagemin");
const pngQuant = require("imagemin-pngquant");
/* eslint-enable node/no-unpublished-require */

const mozlog = require("./log");
const log = mozlog("breach-logos");


const BreachLogos = {

  remoteDir: "https://haveibeenpwned.com/Content/Images/PwnedLogos/",
  localDir: "./public/img/logos/",

  async minifyLogoData(logoData) {
    return await imagemin.buffer(logoData, {
      plugins: [pngQuant({quality: 10})],
    });
  },

  async downloadLogo(fileName) {
    const remoteSrc = `${this.remoteDir}${fileName}`;
    const localSrc = `${this.localDir}${fileName}`;
    let fileIsBig = false;
    let logoData = [];

    const stream = await got.stream(remoteSrc, {
      retries: 3,
      timeout: {
        connect: 1000,
        socket: 1000,
        request: 5000,
      },
    });

    stream.on("data", incomingData => logoData.push(incomingData));
    stream.on("response", res => {

        // Check response and error out on certain conditions.
        if (res.headers["content-type"] !== "image/png") { /* eslint-disable quotes */
          throw new Error(`response.headers["content-type"] !== "image/png"`); /* eslint-enable quotes */
        }
        if (res.statusCode !== 200) {
          throw new Error(`Status: ${res.statusCode}`);
        }
        if (parseInt(res.headers["content-length"]) > 1000000) {
          throw new Error(`${fileName} is too large. Downloaded Aborted.`);
        }
        if (parseInt(res.headers["content-length"]) > 10000) {
          fileIsBig = true;
        } else {
          // Conditions met, open up writeStream
          const writeStream = fs.createWriteStream(localSrc);
          res.pipe(writeStream);
          writeStream.on("error", err => log.error(err));
          writeStream.on("finish", () => {
            log.info(`${fileName} logo successfully downloaded.`);
          });
        }
      });
      stream.on("end", async () => {
        if(fileIsBig) {
          logoData = Buffer.concat(logoData);
          try {
            logoData = await this.minifyLogoData(logoData);
            await writeFile(localSrc, logoData, "binary");
            log.info(`${fileName} logo successfully minified and downloaded.`);
          } catch (err) {
            log.error(`Error compressing and saving ${fileName}: ${err}`);
          }
        }
      });
      stream.on("error", err => {
        log.error(`Error downloading ${fileName} image: ${err.message}`);
      });
  },
};

module.exports = BreachLogos;
