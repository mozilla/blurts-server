/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { CSSProperties } from "react";
import { useL10n } from "../../hooks/l10n";
import styles from "./PercentageChart.module.scss";

export type WelcomeToPremiumProps = {
  exposureReduction: number;
};
export const PercentageChart = (props: WelcomeToPremiumProps) => {
  const l10n = useL10n();

  const percentages: Array<[string, number]> = [
    ["reduction", props.exposureReduction / 100],
    ["other", (100 - props.exposureReduction) / 100],
  ];

  const diameter = 100;
  const ringWidth = 15;
  const radius = (diameter - ringWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const sliceBorderWidth = 0;
  const headingNumberSize = diameter / 6;
  const headingPercentageSize = diameter / 10;
  const headingLabelSize = headingNumberSize / 3;
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
    <figure className={styles.chartContainer} aria-hidden={true}>
      <div className={styles.chartWrapper}>
        <svg
          // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role#svg_and_roleimg
          role="img"
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
          <text x="50%" y={diameter / 2 - headingGap / 2} textAnchor="middle">
            {l10n.getFragment("exposure-reduction-chart-heading", {
              elems: {
                nr: (
                  <tspan
                    className={styles.percentageHeadingNr}
                    fontSize={headingNumberSize}
                  />
                ),
                percent: (
                  <tspan
                    className={styles.percent}
                    fontSize={headingPercentageSize}
                    dy={-(headingPercentageSize / 5)}
                  />
                ),
              },
              vars: {
                nr: props.exposureReduction,
              },
            })}
          </text>
          {l10n.getFragment("exposure-reduction-chart-explanation", {
            elems: {
              label_line_1: (
                <text
                  className={styles.headingLabel}
                  fontSize={headingLabelSize}
                  x={diameter / 2}
                  y={diameter / 2 + headingLabelSize + headingGap / 2}
                  textAnchor="middle"
                />
              ),
              label_line_2: (
                <text
                  className={styles.headingLabel}
                  fontSize={headingLabelSize}
                  x={diameter / 2}
                  y={diameter / 2 + (headingLabelSize + headingGap / 2) * 2}
                  textAnchor="middle"
                />
              ),
            },
            vars: { nr: props.exposureReduction },
          })}
        </svg>
      </div>
    </figure>
  );
};
