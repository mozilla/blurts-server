/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SVGProps } from "react";
import styles from "./Icons.module.scss";

// Note: ideally, the Nebula icons are made available in a repository somewhere,
//       then added to react-icons: https://react-icons.github.io/react-icons/.
//       These manually-created components are a workaround until that is done.

export const ArrowIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
      width={16}
      height={14}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M1.00021 6.00001H12.5862L8.29321 1.70701C7.91424 1.31463 7.91966 0.690926 8.3054 0.305192C8.69113 -0.0805418 9.31483 -0.0859616 9.70721 0.293011L15.7072 6.29301C16.0976 6.68351 16.0976 7.31651 15.7072 7.70701L9.70721 13.707C9.31483 14.086 8.69113 14.0806 8.3054 13.6948C7.91966 13.3091 7.91424 12.6854 8.29321 12.293L12.5862 8.00001H1.00021C0.447928 8.00001 0.000213623 7.5523 0.000213623 7.00001C0.000213623 6.44773 0.447928 6.00001 1.00021 6.00001Z" />
    </svg>
  );
};

export const HamburgerIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={12}
      height={12}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M1 2H11C11.2652 2 11.5196 1.89464 11.7071 1.70711C11.8946 1.51957 12 1.26522 12 1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM11 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H11C11.2652 7 11.5196 6.89464 11.7071 6.70711C11.8946 6.51957 12 6.26522 12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5ZM11 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10Z" />
    </svg>
  );
};
