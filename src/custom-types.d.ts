/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

interface HTMLElement {
  // We access this.shadowRoot in custom elements often, and we've almost always
  // already called this.attachShadow({ mode: 'open' }). So, the default type
  // that indicates that it might also be `null` generates a lot of noise for an
  // error that we haven't run into yet. Thus, we override the default type to
  // pretend that shadowRoot is always set.
  shadowRoot: ShadowRoot;
}
