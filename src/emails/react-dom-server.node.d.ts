/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This is needed because `renderEmail.ts` needs to import from server.node
// directly — see the comment in that file.
declare module "react-dom/server.node" {
  export * from "react-dom/server";
}
