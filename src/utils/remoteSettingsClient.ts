/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Logger } from "winston";
import type { HibpGetBreachesResponse } from "./hibp";

type RemoteSettingsBreach = Pick<
  HibpGetBreachesResponse[number],
  "Name" | "Domain" | "BreachDate" | "PwnCount" | "AddedDate" | "DataClasses"
>;

type RemoteSettingsClientOpts = {
  /** Remote settings user */
  user: string;
  /** Password for user */
  password: string;
  /** Server for remote settings,
   * e.g. https://remote-settings.mozilla.org/v1
   */
  server: string;
  /** Winston logger */
  logger: Logger;
  /** Fetch client */
  fetch: typeof fetch;
  /** Path to breach collection, e.g. buckets/main-workspace/collections/firefox_breaches */
  breachesPath: string;
};

/**
 * Basic client for updating breach alerts in firefox
 * remote settings via the REST API.
 * See https://remote-settings.readthedocs.io/en/latest
 * for additional documentation.
 * Can generalize if we need to manage more collections.
 */
export class RemoteSettingsClient {
  private Authorization: string;
  private server: string;
  private logger: Logger;
  private breachesCollectionPath: string;
  private fetch: typeof fetch;
  /**
   *
   * @param opts
   */
  constructor(opts: RemoteSettingsClientOpts) {
    this.Authorization = `Basic ${Buffer.from(opts.user + ":" + opts.password).toString("base64")}`;
    this.server = opts.server;
    this.logger = opts.logger;
    this.breachesCollectionPath = opts.breachesPath;
    this.fetch = opts.fetch;
  }
  private async loggedJsonFetch<T>(
    path: string,
    init?: RequestInit,
  ): Promise<T> {
    const url = `${this.server}/${path}`;
    try {
      const res = await this.fetch(url, {
        ...init,
        headers: {
          Authorization: this.Authorization,
          ...(init?.headers ?? {}),
        },
      });

      if (!res.ok) {
        const err = new Error(
          `HTTP ${res.status} ${res.statusText} for ${url}`,
        );
        this.logger.error("Remote settings request not OK", {
          err,
          url,
          status: res.status,
          statusText: res.statusText,
        });
        throw err;
      }
      return await res.json();
    } catch (err) {
      this.logger.error("Remote settings request failure", { err, url });
      throw err;
    }
  }
  /**
   * Get the names of breaches stored in remote settings
   *
   * @returns Set of breach names
   * @throws Error if response is not OK or fails due to application error
   */
  async fetchRemoteBreachNames(): Promise<Set<string>> {
    const records = await this.loggedJsonFetch<{
      data: HibpGetBreachesResponse;
    }>(`${this.breachesCollectionPath}/records`);
    return new Set(records.data.map((b) => b.Name));
  }
  /**
   * POST a new breach to the remote collection
   *
   * @returns Success response
   * @throws Error if response is not OK or fails due to application error
   */
  async addNewBreach(data: RemoteSettingsBreach) {
    return await this.loggedJsonFetch(
      `${this.breachesCollectionPath}/records`,
      {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: { "Content-Type": "application/json" },
      },
    );
  }
  /**
   * Request manual review of breach alerts collection updates
   *
   * @returns Success response
   * @throws Error if response is not OK or fails due to application error
   */
  async requestBreachesReview() {
    return await this.loggedJsonFetch(this.breachesCollectionPath, {
      method: "PATCH",
      body: JSON.stringify({ data: { status: "to-review" } }),
      headers: { "Content-Type": "application/json" },
    });
  }
}
