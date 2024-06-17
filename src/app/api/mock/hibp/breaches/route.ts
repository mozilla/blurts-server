/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { logger } from "../../../../functions/server/logging";
import fakeAllBreaches from "../data/fakeAllBreaches.json";

type BreachesListResponse = {
  Id: number;
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: string;
  AddedDate: string;
  ModifiedDate: string;
  PwnCount: number;
  Description: string;
  LogoPath: string;
  DataClasses: string[];
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  IsMalware: boolean;
  FaviconUrl: string | null;
}[];

export function GET() {
  const { APP_ENV } = process.env;

  // Check if APP_ENV is set to production
  if (APP_ENV === "production") {
    return NextResponse.json(
      { error: "Endpoint not available in production environment" },
      { status: 403 },
    );
  }
  logger.info("Mock endpoint: /breaches");

  const data = fakeAllBreaches.data as BreachesListResponse;

  return NextResponse.json(data);
}
