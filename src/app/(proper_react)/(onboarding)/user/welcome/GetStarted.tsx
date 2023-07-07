/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import { useOverlayTriggerState } from "react-stately";
import { useOverlayTrigger } from "react-aria";
import howItWorksHero from "./images/welcome-how-it-works.svg";
import { useL10n } from "../../../../hooks/l10n";
import { ModalOverlay } from "../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../components/client/dialog/Dialog";
import { Button } from "../../../../components/server/Button";

import viewStyles from "./View.module.scss";
import getStartedStyles from "./GetStarted.module.scss";

export type Props = {
  onStart: () => void;
};

export const GetStarted = (props: Props) => {
  const l10n = useL10n();
  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState
  );

  return (
    <div className={viewStyles.stepContent}>
      <h1>{l10n.getString("onboarding-get-started-heading")}</h1>
      <p>{l10n.getString("onboarding-get-started-content-data")}</p>
      <p>{l10n.getString("onboarding-get-started-content-price")}</p>
      <p>
        <button
          {...explainerDialogTrigger.triggerProps}
          onClick={() => explainerDialogState.open()}
          className={viewStyles.explainerTrigger}
        >
          {l10n.getString("onboarding-get-started-content-explainer")}
        </button>
        {explainerDialogState.isOpen && (
          <ModalOverlay
            state={explainerDialogState}
            {...explainerDialogTrigger.overlayProps}
            isDismissable={true}
          >
            <Dialog
              title={
                <>
                  {l10n.getString(
                    "onboarding-get-started-how-it-works-dialog-heading-line1"
                  )}
                  <br />
                  {l10n.getString(
                    "onboarding-get-started-how-it-works-dialog-heading-line2"
                  )}
                </>
              }
              illustration={<Image src={howItWorksHero} alt="" />}
            >
              <div
                className={`${viewStyles.dialogContents} ${getStartedStyles.dialogContents}`}
              >
                <ol className={viewStyles.list}>
                  <li className={viewStyles.listItem}>
                    <h4>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step1-heading"
                      )}
                    </h4>
                    <p>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step1-content",
                        {
                          // TODO: Can we get this value from the OneRep API?
                          dataBrokerCount: 190,
                        }
                      )}
                    </p>
                  </li>
                  <li className={viewStyles.listItem}>
                    <h4>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step2-heading"
                      )}
                    </h4>
                    <p>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step2-content"
                      )}
                    </p>
                  </li>
                  <li className={viewStyles.listItem}>
                    <h4>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step3-heading"
                      )}
                    </h4>
                    <p>
                      {l10n.getString(
                        "onboarding-get-started-how-it-works-dialog-step3-content"
                      )}
                    </p>
                  </li>
                </ol>
                <div className={viewStyles.confirmButtonWrapper}>
                  <Button
                    type="primary"
                    onClick={() => explainerDialogState.close()}
                    autoFocus={true}
                    className={viewStyles.startButton}
                  >
                    {l10n.getString(
                      "onboarding-get-started-how-it-works-dialog-confirm-label"
                    )}
                  </Button>
                </div>
              </div>
            </Dialog>
          </ModalOverlay>
        )}
      </p>
      <div className={viewStyles.stepButtonWrapper}>
        <Button type="primary" onClick={() => props.onStart()}>
          {l10n.getString("onboarding-get-started-cta-label")}
        </Button>
      </div>
    </div>
  );
};
