'use strict'

const getSha1 = require('../../sha1-utils')

exports.TEST_SUBSCRIBERS = {
  firefox_account: {
    id: 12345,
    primary_sha1: getSha1('firefoxaccount@test.com'),
    primary_email: 'firefoxaccount@test.com',
    primary_verification_token: '0e2cb147-2041-4e5b-8ca9-494e773b2cf1',
    primary_verified: true,
    fxa_access_token: '4a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc0',
    fxa_refresh_token: '4a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1',
    fxa_uid: 12345,
    fxa_profile_json: {},
    breaches_last_shown: '2019-04-24 13:27:08.421-05',
    breaches_resolved: { 'firefoxaccount@test.com': [0] }
  },
  all_emails_to_primary: {
    id: 67890,
    primary_sha1: getSha1('all_emails_to_primary@test.com'),
    primary_email: 'all_emails_to_primary@test.com',
    primary_verification_token: '0e2cb147-2041-4e5b-8ca9-494e773b2ca7',
    primary_verified: true,
    fxa_refresh_token: '4a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc2',
    breaches_last_shown: '2019-04-24 13:27:08.421-05',
    all_emails_to_primary: true
  },
  unverified_email: {
    primary_sha1: getSha1('unverifiedemail@test.com'),
    primary_email: 'unverifiedemail@test.com',
    primary_verification_token: '0e2cb147-2041-4e5b-8ca9-494e773b2cf0',
    primary_verified: false
  },
  verified_email: {
    primary_sha1: getSha1('verifiedemail@test.com'),
    primary_email: 'verifiedemail@test.com',
    primary_verification_token: '54010800-6c3c-4186-971a-76dc92874941',
    primary_verified: true,
    signup_language: 'en-US;q=0.7,en;q=0.3'
  },
  onerep_user: {
    id: 12345678,
    primary_sha1: getSha1('onerep_user@test.com'),
    primary_email: 'onerep_user@test.com',
    primary_verification_token: '0e2cb147-2041-4e5b-8ca9-494e773b2cf3',
    primary_verified: true,
    fxa_uid: 12345678,
    fxa_profile_json: {},
    breaches_last_shown: '2019-04-24 13:27:08.421-05',
    breaches_resolved: { 'onerep_user@test.com': [0] },
    onerep_profile_id: 32
  }
}

exports.TEST_EMAIL_ADDRESSES = {
  firefox_account: {
    id: 11111,
    subscriber_id: 12345,
    sha1: getSha1('firefoxaccount-secondary@test.com'),
    email: 'firefoxaccount-secondary@test.com',
    verification_token: '0e2cb147-2041-4e5b-8ca9-494e773b2cf2',
    verified: true
  },
  unverified_email_on_firefox_account: {
    id: 98765,
    subscriber_id: 12345,
    sha1: getSha1('firefoxaccount-tertiary@test.com'),
    email: 'firefoxaccount-tertiary@test.com',
    verification_token: '0e2cb147-2041-4e5b-8ca9-494e773b2cf3',
    verified: false
  },
  all_emails_to_primary: {
    id: 99999,
    subscriber_id: 67890,
    sha1: getSha1('secondary_sending_to_primary@test.com'),
    email: 'secondary_sending_to_primary@test.com',
    verification_token: '0e2cb147-2041-4e5b-8ca9-494e773b2cf4',
    verified: true
  }
}
