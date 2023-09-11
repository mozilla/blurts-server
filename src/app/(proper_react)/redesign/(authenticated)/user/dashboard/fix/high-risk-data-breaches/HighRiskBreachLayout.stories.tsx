/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";
import { HighRiskBreach } from "./highRiskBreachData";

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

const pageDummyDataCreditCard: HighRiskBreach = {
  type: "credit-card",
  title: "Credit card",
  illustration: "",
  exposedData: getGuidedExperienceBreaches(scannedResultsArraySample).highRisk
    .ssnBreaches,
  content: {
    summary: "It appeared in 2 data breaches:",
    description: <p>Security recommendation description text.</p>,
    recommendations: {
      title: "Here’s what to do",
      steps: (
        <ol>
          <li>Recommendation one</li>
          <li>Recommendation two</li>
          <li>Recommendation three</li>
        </ol>
      ),
    },
  },
};

const pageDummyDataBankAccount: HighRiskBreach = {
  type: "bank-account",
  title: "Credit card",
  illustration: "",
  exposedData: getGuidedExperienceBreaches(scannedResultsArraySample).highRisk
    .ssnBreaches,
  content: {
    summary: "It appeared in 2 data breaches:",
    description: <p>Security recommendation description text.</p>,
    recommendations: {
      title: "Here’s what to do",
      steps: (
        <ol>
          <li>Recommendation one</li>
          <li>Recommendation two</li>
          <li>Recommendation three</li>
        </ol>
      ),
    },
  },
};

const pageDummyDataSsn: HighRiskBreach = {
  type: "ssn",
  title: "SNN",
  illustration: "",
  exposedData: getGuidedExperienceBreaches(scannedResultsArraySample).highRisk
    .ssnBreaches,
  content: {
    summary: "It appeared in 2 data breaches:",
    description: <p>Security recommendation description text.</p>,
    recommendations: {
      title: "Here",
      steps: (
        <ol>
          <li>Recommendation one</li>
          <li>Recommendation two</li>
          <li>Recommendation three</li>
        </ol>
      ),
    },
  },
};

const pageDummyDataPin: HighRiskBreach = {
  type: "pin",
  title: "PIN",
  illustration: "",
  exposedData: getGuidedExperienceBreaches(scannedResultsArraySample).highRisk
    .ssnBreaches,
  content: {
    summary: "It appeared in 2 data breaches:",
    description: <p>Security recommendation description text.</p>,
    recommendations: {
      title: "Here’s what to do",
      steps: (
        <ol>
          <li>Recommendation one</li>
          <li>Recommendation two</li>
          <li>Recommendation three</li>
        </ol>
      ),
    },
  },
};

const pageDummyDataNone: HighRiskBreach = {
  type: "none",
  title: "No breaches",
  illustration: "",
  exposedData: [],
  content: {
    summary: "",
    description: <p>Security recommendation description text.</p>,
    recommendations: {
      title: "Here’s what to do",
      steps: (
        <ol>
          <li>Recommendation one</li>
          <li>Recommendation two</li>
          <li>Recommendation three</li>
        </ol>
      ),
    },
  },
};

export const CreditCard: Story = {
  args: {
    pageData: pageDummyDataCreditCard,
  },
};

export const BankAccount: Story = {
  args: {
    pageData: pageDummyDataBankAccount,
  },
};

export const SSN: Story = {
  args: {
    pageData: pageDummyDataSsn,
  },
};

export const PIN: Story = {
  args: {
    pageData: pageDummyDataPin,
  },
};

export const None: Story = {
  args: {
    pageData: pageDummyDataNone,
  },
};
