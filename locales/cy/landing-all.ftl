# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

public-nav-name = { -brand-mozilla-monitor }
landing-all-hero-title = Gweld lle mae'ch manylion preifat wedi'u datgelu — a'u cael yn nôl
landing-all-hero-lead = Rydym yn sganio tor-data i weld a yw'ch data wedi'u datgelu ac yn cynnig camau i chi i'w drwsio.
landing-all-hero-emailform-input-placeholder = eichenw@example.com
landing-all-hero-emailform-input-label = Rhowch eich cyfeiriad e-bost i wirio am ddatguddiadau tor-data.
landing-all-hero-emailform-submit-label = Cael sgan am ddim
landing-all-hero-emailform-submit-sign-up-label = Cofrestrwch i gael sgan am ddim
# This is a label underneath a big number "14" - it's an image that demos Monitor.
landing-all-hero-image-chart-label = datgeliadau

## Top navbar

landing-all-hero-navbar-link-how-it-works = Sut mae'n gweithio
landing-all-hero-navbar-link-pricing = Prisio
landing-all-hero-navbar-link-faqs = Cwestiynau Cyffredin
landing-all-hero-navbar-link-recent-breaches = Tor-data diweddar

# Value Proposition

landing-all-value-prop-fix-exposures = Byddwn yn eich helpu i drwsio'ch datgeliadau
landing-all-value-prop-fix-exposures-description = Ein cenhadaeth yw rhoi rheolaeth ar eich data personol yn ôl yn eich dwylo chi. Byddwn yn eich helpu i ddatrys tor-data a chadw'ch manylion yn breifat - a byddwn yn <privacy_link>parchu eich preifatrwydd</privacy_link> yn ystod y broses.
landing-all-value-prop-info-at-risk = Pa fanylion gall fod mewn perygl?
landing-all-value-prop-info-at-risk-description = Yn anffodus, mae gollyngiadau data yn rhan o'n bywydau digidol. Gall eich cyfrineiriau, manylion cyswllt, manylion ariannol, a manylion bersonol eraill gael eu datgelu, gan eich rhoi mewn perygl o ddwyn hunaniaeth.

# Quote

landing-all-quote = Mae <data_breaches>tor-data</data_breaches> yn digwydd bob 11 munud, gan ddatgelu eich manylion preifat - ond peidiwch â phoeni, gallwn eich helpu.

# Non-US FAQ

landing-all-faq-title = Cwestiynau cyffredin
# FAQ is an acronym for Frequently Asked Questions
landing-all-faq-see-all = Gweld yr holl gwestiynau cyffredin
landing-all-data-breach-definition-qn = Beth yn union yw tor-data?
landing-all-data-breach-definition-ans = Mae tor-data yn digwydd pan fydd manylion personol neu breifat yn cael eu datgelu, eu dwyn neu eu copïo heb ganiatâd. Gall y digwyddiadau diogelwch hyn ddeillio o ymosodiadau seibr ar wefannau, apiau neu unrhyw gronfa ddata lle mae manylion personol pobl yn byw. Gall tor-data ddigwydd yn ddamweiniol hefyd, fel pan fydd manylion mewngofnodi rhywun yn cael eu rhyddhau'n gyhoeddus.
landing-all-data-breach-next-steps-qn = Rwy newydd ddeall fy mod i'n rhan dor-data. Beth ddylwn i ei wneud nesaf?
landing-all-data-breach-next-steps-ans = Ewch i { -brand-mozilla-monitor } i ddysgu beth i'w wneud ar ôl tor-data a chael camau gweithredu i ddatrys datgeliad eich manylion personol. Mae hacwyr yn dibynnu ar bobl yn ailddefnyddio cyfrineiriau, felly mae'n bwysig creu cyfrineiriau cryf, unigryw ar gyfer eich holl gyfrifon. Cadwch eich cyfrineiriau mewn man diogel y mai dim ond chi sydd â mynediad ato; gall hwn fod yr un man lle rydych yn cadw dogfennau pwysig, neu defnyddiwch reolwr cyfrinair.
landing-all-data-breach-info-qn = Pa fanylion sy'n cael eu datgelu mewn achosion o dor-data?
landing-all-data-breach-info-ans = Nid yw pob tor-data yn amlygu'r un wybodaeth i gyd. Mae'n dibynnu ar yr hyn y gall hacwyr gael mynediad ato. Mae llawer o achosion o dor-data yn amlygu cyfeiriadau e-bost a chyfrineiriau. Mae eraill yn datgelu manylion mwy sensitif fel rhifau cardiau credyd, rhifau PIN, a rhifau nawdd cymdeithasol.
landing-all-close-faq-alt = Cau

# Social proof

# Variables
# $num_users is the number of users in the millions.
landing-all-social-proof-title =
    { $num_users ->
        [zero] Mae { $num_users } miliwn o bobl ledled y byd yn ymddiried ynddo
        [one] Mae { $num_users } miliwn o bobl ledled y byd yn ymddiried ynddo
        [two] Mae { $num_users } miliwn o bobl ledled y byd yn ymddiried ynddo
        [few] Mae { $num_users } miliwn o bobl ledled y byd yn ymddiried ynddo
        [many] Mae { $num_users } miliwn o bobl ledled y byd yn ymddiried ynddo
       *[other] Mae { $num_users } miliwn o bobl ledled y byd yn ymddiried ynddo
    }
# Variables
# $num_countries is the number of countries available.
landing-all-social-proof-description =
    { $num_countries ->
        [zero] Ers 2018, rydym wedi helpu pobl mewn { $num_countries } o wledydd i ddiogelu eu data pan fydd wedi cael ei ddatgelu.
        [one] Ers 2018, rydym wedi helpu pobl mewn { $num_countries } gwlad i ddiogelu eu data pan fydd wedi cael ei ddatgelu.
        [two] Ers 2018, rydym wedi helpu pobl mewn { $num_countries } wlad i ddiogelu eu data pan fydd wedi cael ei ddatgelu.
        [few] Ers 2018, rydym wedi helpu pobl mewn { $num_countries } gwlad i ddiogelu eu data pan fydd wedi cael ei ddatgelu.
        [many] Ers 2018, rydym wedi helpu pobl mewn { $num_countries } gwlad i ddiogelu eu data pan fydd wedi cael ei ddatgelu.
       *[other] Ers 2018, rydym wedi helpu pobl mewn { $num_countries } gwlad i ddiogelu eu data pan fydd wedi cael ei ddatgelu.
    }
landing-all-social-proof-press = Fel wedi'i weld yn

# Here's How We Help

landing-all-help-protect-you = Dyma sut rydyn ni'n helpu i'ch diogelu chi
landing-all-help-protect-you-description = Rydym yn credu yn eich hawl i breifatrwydd, felly mae diogelwch monitro tor-data bob amser ar gael yn rhad ac am ddim.
landing-all-help-protect-you-feature-one = Byddwn yn chwilio amdanoch ym mhob achos hysbys o dor-data
landing-all-help-protect-you-feature-two = Byddwn yn eich arwain trwy'r camau i ddatrys pob tor-data
landing-all-help-protect-you-feature-three = Byddwn yn monitro ac yn anfon rhybuddion atoch yn barhaus am unrhyw dor-data newydd
landing-all-help-protect-you-cta = Cofrestrwch am rybuddion tor-data
landing-all-get-started = Sganiwch eich e-bost i ddechrau
landing-all-take-back-data = Ail feddiannwch eich rheolaeth o'ch data
