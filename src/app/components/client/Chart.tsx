/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { CSSProperties } from "react";
import { useL10n } from "../../hooks/l10n";
import styles from "./Chart.module.scss";
import { QuestionMarkCircle } from "../server/Icons";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { Button } from "../server/Button";
import { ModalOverlay } from "./dialog/ModalOverlay";
import { Dialog } from "./dialog/Dialog";
import ModalImage from "../client/assets/modal-default-img.svg";
import Image from "next/image";
import Link from "next/link";

export type Props = {
  data: Array<[string, number]>;
};

export const DoughnutChart = (props: Props) => {
  const l10n = useL10n();

  const explainerDialogState = useOverlayTriggerState({});
  const explainerDialogTrigger = useOverlayTrigger(
    { type: "dialog" },
    explainerDialogState
  );

  const sumOfFixedExposures = props.data.reduce(
    (total, [_label, num]) => total + num,
    0
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
        style={
          {
            "--sliceLength": circumference * (1 - percent) + sliceBorderWidth,
          } as CSSProperties
        }
        // Rotate it to not overlap the other slices
        transform={`rotate(${-90 + 360 * percentOffset} ${diameter / 2} ${
          diameter / 2
        })`}
      />
    );
  });
  const modalContent = (
    <div className={styles.modalBodyContent}>
      <p>
        {l10n.getString("modal-active-number-of-exposures-part-one", {
          limit: 5,
        })}
      </p>
      <p>{l10n.getString("modal-active-number-of-exposures-part-two")}</p>
      <p>{l10n.getString("modal-active-number-of-exposures-part-three")}</p>
      <div className={styles.confirmButtonWrapper}>
        <Button
          variant="primary"
          onClick={() => explainerDialogState.close()}
          autoFocus={true}
          className={styles.startButton}
        >
          {l10n.getString("modal-cta-ok")}
        </Button>
      </div>
    </div>
  );

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
            {l10n.getFragment("exposure-chart-heading", {
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
            <div className={styles.prompt}>
              <p>
                {l10n.getString("exposure-chart-returning-user-upgrade-prompt")}
              </p>
              <Link href="/redesign/user/welcome">
                {l10n.getString(
                  "exposure-chart-returning-user-upgrade-prompt-cta"
                )}
              </Link>
            </div>
          </div>
        </div>
        <figcaption>
          {l10n.getString("exposure-chart-caption")}
          <button
            aria-label={l10n.getString("modal-open-alt")}
            onClick={() => explainerDialogState.open()}
          >
            <QuestionMarkCircle
              width="15"
              height="15"
              alt={l10n.getString("modal-open-alt")}
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
            title={l10n.getString("modal-active-number-of-exposures-title")}
            illustration={<Image src={ModalImage} alt="" />}
            onDismiss={() => explainerDialogState.close()}
          >
            {modalContent}
          </Dialog>
        </ModalOverlay>
      )}
    </>
  );
};
