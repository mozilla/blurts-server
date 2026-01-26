/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  createRandomAnnouncement,
  createRandomBreach,
  createRandomUser,
} from "../../../../../../../../../../apiMocks/mockData";
import { Shell } from "../../../../../../../Shell/Shell";
import { getL10n } from "../../../../../../../../../functions/l10n/storybookAndJest";
import { HighRiskBreachLayout } from "../HighRiskBreachLayout";
import {
  HighRiskBreachTypes,
  highRiskBreachTypes,
} from "../highRiskBreachData";
import { BreachDataTypes } from "../../../../../../../../../functions/universal/breach";
import { StepDeterminationData } from "../../../../../../../../../functions/server/getRelevantGuidedSteps";
import { UserAnnouncementWithDetails } from "../../../../../../../../../../db/tables/user_announcements";

const user = createRandomUser();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};

const HighRiskBreachWrapper = (props: {
  type: HighRiskBreachTypes;
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

  const data: StepDeterminationData = {
    countryCode: "nl",
    subscriberBreaches: mockedBreaches,
    user: mockedSession.user,
  };

  const mockedAnnouncements: UserAnnouncementWithDetails[] = [
    createRandomAnnouncement(),
    createRandomAnnouncement(),
    createRandomAnnouncement(),
  ];

  return (
    <Shell
      l10n={getL10n()}
      session={mockedSession}
      nonce=""
      countryCode={data.countryCode}
      enabledFeatureFlags={[]}
      announcements={mockedAnnouncements}
    >
      <HighRiskBreachLayout
        subscriberEmails={[]}
        type={props.type}
        data={data}
        enabledFeatureFlags={[]}
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
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/high-risk-data-breaches/social-security-number",
      },
    },
  },
};

export const CreditCardStory: Story = {
  name: "2b. Credit card",
  args: {
    type: "credit-card",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/high-risk-data-breaches/credit-card",
      },
    },
  },
};

export const BankAccountStory: Story = {
  name: "2c. Bank account",
  args: {
    type: "bank-account",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/high-risk-data-breaches/bank-account",
      },
    },
  },
};

export const PinStory: Story = {
  name: "2d. PIN",
  args: {
    type: "pin",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/high-risk-data-breaches/pin",
      },
    },
  },
};

export const HighRiskBreachDoneStory: Story = {
  name: "2e. Done",
  args: {
    type: "done",
    nextUnresolvedBreachType: "None",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/high-risk-data-breaches/done",
      },
    },
  },
};
