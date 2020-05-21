"use strict";

const got = require("got");
const AppConstants = require("../app-constants");


const BREACHES_COLLECTION = "fxmonitor-breaches";
const FX_RS_COLLECTION = `${AppConstants.FX_REMOTE_SETTINGS_WRITER_SERVER}/buckets/main-workspace/collections/${BREACHES_COLLECTION}`;
const FX_RS_RECORDS = `${FX_RS_COLLECTION}/records`;
const FX_RS_WRITER_USER = AppConstants.FX_REMOTE_SETTINGS_WRITER_USER;
const FX_RS_WRITER_PASS = AppConstants.FX_REMOTE_SETTINGS_WRITER_PASS;

const RemoteSettings = {

    async whichBreachesAreNotInRemoteSettingsYet(breaches) {
        const fxRSRecords = await got(FX_RS_RECORDS, {
            json: true,
            auth: `${FX_RS_WRITER_USER}:${FX_RS_WRITER_PASS}`,
        });
        const remoteSettingsBreachesSet = new Set(
            fxRSRecords.body.data.map(b => b.Name)
        );

        return breaches.filter( ({Name}) => !remoteSettingsBreachesSet.has(Name) );
    },

    async postNewBreachToBreachesCollection(data) {
        const auth = `${FX_RS_WRITER_USER}:${FX_RS_WRITER_PASS}`;

        // Create the record
        return await got.post(FX_RS_RECORDS, {
            json: true, auth, body: { data },
        });
    },

    async requestReviewOnBreachesCollection() {
        const auth = `${FX_RS_WRITER_USER}:${FX_RS_WRITER_PASS}`;

        return await got.patch(FX_RS_COLLECTION, {
            json: true, auth, body: { data: {status: "to-review"} },
        });
    },
};


module.exports = RemoteSettings;
