/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./EmailTrigger.module.scss";
import {
  triggerBreachAlert,
  triggerFirstDataBrokerRemovalFixed,
  triggerMonthlyActivityFree,
  triggerMonthlyActivityPlus,
  triggerPlusExpirationEmail,
  triggerSignupReportEmail,
  triggerVerificationEmail,
} from "./actions";
import { Button } from "../../../../../components/client/Button";

export type Props = {
  emailAddresses: string[];
};

export const EmailTrigger = (props: Props) => {
  const [selectedEmailAddress, setSelectedEmailAddress] = useState(
    props.emailAddresses[0],
  );
  const [isSendingSignupReport, setIsSendingSignupReport] = useState(false);
  const [isSendingVerification, setIsSendingVerification] = useState(false);
  const [isSendingRedesignedBreachAlert, setIsSendingRedesignedBreachAlert] =
    useState(false);
  const [
    isSendingMonthlyActivityFreeOverview,
    setIsSendingMonthlyActivityFreeOverview,
  ] = useState(false);
  const [
    isSendingMonthlyActivityPlusOverview,
    setIsSendingMonthlyActivityPlusOverview,
  ] = useState(false);
  const [
    isSendingPlusExpirationNotification,
    setIsSendingPlusExpirationNotification,
  ] = useState(false);
  const [firstDataBrokerRemovalFixed, setFirstDataBrokerRemovalFixed] =
    useState(false);

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
      <div className={styles.triggers}>
        <Button
          variant="primary"
          isLoading={isSendingSignupReport}
          onPress={() => {
            setIsSendingSignupReport(true);
            void triggerSignupReportEmail(selectedEmailAddress).then(() => {
              setIsSendingSignupReport(false);
            });
          }}
        >
          Signup report
        </Button>
        <Button
          variant="primary"
          isLoading={isSendingVerification}
          onPress={() => {
            setIsSendingVerification(true);
            void triggerVerificationEmail(selectedEmailAddress).then(() => {
              setIsSendingVerification(false);
            });
          }}
        >
          Verify email address
        </Button>
        <Button
          variant="primary"
          isLoading={isSendingMonthlyActivityFreeOverview}
          onPress={() => {
            setIsSendingMonthlyActivityFreeOverview(true);
            void triggerMonthlyActivityFree(selectedEmailAddress).then(() => {
              setIsSendingMonthlyActivityFreeOverview(false);
            });
          }}
        >
          Monthly activity overview (free)
        </Button>
        <Button
          variant="primary"
          isLoading={isSendingMonthlyActivityPlusOverview}
          onPress={() => {
            setIsSendingMonthlyActivityPlusOverview(true);
            void triggerMonthlyActivityPlus(selectedEmailAddress).then(() => {
              setIsSendingMonthlyActivityPlusOverview(false);
            });
          }}
        >
          Monthly activity overview (Plus)
        </Button>
        <Button
          variant="primary"
          isLoading={isSendingRedesignedBreachAlert}
          onPress={() => {
            setIsSendingRedesignedBreachAlert(true);
            void triggerBreachAlert(selectedEmailAddress).then(() => {
              setIsSendingRedesignedBreachAlert(false);
            });
          }}
        >
          Breach alert
        </Button>
        <Button
          variant="primary"
          isLoading={firstDataBrokerRemovalFixed}
          onPress={() => {
            setFirstDataBrokerRemovalFixed(true);
            void triggerFirstDataBrokerRemovalFixed(selectedEmailAddress).then(
              () => {
                setFirstDataBrokerRemovalFixed(false);
              },
            );
          }}
        >
          First data broker removal fixed
        </Button>
        <Button
          variant="primary"
          isLoading={isSendingPlusExpirationNotification}
          onPress={() => {
            setIsSendingPlusExpirationNotification(true);
            void triggerPlusExpirationEmail(selectedEmailAddress).then(() => {
              setIsSendingPlusExpirationNotification(false);
            });
          }}
        >
          Plus expiration notification
        </Button>
      </div>
    </main>
  );
};
