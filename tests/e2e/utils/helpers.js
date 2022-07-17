const axios = require('axios');

const delay = (timeInMilliSeconds) =>
  new Promise(function (resolve) {
    setTimeout(resolve, timeInMilliSeconds);
});

const generateRandomWord = (wordLength = 6) => {
  let word = '';
  let possibleWordLetters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < wordLength; i++) {
    word += possibleWordLetters.charAt(
      Math.floor(Math.random() * possibleWordLetters.length)
    );
  }

  return word;
};

const generateRandomEmail = async (wordLength = 2) => {  
  return `${Date.now()}_mntr@restmail.net`;
};

const defaultScreenshotOpts = {
  animations: 'disabled',
  maxDiffPixelRatio: 0.04
};

const deleteEmailAddress = async (testEmail) => {
  let status;
  try {
    const res = await axios.delete(`http://restmail.net/mail/${testEmail}`);
    response = res.status;
  } catch (err) {
    console.log('ERROR DELETE RESTMAIL EMAIL', err);
  }

  return status;
};

const waitForRestmail = async (request, testEmail, attempts = 5) => {
  if (attempts === 0) {
    throw new Error('Unable to retrieve restmail data');
  }

  const response = await request.get(`http://restmail.net/mail/${testEmail}`, {
    failOnStatusCode: false
  });

  const resJson = JSON.parse(await response.text());
  if (resJson.length) {
    return resJson[0].subject;
  }

  await delay(1000);
  await waitForRestmail(request, testEmail, attempts - 1);
};

module.exports = {
  generateRandomWord,
  generateRandomEmail,
  deleteEmailAddress,
  delay,
  waitForRestmail,
  defaultScreenshotOpts,
};
