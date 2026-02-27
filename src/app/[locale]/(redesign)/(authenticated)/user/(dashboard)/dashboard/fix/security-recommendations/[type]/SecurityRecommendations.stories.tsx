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
import { SecurityRecommendationsLayout } from "../SecurityRecommendationsLayout";
import {
  SecurityRecommendationTypes,
  securityRecommendationTypes,
} from "../securityRecommendationsData";
import { BreachDataTypes } from "../../../../../../../../../functions/universal/breach";
import { UserAnnouncementWithDetails } from "../../../../../../../../../../db/tables/user_announcements";

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

const user = createRandomUser();

const mockedSession = {
  expires: new Date().toISOString(),
  user: user,
};

const mockedAnnouncements: UserAnnouncementWithDetails[] = [
  createRandomAnnouncement(),
  createRandomAnnouncement(),
  createRandomAnnouncement(),
];

const SecurityRecommendationsWrapper = (props: {
  type: SecurityRecommendationTypes;
}) => {
  return (
    <Shell
      l10n={getL10n()}
      session={mockedSession}
      nonce=""
      countryCode="nl"
      enabledFeatureFlags={[]}
      announcements={mockedAnnouncements}
    >
      <SecurityRecommendationsLayout
        subscriberEmails={[]}
        type={props.type}
        data={{
          countryCode: "nl",
          subscriberBreaches: mockedBreaches,
          user: mockedSession.user,
        }}
        enabledFeatureFlags={[]}
      />
    </Shell>
  );
};

const meta: Meta<typeof SecurityRecommendationsWrapper> = {
  title: "Pages/Logged in/Guided resolution/3. Security recommendations",
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
  name: "3a. Phone number",
  args: {
    type: "phone",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/security-recommendations/phone",
      },
    },
  },
};

export const EmailStory: Story = {
  name: "3b. Email address",
  args: {
    type: "email",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/security-recommendations/email",
      },
    },
  },
};

export const IpStory: Story = {
  name: "3c. IP address",
  args: {
    type: "ip",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/security-recommendations/ip",
      },
    },
  },
};

export const DoneStory: Story = {
  name: "Completed Step",
  args: {
    type: "done",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/fix/security-recommendations/done",
      },
    },
  },
};
