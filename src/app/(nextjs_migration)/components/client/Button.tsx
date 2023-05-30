/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./button.module.scss";

export type Props = {
  type: string; // primary | secondary | tertiary
  content: string;
  large: boolean;
  destructive?: boolean;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const { type, content, large, destructive, onClick } = props;

  const buttonClassnames = [
    styles.button,
    styles[type],
    destructive && styles.destructive,
    large && styles.large,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClassnames} onClick={onClick}>
      {content}
    </button>
  );
};
