# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

exposure-landing-hero-heading = Tudja meg, hogy kikerültek-e a személyes adatai
exposure-landing-hero-lead = Maradjon biztonságban a { -brand-firefox } készítőinek adatvédelmi eszközeivel, amelyek megvédik Önt a hackerektől, és a személyes adatait közzétevő és értékesítő cégektől. Figyelmeztetni fogjuk az összes ismert adatvédelmi incidensről, megtaláljuk és eltávolítjuk a kikerült adatait, és folyamatosan figyeljük az új kitettségeket.
exposure-landing-hero-email-label = E-mail-cím
exposure-landing-hero-email-placeholder = Adja meg az e-mail-címét
exposure-landing-hero-cta-label = Adatvédelmi incidensek keresése
exposure-landing-result-loading = Betöltés, kis türelmet…
exposure-landing-result-error = Hiba történt az adatvédelmi incidensek keresése során. Frissítse az oldalt és próbálja újra.
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] A(z) <email>{ $email }</email> kikerült <count>1</count> adatvédelmi incidensben.
       *[other] A(z) <email>{ $email }</email> kikerült <count>{ $count }</count> adatvédelmi incidensben.
    }
exposure-landing-result-card-added = Adatvédelmi incidens hozzáadva:
exposure-landing-result-card-data = Kikerült adatok:
exposure-landing-result-card-nothing = Nem találhatók adatvédelmi incidensek
exposure-landing-result-footer-attribution = Az adatvédelmi incidensek adatait a <hibp-link>{ -brand-HIBP }</hibp-link> szolgáltatta
exposure-landing-result-overflow-hero-lead = Jelentkezzen be, hogy egyértelmű lépéseket kapjon arról, hogyan oldhatja meg ezeket az adatvédelmi incidenseket, megtekintheti az összes incidenst, és folyamatos ellenőrzést kaphat az új ismert adatvédelmi incidensekről.
exposure-landing-result-overflow-hero-cta-label = Jelentkezzen be az adatvédelmi incidensek megoldásához
exposure-landing-result-overflow-footer-cta-label = Jelentkezzen be az összes megtekintéséhez
exposure-landing-result-some-hero-lead = Jelentkezzen be, hogy egyértelmű lépéseket kapjon arról, hogyan oldhatja meg ezeket az adatvédelmi incidenseket, megtekintheti az összes incidenst, és folyamatos ellenőrzést kaphat az új ismert adatvédelmi incidensekről.
exposure-landing-result-some-hero-cta-label = Jelentkezzen be az adatvédelmi incidensek megoldásához
exposure-landing-result-some-footer-cta-label = Jelentkezzen be az adatvédelmi incidensek megoldásához
exposure-landing-result-none-hero-lead = Jó hírek! Nem találhatók ismert adatvédelmi incidensek. Maradjon biztonságban: iratkozzon fel az új adatvédelmi incidensek figyelmeztetéseire. Folyamatosan figyeljük ezt az e-mail-címet, és értesítjük, ha egy új adatvédelmi incidensben jelenik meg.
exposure-landing-result-none-hero-cta-label = Kapjon figyelmeztetéseket az új adatvédelmi incidensekről
exposure-landing-result-none-footer-cta-label = Iratkozzon fel a figyelmeztetésekre
