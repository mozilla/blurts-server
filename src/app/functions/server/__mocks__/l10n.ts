/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getOneL10nBundleInNodeContext, getOneL10nSync } from "../mockL10n";

export const getL10nBundles = getOneL10nBundleInNodeContext;

export const getL10n = getOneL10nSync;
