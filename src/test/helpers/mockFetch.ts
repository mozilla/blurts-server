/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This is only necessary because of jsdom environment
// Can be removed in favor of undici MockAgent when
// node tests are separated
// [MNTOR-1880]
export type FetchMock = jest.MockedFunction<typeof fetch> & {
  mockJson: (
    // eslint-disable-next-line
    body: any,
    init?: {
      status?: number;
      statusText?: string;
      headers?: Record<string, string>;
    },
  ) => void;
  // eslint-disable-next-line
  mockReject: (err: any) => void;
};

export function mockFetch(): FetchMock {
  const fn = jest.fn<ReturnType<typeof fetch>, Parameters<typeof fetch>>();

  // Admittedly going hard with the casts out of necessity...
  // eslint-disable-next-line
  (fn as any).mockJson = (
    // eslint-disable-next-line
    body: any,
    init: {
      status?: number;
      statusText?: string;
      headers?: Record<string, string>;
    } = {},
  ) => {
    fn.mockImplementationOnce(async () => {
      const status = init.status ?? 200;
      const res = {
        ok: status >= 200 && status < 300,
        status,
        statusText: init.statusText ?? "OK",
        headers: new Headers(init.headers ?? {}),
        // Add more methods if needed (currently just json is required)
        json: async () => body,
      } as const;

      return res as unknown as Response;
    });
  };

  // eslint-disable-next-line
  (fn as any).mockReject = (err: any) => {
    fn.mockImplementationOnce(async () => {
      throw err;
    });
  };
  return fn as unknown as FetchMock;
}
