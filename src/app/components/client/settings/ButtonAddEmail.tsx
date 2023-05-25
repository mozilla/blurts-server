/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { ReactNode, useEffect, useState } from "react";
import { getL10n } from "../../../functions/server/l10n";

export type Props = {
  children: ReactNode;
};

const onClick = () => {
  // FOO
};

export const ButtonAddEmail = (props: Props) => {
  const l10n = getL10n();

  return (
    <button
      onClick={onClick}
      className="primary settings-add-email-button"
      data-dialog="addEmail"
    >
      {l10n.getString("settings-add-email-button")}
    </button>
  );
};
