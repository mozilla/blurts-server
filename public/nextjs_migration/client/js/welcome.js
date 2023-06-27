/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function init() {
  let intervalCount = 1;

  const progress = document.querySelector("#progress");
  const status = document.querySelector("#status");

  const interval = setInterval(async () => {
    const response = await fetch("/api/v1/user/welcome");
    const body = await response.json();

    if (response.ok && body.scan_results[0].onerep_scan_results !== null) {
      status.textContent = JSON.stringify(
        body.scan_results[0].onerep_scan_results
      );
    }

    const percentComplete = intervalCount * 6;

    if (percentComplete >= 100) {
      progress.textContent = "Scan complete";
      clearInterval(interval);
    } else {
      progress.textContent = `${percentComplete}%`;
      intervalCount++;
    }
  }, 1000);
}

init();
