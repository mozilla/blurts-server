/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import { getAttachedClientsAction } from "./actions";
import { FxaGetAccountAttachedClients } from "../../../../../../utils/fxa";

export const AttachedClients = () => {
  const [data, setData] = useState<FxaGetAccountAttachedClients[]>();

  useEffect(() => {
    getAttachedClientsAction()
      .then((attachedClients) => {
        setData(attachedClients);
      })
      .catch((error) => {
        console.error("Could not get attached clients", error);
      });
  }, []);

  return data ? (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  ) : (
    "No data available"
  );
};
