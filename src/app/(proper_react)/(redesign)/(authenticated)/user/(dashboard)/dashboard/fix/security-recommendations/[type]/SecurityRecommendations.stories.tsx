/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import {
  createRandomBreach,
  createUserWithPremiumSubscription,
} from "../../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../../Shell";
import { getOneL10nSync } from "../../../../../../../../../functions/server/mockL10n";
import { SecurityRecommendationsLayout } from "../SecurityRecommendationsLayout";
import {
  SecurityRecommendationTypes,
  securityRecommendationTypes,
} from "../securityRecommendationsData";
import { BreachDataTypes } from "../../../../../../../../../functions/universal/breach";

const mockedBreaches = [...Array(5)].map(() => createRandomBreach());
// Ensure all security recommendation data breaches are present in at least one breach:
mockedBreaches.push(
  createRandomBreach({
    dataClassesEffected: [
      {
        [BreachDataTypes.Phone]: 42,
        [BreachDataTypes.Email]: 42,
        [BreachDataTypes.IP]: 42,
      },
    ],
    isResolved: false,
  }),
);

const user = createUserWithPremiumSubscription();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};

const SecurityRecommendationsWrapper = (props: {
  type: SecurityRecommendationTypes;
}) => {
  return (
    <Shell l10n={getOneL10nSync()} session={mockedSession} nonce="">
      <SecurityRecommendationsLayout
        subscriberEmails={[]}
        type={props.type}
        data={{
          countryCode: "nl",
          latestScanData: { results: [], scan: null },
          subscriberBreaches: mockedBreaches,
          user: mockedSession.user,
        }}
        isEligibleForPremium={true}
      />
    </Shell>
  );
};

const meta: Meta<typeof SecurityRecommendationsWrapper> = {
  title: "Pages/Logged in/Guided resolution/4. Security recommendations",
  component: SecurityRecommendationsWrapper,
  argTypes: {
    type: {
      options: securityRecommendationTypes,
      description: "Breach category",
      control: {
        type: "select",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof SecurityRecommendationsWrapper>;

export const PhoneStory: Story = {
  name: "4a. Phone number",
  args: {
    type: "phone",
  },
};

export const EmailStory: Story = {
  name: "4b. Email address",
  args: {
    type: "email",
  },
};

export const IpStory: Story = {
  name: "4c. IP address",
  args: {
    type: "ip",
  },
};

export const DoneStory: Story = {
  name: "4d. Done",
  args: {
    type: "done",
  },
};
