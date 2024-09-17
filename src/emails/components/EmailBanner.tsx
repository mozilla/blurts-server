/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const EmailBanner = (props: {
  heading: string;
  content: string;
  ctaLabel: string;
  ctaTarget: string;
}) => {
  return (
    <mj-wrapper padding="24px 16px">
      <mj-section padding="24px" background-color="#7542E5" border-radius="8px">
        <mj-column vertical-align="middle" padding="0">
          <mj-text
            font-size="16px"
            line-height="24px"
            padding="0"
            color="white"
          >
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
          </mj-text>
        </mj-column>
        <mj-column vertical-align="middle" padding="0" width="230px">
          <mj-button
            href={props.ctaTarget}
            background-color="transparent"
            font-weight={600}
            font-size="15px"
            line-height="22px"
            border-radius="8px"
            border="2px solid white"
            color="white"
            padding="0"
          >
            {props.ctaLabel}
          </mj-button>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  );
};
