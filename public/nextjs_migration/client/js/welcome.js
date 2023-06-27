/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function init() {
  const interval = setInterval(async () => {
    const response = await fetch("/api/v1/user/welcome");
    const body = await response.json();
    if (response.ok && body.scan_results[0].onerep_scan_results !== null) {
      console.debug(
        "Response received:",
        body.scan_results[0].onerep_scan_results
      );
      clearInterval(interval);

      const status = document.querySelector("#status");
      status.textContent = "Results:";

      const progress = document.querySelector("#progress");
      progress.textContent = JSON.stringify(
        body.scan_results[0].onerep_scan_results
      );
    }
  }, 1000);
}

init();
