/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ExtendedReactLocalization } from "../../../functions/l10n";
import Image from "next/image";
import ScanningForExposuresImage from "./value-prop-images/scanning-for-exposures.svg";
import LeakedPasswordExampleImage from "./value-prop-images/leaked-password-example.svg";
import ScanningForExposuresImageDe from "./value-prop-images/de/scanning-for-exposures-de.svg";
import LeakedPasswordExampleImageDe from "./value-prop-images/de/leaked-password-example-de.svg";
import ScanningForExposuresImageFr from "./value-prop-images/fr/scanning-for-exposures-fr.svg";
import LeakedPasswordExampleImageFr from "./value-prop-images/fr/leaked-password-example-fr.svg";
import { getLocale } from "../../../functions/universal/getLocale";

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
  l10n: ExtendedReactLocalization;
};

export const ScanningForExposuresIllustration = (props: Props) => {
  let imageSrc = ScanningForExposuresImage;
  const language = getLanguage(getLocale(props.l10n));

  if (language === "de") {
    imageSrc = ScanningForExposuresImageDe;
  } else if (language === "fr") {
    imageSrc = ScanningForExposuresImageFr;
  }

  return (
    <IllustrationWrapper
      {...props}
      image={imageSrc}
      testId="scanning-for-exposures-image"
      countryCode={language}
    />
  );
};

export const LeakedPasswordExampleIllustration = (props: Props) => {
  let imageSrc = LeakedPasswordExampleImage;
  const language = getLanguage(getLocale(props.l10n));

  if (language === "de") {
    imageSrc = LeakedPasswordExampleImageDe;
  } else if (language === "fr") {
    imageSrc = LeakedPasswordExampleImageFr;
  }

  return (
    <IllustrationWrapper
      {...props}
      image={imageSrc}
      testId="leaked-password-example"
      countryCode={language}
    />
  );
};

function getLanguage(locale: string): string {
  return locale.split("_")[0].toLowerCase();
}
