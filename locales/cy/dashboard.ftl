# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Chart summarizing total exposures

# The number inside <nr> will be displayed in a large font,
# the label inside <label> will be shown underneath, in a smaller font.
# Variables:
#   $nr (number) - Number of unresolved exposures for the user
exposure-chart-heading =
    { $nr ->
        [zero] <nr>{ $nr }</nr> <label>datgeliadau</label>
        [one] <nr>{ $nr }</nr> <label>datgeliad</label>
        [two] <nr>{ $nr }</nr> <label>ddatgeliad</label>
        [few] <nr>{ $nr }</nr> <label>datgeliad</label>
        [many] <nr>{ $nr }</nr> <label>datgeliad</label>
       *[other] <nr>{ $nr }</nr> <label>datgeliad</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Wedi'i drwsio</label>
exposure-chart-legend-heading-type = Datgeliad
exposure-chart-legend-heading-nr = Nifer
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr } ×
exposure-chart-caption = Mae'r siart hwn yn dangos sawl gwaith y mae eich manylion yn cael ei datgelu.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Mae'r siart hwn yn dangos cyfanswm y datgeliadau sydd wedi'u trwsio ( { $total_fixed_exposures_num } allan o { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Nid yw cyfeiriad cartref, aelodau teulu a rhagor wedi'u cynnwys eto.
exposure-chart-returning-user-upgrade-prompt-cta = Dechreuwch sgan rhad ac am ddim
exposure-chart-scan-in-progress-prompt = <b>Wrthi'n sganio:</b> nid yw cyfeiriad, aelodau'r teulu, a rhagor wedi'u cynnwys eto.
modal-active-number-of-exposures-title = Ynghylch eich nifer o ddatgeliadau gweithredol
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [zero] Mae'r siart hwn yn cynnwys cyfanswm y nifer o weithiau rydym wedi dod o hyn i unrhyw fath o ddata a ddatgelwyd ar draws yr holl doriadau data am y { $limit } cyfeiriadau e-bost rydych yn eu monitro ar hyn o bryd.
        [one] Mae'r siart hwn yn cynnwys cyfanswm y nifer o weithiau rydym wedi dod o hyn i unrhyw fath o ddata a ddatgelwyd ar draws yr holl doriadau data am yr { $limit } cyfeiriad e-bost rydych yn ei fonitro ar hyn o bryd.
        [two] Mae'r siart hwn yn cynnwys cyfanswm y nifer o weithiau rydym wedi dod o hyn i unrhyw fath o ddata a ddatgelwyd ar draws yr holl doriadau data am y { $limit } gyfeiriad e-bost rydych yn eu monitro ar hyn o bryd.
        [few] Mae'r siart hwn yn cynnwys cyfanswm y nifer o weithiau rydym wedi dod o hyn i unrhyw fath o ddata a ddatgelwyd ar draws yr holl doriadau data am y { $limit } cyfeiriad e-bost rydych yn eu monitro ar hyn o bryd.
        [many] Mae'r siart hwn yn cynnwys cyfanswm y nifer o weithiau rydym wedi dod o hyn i unrhyw fath o ddata a ddatgelwyd ar draws yr holl doriadau data am y { $limit } chyfeiriad e-bost rydych yn eu monitro ar hyn o bryd.
       *[other] Mae'r siart hwn yn cynnwys cyfanswm y nifer o weithiau rydym wedi dod o hyn i unrhyw fath o ddata a ddatgelwyd ar draws yr holl doriadau data am y { $limit } cyfeiriad e-bost rydych yn eu monitro ar hyn o bryd.
    }
modal-active-number-of-exposures-part-two = Er enghraifft, os oes gennych 10 datgeliad o'ch rhif ffôn, gall hynny olygu bod un rhif ffôn yn cael ei ddatgelu ar 10 gwefan gwahanol, neu gall olygu bod 2 rif ffôn gwahanol wedi'u datgelu ar 5 gwefan gwahanol.
modal-active-number-of-exposures-part-three-all = Unwaith y byddan nhw wedi'u datrys, byddan nhw'n cael eu hychwanegu at gyfanswm eich datgeliadau wedi'u trwsio ar y dudalen Wedi Trwsio.
modal-fixed-number-of-exposures-title = Ynghylch eich nifer o ddatgeliadau wedi'u trwsio
modal-fixed-number-of-exposures-all = Mae'r siart hwn yn cynnwys cyfanswm nifer yr achosion o dor-data sydd wedi'u pennu ar gyfer yr holl gyfeiriadau e-bost rydych chi'n eu monitro ar hyn o bryd. Unwaith y bydd datgeliadau wedi'u marcio fel wedi eu trwsio, byddan nhw'n cael eu hychwanegu at y cyfanswm yma.
modal-cta-ok = Iawn
modal-cta-got-it = Iawn
open-modal-alt = Modal agored
close-modal-alt = Cau'r moddol
progress-card-heres-what-we-fixed-headline-all = Dyma beth rydych wedi'u trwsio
progress-card-manually-fixed-headline = Wedi'u trwsio â llaw
dashboard-tab-label-action-needed = Angen gweithredu
dashboard-tab-label-fixed = Wedi Trwsio
dashboard-exposures-all-fixed-label = Popeth wedi'i drwsio yma!
dashboard-exposures-area-headline = Gweld pob gwefan lle mae'ch manylion yn cael eu datgelu
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [zero] Heb ganfod { $exposures_unresolved_num } datgeliad o'ch data.
        [one] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
        [two] Wedi canfod { $exposures_unresolved_num } ddatgeliad o'ch data.
        [few] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
        [many] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
       *[other] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [zero] Heb ymddangosodd ar { $data_breach_unresolved_num } toriad data.
        [one] Wedi ymddangos mewn { $data_breach_unresolved_num } tor-data .
        [two] Wedi ymddangos mewn { $data_breach_unresolved_num } tor-data .
        [few] Wedi ymddangos mewn { $data_breach_unresolved_num } tor-data .
        [many] Wedi ymddangos mewn { $data_breach_unresolved_num } tor-data .
       *[other] Wedi ymddangos mewn { $data_breach_unresolved_num } tor-data .
    }
dashboard-fixed-area-headline-all = Gweld pob datgeliad sydd wedi'i drwsio
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Hidl
dashboard-exposures-filter-company = Cwmni
dashboard-exposures-filter-date-found = Dyddiad canfod
dashboard-exposures-filter-date-found-last-seven-days = Y 7 diwrnod diwethaf
dashboard-exposures-filter-date-found-last-thirty-days = Y 30 diwrnod diwethaf
dashboard-exposures-filter-date-found-last-year = Llynedd
dashboard-exposures-filter-status = Statws
popover-open-filter-settings-alt = Dewiswch hidlwyr
dashboard-exposures-filter-show-all = Dangos y cyfan
dashboard-exposures-filter-show-results = Dangos y canlyniadau
dashboard-exposures-filter-reset = Ailosod

## Top banner on the dashboard

dashboard-top-banner-section-label = Crynodeb bwrdd gwaith
dashboard-top-banner-your-data-is-protected-title = Mae eich data wedi'i ddiogelu
dashboard-top-banner-your-data-is-protected-cta = Gweld beth sydd wedi'i drwsio
dashboard-top-banner-protect-your-data-title = Gadewch i ni ddiogelu eich data
dashboard-top-banner-protect-your-data-cta = Gadewch i ni ei drwsio
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [zero] Heb ganfod { $exposures_unresolved_num } datgeliad o'ch data.
        [one] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
        [two] Wedi canfod { $exposures_unresolved_num } ddatggeliad o'ch data.
        [few] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
        [many] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
       *[other] Wedi canfod { $exposures_unresolved_num } datgeliad o'ch data.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [zero] Heb ymddangos ar { $data_breach_unresolved_num } tor-data. Llongyfarchiadau!
        [one] Mae wedi ymddangos mewn { $data_breach_unresolved_num } tor-data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
        [two] Mae wedi ymddangos mewn { $data_breach_unresolved_num } dor-data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
        [few] Mae wedi ymddangos mewn { $data_breach_unresolved_num } tor-data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
        [many] Mae wedi ymddangos mewn { $data_breach_unresolved_num } thor-data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
       *[other] Mae wedi ymddangos mewn { $data_breach_unresolved_num } tor-data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
    }
dashboard-top-banner-no-exposures-found-title = Heb ganfod unrhyw ddatgeliadau
dashboard-top-banner-non-us-no-exposures-found-description = Newyddion gwych! Rydym wedi chwilio'r holl doriadau data hysbys a heb ganfod unrhyw ddatgeliadau. Byddwn yn parhau i fonitro eich cyfeiriad e-bost a byddwn yn eich rhybuddio os bydd tor-data newydd yn digwydd.
dashboard-no-exposures-label = Heb ganfod unrhyw ddatgeliadau
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [zero] Gwaith da, doedd dim datgeliad o'ch data. Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatgeliadau.
        [one] Gwaith da, mae'r datgeliad o'ch data wedi'i drwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatgeliadau newydd.
        [two] Gwaith da, mae'r { $exposures_resolved_num } ddatgeliad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatgeliadau newydd.
        [few] Gwaith da, mae'r { $exposures_resolved_num } datgeliad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatgeliadau newydd.
        [many] Gwaith da, mae'r { $exposures_resolved_num } datgeliad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatgeliadau newydd.
       *[other] Gwaith da, mae'r { $exposures_resolved_num } ddatgeliad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatgeliadau newydd.
    }
dashboard-top-banner-monitor-more-cta = Monitro mwy o e-byst

# About Exposure Indicators Modal

modal-exposure-status-description-all = Rydym yn chwilio am ddatgeliadau ym mhob achos hysbys o dor-data. Bydd gan eich datgeliadau o'r cyflyrau canlynol:
modal-exposure-indicator-title = Statws datgeliadau
modal-exposure-indicator-action-needed = Mae angen gweithredu uwch neu â llaw gennych chi i gwblhau gweithred.
modal-exposure-indicator-fixed = Mae'r datguddiad wedi'i ddatrys ac nid oes unrhyw gamau i chi eu cymryd.
