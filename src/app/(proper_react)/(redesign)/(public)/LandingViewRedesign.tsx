/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExperimentData } from "../../../../telemetry/generated/nimbus/experiments";
import { ExtendedReactLocalization } from "../../../functions/l10n";

export type Props = {
  countryCode: string;
  eligibleForPremium: boolean;
  experimentData: ExperimentData;
  l10n: ExtendedReactLocalization;
  scanLimitReached: boolean;
};

export const View = (props: Props) => {
  return <h1>{props.l10n.getString("landing-all-hero-title")}</h1>;
};
