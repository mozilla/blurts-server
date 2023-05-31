/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SVGProps } from "react";
import styles from "./Icons.module.scss";

// Note: ideally, the Nebula icons are made available in a repository somewhere,
//       then added to react-icons: https://react-icons.github.io/react-icons/.
//       These manually-created components are a workaround until that is done.

// Keywords: cross, X
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

// Keywords: cross, X
export const CloseBigIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path d="M9.63004 7.98596L15.6792 1.93681C15.8874 1.72127 16.0026 1.43258 16 1.13293C15.9974 0.833273 15.8772 0.54663 15.6653 0.334735C15.4534 0.12284 15.1667 0.00264711 14.8671 4.3203e-05C14.5674 -0.0025607 14.2787 0.112633 14.0632 0.320813L8.01404 6.36996L1.9649 0.320813C1.74936 0.112633 1.46067 -0.0025607 1.16101 4.3203e-05C0.86136 0.00264711 0.574717 0.12284 0.362822 0.334735C0.150927 0.54663 0.0307344 0.833273 0.0281305 1.13293C0.0255266 1.43258 0.14072 1.72127 0.348901 1.93681L6.39804 7.98596L0.348901 14.0351C0.239746 14.1405 0.152681 14.2666 0.0927849 14.4061C0.0328888 14.5455 0.0013618 14.6955 4.31505e-05 14.8472C-0.0012755 14.999 0.0276408 15.1495 0.0851046 15.2899C0.142569 15.4304 0.227429 15.558 0.334735 15.6653C0.442041 15.7726 0.569643 15.8574 0.710096 15.9149C0.850549 15.9724 1.00104 16.0013 1.15279 16C1.30454 15.9986 1.4545 15.9671 1.59393 15.9072C1.73337 15.8473 1.85948 15.7603 1.9649 15.6511L8.01404 9.60196L14.0632 15.6511C14.2787 15.8593 14.5674 15.9745 14.8671 15.9719C15.1667 15.9693 15.4534 15.8491 15.6653 15.6372C15.8772 15.4253 15.9974 15.1386 16 14.839C16.0026 14.5393 15.8874 14.2506 15.6792 14.0351L9.63004 7.98596Z" />
    </svg>
  );
};

// Keywords: four squares, window, dashboard
export const UnionIcon = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      width={18}
      height={18}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyFill}`}
    >
      <title>{alt}</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 2H6V6H2V2ZM0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2ZM12 2H16V6H12V2ZM10 2C10 0.895431 10.8954 0 12 0H16C17.1046 0 18 0.895431 18 2V6C18 7.10457 17.1046 8 16 8H12C10.8954 8 10 7.10457 10 6V2ZM6 12H2V16H6V12ZM2 10C0.895431 10 0 10.8954 0 12V16C0 17.1046 0.895431 18 2 18H6C7.10457 18 8 17.1046 8 16V12C8 10.8954 7.10457 10 6 10H2ZM12 12H16V16H12V12ZM10 12C10 10.8954 10.8954 10 12 10H16C17.1046 10 18 10.8954 18 12V16C18 17.1046 17.1046 18 16 18H12C10.8954 18 10 17.1046 10 16V12Z"
      />
    </svg>
  );
};

// Keywords: menu, hamburger, list
export const ListIcon = ({
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
