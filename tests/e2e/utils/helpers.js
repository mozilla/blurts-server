const got = require('got')

const delay = (timeInMilliSeconds) =>
  new Promise(function (resolve) {
    setTimeout(resolve, timeInMilliSeconds);
});

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
    const res = await got.delete(`http://restmail.net/mail/${testEmail}`).json();
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

  const response = await request.get(
    `http://restmail.net/mail/${testEmail}`,
    {
      failOnStatusCode: false
    }
  );

  const resJson = JSON.parse(await response.text());
  if (resJson.length) {
    const restEmail = resJson[0].subject;
    const verificationCode = restEmail.split(':')[1];
    return verificationCode;
  }

  await delay(1000);
  await waitForRestmail(request, testEmail, attempts - 1);
};

module.exports = {
  generateRandomEmail,
  deleteEmailAddress,
  delay,
  waitForRestmail,
  defaultScreenshotOpts,
};
