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
import { getL10n } from "../../../../../../../../../functions/l10n/storybookAndTests";
import { LeakedPasswordsLayout } from "../LeakedPasswordsLayout";
import {
  LeakedPasswordsTypes,
  leakedPasswordTypes,
} from "../leakedPasswordsData";
import { BreachDataTypes } from "../../../../../../../../../functions/universal/breach";
import { UserAnnouncementWithDetails } from "../../../../../../../../../../db/tables/user_announcements";

const user = createRandomUser();

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
      countryCode="nl"
      enabledFeatureFlags={[]}
      announcements={mockedAnnouncements}
    >
      <LeakedPasswordsLayout
        subscriberEmails={[]}
        type={props.type}
        data={{
          countryCode: "nl",
          subscriberBreaches: mockedBreaches,
          user: mockedSession.user,
        }}
        enabledFeatureFlags={[]}
        blockdHibpBreachDomains={[]}
      />
    </Shell>
  );
};

const meta: Meta<typeof LeakedPasswordsWrapper> = {
  title: "Pages/Logged in/Guided resolution/2. Leaked passwords",
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
  name: "2a. Passwords",
  args: {
    type: "passwords",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/leaked-passwords/passwords",
      },
    },
  },
};

export const SecurityQuestionsStory: Story = {
  name: "2b. Security questions",
  args: {
    type: "security-questions",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/leaked-passwords/security-questions",
      },
    },
  },
};

export const LeakedPasswordsDoneStory: Story = {
  name: "Completed Step",
  args: {
    type: "passwords-done",
    nextUnresolvedBreachType: "None",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/leaked-passwords/done",
      },
    },
  },
};
