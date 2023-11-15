/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import {
  createRandomBreach,
  createUserWithPremiumSubscription,
} from "../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../Shell";
import { getEnL10nSync } from "../../../../../../../../functions/server/mockL10n";
import { LeakedPasswordsLayout } from "../LeakedPasswordsLayout";
import { LeakedPasswordsTypes } from "../leakedPasswordsData";
import { BreachDataTypes } from "../../../../../../../../functions/universal/breach";

const mockedBreaches = [...Array(5)].map(() => createRandomBreach());
// Ensure all leaked passwords data breaches are present in at least one breach:
mockedBreaches.push(
  createRandomBreach({
    dataClassesEffected: [
      {
        [BreachDataTypes.Passwords]: 42,
        [BreachDataTypes.SecurityQuestions]: 42,
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

const LeakedPasswordsWrapper = (props: { type: LeakedPasswordsTypes }) => {
  return (
    <Shell
      l10n={getEnL10nSync()}
      session={mockedSession}
      nonce=""
      monthlySubscriptionUrl=""
      yearlySubscriptionUrl=""
    >
      <LeakedPasswordsLayout
        subscriberEmails={[]}
        type={props.type}
        data={{
          countryCode: "nl",
          latestScanData: { results: [], scan: null },
          subscriberBreaches: mockedBreaches,
          user: mockedSession.user,
        }}
      />
    </Shell>
  );
};

const meta: Meta<typeof LeakedPasswordsWrapper> = {
  title: "Pages/Guided resolution/3. Leaked passwords",
  component: LeakedPasswordsWrapper,
};
export default meta;
type Story = StoryObj<typeof LeakedPasswordsWrapper>;

export const PasswordsStory: Story = {
  name: "3a. Passwords",
  args: {
    type: "password",
  },
};

export const PasswordsDoneStory: Story = {
  name: "3b. Passwords done",
  args: {
    type: "passwords-done",
  },
};

export const SecurityQuestionsStory: Story = {
  name: "3c. Security questions",
  args: {
    type: "security-questions",
  },
};

export const SecurityQuestionsDoneStory: Story = {
  name: "3d. Security questions done",
  args: {
    type: "security-questions-done",
  },
};
