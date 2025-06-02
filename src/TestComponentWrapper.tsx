/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { L10nProvider } from "./contextProviders/localization";
import { SessionProvider } from "next-auth/react";
import { ReactAriaI18nProvider } from "./contextProviders/react-aria";
import { getL10nBundles } from "./app/functions/l10n/storybookAndJest";
import { CookiesProvider } from "./contextProviders/cookies";
import { SubscriptionBillingProvider } from "./contextProviders/subscription-billing-context";

const l10nBundles = getL10nBundles();

export const TestComponentWrapper = (props: { children: ReactNode }) => {
  return (
    <L10nProvider bundleSources={l10nBundles}>
      <SessionProvider session={null}>
        <ReactAriaI18nProvider locale="en">
          <CookiesProvider>
            <SubscriptionBillingProvider
              value={{
                yearly: 0,
                monthly: 0,
                bundle: {
                  monthly: 0,
                  individual: 0,
                },
              }}
            >
              {props.children}
            </SubscriptionBillingProvider>
          </CookiesProvider>
        </ReactAriaI18nProvider>
      </SessionProvider>
    </L10nProvider>
  );
};
