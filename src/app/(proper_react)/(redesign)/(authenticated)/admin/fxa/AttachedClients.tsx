/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use client";

import { useEffect, useState } from "react";
import {
  getAttachedClientsAction,
  deleteAttachedClientAction,
} from "./actions";
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

  const deleteAllAttachedClients = async (
    data: FxaGetAccountAttachedClients[],
  ) => {
    for (const d of data) {
      if (!d.isCurrentSession) {
        await deleteAttachedClientAction(d);
      }
    }
  };

  return data ? (
    <>
      <div>Attached clients ({data.length})</div>
      <button
        onClick={() => {
          void deleteAllAttachedClients(data);
        }}
      >
        Sign out all
      </button>
      <ul>
        {data.map((d, index) => (
          <li key={`attached-client-${index}`}>
            <div>
              {d.name} – {d.lastAccessTimeFormatted}
            </div>
            <button
              onClick={() => {
                void deleteAttachedClientAction(d);
              }}
            >
              Sign out
            </button>
          </li>
        ))}
      </ul>
    </>
  ) : (
    "No data available"
  );
};
