/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../../hooks/l10n";
import Image from "next/image";
import ScanningForExposuresImage from "./value-prop-images/scanning-for-exposures.svg";
import LeakedPasswordExampleImage from "./value-prop-images/leaked-password-example.svg";
import ScanningForExposuresImageDe from "./value-prop-images/de/scanning-for-exposures-de.svg";
import LeakedPasswordExampleImageDe from "./value-prop-images/de/leaked-password-example-de.svg";
import ScanningForExposuresImageFr from "./value-prop-images/fr/scanning-for-exposures-fr.svg";
import LeakedPasswordExampleImageFr from "./value-prop-images/fr/leaked-password-example-fr.svg";

const IllustrationWrapper = ({
  image,
  testId,
  countryCode,
}: {
  image: string;
  l10n: ExtendedReactLocalization;
  testId: string;
  countryCode: string;
}) => (
  <Image
    src={image}
    alt=""
    data-testid={testId}
    data-country-code={countryCode}
  />
);

type Props = {
  countryCode: string;
  l10n: ExtendedReactLocalization;
};

export const ScanningForExposuresIllustration = (props: Props) => {
  let imageSrc = ScanningForExposuresImage;

  if (props.countryCode === "de") {
    imageSrc = ScanningForExposuresImageDe;
  } else if (props.countryCode === "fr") {
    imageSrc = ScanningForExposuresImageFr;
  }

  return (
    <IllustrationWrapper
      {...props}
      image={imageSrc}
      testId="scanning-for-exposures-image"
      countryCode={props.countryCode}
    />
  );
};

export const LeakedPasswordExampleIllustration = (props: Props) => {
  let imageSrc = LeakedPasswordExampleImage;

  if (props.countryCode === "de") {
    imageSrc = LeakedPasswordExampleImageDe;
  } else if (props.countryCode === "fr") {
    imageSrc = LeakedPasswordExampleImageFr;
  }

  return (
    <IllustrationWrapper
      {...props}
      image={imageSrc}
      testId="leaked-password-example"
      countryCode={props.countryCode}
    />
  );
};
