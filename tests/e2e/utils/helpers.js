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

const getEmail = async (testEmail, attempts = 6) => {
  let response;

  if (attempts === 0) {
    console.log('res---: ', response);
    throw new Error('Unable to retrieve restmail data');
  }

  try {
    const res = await axios.get(`http://restmail.net/mail/${testEmail}`);
    response = res.data;
  } catch (err) {
    console.log('ERROR GET RESTMAIL EMAIL', err);
  }

  if (response.length) {
    console.log('first 1 >>>>> ', response.subject);
    console.log('first >2>>>> ', response[0].subject);
    // console.log('second >>>>>', response[0].subject);
    return response;
  }

  await delay(1000);
  await getEmail(testEmail, attempts - 1);
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
    // restEmail = resJson[0].subject;
    return resJson[0].subject;
  }

  await delay(1000);
  await waitForRestmail(request, testEmail, attempts - 1);
};

module.exports = {
  generateRandomWord,
  getEmail,
  deleteEmailAddress,
  delay,
  waitForRestmail
};
