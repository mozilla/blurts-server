/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../../../functions/l10n";

import { Header } from "./components/Header";
import { SectionOne } from "./components/SectionOne";
import { SectionTwo } from "./components/SectionTwo";
import { Footer } from "./components/Footer";

export type Props = {
  l10n: ExtendedReactLocalization;
};

export const View = (props: Props) => {
  return (
    <main>
      <Header l10n={props.l10n} />
      <SectionOne l10n={props.l10n} />
      {/* SECTION: WE REMOVE YOUR INFO FROM DATA BROKERS */}
      <SectionTwo l10n={props.l10n} />
      {/* SECTION: WE PROVIDE STEPS TO HELP RESOLVE DATA BREACHES */}
      <Footer l10n={props.l10n} />
    </main>
  );
};
