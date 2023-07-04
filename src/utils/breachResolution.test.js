/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, beforeAll } from "@jest/globals";

import AppConstants from '../appConstants.js'
import { initFluentBundles, updateLocale } from './fluent.js'
import { filterBreachDataTypes, appendBreachResolutionChecklist, BreachDataTypes } from './breachResolution.js'

beforeAll(async () => {
  await initFluentBundles();
  updateLocale("en");
});

test('filterBreachDataTypes', () => {
  const resp = filterBreachDataTypes(['passwords', 'irrelevant'])
  expect(resp).toHaveLength(1);
  expect(resp).toStrictEqual(['passwords']);
})

test('appendBreachResolutionChecklist: two data classes', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Passwords, BreachDataTypes.Email],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData)
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist).toBeDefined();
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].header).toBe(
    'Update your passwords and enable two-factor authentication (2FA).'
  );
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].body).toBe(
    'In most cases, we’d recommend that you change your password on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you <a href="https://companyName.com" target="_blank">visit the site</a>. For added protection, make sure you’re using unique passwords for all accounts, so that any leaked passwords can’t be used to access other accounts. <a href="https://www.mozilla.org/firefox/features/password-manager/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">Firefox Password Manager</a> can help you securely keep track of all of your passwords.'
  );
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].priority).toBe(1);
})

test('appendBreachResolutionChecklist: no data classes', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData)
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist).toBeDefined();
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].header).toBe(
    'Reach out to companyName to inform them about this breach and ask for specific steps you can take.'
  )
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].priority).toBe(13)
})

test('appendBreachResolutionChecklist: only non-applicable data classes', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'not-us' })
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist).toBeDefined();
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].header).toBe(
    'Reach out to companyName to inform them about this breach and ask for specific steps you can take.'
  )
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.General].priority).toBe(13)
})

test('appendBreachResolutionChecklist: data class with a resolution not applicable to the user\'s country', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Email, BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'not-us-or-ca' })
  // There should only be a resolution for `BreachDataTypes.Email`, as
  // `BreachDataTypes.SSN` refers to American companies like Equifax:
  expect(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  ).toStrictEqual([BreachDataTypes.Email]);
})

test('appendBreachResolutionChecklist: data class with a resolution applicable to the user\'s country, Canada', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Phone, BreachDataTypes.Email, BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'ca' })
  expect(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  ).toStrictEqual([BreachDataTypes.Email, BreachDataTypes.Phone]);
})

test('appendBreachResolutionChecklist: data class with a resolution applicable to the user\'s country, US', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Phone, BreachDataTypes.Email, BreachDataTypes.SSN],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData, { countryCode: 'us' })
  expect(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  ).toStrictEqual([BreachDataTypes.Email, BreachDataTypes.SSN, BreachDataTypes.Phone]);
})

test('appendBreachResolutionChecklist: data class with a resolution referring to the breach\'s domain, which is not available', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.SecurityQuestions, BreachDataTypes.Phone, BreachDataTypes.Passwords],
        Name: 'companyName',
        Domain: ''
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData)
  // There should be a resolution for `BreachDataTypes.Phone`,
  // `BreachDataTypes.Passwords` and `BreachDataTypes.SecurityQuestions`.
  // The last two should fallback to a more generic header string that does not
  // include the breached company's domain, which we don't know:
  expect(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  ).toStrictEqual([BreachDataTypes.Passwords, BreachDataTypes.Phone, BreachDataTypes.SecurityQuestions]);
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].header)
    .toBe(
      'Update your passwords and enable two-factor authentication (2FA).'
    );
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].body)
      .toBe(
      'In most cases, we’d recommend that you change your password on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you visit the site. For added protection, make sure you’re using unique passwords for all accounts, so that any leaked passwords can’t be used to access other accounts. <a href="https://www.mozilla.org/firefox/features/password-manager/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">Firefox Password Manager</a> can help you securely keep track of all of your passwords.'
    )
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.SecurityQuestions].header)
    .toBe(
      'Update your security questions.'
    );

  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.SecurityQuestions].body)
    .toBe(
      'In most cases, we’d recommend that you update your security questions on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you visit the site. For added protection, update these security questions on any important accounts where you’ve used them, and create unique passwords for all accounts.'
    );
});

test('appendBreachResolutionChecklist: data classes with resolutions referring to the breach\'s domain, which is available', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Passwords, BreachDataTypes.SecurityQuestions],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }

  appendBreachResolutionChecklist(userBreachData)

  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].body)
    .toBe(
      'In most cases, we’d recommend that you change your password on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you <a href="https://companyName.com" target="_blank">visit the site</a>. For added protection, make sure you’re using unique passwords for all accounts, so that any leaked passwords can’t be used to access other accounts. <a href="https://www.mozilla.org/firefox/features/password-manager/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">Firefox Password Manager</a> can help you securely keep track of all of your passwords.'
    );
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.SecurityQuestions].body)
    .toBe(
      'In most cases, we’d recommend that you update your security questions on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you <a href="https://companyName.com" target="_blank">visit the site</a>. For added protection, update these security questions on any important accounts where you’ve used them, and create unique passwords for all accounts.'
    );
})

test('appendBreachResolutionChecklist: data classes with resolutions referring to the breach\'s domain, which is available but blocklisted', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.Passwords, BreachDataTypes.SecurityQuestions],
        Name: 'blockedCompanyName',
        Domain: 'blockedCompanyName.com'
      }]
    }],
    unverifiedEmails: []
  }

  // Set dummy domain blocklist that includes the breach’s domain
  AppConstants.HIBP_BREACH_DOMAIN_BLOCKLIST = 'blockedDomain.com,anotherBlockedDomain.org,blockedCompanyName.com'
  appendBreachResolutionChecklist(userBreachData)

  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.Passwords].body).toBe(
    'In most cases, we’d recommend that you change your password on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you visit the site. For added protection, make sure you’re using unique passwords for all accounts, so that any leaked passwords can’t be used to access other accounts. <a href="https://www.mozilla.org/firefox/features/password-manager/?utm_medium=mozilla-websites&utm_source=monitor&utm_campaign=&utm_content=breach-resolution" target="_blank">Firefox Password Manager</a> can help you securely keep track of all of your passwords.'
  );
  expect(userBreachData.verifiedEmails[0].breaches[0].breachChecklist[BreachDataTypes.SecurityQuestions].body).toBe(
    'In most cases, we’d recommend that you update your security questions on the company’s website. But <b>their website may be down or contain malicious content</b>, so use caution if you visit the site. For added protection, update these security questions on any important accounts where you’ve used them, and create unique passwords for all accounts.'
  );
})

test('appendBreachResolutionChecklist: data class with a resolution referring to the breach\'s domain, which is available', () => {
  const userBreachData = {
    verifiedEmails: [{
      email: 'affected@email.com',
      breaches: [{
        DataClasses: [BreachDataTypes.SecurityQuestions, BreachDataTypes.Phone, BreachDataTypes.Passwords],
        Name: 'companyName',
        Domain: 'companyName.com'
      }]
    }],
    unverifiedEmails: []
  }
  appendBreachResolutionChecklist(userBreachData)
  expect(
    Object.keys(userBreachData.verifiedEmails[0].breaches[0].breachChecklist)
  ).toStrictEqual(
    [BreachDataTypes.Passwords, BreachDataTypes.Phone, BreachDataTypes.SecurityQuestions]
  );
})
