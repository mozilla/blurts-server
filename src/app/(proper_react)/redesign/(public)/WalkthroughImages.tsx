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

type Props = {
  countryCode: string;
  l10n: ExtendedReactLocalization;
  eligibleForPremium: boolean;
};

export const ScanningForExposuresIllustration = (props: Props) => {
  if (props.countryCode === "de") {
    return (
      <Image
        src={ScanningForExposuresImageDe}
        alt={props.l10n.getString(
          "landing-all-value-prop-scanning-for-exposures-illustration-alt",
        )}
        data-testid="scanning-for-exposures-image"
      />
    );
  }
  if (props.countryCode === "fr") {
    return (
      <Image
        src={ScanningForExposuresImageFr}
        alt={props.l10n.getString(
          "landing-all-value-prop-scanning-for-exposures-illustration-alt",
        )}
        data-testid="scanning-for-exposures-image"
      />
    );
  }
  return (
    <Image
      src={ScanningForExposuresImage}
      alt={props.l10n.getString(
        "landing-all-value-prop-scanning-for-exposures-illustration-alt",
      )}
      data-testid="scanning-for-exposures-image"
    />
  );
};

export const LeakedPasswordExampleIllustration = (props: Props) => {
  if (props.countryCode === "de") {
    return (
      <Image
        src={LeakedPasswordExampleImageDe}
        alt={props.l10n.getString(
          "landing-all-value-prop-scanning-for-exposures-illustration-alt",
        )}
        data-testid="scanning-for-exposures-image"
      />
    );
  }
  if (props.countryCode === "fr") {
    return (
      <Image
        src={LeakedPasswordExampleImageFr}
        alt={props.l10n.getString(
          "landing-all-value-prop-scanning-for-exposures-illustration-alt",
        )}
        data-testid="scanning-for-exposures-image"
      />
    );
  }
  return (
    <Image
      src={LeakedPasswordExampleImage}
      alt={props.l10n.getString(
        "landing-all-value-prop-scanning-for-exposures-illustration-alt",
      )}
      data-testid="scanning-for-exposures-image"
    />
  );
};
