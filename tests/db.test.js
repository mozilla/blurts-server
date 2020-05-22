"use strict";

const HIBP = require("../hibp");
const DB = require("../db/DB");
const { TEST_SUBSCRIBERS, TEST_EMAIL_ADDRESSES } = require("../db/seeds/test_subscribers");
const getSha1 = require("../sha1-utils");

require("./resetDB");

jest.mock("../hibp");
jest.mock("../basket");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test("getSubscriberByToken accepts token and returns subscriber", async () => {
    const testEmail = "unverifiedemail@test.com";
    const testToken = "0e2cb147-2041-4e5b-8ca9-494e773b2cf0";
    const subscriber = await DB.getSubscriberByToken(testToken);

    expect(subscriber.primary_email).toBe(testEmail);
    expect(subscriber.primary_verification_token).toBe(testToken);
});

test("getSubscribersByHashes accepts hashes and only returns verified subscribers", async () => {
    const testHashes = [
        "firefoxaccount@test.com",
        "unverifiedemail@test.com",
        "verifiedemail@test.com",
    ].map(email => getSha1(email));
    const subscribers = await DB.getSubscribersByHashes(testHashes);
    for (const subscriber of subscribers) {
        expect(subscriber.primary_verified).toBeTruthy();
    }
});

test("getEmailAddressesByHashes accepts hashes and only returns verified email_addresses", async () => {
    const testHashes = [
        "firefoxaccount-secondary@test.com",
        "firefoxaccount-tertiary@test.com",
    ].map(email => getSha1(email));
    const emailAddresses = await DB.getEmailAddressesByHashes(testHashes);
    for (const emailAddress of emailAddresses) {
        expect(emailAddress.verified).toBeTruthy();
    }
});

test("getEmailByToken accepts token and returns email_addresses record", async () => {
    const testEmailAddress = TEST_EMAIL_ADDRESSES.firefox_account;
    const emailAddress = await DB.getEmailByToken(testEmailAddress.verification_token);
    expect(emailAddress.email).toEqual(testEmailAddress.email);
});

test("getEmailById accepts id and returns email_addresses record", async () => {
    const testEmailAddress = TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account;
    const emailAddress = await DB.getEmailById(testEmailAddress.id);
    expect(emailAddress.email).toEqual(testEmailAddress.email);
});

test("addSubscriberUnverifiedEmailHash accepts user and email and returns unverified email_address with sha1 hash and verification token", async () => {
    const testEmail = "test@test.com";
    // https://stackoverflow.com/a/13653180
    const uuidRE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const subscriber = await DB.getSubscriberByEmail("firefoxaccount@test.com");

    const unverifiedEmailAddress = await DB.addSubscriberUnverifiedEmailHash(subscriber, testEmail);
    expect(unverifiedEmailAddress.sha1).toBe(getSha1(testEmail));
    expect(uuidRE.test(unverifiedEmailAddress.verification_token)).toBeTruthy();
    expect(unverifiedEmailAddress.verified).toBeFalsy();
});

test("verifyEmailHash accepts token and returns verified subscriber", async () => {
    const testEmail = "verifyEmailHash@test.com";
    const subscriber = await DB.getSubscriberByEmail("firefoxaccount@test.com");

    const unverifiedEmailAddress = await DB.addSubscriberUnverifiedEmailHash(subscriber, testEmail);
    expect(unverifiedEmailAddress.verified).toBeFalsy();

    HIBP.subscribeHash.mockResolvedValue(true);
    const verifiedEmailAddress = await DB.verifyEmailHash(unverifiedEmailAddress.verification_token);
    expect(verifiedEmailAddress.sha1).toBe(getSha1(testEmail));
    expect(verifiedEmailAddress.verified).toBeTruthy();
});

test("verifyEmailHash accepts token and returns single verified subscriber", async () => {
    const testEmail = "verifyEmailHash@test.com";
    const subscriber = await DB.getSubscriberByEmail("firefoxaccount@test.com");
    const subscriber2 = await DB.getSubscriberByEmail("all_emails_to_primary@test.com");

    const unverifiedEmailAddress = await DB.addSubscriberUnverifiedEmailHash(subscriber, testEmail);
    expect(unverifiedEmailAddress.verified).toBeFalsy();

    const unverifiedEmailAddress2 = await DB.addSubscriberUnverifiedEmailHash(subscriber2, testEmail);
    expect(unverifiedEmailAddress2.verified).toBeFalsy();

    HIBP.subscribeHash.mockResolvedValue(true);
    const verifiedEmailAddress = await DB.verifyEmailHash(unverifiedEmailAddress.verification_token);
    expect(verifiedEmailAddress.sha1).toBe(getSha1(testEmail));
    expect(verifiedEmailAddress.verified).toBeTruthy();
    expect(unverifiedEmailAddress2.verified).toBeFalsy();
});

test("addSubscriber invalid argument", async () => {
    const testEmail = "test".repeat(255);

    await expect(DB.addSubscriber(testEmail)).rejects.toThrow("error-could-not-add-email");
});

test("addSubscriber accepts email, language and returns verified subscriber", async () => {
    const testEmail = "newfirefoxaccount@test.com";

    const verifiedSubscriber = await DB.addSubscriber(testEmail);

    expect(verifiedSubscriber.primary_email).toBe(testEmail);
    expect(verifiedSubscriber.primary_verified).toBeTruthy();
    expect(verifiedSubscriber.primary_sha1).toBe(getSha1(testEmail));
});

test("addSubscriber with existing email updates updated_at", async () => {
    const testEmail = "newfirefoxaccount@test.com";

    let verifiedSubscriber = await DB.addSubscriber(testEmail);

    expect(verifiedSubscriber.primary_email).toBe(testEmail);
    expect(verifiedSubscriber.primary_verified).toBeTruthy();
    expect(verifiedSubscriber.primary_sha1).toBe(getSha1(testEmail));
    const updatedAt = verifiedSubscriber.updated_at;

    await sleep(1000);

    verifiedSubscriber = await DB.addSubscriber(testEmail);

    expect(verifiedSubscriber.primary_email).toBe(testEmail);
    expect(verifiedSubscriber.primary_verified).toBeTruthy();
    expect(verifiedSubscriber.primary_sha1).toBe(getSha1(testEmail));
    expect(verifiedSubscriber.updated_at).not.toBe(updatedAt);
});

test("addSubscriber accepts upperCasedAddress, and returns verified subscriber with lowercase address hash", async () => {
    const testEmail = "upperCasedAddress@test.com";

    const verifiedSubscriber = await DB.addSubscriber(testEmail);

    expect(verifiedSubscriber.primary_email).toBe(testEmail);
    expect(verifiedSubscriber.primary_sha1).toBe(getSha1(testEmail.toLowerCase()));
});

test("setBreachesLastShown updates column and returns subscriber", async() => {
    const startingSubscriber = await DB.getSubscriberByEmail("firefoxaccount@test.com");

    await sleep(1000);
    await DB.setBreachesLastShownNow(startingSubscriber);

    const updatedSubscriber = await DB.getSubscriberByEmail(startingSubscriber.primary_email);
    expect (new Date(updatedSubscriber.breaches_last_shown).getTime()).toBeGreaterThan(new Date(startingSubscriber.breaches_last_shown).getTime());
});

test("setAllEmailsToPrimary updates column and returns subscriber", async() => {
    const startingSubscriber = await DB.getSubscriberByEmail("firefoxaccount@test.com");

    await DB.setAllEmailsToPrimary(startingSubscriber, false);

    const updatedSubscriber = await DB.getSubscriberByEmail(startingSubscriber.primary_email);
    expect (updatedSubscriber.all_emails_to_primary).toBeFalsy();
});

test("removeSubscriber accepts subscriber and removes everything from subscribers and email_addresses tables", async () => {
    const startingSubscriber = await DB.getSubscriberByEmail(TEST_SUBSCRIBERS.firefox_account.primary_email);
    expect(startingSubscriber.id).toEqual(TEST_SUBSCRIBERS.firefox_account.id);
    const startingEmailAddressRecord = await DB.getEmailById(TEST_EMAIL_ADDRESSES.firefox_account.id);
    expect(startingEmailAddressRecord.id).toEqual(TEST_EMAIL_ADDRESSES.firefox_account.id);

    await DB.removeSubscriber(startingSubscriber);

    const noMoreSubscribers = await DB.getSubscriberByEmail(startingSubscriber.primary_email);
    expect(noMoreSubscribers).toBeUndefined();
    const noMoreEmailAddress = await DB.getEmailById(startingEmailAddressRecord.id);
    expect(noMoreEmailAddress).toBeUndefined();
});

test("removeEmail accepts email and removes from subscribers table", async () => {
    const testEmail = "removingfirefoxaccount@test.com";

    const verifiedSubscriber = await DB.addSubscriber(testEmail);
    const subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
    expect(subscribers.length).toEqual(1);

    await DB.removeEmail(verifiedSubscriber.primary_email);
    const noMoreSubscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
    expect(noMoreSubscribers.length).toEqual(0);
});

test("removeEmail accepts email and removes from email_addresses table", async () => {
    const testEmailAddress = TEST_EMAIL_ADDRESSES.all_emails_to_primary;
    const emailAddress = await DB.getEmailById(testEmailAddress.id);
    expect(emailAddress.email).toEqual(testEmailAddress.email);

    await DB.removeEmail(emailAddress.email);
    const noMoreEmailAddress = await DB.getEmailById(testEmailAddress.id);
    expect(noMoreEmailAddress).toBeUndefined();
});
