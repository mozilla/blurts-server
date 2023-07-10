/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { View } from "./View";
import { HibpLikeDbBreach } from "../../../../../../utils/hibp";
import { L10nProvider } from "../../../../../../contextProviders/localization";

it("passes the axe accessibility test suite", async () => {
  const BreachMockItem: HibpLikeDbBreach = {
    AddedDate: new Date("2023-07-10"),
    BreachDate: "11/09/23",
    DataClasses: [],
    Description: "",
    Domain: "",
    Id: 0,
    IsFabricated: false,
    IsMalware: false,
    IsRetired: false,
    IsSensitive: false,
    IsSpamList: false,
    IsVerified: false,
    LogoPath: "",
    ModifiedDate: new Date("2023-07-10"),
    Name: "",
    PwnCount: 0,
    Title: "Twitter",
  };

  const { container } = render(
    <L10nProvider bundleSources={[]}>
      <View
        user={{ email: "example@example.com" }}
        userBreaches={{
          emailVerifiedCount: 0,
          emailTotalCount: 0,
          emailSelectIndex: 0,
          breachesData: {
            unverifiedEmails: [],
            verifiedEmails: [
              {
                breaches: [BreachMockItem],
                email: "test@example.com",
                id: 0,
                primary: true,
                verified: true,
              },
            ],
          },
        }}
        locale={"en"}
      />
    </L10nProvider>
  );
  expect(await axe(container)).toHaveNoViolations();
});
