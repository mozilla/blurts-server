/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import knex from "knex";
import knexConfig from "./knexfile.js";

/** @returns {knex.Knex} */
export default function createDbConnection() {
    /* c8 ignore start */
    if (process.env.NODE_ENV === "development") {
        /** @type {import("./knexfile").KnexConfig} knexConfig */
        const { client } = knexConfig;
        if (!(client in global)) {
            // @ts-ignore-next-line: globalThis is a read-only property
            global[client] = knex(knexConfig);
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        // @ts-ignore-next-line: Implicitly has type any
        return global[client];
    }
    /* c8 ignore stop */

    // @ts-ignore-next-line: knexConfig is expected to have @type KnexConfig
    return knex(knexConfig);
}
