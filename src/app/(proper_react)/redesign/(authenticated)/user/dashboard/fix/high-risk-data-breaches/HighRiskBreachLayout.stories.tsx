/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";

import creditCardIllustration from "../images/high-risk-data-breach-credit-card.svg";
import socialSecurityNumberIllustration from "../images/high-risk-data-breach-ssn.svg";
import bankAccountIllustration from "../images/high-risk-data-breach-bank-account.svg";
import pinIllustration from "../images/high-risk-data-breach-pin.svg";
import noBreachesIllustration from "../images/high-risk-breaches-none.svg";

const meta: Meta<typeof HighRiskBreachLayout> = {
  title: "ResolutionLayout",
  component: HighRiskBreachLayout,
};
export default meta;

type Story = StoryObj<typeof HighRiskBreachLayout>;

const scannedResultsArraySample: SubscriberBreach[] = Array.from(
  { length: 5 },
  () => createRandomBreach({ isHighRiskOnly: true })
);

const summaryString = "It appeared in 2 data breaches:";
const recommendations = {
  title: "Here’s what to do",
  steps: (
    <ol>
      <li>Recommendation one</li>
      <li>Recommendation two</li>
      <li>Recommendation three</li>
    </ol>
  ),
};
const content = {
  summary: summaryString,
  description: <p>Security recommendation description text.</p>,
  recommendations,
};

const guidedExperienceBreaches = getGuidedExperienceBreaches(
  scannedResultsArraySample
);

export const CreditCard: Story = {
  args: {
    pageData: {
      type: "credit-card",
      title: "Credit card",
      illustration: creditCardIllustration,
      exposedData: guidedExperienceBreaches.highRisk.ssnBreaches,
      content,
    },
  },
};

export const BankAccount: Story = {
  args: {
    pageData: {
      type: "bank-account",
      title: "Bank account",
      illustration: bankAccountIllustration,
      exposedData: guidedExperienceBreaches.highRisk.ssnBreaches,
      content,
    },
  },
};

export const SSN: Story = {
  args: {
    pageData: {
      type: "ssn",
      title: "SNN",
      illustration: socialSecurityNumberIllustration,
      exposedData: guidedExperienceBreaches.highRisk.ssnBreaches,
      content,
    },
  },
};

export const PIN: Story = {
  args: {
    pageData: {
      type: "pin",
      title: "PIN",
      illustration: pinIllustration,
      exposedData: guidedExperienceBreaches.highRisk.ssnBreaches,
      content,
    },
  },
};

export const None: Story = {
  args: {
    pageData: {
      type: "none",
      title: "No breaches",
      illustration: noBreachesIllustration,
      exposedData: [],
      content,
    },
  },
};
