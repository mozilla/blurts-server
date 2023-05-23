/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import Script from "next/script";

export default async function MigrationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Script src="/nextjs_migration/client/js/resizeObserver.js" />
      {children}
    </>
  );
}
