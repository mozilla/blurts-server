/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//  import { getBreaches } from "../../../../../../functions/server/getBreaches.ts";
import styles from "../ConfigPage.module.scss";
import { Breach } from "../../../../../../functions/universal/breach.ts";
import { HibpLikeDbBreach } from "../../../../../../../utils/hibp.js";

interface Props {
  allBreaches: (Breach | HibpLikeDbBreach)[];
  filterWord?: string;
  onClickFunc?: (elem: Breach | HibpLikeDbBreach) => void;
  additionalStyles?: string;
}

export default function BreachesLookup(props: Props) {
  // const allBreaches = (await getBreaches());

  const {
    allBreaches,
    filterWord = "",
    onClickFunc = () => {},
    additionalStyles = "",
  } = props;

  const getElementData = (breach: Breach | HibpLikeDbBreach) => {
    const name = breach.Name;
    const month = (breach.AddedDate as Date).toLocaleString("en-US", {
      month: "long",
    });
    const year = (breach.AddedDate as Date).getFullYear();
    return `${name} - ${month}, ${year}`;
  };

  return (
    <div>
      {allBreaches
        .filter(
          (elem) =>
            elem.Name.includes(filterWord) ||
            elem.Title.includes(filterWord) ||
            String(elem.AddedDate).includes(filterWord),
        )
        .map((elem, index) => (
          <p
            className={`${styles.breachName} ${additionalStyles}`}
            onClick={() => onClickFunc(elem)}
            key={index}
          >
            {getElementData(elem)}
          </p>
        ))}
    </div>
  );
}
