/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import dynamic from "next/dynamic";
import { useL10n } from "../../../hooks/l10n";

const ExposureScanInput = () => {
  const l10n = useL10n();

  return (
    <input
      id="scan-email-address"
      name="email"
      type="email"
      placeholder={l10n.getString("exposure-landing-hero-email-placeholder")}
      required
    />
  );
};

export default dynamic(() => Promise.resolve(ExposureScanInput), {
  ssr: false,
});
