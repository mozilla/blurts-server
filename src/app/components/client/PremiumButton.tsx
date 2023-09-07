/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { PremiumUpsellDialog } from "./PremiumUpsellDialog";
import { Button } from "../server/Button";
import { useL10n } from "../../hooks/l10n";

export type Props = {
  label: string;
};

export default function PremiumButton({ label }: Props) {
  const l10n = useL10n();

  const dialogState = useOverlayTriggerState({ defaultOpen: false });
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    dialogState
  );

  return (
    <>
      <Button {...triggerProps} variant="primary" small>
        {l10n.getString(label)}
      </Button>
      <PremiumUpsellDialog {...overlayProps} state={dialogState} />
    </>
  );
}
