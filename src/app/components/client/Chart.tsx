/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useL10n } from "../../hooks/l10n";
import styles from "./Chart.module.scss";
import { QuestionMarkCircle } from "../server/Icons";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { Button } from "../client/Button";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import ModalImage from "../client/assets/modal-default-img.svg";
import { DashboardSummary } from "../../functions/server/dashboard";
import { WaitlistDialog } from "./SubscriberWaitlistDialog";
import { useTelemetry } from "../../hooks/useTelemetry";
import {
  CONST_MAX_NUM_ADDRESSES,
  CONST_MAX_NUM_ADDRESSES_PLUS,
  CONST_ONEREP_MAX_SCANS_THRESHOLD,
} from "../../../constants";
import { VisuallyHidden } from "../server/VisuallyHidden";

export type Props = {
  data: Array<[string, number]>;
  isEligibleForFreeScan: boolean;
  isEligibleForPremium: boolean;
  isPremiumUser: boolean;
  scanInProgress: boolean;
  isShowFixed: boolean;
  summary: DashboardSummary;
  totalNumberOfPerformedScans?: number;
};

export const DoughnutChart = (props: Props) => {
  const l10n = useL10n();
  const recordTelemetry = useTelemetry();

  const explainerDialogState = useOverlayTriggerState({
    onOpenChange: (isOpen) => {
      recordTelemetry("popup", isOpen ? "view" : "exit", {
        popup_id: `number_of_exposures_info`,
      });
    },
  });
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState,
  );
  const waitlistDialogState = useOverlayTriggerState({});
  const waitlistDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    waitlistDialogState,
  );
  const sumOfFixedExposures = props.data.reduce(
    (total, [_label, num]) => total + num,
    0,
  );

  const percentages = props.data.map(([label, num]) => {
    return [label, num / sumOfFixedExposures] as const;
  });

  const diameter = 100;
  const ringWidth = 15;
  const radius = (diameter - ringWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const sliceBorderWidth = 0;
  const headingNumberSize = diameter / 8;
  const headingLabelSize = headingNumberSize / 2;
  const headingGap = 4;

  const slices = percentages.map(([label, percent], index) => {
    const percentOffset = percentages
      .slice(0, index)
      .reduce((offset, [_label, num]) => offset + num, 0);

    const sliceLength = circumference * (1 - percent) + sliceBorderWidth;

    return (
      <circle
        key={label}
        cx={diameter / 2}
        cy={diameter / 2}
        r={radius}
        className={styles.slice}
        fill="none"
        strokeWidth={ringWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={`${sliceLength}`}
        // Rotate it to not overlap the other slices
        transform={`rotate(${-90 + 360 * percentOffset} ${diameter / 2} ${
          diameter / 2
        })`}
      />
    );
  });

  const includesDataBrokers = props.isEligibleForPremium || props.isPremiumUser;
  const modalContentActionNeeded = (
    <div className={styles.modalBodyContent}>
      <p>
        {l10n.getString(
          includesDataBrokers
            ? "modal-active-number-of-exposures-part-one-premium"
            : "modal-active-number-of-exposures-part-one-all",
          {
            limit: props.isPremiumUser
              ? CONST_MAX_NUM_ADDRESSES_PLUS
              : CONST_MAX_NUM_ADDRESSES,
          },
        )}
      </p>
      <p>{l10n.getString("modal-active-number-of-exposures-part-two")}</p>
      <p>
        {l10n.getString(
          includesDataBrokers
            ? "modal-active-number-of-exposures-part-three-premium"
            : "modal-active-number-of-exposures-part-three-all",
        )}
      </p>
      <div className={styles.confirmButtonWrapper}>
        <Button
          variant="primary"
          // TODO: Add unit test when changing this code:
          /* c8 ignore next */
          onPress={() => explainerDialogState.close()}
          autoFocus={true}
          className={styles.startButton}
        >
          {l10n.getString("modal-cta-ok")}
        </Button>
      </div>
    </div>
  );

  const modalContentFixed = (
    <div className={styles.modalBodyContent}>
      {l10n.getString(
        includesDataBrokers
          ? "modal-fixed-number-of-exposures-part-one"
          : "modal-fixed-number-of-exposures-all",
      )}
      {includesDataBrokers &&
        l10n.getString("modal-fixed-number-of-exposures-part-two")}
    </div>
  );

  const getPromptContent = () => {
    if (!props.scanInProgress && props.isEligibleForFreeScan) {
      return (
        <>
          <p>
            {l10n.getString("exposure-chart-returning-user-upgrade-prompt")}
          </p>
          {typeof props.totalNumberOfPerformedScans === "undefined" ||
          props.totalNumberOfPerformedScans <
            CONST_ONEREP_MAX_SCANS_THRESHOLD ? (
            <Link
              href="/user/welcome/free-scan?referrer=dashboard"
              onClick={() => {
                recordTelemetry("link", "click", {
                  link_id: "exposures_chart_free_scan",
                });
              }}
            >
              {l10n.getString(
                "exposure-chart-returning-user-upgrade-prompt-cta",
              )}
            </Link>
          ) : (
            <>
              <Button variant="link" {...waitlistDialogTrigger.triggerProps}>
                {l10n.getString(
                  "exposure-chart-returning-user-upgrade-prompt-cta",
                )}
              </Button>
              <WaitlistDialog
                dialogTriggerState={waitlistDialogState}
                {...waitlistDialogTrigger.overlayProps}
              />
            </>
          )}
        </>
      );
    }

    if (props.scanInProgress) {
      return (
        <p>
          {l10n.getFragment("exposure-chart-scan-in-progress-prompt", {
            elems: { b: <strong /> },
          })}
        </p>
      );
    }
  };

  const promptContent = getPromptContent();

  return (
    <>
      <figure className={styles.chartContainer}>
        <div className={styles.chartAndLegendWrapper}>
          <svg
            // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role#svg_and_roleimg
            role="img"
            aria-label={l10n
              .getString("exposure-chart-heading", {
                nr: sumOfFixedExposures,
              })
              .replace("<nr>", "")
              .replace("</nr>", "")
              .replace("<label>", "")
              .replace("</label>", "")}
            viewBox={`0 0 ${diameter} ${diameter}`}
            className={styles.chart}
          >
            <circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              fill="none"
              strokeWidth={ringWidth}
              className={styles.gutter}
            />
            {slices}
            {props.isShowFixed
              ? l10n.getFragment("exposure-chart-heading-fixed", {
                  elems: {
                    nr: (
                      <text
                        className={styles.headingNr}
                        fontSize={headingNumberSize}
                        x={diameter / 2}
                        y={diameter / 2 - headingGap / 2}
                        textAnchor="middle"
                      />
                    ),
                    label: (
                      <text
                        className={styles.headingLabel}
                        fontSize={headingLabelSize}
                        x={diameter / 2}
                        y={diameter / 2 + headingLabelSize + headingGap / 2}
                        textAnchor="middle"
                      />
                    ),
                  },
                  vars: { nr: sumOfFixedExposures },
                })
              : l10n.getFragment("exposure-chart-heading", {
                  elems: {
                    nr: (
                      <text
                        className={styles.headingNr}
                        fontSize={headingNumberSize}
                        x={diameter / 2}
                        y={diameter / 2 - headingGap / 2}
                        textAnchor="middle"
                      />
                    ),
                    label: (
                      <text
                        className={styles.headingLabel}
                        fontSize={headingLabelSize}
                        x={diameter / 2}
                        y={diameter / 2 + headingLabelSize + headingGap / 2}
                        textAnchor="middle"
                      />
                    ),
                  },
                  vars: { nr: sumOfFixedExposures },
                })}
          </svg>
          <div className={styles.legend}>
            <table>
              <thead>
                <tr>
                  {/* The first column contains the chart colour,
                      which is irrelevant to screen readers. */}
                  <td aria-hidden={true} />
                  <th>
                    {l10n.getString("exposure-chart-legend-heading-type")}
                  </th>
                  <th>{l10n.getString("exposure-chart-legend-heading-nr")}</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map(([label, num]) => (
                  <tr key={label}>
                    <td aria-hidden={true}>
                      <svg viewBox="0 0 10 10">
                        <rect rx={2} width="10" height="10" />
                      </svg>
                    </td>
                    <td>{label}</td>
                    <td>
                      {l10n.getString("exposure-chart-legend-value-nr", {
                        nr: num,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {promptContent && (
              <div className={styles.prompt}>{promptContent}</div>
            )}
          </div>
        </div>
        <figcaption>
          {props.isShowFixed
            ? l10n.getFragment("exposure-chart-caption-fixed", {
                vars: {
                  total_fixed_exposures_num:
                    props.summary.dataBreachFixedDataPointsNum +
                    props.summary.dataBrokerAutoFixedDataPointsNum +
                    props.summary.dataBrokerManuallyResolvedDataPointsNum,
                  total_exposures_num: props.summary.totalDataPointsNum,
                },
              })
            : l10n.getString("exposure-chart-caption")}
          <button
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onClick={() => explainerDialogState.open()}
            aria-label={l10n.getString("open-modal-alt")}
            aria-describedby="modalFixedNumberOfExposures"
          >
            <VisuallyHidden id="modalFixedNumberOfExposures">
              {props.isShowFixed
                ? l10n.getString("modal-fixed-number-of-exposures-title")
                : l10n.getString("modal-active-number-of-exposures-title")}
            </VisuallyHidden>
            <QuestionMarkCircle
              alt=""
              aria-label={l10n.getString("open-modal-alt")}
              width="15"
              height="15"
            />
          </button>
        </figcaption>
      </figure>
      {explainerDialogState.isOpen && (
        <ModalOverlay
          state={explainerDialogState}
          {...explainerDialogTrigger.overlayProps}
          isDismissable={true}
        >
          <Dialog
            title={
              props.isShowFixed
                ? l10n.getString("modal-fixed-number-of-exposures-title")
                : l10n.getString("modal-active-number-of-exposures-title")
            }
            illustration={<Image src={ModalImage} alt="" />}
            // TODO: Add unit test when changing this code:
            /* c8 ignore next */
            onDismiss={() => explainerDialogState.close()}
          >
            {props.isShowFixed ? modalContentFixed : modalContentActionNeeded}
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
