/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { client as hawkClient } from "hawk";

const NAMESPACE = "identity.mozilla.com/picl/v1/";
const HEX_STRING = /^(?:[a-fA-F0-9]{2})+$/;

const encoder = () => new TextEncoder();

function hexToUint8(str: string) {
  if (!HEX_STRING.test(str)) {
    throw new Error(`invalid hex string: ${str}`);
  }
  const bytes = str.match(/[a-fA-F0-9]{2}/g) as RegExpMatchArray;
  return new Uint8Array(bytes.map((byte) => parseInt(byte, 16)));
}

function uint8ToHex(array: Uint8Array): string {
  return array.reduce(
    (str, byte) => str + ("00" + byte.toString(16)).slice(-2),
    "",
  );
}

async function deriveHawkCredentials(
  sessionToken: string,
): Promise<hawkClient.Credentials> {
  const baseKey = await crypto.subtle.importKey(
    "raw",
    hexToUint8(sessionToken),
    "HKDF",
    false,
    ["deriveBits"],
  );
  const keyMaterial = await crypto.subtle.deriveBits(
    {
      name: "HKDF",
      salt: new Uint8Array(0),
      info: encoder().encode(`${NAMESPACE}sessionToken`),
      hash: "SHA-256",
    },
    baseKey,
    32 * 3 * 8,
  );
  const id = new Uint8Array(keyMaterial.slice(0, 32));
  const authKey = new Uint8Array(keyMaterial.slice(32, 64));

  return {
    id: uint8ToHex(id),
    // @ts-ignore-next-line Type Uint8Array is the correct type for `key`
    key: authKey,
    algorithm: "sha256",
  };
}

type GetHawkAuthHeaderPros = {
  sessionToken: string;
  requestOptions: {
    method: string;
    url: string;
  };
};

export const getHawkAuthHeader = async function ({
  sessionToken,
  requestOptions,
}: GetHawkAuthHeaderPros) {
  const hawkCredentials = await deriveHawkCredentials(sessionToken);
  const credentials = {
    id: hawkCredentials.id,
    key: hawkCredentials.key,
    algorithm: hawkCredentials.algorithm,
  };
  const headerOptions = {
    contentType: "application/json",
    credentials,
  };

  return hawkClient.header(
    requestOptions.url,
    requestOptions.method,
    headerOptions,
  );
};
