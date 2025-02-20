/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import {
  createRandomBreach,
  createUserWithPremiumSubscription,
} from "../../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../../Shell";
import { getL10n } from "../../../../../../../../../functions/l10n/storybookAndJest";
import { LeakedPasswordsLayout } from "../LeakedPasswordsLayout";
import {
  LeakedPasswordsTypes,
  leakedPasswordTypes,
} from "../leakedPasswordsData";
import { BreachDataTypes } from "../../../../../../../../../functions/universal/breach";
import { defaultExperimentData } from "../../../../../../../../../../telemetry/generated/nimbus/experiments";

const user = createUserWithPremiumSubscription();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};

const LeakedPasswordsWrapper = (props: {
  type: LeakedPasswordsTypes;
  nextUnresolvedBreachType?: keyof typeof BreachDataTypes | "None";
}) => {
  const mockedBreaches = [...Array(5)].map(() =>
    createRandomBreach({
      isResolved: props.nextUnresolvedBreachType !== null,
    }),
  );

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

  // Adds a breach with an unresolved breach type
  if (
    props.nextUnresolvedBreachType &&
    props.nextUnresolvedBreachType !== "None"
  ) {
    mockedBreaches.push(
      createRandomBreach({
        dataClassesEffected: [
          {
            [BreachDataTypes[props.nextUnresolvedBreachType]]: 42,
          },
        ],
        isResolved: false,
      }),
    );
  }

  return (
    <Shell
      l10n={getL10n()}
      session={mockedSession}
      nonce=""
      countryCode="nl"
      enabledFeatureFlags={[]}
      experimentData={defaultExperimentData["Features"]}
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
        isEligibleForPremium={true}
        enabledFeatureFlags={[]}
      />
    </Shell>
  );
};

const meta: Meta<typeof LeakedPasswordsWrapper> = {
  title: "Pages/Logged in/Guided resolution/3. Leaked passwords",
  component: LeakedPasswordsWrapper,
  argTypes: {
    type: {
      options: leakedPasswordTypes,
      description: "Breach category",
      control: {
        type: "select",
      },
    },
    nextUnresolvedBreachType: {
      description: "Next unresolved breach type",
      options: ["None", "SecurityQuestions", "Phone", "Email", "IP"],
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof LeakedPasswordsWrapper>;

export const PasswordsStory: Story = {
  name: "3a. Passwords",
  args: {
    type: "passwords",
  },
};

export const SecurityQuestionsStory: Story = {
  name: "3b. Security questions",
  args: {
    type: "security-questions",
  },
};

export const LeakedPasswordsDoneStory: Story = {
  name: "3c. Done",
  args: {
    type: "passwords-done",
    nextUnresolvedBreachType: "None",
  },
};
