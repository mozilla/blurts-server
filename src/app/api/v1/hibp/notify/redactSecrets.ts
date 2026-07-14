/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Keys whose value is a secret (matched anywhere in the key name, any casing)
export const SECRET_KEYS = ["authorization", "token", "key", "secret"];

// Copy `value`, blanking the value of any secret looking key, so a later util.inspect() can't leak
// a key hidden in gRPC request metadata. Recurses through objects, arrays and Maps (grpc-js
// keeps headers in a Map) and guards against cycles.
export function redactSecrets(
  value: unknown,
  seen = new WeakSet<object>(),
): unknown {
  if (value === null || typeof value !== "object") return value;
  if (seen.has(value)) return "[Circular]";
  seen.add(value);
  if (Array.isArray(value)) return value.map((v) => redactSecrets(v, seen));
  const entries =
    value instanceof Map ? value.entries() : Object.entries(value);
  return Object.fromEntries(
    [...entries].map(([key, val]) => [
      key,
      SECRET_KEYS.some((word) => `${key}`.toLowerCase().includes(word))
        ? "[REDACTED]"
        : redactSecrets(val, seen),
    ]),
  );
}
