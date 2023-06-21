/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Shell as ShellEl } from "./Shell";
import { getL10n } from "../functions/server/l10n";
import { ExposureCard } from "../components/client/ExposureCard";
import FamilyTreeImage from "../components/client/assets/familytree.png";

export const Dashboard = () => {
  const timeStamp = 1668144000; // Example Unix timestamp

  return (
    <ShellEl l10n={getL10n()} session={null}>
      <h2>View all exposures that are fixed or in-progress</h2>
      <ExposureCard exposureImg={FamilyTreeImage} exposureName={"Familytree.com"} exposureType={"dataBreach"} exposureDetailsLink={"linkeehere.com"} dateFound={timeStamp} statusPillType={"needAction"} />
    </ShellEl>
  );
}
