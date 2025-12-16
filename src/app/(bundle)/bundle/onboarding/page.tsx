/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import { CONST_URL_SUMO_MONITOR_SHUTDOWN } from "../../../../constants";

export default async function Page() {
  return redirect(CONST_URL_SUMO_MONITOR_SHUTDOWN);
}
