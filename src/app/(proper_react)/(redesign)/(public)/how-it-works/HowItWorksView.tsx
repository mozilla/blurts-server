/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../../../functions/l10n";

import { Header } from "./components/Header";
import { DataBreaches } from "./components/DataBreaches";
import { FooterSection } from "./components/FooterSection";
import { FeatureFlagName } from "../../../../../db/tables/featureFlags";

export type Props = {
  l10n: ExtendedReactLocalization;
  enabledFeatureFlags: FeatureFlagName[];
};

export const HowItWorksView = (props: Props) => {
  const { l10n } = props;

  return (
    <main>
      <Header l10n={l10n} />
      <DataBreaches />
      <FooterSection l10n={l10n} />
    </main>
  );
};
