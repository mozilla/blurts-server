/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import styles from "./VisuallyHidden.module.scss";

// This is an alternative to react-aria's <VisuallyHidden> component that does
// not use inline styles, which would be blocked by our Content Security Policy.
export const VisuallyHidden = (props: { children: ReactNode }) => {
  return <div className={styles.visuallyHidden}>{props.children}</div>;
};
