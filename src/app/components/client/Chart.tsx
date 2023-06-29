/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { CSSProperties } from "react";
import { useL10n } from "../../hooks/l10n";
import styles from "./Chart.module.scss";

export type Props = {
  data: Array<[string, number]>;
  totalExposures: number;
};
export const DoughnutChart = (props: Props) => {
  const l10n = useL10n();
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

  return (
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
                <th>{l10n.getString("exposure-chart-legend-heading-type")}</th>
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
        </div>
      </div>
      <figcaption>
        This chart shows the total number of exposures that are fixed (
        {sumOfFixedExposures} out of {props.totalExposures}).
      </figcaption>
    </figure>
  );
};
