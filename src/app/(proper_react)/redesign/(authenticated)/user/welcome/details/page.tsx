/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { isEligible } from "../../../../../../functions/server/onerep";
import Script from "next/script";

export function generateMetadata() {
  return {
    title: "Welcome - Details",
  };
}

export default async function UserWelcomeDetails() {
  const eligible = await isEligible();

  if (!eligible) {
    return (
      <main>
        <h2>You have already used your free scan.</h2>
      </main>
    );
  } else {
    return (
      <>
        <Script
          type="module"
          src="/nextjs_migration/client/js/welcome-details.js"
        ></Script>

        <main>
          <h1>Enter the details you want to protect</h1>
          <p>
            We’ll use this to find exposures of your personal information, and
            then guide you step-by-step on how to fix it.
          </p>

          <section>
            <form name="details">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="firstname">First name: </label>
                    </td>
                    <td>
                      <input type="text" name="firstname" id="firstname" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="lastname">Last name: </label>
                    </td>
                    <td>
                      <input type="text" name="lastname" id="lastname" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="city">City: </label>
                    </td>
                    <td>
                      <input type="text" name="city" id="city" />
                    </td>
                    <td>
                      <label htmlFor="state">State: </label>
                    </td>
                    <td>
                      <input type="text" name="state" id="state" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="dob">Date of birth: </label>
                    </td>
                    <td>
                      <input type="date" name="dob" id="dob" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button type="submit" className="button primary">
                        Start my free scan
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </section>
        </main>
      </>
    );
  }
}
