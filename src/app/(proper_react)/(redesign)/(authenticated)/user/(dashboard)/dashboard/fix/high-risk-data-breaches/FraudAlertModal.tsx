/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useOverlayTriggerState } from "react-stately";
import { useL10n } from "../../../../../../../../hooks/l10n";
import { useButton, useOverlayTrigger } from "react-aria";
import { useRef } from "react";
import { QuestionMarkCircle } from "../../../../../../../../components/server/Icons";
import { ModalOverlay } from "../../../../../../../../components/client/dialog/ModalOverlay";
import { Dialog } from "../../../../../../../../components/client/dialog/Dialog";
import Image from "next/image";
import FraudAlertDialogIllustration from "../images/fraud-alert-modal-illustration.svg";
import { Button } from "../../../../../../../../components/client/Button";
import styles from "./FraudAlertModal.module.scss";

export const FraudAlertModal = () => {
  const l10n = useL10n();
  const overlayTriggerState = useOverlayTriggerState({
    defaultOpen: false,
  });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    overlayTriggerState,
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(triggerProps, triggerRef);

  const fraudAlertLink =
    "https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts";
  const equifaxLink =
    "https://www.equifax.com/personal/credit-report-services/";
  const experianLink = "https://www.experian.com/help/";
  const transunionLink = "https://www.transunion.com/credit-help";

  return (
    <>
      <button
        {...buttonProps}
        ref={triggerRef}
        className={styles.triggerButton}
      >
        <QuestionMarkCircle
          alt={l10n.getString(
            "fix-flow-data-broker-profiles-view-data-broker-profiles-more-dialog-trigger-label",
          )}
          width={18}
          height={18}
        />
      </button>
      {overlayTriggerState.isOpen && (
        <ModalOverlay
          state={overlayTriggerState}
          {...overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={l10n.getString("ssn-modal-title")}
            illustration={<Image src={FraudAlertDialogIllustration} alt="" />}
          >
            <div className={styles.dialogContents}>
              <p>
                {l10n.getFragment("ssn-modal-description-fraud-part-one", {
                  elems: {
                    b: <strong />,
                  },
                })}
                &nbsp;
                {l10n.getString("ssn-modal-description-fraud-part-two")}
              </p>
              <p>
                {l10n.getFragment(
                  "ssn-modal-description-freeze-credit-part-one",
                  {
                    elems: {
                      b: <strong />,
                    },
                  },
                )}
                &nbsp;
                {l10n.getFragment(
                  "ssn-modal-description-freeze-credit-part-two",
                  {
                    elems: {
                      equifax_link: (
                        <a
                          href={equifaxLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        />
                      ),
                      experian_link: (
                        <a
                          href={experianLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        />
                      ),
                      transunion_link: (
                        <a
                          href={transunionLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        />
                      ),
                    },
                  },
                )}
              </p>
              <p>
                <a
                  href={fraudAlertLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {l10n.getString("ssn-modal-learn-more")}
                </a>
              </p>
              <div className={styles.confirmButtonWrapper}>
                <Button
                  variant="primary"
                  // TODO: Test dialog closing
                  /* c8 ignore next */
                  onPress={() => overlayTriggerState.close()}
                  autoFocus={true}
                >
                  {l10n.getString("ssn-modal-ok")}
                </Button>
              </div>
            </div>
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
