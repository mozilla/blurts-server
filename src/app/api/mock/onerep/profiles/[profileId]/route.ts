/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextApiRequest, NextApiResponse } from "next";
import { ShowProfileResponse } from "../../../../../functions/server/onerep";

// Mocked profile data to simulate response
const mockProfileData: ShowProfileResponse = {
  id: 0,
  first_name: "",
  last_name: "",
  birth_date: "",
  addresses: [{ state: "", city: "" }],
  status: "",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  url: `https://api.onerep.com/profiles/`,
};

// Mock endpoint to simulate fetching a profile by ID
export default function GET(req: NextApiRequest, res: NextApiResponse) {
  // Extract profileId from query parameters or request body
  const profileId: number = Number(req.query.profileId || req.body.profileId);

  // Simulate error if profileId is not provided or not valid
  if (!profileId || isNaN(profileId)) {
    res.status(400).json({ error: "Invalid profile ID" });
    return;
  }

  res.status(200).json(mockProfileData);
}
