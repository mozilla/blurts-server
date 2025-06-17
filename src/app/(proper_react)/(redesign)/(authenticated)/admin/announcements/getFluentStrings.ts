/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import fs from "fs";
import path from "path";
import { parse } from "@fluent/syntax";
import type {
  Resource,
  Message,
  PatternElement,
  Placeable,
} from "@fluent/syntax";
import { logger } from "../../../../../functions/server/logging";

type AnnouncementGroup = {
  title?: string;
  description?: string;
  ctaLabel?: string;
};

export type GroupedFluentAnnouncements = {
  [announcementId: string]: AnnouncementGroup;
};

export async function getFluentStrings(): Promise<GroupedFluentAnnouncements> {
  let resource: Resource | undefined;

  try {
    const ftlPath = path.resolve("locales-pending/announcements.ftl");
    const raw = fs.readFileSync(ftlPath, "utf8");
    resource = parse(raw, { withSpans: false });
  } catch (error) {
    logger.error("Could not parse announcements.ftl strings", error);
    return {};
  }

  const result: GroupedFluentAnnouncements = {};

  for (const entry of resource.body) {
    if (entry.type === "Message") {
      const message = entry as Message;
      const key = message.id.name;

      // Match keys like announcement-<id>-title / -description / -cta-label
      const match = key.match(
        /^announcement-([^-.]+(?:-[^-]+)*)-(title|description|cta-label)$/,
      );

      if (!match) continue;

      const [, id, field] = match;

      const value = (message.value?.elements || [])
        .map((el: PatternElement) => {
          if (el.type === "TextElement") {
            return el.value;
          }

          if (el.type === "Placeable") {
            const expr = (el as Placeable).expression;

            if (
              expr.type === "MessageReference" ||
              expr.type === "TermReference"
            ) {
              return `{${expr.id.name}}`;
            }

            return "{...}";
          }

          return "";
        })
        .join("");

      if (!result[id]) {
        result[id] = {};
      }

      if (field === "title") {
        result[id].title = value;
      } else if (field === "description") {
        result[id].description = value;
      } else if (field === "cta-label") {
        result[id].ctaLabel = value;
      }
    }
  }

  return result;
}
