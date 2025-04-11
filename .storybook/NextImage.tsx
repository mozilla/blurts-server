/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { StaticImageData } from "next/image";

const NextImage = ({
  src,
  alt,
  ...props
}: {
  src: StaticImageData;
  alt: string;
  // eslint-disable-next-line @next/next/no-img-element
}) => <img src={`/${src.src}`} alt={alt} {...props} />;

export default NextImage;
