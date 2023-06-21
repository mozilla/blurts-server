/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Shell as ShellEl } from "./Shell";
import { getL10n } from "../functions/server/l10n";
import { ExposureCard } from "../components/client/ExposureCard";
import FamilyTreeImage from "../components/client/assets/familytree.png";


export const Dashboard = () => {

  return (
    <ShellEl l10n={getL10n()} session={null}>
      <h2>View all exposures that are fixed or in-progress</h2>
      <ExposureCard exposureImg={FamilyTreeImage} exposureName={"Familytree.com"} exposureType={"Info for sale"} exposureDetailsLink={"linkeehere.com"} dateFound={"11/09/2022"} statusPillType={"actionNeeded"} statusPillContent={"Action needed"} />
    </ShellEl>
  );
}
