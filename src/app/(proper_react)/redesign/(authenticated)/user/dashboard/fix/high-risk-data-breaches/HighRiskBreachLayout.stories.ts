/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { getGuidedExperienceBreaches } from "../../../../../../../functions/universal/guidedExperienceBreaches";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";

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

export const CreditCard: Story = {
  args: {
    typeOfBreach: "creditCard",
    breachData: getGuidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const BankAccount: Story = {
  args: {
    typeOfBreach: "bankAccount",
    breachData: getGuidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const SSN: Story = {
  args: {
    typeOfBreach: "ssnBreaches",
    breachData: getGuidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const PIN: Story = {
  args: {
    typeOfBreach: "pin",
    breachData: getGuidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const None: Story = {
  args: {
    typeOfBreach: "none",
    breachData: getGuidedExperienceBreaches(scannedResultsArraySample),
  },
};
