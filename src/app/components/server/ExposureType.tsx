/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export type ExposureType = "infoForSale" | "dataBreach";

export type Props = {
  type: ExposureType;
};

export const ExposureTypeEl = (props: Props) => {
  const { type } = props;

  let string = "";

  if (type === "infoForSale") {
    string = "Info for sale"
  } else if (type === "dataBreach") {
    string = "Data breach"
  } 

  return <>{string}</>;
};