/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { ComponentProps } from "react";
import type Image from "next/image";

// Mock for next/image
const NextImage = (props: ComponentProps<typeof Image>) => {
  const dataProps = Object.fromEntries(Object.entries(props).filter(([prop]) => prop.startsWith("data-")));

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      width={props.width}
      height={props.height}
      alt={props.alt}
      id={props.id}
      {...dataProps}
    />
  );
};

export default NextImage;
