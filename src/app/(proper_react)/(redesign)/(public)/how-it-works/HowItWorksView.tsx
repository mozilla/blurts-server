/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Header } from "./components/Header";
import { SectionOne } from "./components/SectionOne";
import { SectionTwo } from "./components/SectionTwo";
import { Footer } from "./components/Footer";

export const HowItWorksView = () => {
  return (
    <main>
      <Header />
      <SectionOne />
      {/* SECTION: WE REMOVE YOUR INFO FROM DATA BROKERS */}
      <SectionTwo />
      {/* SECTION: WE PROVIDE STEPS TO HELP RESOLVE DATA BREACHES */}
      <Footer />
    </main>
  );
};
