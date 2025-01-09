/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import styles from "./not-found.module.scss";
import Illustration from "./(proper_react)/images/404.svg";
import {
  getAcceptLangHeaderInServerComponents,
  getL10n,
} from "./functions/l10n/serverComponents";
import { BackButton } from "./components/client/BackButton";

export default async function NotFound() {
  const l10n = getL10n(await getAcceptLangHeaderInServerComponents());

  return (
    <div className={styles.wrapper}>
      <Image src={Illustration} alt="" />
      <h1
        dangerouslySetInnerHTML={{
          __html: l10n.getString("error-page-error-404-title", {
            errorCode: "<span>404</span>",
          }),
        }}
      />
      <p>{l10n.getString("error-page-error-404-copy")}</p>
      <BackButton>
        {l10n.getString("error-page-error-404-cta-button")}
      </BackButton>
    </div>
  );
}
