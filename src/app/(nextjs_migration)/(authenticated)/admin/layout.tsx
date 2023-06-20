/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

import "../../../../client/css/index.css";
import { authOptions } from "../../../api/utils/authOptions";
export type Props = {
  children: ReactNode;
};

const AdminLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const admins = process.env.ADMINS?.split(",") ?? [];
  if (
    !session ||
    typeof session.user.email !== "string" ||
    !admins.includes(session.user.email)
  ) {
    return notFound();
  }

  return <>{props.children}</>;
};

export default AdminLayout;
