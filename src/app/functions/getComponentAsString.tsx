/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactElement } from "react";

export type Props = {
  component: ReactElement;
};

export const getComponentAsString = async ({ component }: Props) => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  return ReactDOMServer.renderToString(component);
};
