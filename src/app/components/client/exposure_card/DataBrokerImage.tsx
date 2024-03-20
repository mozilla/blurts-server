/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { Suspense, lazy, useMemo } from "react";
import styles from "./ExposureCard.module.scss";
import Image from "next/image";
import { FallbackLogo } from "../../server/BreachLogo";

export const DataBrokerImage = (props: { name: string }) => {
  const LazyLoadedImage = useMemo(
    () => lazy(() => getDataBrokerImage(props.name)),
    [props.name],
  );

  return (
    <Suspense fallback={<FallbackLogo name={props.name} />}>
      <LazyLoadedImage />
    </Suspense>
  );
};

async function getDataBrokerImage(name: string) {
  try {
    const DataBrokerLogo = await import(
      `../../client/assets/data-brokers/${name}.png`
    );
    const ImageComponent = () => (
      <Image
        className={styles.dataBrokerLogo}
        src={DataBrokerLogo.default}
        alt=""
      />
    );
    return {
      default: ImageComponent,
    };
    // I don't know how to simulate failing `import()` calls in tests:
    /* c8 ignore start */
  } catch {
    const FallBackLogo = () => <FallbackLogo name={name} />;
    return {
      default: FallBackLogo,
    };
  }
  /* c8 ignore stop */
}
