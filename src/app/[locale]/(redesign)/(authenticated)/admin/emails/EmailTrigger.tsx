/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./EmailTrigger.module.scss";
import {
  triggerBreachAlert,
  triggerBreachAlertVer2,
  triggerBreachAlertVer3,
  triggerBreachAlertVer4,
  triggerSignupReportEmail,
  triggerVerificationEmail,
} from "./actions";
import { Button } from "../../../../../components/client/Button";

export type Props = {
  emailAddresses: string[];
};

const STORYBOOK_BASE = "http://localhost:6006/?path=/story";

type EmailCard = {
  title: string;
  description: string;
  storybookId: string;
  action: (email: string) => Promise<unknown>;
};

const otherEmails: EmailCard[] = [
  {
    title: "Signup report",
    description:
      "Summary email listing all known breaches for a monitored address.",
    storybookId: "emails-signup-report--signup-report-email-no-breaches-story",
    action: triggerSignupReportEmail,
  },
  {
    title: "Verify email address",
    description:
      "Confirmation email sent when adding a new address to monitor.",
    storybookId:
      "emails-verify-email-address--verify-email-address-email-story",
    action: triggerVerificationEmail,
  },
];

const breachAlertVariants: EmailCard[] = [
  {
    title: "Default",
    description:
      "Light purple hero banner, plain-text breach details, inline Q&A FAQs.",
    storybookId: "emails-breach-alert--breach-alert-email-default-story",
    action: triggerBreachAlert,
  },
  {
    title: "Version 2",
    description:
      "Rounded purple hero, source label badge on breach details, FAQs separated by dividers.",
    storybookId: "emails-breach-alert--breach-alert-email-version-2-story",
    action: triggerBreachAlertVer2,
  },
  {
    title: "Version 3",
    description:
      "No hero, logo with a thin divider, breach details in a grey card, stacked Q&A FAQs.",
    storybookId: "emails-breach-alert--breach-alert-email-version-3-story",
    action: triggerBreachAlertVer3,
  },
  {
    title: "Version 4",
    description:
      "Thin purple accent bar at top, centered heading, breach details in a bordered card, numbered FAQs.",
    storybookId: "emails-breach-alert--breach-alert-email-version-4-story",
    action: triggerBreachAlertVer4,
  },
];

export const EmailTrigger = (props: Props) => {
  const [selectedEmailAddress, setSelectedEmailAddress] = useState(
    props.emailAddresses[0],
  );
  const [sendingCard, setSendingCard] = useState<string | null>(null);

  function triggerCard(card: EmailCard) {
    setSendingCard(card.title);
    const toastLoading = toast.loading(`Sending ${card.title}…`);
    void card
      .action(selectedEmailAddress)
      .then(() => {
        setSendingCard(null);
        toast.dismiss(toastLoading);
        toast.success(`${card.title} sent!`, {
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch(() => {
        setSendingCard(null);
        toast.dismiss(toastLoading);
        toast.error(`Failed to send ${card.title}`, {
          isLoading: false,
          autoClose: 5000,
        });
      });
  }

  function renderCard(card: EmailCard) {
    return (
      <div key={card.title} className={styles.card}>
        <div className={styles.cardBody}>
          <p className={styles.cardTitle}>{card.title}</p>
          <p className={styles.cardDescription}>{card.description}</p>
        </div>
        <div className={styles.cardFooter}>
          <Button
            variant="primary"
            small
            isLoading={sendingCard === card.title}
            onPress={() => triggerCard(card)}
          >
            Send
          </Button>
          <a
            href={`${STORYBOOK_BASE}/${card.storybookId}`}
            target="_blank"
            rel="noreferrer"
            className={styles.storybookLink}
          >
            View in Storybook ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.wrapper}>
      <h1>Trigger a test email</h1>
      <div className={styles.addressSection}>
        <div className={styles.addressPicker}>
          <label htmlFor="targetEmail">To:</label>
          <select
            name="targetEmail"
            id="targetEmail"
            value={selectedEmailAddress}
            onChange={(e) => setSelectedEmailAddress(e.target.value)}
          >
            {props.emailAddresses.map((emailAddress) => (
              <option key={emailAddress} id={emailAddress}>
                {emailAddress}
              </option>
            ))}
          </select>
        </div>
        <small>
          <Link href={"/user/settings"}>
            (manage your email addresses here)
          </Link>
        </small>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Other emails</p>
        <div className={styles.grid}>{otherEmails.map(renderCard)}</div>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionLabel}>Breach alert variants</p>
        <div className={styles.grid}>{breachAlertVariants.map(renderCard)}</div>
      </div>
      <ToastContainer position="top-center" />
    </main>
  );
};
