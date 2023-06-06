/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SVGProps } from "react";
import styles from "./Icons.module.scss";

/**
 * Info button that inherits the text color of its container
 *
 * @param root0
 * @param root0.alt
 */
export const ChevronDown = ({
  alt,
  ...props
}: SVGProps<SVGSVGElement> & { alt: string }) => {
  return (
    <svg
      role="img"
      aria-label={alt}
      aria-hidden={alt === ""}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 7"
      width={28}
      height={28}
      {...props}
      className={`${props.className ?? ""} ${styles.colorifyStroke}`}
    >
      <title>{alt}</title>
      <path
        d="M0.012288 0.999815C0.0123744 0.595419 0.256015 0.230881 0.629633 0.0761372C1.00325 -0.0786067 1.43329 0.0069073 1.71929 0.292815L6.01229 4.58582L10.3053 0.292816C10.6977 -0.0861566 11.3214 -0.0807368 11.7071 0.304997C12.0928 0.690731 12.0983 1.31444 11.7193 1.70682L6.71929 6.70682C6.32879 7.0972 5.69579 7.0972 5.30529 6.70682L0.305288 1.70682C0.117739 1.51932 0.0123447 1.26501 0.012288 0.999815Z"
        fill={styles.colorifyFill}
      ></path>
    </svg>
  );
};
