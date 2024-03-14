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
import { HighRiskBreachLayout } from "../HighRiskBreachLayout";
import {
  HighRiskBreachTypes,
  highRiskBreachTypes,
} from "../highRiskBreachData";
import { BreachDataTypes } from "../../../../../../../../../functions/universal/breach";
import { StepDeterminationData } from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { OnerepScanRow } from "knex/types/tables";

const user = createUserWithPremiumSubscription();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};

const HighRiskBreachWrapper = (props: {
  type: HighRiskBreachTypes;
  scanStatus?: "empty" | "not_started" | "unavailable";
  nextUnresolvedBreachType?: keyof typeof BreachDataTypes | "None";
}) => {
  const hasNextUnresolvedBreach = props.nextUnresolvedBreachType !== null;
  const mockedBreaches = [...Array(5)].map(() =>
    createRandomBreach({
      isResolved: hasNextUnresolvedBreach,
    }),
  );

  // Ensure all high-risk data breaches are present in at least one breach:
  mockedBreaches.push(
    createRandomBreach({
      dataClassesEffected: [
        {
          [BreachDataTypes.SSN]: 42,
          [BreachDataTypes.CreditCard]: 42,
          [BreachDataTypes.BankAccount]: 42,
          [BreachDataTypes.PIN]: 42,
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

  const mockedScan: OnerepScanRow = {
    created_at: new Date(1998, 2, 31),
    updated_at: new Date(1998, 2, 31),
    id: 0,
    onerep_profile_id: 0,
    onerep_scan_id: 0,
    onerep_scan_reason: "initial",
    onerep_scan_status: "finished",
  };

  const data: StepDeterminationData =
    props.scanStatus === "empty"
      ? {
          countryCode: "us",
          latestScanData: { results: [], scan: mockedScan },
          subscriberBreaches: mockedBreaches,
          user: mockedSession.user,
        }
      : props.scanStatus === "not_started"
        ? {
            countryCode: "us",
            latestScanData: { results: [], scan: null },
            subscriberBreaches: mockedBreaches,
            user: mockedSession.user,
          }
        : {
            countryCode: "nl",
            latestScanData: null,
            subscriberBreaches: mockedBreaches,
            user: mockedSession.user,
          };

  return (
    <Shell l10n={getOneL10nSync()} session={mockedSession} nonce="">
      <HighRiskBreachLayout
        subscriberEmails={[]}
        type={props.type}
        data={data}
        isEligibleForPremium={true}
      />
    </Shell>
  );
};

const meta: Meta<typeof HighRiskBreachWrapper> = {
  title: "Pages/Logged in/Guided resolution/2. High-risk data breaches",
  component: HighRiskBreachWrapper,
  argTypes: {
    type: {
      options: highRiskBreachTypes,
      description: "Breach category",
      control: {
        type: "select",
      },
    },
    nextUnresolvedBreachType: {
      description: "Next unresolved breach type",
      options: [
        "None",
        "Passwords",
        "SecurityQuestions",
        "Phone",
        "Email",
        "IP",
      ],
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof HighRiskBreachWrapper>;

export const SsnStory: Story = {
  name: "2a. Social Security Number",
  args: {
    type: "social-security-number",
  },
};

export const CreditCardStory: Story = {
  name: "2b. Credit card",
  args: {
    type: "credit-card",
  },
};

export const BankAccountStory: Story = {
  name: "2c. Bank account",
  args: {
    type: "bank-account",
  },
};

export const PinStory: Story = {
  name: "2d. PIN",
  args: {
    type: "pin",
  },
};

export const HighRiskBreachDoneStory: Story = {
  name: "2e. Done",
  args: {
    type: "done",
    nextUnresolvedBreachType: "None",
  },
};
