/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ExtendedReactLocalization } from "../../../../functions/l10n";

import { useL10n } from "../../../../hooks/l10n";

import { Header } from "./components/Header";
import { DataBrokers } from "./components/DataBrokers";
import { DataBreaches } from "./components/DataBreaches";
import { FooterSection } from "./components/FooterSection";

export type Props = {
  l10n: ExtendedReactLocalization;
};

export const View = () => {
  const l10n = useL10n();
  return (
    <main>
      <Header l10n={l10n} />
      <DataBrokers l10n={l10n} />
      <DataBreaches l10n={l10n} />
      <FooterSection l10n={l10n} />
    </main>
  );
};
