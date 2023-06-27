/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ScanResult } from '../../../../src/external/onerep';
import { Breach } from '../../(nextjs_migration)/(authenticated)/user/breaches/breaches';

export type ExposureType = ScanResult | Breach;

export type Props = {
  type: ExposureType;
};

export const ExposureTypeEl = (props: Props) => {
  let string = "";

  if (isScanResult(props.type)) {
    string = "Info for sale"
  }
  else {
    string = "Data breach"
  }

  return <>{string}</>;
};

export function isScanResult(obj: ScanResult | Breach): obj is ScanResult {
  return (obj as ScanResult).data_broker !== undefined; // only ScanResult has an instance of data_broker
}