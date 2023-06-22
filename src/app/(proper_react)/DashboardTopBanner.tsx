/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./DashboardTopBanner.module.scss";
import { ReactElement } from "react";
import { Button } from "../components/server/Button";

export type DashboardTopBannerProps = {
  type: "LetsFixDataContent" | "DataBrokerScanUpsellContent" | "NoExposuresFoundContent" | "ResumeBreachResolutionContent" | "YourDataIsProtected";
  chart: ReactElement,
  data?: {
    dataBreaches?: number,
    infoForSale?: number,
    exposures?: {
      total?: number,
      fixed?: number,
      remaining?: number,
    }
  }
}

export const DashboardTopBanner = (props: DashboardTopBannerProps) => {
  const contentData = {
    LetsFixDataContent: {
      headline: "Let's protect your data",
      description: `We found your data in ${props.data?.dataBreaches} data breaches and ${props.data?.infoForSale} sites selling your personal info. We'll guide you on how to fix it.`,
      cta: {
        content: "Let's fix it",
        onClick: () => { // do something 
        }
      }
    },
    DataBrokerScanUpsellContent: {
      headline: "Monitor now protects you even more",
      // TODO: Make 190 a variable for num of data broker sites
      description: "We can now find exposures of your personal info on 190 data broker sites that publish and sell your personal info for a profit.",
      cta: {
        content: "Get first scan free",
        onClick: () => { // do something 
        }
      }
    },
    NoExposuresFoundContent: {
      headline: "No exposures found",
      description: "Great news! We searched all known data breaches and 190 data broker sites that sell personal info and found no exposures. Upgrade to premium and we'll monitor for any new exposures.",
      cta: {
        content: "Get continuous protection",
        onClick: () => { // do something 
        }
      }
    },
    ResumeBreachResolutionContent: {
      headline: "Let's keep protecting your data",
      description: `You still have ${props.data?.exposures?.remaining} exposures left to fix. Keepp going and protect yourself. We'll guide you step by step.`,
      cta: {
        content: "Let's keep going",
        onClick: () => { // do something 
        }
      }
    },
    YourDataIsProtected: {
      headline: "Your data is protected",
      description: `Great work, all ${props.data?.exposures?.total} exposures of your data are fixed or in progress! We’ll keep monitoring and will alert you of any new exposures.`,
      cta: {
        content: "See what's fixed",
        onClick: () => { // do something 
        }
      }
    }
  }
  
  const content = contentData[props.type];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      {content && (
          <>
            <h3>{content.headline}</h3>
            <p>{content.description}</p>
            <span className={styles.cta}>
              <Button
                type="primary"
                small
                content={content.cta.content}
                onClick={content.cta.onClick}
              />
            </span>
          </>
        )} 
      </div>
      <div className={styles.chart}>
      Chart goes here
      </div>
    </div>
  );
}
