/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const fetchDelay = (delay: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve();
    }, delay);

    // Don’t make `fetchWithDelay` wait for this Promise
    // to resolve if its fetch request has been aborted.
    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject();
    });
  });

// Fetch with a minimum delay:
// This function only resolves before the provided delay if the fetch failed or
// has been intentionally aborted.
async function fetchWithDelay(
  url: string | URL,
  init: RequestInit & {
    delay: number;
  },
): Promise<Response> {
  const { signal, delay, ...options } = init;
  const controller = new AbortController();
  const fetchSignal = signal ?? controller.signal;

  try {
    const [response, _] = await Promise.all([
      fetch(url, { ...options, signal: fetchSignal }),
      fetchDelay(delay, fetchSignal),
      // Since the Node 20.18 upgrade, it's been marking this  as uncovered, even
      // though it's covered by tests.
      /* c8 ignore next 7 */
    ]);
    return response;
  } catch (error) {
    // Make sure the internal controller is always aborted.
    controller.abort();
    throw error;
  }
}

export default fetchWithDelay;
