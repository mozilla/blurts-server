/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from "./DashboardTopBanner.module.scss";
import { ReactElement } from "react";
import { Button } from "../components/server/Button";

type Props = {
  headline: string,
  description: string,
  cta: {
    content: string,
    onClick: () => void
  },
  chart: ReactElement 
}

export const DashboardTopBanner = (props: Props) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
        <Button className={styles.button} type={"primary"} small content={props.cta.content} onClick={props.cta.onClick} />
      </div>
      <div className={styles.chart}>
      Chart goes here
      </div>
    </div>
  );
}

