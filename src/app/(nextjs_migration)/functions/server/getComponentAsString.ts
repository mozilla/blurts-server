/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";

export type Props = {
  component: ReactElement;
};

// If a component imports `react-dom/server` directly Next.js throws a
// compilation error `ReactServerComponentsError` for perf and security reasons.
export const getComponentAsString = async ({ component }: Props) => {
  return ReactDOMServer.renderToString(component);
};
