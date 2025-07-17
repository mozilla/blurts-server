/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";

export default async function AutomaticRemovePage() {
  // Redirect to support existing external links
  return redirect("/subscription-plans");
}
