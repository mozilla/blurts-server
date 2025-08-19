/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallbackSrc: string;
  width: number;
  height: number;
  className?: string;
  onLoadComplete?: () => void;
};

export const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  onLoadComplete,
}: Props) => {
  const [isFallback, setIsFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && !isFallback && <div>Loading...</div>}
      <Image
        alt={alt}
        width={width}
        height={height}
        className={className}
        src={isFallback ? fallbackSrc : src}
        onLoadingComplete={() => {
          setIsLoading(false);
          onLoadComplete?.();
        }}
        onError={() => {
          setIsFallback(true);
          setIsLoading(false);
        }}
      />
    </>
  );
};
