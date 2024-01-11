# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

exposure-landing-hero-heading = Darganfyddwch a yw eich manylion personol wedi'u datgelu
exposure-landing-hero-lead = Cadwch yn ddiogel gydag offer preifatrwydd gan wneuthurwr { -brand-firefox } sy'n eich diogelu rhag hacwyr a chwmnïau sy'n cyhoeddi ac yn gwerthu eich manylion personol. Byddwn yn eich rhybuddio am unrhyw doriadau data hysbys, yn dod o hyd i'ch manylion hysbys ac yn eu dileu, ac yn gwylio'n barhaus am ddatgeliadau newydd.
exposure-landing-hero-email-label = Cyfeiriad e-bost
exposure-landing-hero-email-placeholder = Rhowch eich cyfeiriad e-bost
exposure-landing-hero-cta-label = Gwiriwch am dor-data
exposure-landing-result-loading = Yn llwytho, arhoswch…
exposure-landing-result-error = Aeth rhywbeth o'i le wrth wirio am dor-data. Ail-lwythwch y dudalen a cheisiwch eto.
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [zero] Heb ganfod <email>{ $email }</email> mewn <count>{ $count }</count> enghraifft o dor-data.
        [one] Wedi canfod <email>{ $email }</email> mewn <count>{ $count }</count> enghraifft o dor-data.
        [two] Wedi canfod <email>{ $email }</email> mewn <count>{ $count }</count> enghraifft o dor-data.
        [few] Wedi canfod <email>{ $email }</email> mewn <count>{ $count }</count> enghraifft o dor-data.
        [many] Wedi canfod <email>{ $email }</email> mewn <count>{ $count }</count> enghraifft o dor-data.
       *[other] Wedi canfod <email>{ $email }</email> mewn <count>{ $count }</count> enghraifft o dor-data.
    }
exposure-landing-result-card-added = Ychwanegwyd Tor-data:
exposure-landing-result-card-data = Data Hysbys:
exposure-landing-result-card-nothing = Heb ganfod tor-data
exposure-landing-result-footer-attribution = Darparwyd manylion tor-data gan <hibp-link>{ -brand-HIBP }</hibp-link>
exposure-landing-result-overflow-hero-lead = Mewngofnodwch i gael camau clir ar sut i ddatrys y tor-data hyn, gweld pob tor-data, a chael monitro parhaus am unrhyw dor-data hysbys newydd.
exposure-landing-result-overflow-hero-cta-label = Mewngofnodwch i ddatrys tor-data
exposure-landing-result-overflow-footer-cta-label = Mewngofnodwch i weld y cyfan
exposure-landing-result-some-hero-lead = Mewngofnodwch i gael camau clir ar sut i ddatrys y tor-data hyn, gweld pob tor-data, a chael monitro parhaus am unrhyw dor-data hysbys newydd.
exposure-landing-result-some-hero-cta-label = Mewngofnodwch i ddatrys tor-data
exposure-landing-result-some-footer-cta-label = Mewngofnodwch i ddatrys tor-data
exposure-landing-result-none-hero-lead = Newyddion da! Ni chanfuwyd unrhyw dor-data hysbys. Cadwch yn ddiogel trwy gofrestru ar gyfer rhybuddion am dor-data newydd. Byddwn yn parhau i fonitro'r e-bost hwn ac yn rhoi gwybod i chi os yw'n ymddangos mewn tor-data newydd.
exposure-landing-result-none-hero-cta-label = Cael rhybuddion am dor-data newydd
exposure-landing-result-none-footer-cta-label = Cofrestrwch i gael rhybuddion
