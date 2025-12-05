/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SVGProps } from "react";
import styles from "./HeroImage.module.scss";
import { ExtendedReactLocalization } from "../../../functions/l10n";

export const HeroImageAll = ({
  l10n,
  ...svgProps
}: SVGProps<SVGSVGElement> & { l10n: ExtendedReactLocalization }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="514"
      fill="none"
      viewBox="0 0 514 640"
      role="img"
      className={styles.preventUserSelection}
      {...svgProps}
    >
      <g clipPath="url(#clip0_1942_12276)">
        <mask id="path-2-inside-1_1942_12276" fill="#fff">
          <path d="M482.528 123.926c5.841 0 10.575 4.734 10.575 10.575v70.5c0 5.84-4.734 10.575-10.575 10.575v-91.65z"></path>
        </mask>
        <path
          fill="url(#paint0_linear_1942_12276)"
          d="M482.528 123.926c5.841 0 10.575 4.734 10.575 10.575v70.5c0 5.84-4.734 10.575-10.575 10.575v-91.65z"
        ></path>
        <path
          fill="#BFBFC7"
          d="M481.353 134.501v70.5h23.5v-70.5h-23.5zm12.925 81.075v-91.65h-23.5v91.65h23.5zm-12.925-10.575c0-.649.526-1.175 1.175-1.175v23.5c12.33 0 22.325-9.995 22.325-22.325h-23.5zm1.175-69.325a1.175 1.175 0 01-1.175-1.175h23.5c0-12.33-9.995-22.325-22.325-22.325v23.5z"
          mask="url(#path-2-inside-1_1942_12276)"
        ></path>
        <path
          fill="#F9F9FA"
          stroke="#BFBFC7"
          strokeMiterlimit="10"
          strokeWidth="9.4"
          d="M422.391 24.3H79.761C49.13 24.3 24.3 49.13 24.3 79.76v697.952c0 30.63 24.83 55.461 55.46 55.461h342.631c30.63 0 55.46-24.831 55.46-55.461V79.76c0-30.63-24.83-55.46-55.46-55.46z"
        ></path>
        <path
          fill="url(#paint1_linear_1942_12276)"
          d="M152.244 90.385l-4.005-2.294-9.144-5.236-.284-.163a4.889 4.889 0 00-4.836 0l-.284.165-12.858 7.364-.284.165a4.805 4.805 0 00-2.418 4.157v15.383a4.809 4.809 0 002.418 4.158l13.146 7.529a2.026 2.026 0 002.755-.731c.268-.46.34-1.008.201-1.521a1.988 1.988 0 00-.939-1.213l-12.858-7.363a1.373 1.373 0 01-.692-1.189V94.874c.001-.492.265-.946.692-1.19l2.276-1.304 10.568-6.064a1.394 1.394 0 011.379 0l12.862 7.366c.425.244.688.697.69 1.187v14.732a1.372 1.372 0 01-.693 1.189l-4.351 2.492-2.196-3.311a10.337 10.337 0 003.483-7.734c0-5.736-4.703-10.403-10.486-10.403s-10.487 4.667-10.487 10.403c0 5.736 4.704 10.402 10.487 10.402a10.518 10.518 0 003.54-.611l3.335 5.029c.052.077.109.15.17.22l.035.036c.07.076.147.146.229.209.02.016.038.033.06.048.09.065.185.123.284.174l.069.03c.088.04.179.073.273.101l.062.02c.106.027.214.044.323.052h.182c.061 0 .122-.007.182-.012h.084c.115-.016.228-.042.339-.077.029-.009.058-.022.088-.033.088-.032.173-.07.256-.114.018-.01.04-.015.058-.027l6.289-3.594a4.81 4.81 0 002.418-4.164V94.542a4.803 4.803 0 00-2.418-4.157zm-22.312 11.852a6.454 6.454 0 116.454 6.4 6.435 6.435 0 01-6.454-6.4z"
        ></path>
        <path
          fill="url(#paint2_linear_1942_12276)"
          d="M152.244 90.385l-4.005-2.294-9.144-5.236-.284-.163a4.889 4.889 0 00-4.836 0l-.284.165-12.858 7.364-.284.165a4.805 4.805 0 00-2.418 4.157v15.383a4.809 4.809 0 002.418 4.158l13.146 7.529a2.026 2.026 0 002.755-.731c.268-.46.34-1.008.201-1.521a1.988 1.988 0 00-.939-1.213l-12.858-7.363a1.373 1.373 0 01-.692-1.189V94.874c.001-.492.265-.946.692-1.19l2.276-1.304 10.568-6.064a1.394 1.394 0 011.379 0l12.862 7.366c.425.244.688.697.69 1.187v14.732a1.372 1.372 0 01-.693 1.189l-4.351 2.492-2.196-3.311a10.337 10.337 0 003.483-7.734c0-5.736-4.703-10.403-10.486-10.403s-10.487 4.667-10.487 10.403c0 5.736 4.704 10.402 10.487 10.402a10.518 10.518 0 003.54-.611l3.335 5.029c.052.077.109.15.17.22l.035.036c.07.076.147.146.229.209.02.016.038.033.06.048.09.065.185.123.284.174l.069.03c.088.04.179.073.273.101l.062.02c.106.027.214.044.323.052h.182c.061 0 .122-.007.182-.012h.084c.115-.016.228-.042.339-.077.029-.009.058-.022.088-.033.088-.032.173-.07.256-.114.018-.01.04-.015.058-.027l6.289-3.594a4.81 4.81 0 002.418-4.164V94.542a4.803 4.803 0 00-2.418-4.157zm-22.312 11.852a6.454 6.454 0 116.454 6.4 6.435 6.435 0 01-6.454-6.4z"
        ></path>
        <path
          fill="url(#paint3_linear_1942_12276)"
          d="M152.242 90.385l-4.005-2.294-5.587-3.197a4.308 4.308 0 00-4.16-.063l-2.795 1.485a1.396 1.396 0 011.38 0l12.862 7.366c.425.245.688.697.69 1.188v14.732a1.37 1.37 0 01-.693 1.189l-4.351 2.492.679 1.085a2.843 2.843 0 003.827.954l2.153-1.231a4.796 4.796 0 002.418-4.165V94.543a4.793 4.793 0 00-2.418-4.158z"
        ></path>
        <path
          fill="url(#paint4_linear_1942_12276)"
          d="M150.627 94.874v7.147h4.033v-7.478a4.793 4.793 0 00-2.418-4.158l-4.005-2.294-5.587-3.197a4.308 4.308 0 00-4.16-.063l-2.795 1.485a1.4 1.4 0 011.38 0l12.862 7.366c.426.246.689.7.69 1.192z"
        ></path>
        <path
          fill="url(#paint5_linear_1942_12276)"
          d="M150.625 103.171v6.431c0 .492-.265.945-.692 1.189l-4.351 2.491.678 1.086a2.846 2.846 0 003.828.954l2.153-1.232a4.795 4.795 0 002.418-4.164v-6.755h-4.034z"
          opacity="0.9"
        ></path>
        <path
          fill="url(#paint6_linear_1942_12276)"
          d="M145.274 112.815l-1.887-2.845a10.504 10.504 0 01-3.463 2.057l2.007 3.028a89.272 89.272 0 003.343-2.24z"
          opacity="0.9"
        ></path>
        <text
          fill="#000"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-metropolis)"
          fontSize="29.225"
          fontWeight="bold"
          letterSpacing="-0.209"
        >
          <tspan x="169.275" y="112.431">
            Mozilla
          </tspan>
        </text>
        <text
          fill="#000"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-metropolis)"
          fontSize="29.225"
          letterSpacing="-0.626"
        >
          <tspan x="276.115" y="112.431">
            Monitor
          </tspan>
        </text>
        <path
          fill="#fff"
          d="M47.502 161.79a5.65 5.65 0 015.65-5.649H448.89a5.649 5.649 0 015.65 5.649v486.072a5.65 5.65 0 01-5.65 5.65H53.151a5.65 5.65 0 01-5.649-5.65V161.79z"
        ></path>
        <path
          stroke="#000"
          strokeOpacity="0.1"
          strokeWidth="0.706"
          d="M53.152 155.788a6.002 6.002 0 00-6.003 6.002v486.072a6.003 6.003 0 006.003 6.003H448.89a6.003 6.003 0 006.003-6.003V161.79a6.002 6.002 0 00-6.003-6.002H53.151z"
        ></path>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="161.529" y="536.999">
            {l10n.getString("passwords")}
          </tspan>
        </text>
        <rect
          width="11.236"
          height="11.236"
          x="141.1"
          y="525.128"
          fill="#9059FF"
          rx="2.043"
        ></rect>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="344.905" y="538.02">
            4x
          </tspan>
        </text>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="161.529" y="566.623">
            {l10n.getString("credit-cards")}
          </tspan>
        </text>
        <rect
          width="11.236"
          height="11.236"
          x="141.1"
          y="554.751"
          fill="#C689FF"
          rx="2.043"
        ></rect>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="345.905" y="566.623">
            3x
          </tspan>
        </text>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="161.529" y="595.224">
            {l10n.getString("bank-account-numbers")}
          </tspan>
        </text>
        <rect
          width="11.236"
          height="11.236"
          x="141.1"
          y="583.353"
          fill="#AB71FF"
          rx="2.043"
        ></rect>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="344.905" y="595.224">
            2x
          </tspan>
        </text>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="161.529" y="623.826">
            {l10n.getString("other-data-class")}
          </tspan>
        </text>
        <rect
          width="11.236"
          height="11.236"
          x="141.1"
          y="611.954"
          fill="#45278D"
          rx="2.043"
        ></rect>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="345.905" y="623.826">
            1x
          </tspan>
        </text>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="161.529" y="508.397">
            {l10n.getString("email-addresses")}
          </tspan>
        </text>
        <text
          fill="#6D6D6E"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="16.344"
          letterSpacing="0"
        >
          <tspan x="344.905" y="508.397">
            4x
          </tspan>
        </text>
        <rect
          width="11.236"
          height="11.236"
          x="141.1"
          y="496.526"
          fill="#592ACB"
          rx="2.043"
        ></rect>
        <path
          fill="#C689FF"
          d="M284.794 194.159a137.898 137.898 0 0122.32 7.786l-16.923 37.75a96.602 96.602 0 00-15.624-5.45l10.227-40.086z"
        ></path>
        <path
          fill="#AB71FF"
          d="M307.07 201.925a137.85 137.85 0 0120.666 11.476l-23.109 34.313a96.678 96.678 0 00-14.467-8.033l16.91-37.756z"
        ></path>
        <path
          fill="#45278D"
          d="M327.105 212.978a137.924 137.924 0 0118.484 14.735l-28.466 30.02a96.618 96.618 0 00-12.939-10.315l22.921-34.44z"
        ></path>
        <path
          fill="#89CFF5"
          d="M125.557 385.702a137.903 137.903 0 0113.869-139.372l33.383 24.435a96.535 96.535 0 00-9.708 97.561l-37.544 17.376z"
        ></path>
        <path
          fill="#89CFF5"
          d="M139.207 246.631A137.887 137.887 0 01196.45 201a137.886 137.886 0 0172.531-9.904l-5.483 41.005a96.526 96.526 0 00-90.842 38.875l-33.449-24.345z"
        ></path>
        <path
          fill="#592ACB"
          d="M345.588 227.712a137.912 137.912 0 0142.7 109.392 137.882 137.882 0 01-17.065 57.694 137.898 137.898 0 01-245.579-8.908l37.518-17.433a96.532 96.532 0 00183.851-34.15 96.527 96.527 0 00-29.89-76.574l28.465-30.021z"
        ></path>
        <path
          fill="#9059FF"
          d="M125.636 385.872a137.9 137.9 0 01160.297-191.417l-10.569 39.997a96.525 96.525 0 00-120.362 80.703 96.533 96.533 0 008.154 53.289l-37.52 17.428z"
        ></path>
        <circle cx="250.703" cy="326.247" r="96.53" fill="#fff"></circle>
        <text
          fill="#2A2A2A"
          className={styles.preserveWhitespace}
          fontFamily="var(--font-inter)"
          fontSize="50.847"
          fontWeight="600"
          letterSpacing="0"
        >
          <tspan x="222.257" y="338.181">
            14
          </tspan>
        </text>
        <text
          fill="#5B5B5B"
          className={styles.chartLabel}
          fontFamily="var(--font-inter)"
          fontSize="20"
          fontWeight="500"
          letterSpacing="0em"
          x="58.007492"
        >
          <tspan x="250.30249" y="373.251">
            {l10n.getString("landing-all-hero-image-chart-label")}
          </tspan>
        </text>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1942_12276"
          x1="487.816"
          x2="487.816"
          y1="123.926"
          y2="215.576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8060FE"></stop>
          <stop offset="1" stopColor="#626BFA"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1942_12276"
          x1="143.726"
          x2="125.795"
          y1="87.129"
          y2="118.184"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF980E"></stop>
          <stop offset="0.21" stopColor="#FF7139"></stop>
          <stop offset="0.36" stopColor="#FF5854"></stop>
          <stop offset="0.46" stopColor="#FF4F5E"></stop>
          <stop offset="0.69" stopColor="#FF3750"></stop>
          <stop offset="0.86" stopColor="#F92261"></stop>
          <stop offset="1" stopColor="#F5156C"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1942_12276"
          x1="143.726"
          x2="125.795"
          y1="87.129"
          y2="118.184"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF44F" stopOpacity="0.8"></stop>
          <stop offset="0.09" stopColor="#FFF44F" stopOpacity="0.7"></stop>
          <stop offset="0.75" stopColor="#FFF44F" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_1942_12276"
          x1="145.178"
          x2="145.178"
          y1="123.182"
          y2="84.706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A8EE6"></stop>
          <stop offset="0.24" stopColor="#5C79F0"></stop>
          <stop offset="0.63" stopColor="#9059FF"></stop>
          <stop offset="1" stopColor="#C139E6"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_1942_12276"
          x1="138.637"
          x2="154.627"
          y1="84.567"
          y2="100.557"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6E008B" stopOpacity="0.5"></stop>
          <stop offset="0.5" stopColor="#C846CB" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_1942_12276"
          x1="153.12"
          x2="145.611"
          y1="104.348"
          y2="111.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.14" stopColor="#6A2BEA" stopOpacity="0"></stop>
          <stop offset="0.34" stopColor="#642DE4" stopOpacity="0.03"></stop>
          <stop offset="0.55" stopColor="#5131D3" stopOpacity="0.12"></stop>
          <stop offset="0.76" stopColor="#3139B7" stopOpacity="0.27"></stop>
          <stop offset="0.98" stopColor="#054490" stopOpacity="0.48"></stop>
          <stop offset="1" stopColor="#00458B" stopOpacity="0.5"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_1942_12276"
          x1="141.074"
          x2="143.251"
          y1="110.805"
          y2="113.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#960E18" stopOpacity="0.6"></stop>
          <stop offset="0.19" stopColor="#AC1624" stopOpacity="0.48"></stop>
          <stop offset="0.58" stopColor="#E42C41" stopOpacity="0.16"></stop>
          <stop offset="0.75" stopColor="#FF3750" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="clip0_1942_12276">
          <path fill="#fff" d="M0 0h514v640H0V0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
