const got = require('got')

const generateRandomEmail = async () => {  
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

const getVerificationCode = async (request, testEmail, page, attempts = 5) => {  
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
    const verificationCode = resJson[0].headers['x-verify-short-code']
    return verificationCode;
  }

  await page.waitForTimeout(1000);
  return getVerificationCode(request, testEmail, page, attempts - 1);
};

module.exports = {
  generateRandomEmail,
  deleteEmailAddress,
  getVerificationCode,
  defaultScreenshotOpts,
};
