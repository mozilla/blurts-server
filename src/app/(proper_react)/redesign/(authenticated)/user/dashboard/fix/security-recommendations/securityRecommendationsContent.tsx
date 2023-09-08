/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { ReactNode } from "react";
import emailIllustration from "../images/security-recommendations-email.svg";
import phoneIllustration from "../images/security-recommendations-phone.svg";
import ipIllustration from "../images/security-recommendations-ip.svg";

export type SecurityRecommendationContent = {
  description: ReactNode;
  recommendations?: {
    title: string;
    steps: ReactNode;
    subtitle?: string;
  };
};

export type SecurityRecommendation = {
  type: "phone" | "email" | "ip";
  title: string;
  illustration: {
    img: string;
    alt: string;
  };
  content: SecurityRecommendationContent;
};

const securityRecommendationsContent: SecurityRecommendation[] = [
  {
    type: "phone",
    title: "Protect your email address",
    illustration: {
      img: phoneIllustration,
      alt: "",
    },
    content: {
      description: (
        <p>
          Unfortunately you can’t take it back. But there are steps you can take
          to make sure you stay safe.
        </p>
      ),
      recommendations: {
        title: "Here’s your advice:",
        steps: (
          <ol>
            <li>Block spam numbers to prevent more junk calls</li>
            <li>
              Don’t click on links in texts from unknown senders; if it appears
              to be from a trusted source, call directly to confirm{" "}
            </li>
            <li>
              Use a <a href="">Firefox Relay phone mask</a> to protect your
              phone in the future
            </li>
          </ol>
        ),
      },
    },
  },
  {
    type: "email",
    title: "Protect your email address",
    illustration: {
      img: emailIllustration,
      alt: "",
    },
    content: {
      description: (
        <p>
          Unfortunately you can’t fix this. But there are steps you can take to
          protect yourself.
        </p>
      ),
      recommendations: {
        title: "Here’s your advice:",
        steps: (
          <ol>
            <li>
              Don’t click on links in emails from unknown senders; If it appears
              to be from trusted source, call directly to confirm
            </li>
            <li>
              Be aware of <a href="">phishing scams</a>
            </li>
            <li>Mark suspicious emails as spam and block the sender</li>
            <li>
              Use <a href="">Relay email masks</a> to protect your email in the
              future
            </li>
          </ol>
        ),
      },
    },
  },
  {
    type: "ip",
    title: "Use a VPN for added privacy",
    illustration: {
      img: ipIllustration,
      alt: "",
    },
    content: {
      description: (
        <p>
          Your IP address pinpoints your location and internet service provider.
          Hackers could use this information to find your location or try to
          connect to your devices.
        </p>
      ),
      recommendations: {
        title: "Here’s your advice:",
        steps: (
          <ul>
            <li>
              Use a VPN (such as <a href="">Mozilla VPN</a>) to hide your real
              IP address and use the internet privately.
            </li>
          </ul>
        ),
      },
    },
  },
];

export default securityRecommendationsContent;
