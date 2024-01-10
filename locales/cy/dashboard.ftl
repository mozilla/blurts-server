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
exposure-chart-scan-in-progress-prompt = <b>Wrthi'n sganio:</b>  nid yw cyfeiriad, aelodau'r teulu, a rhagor wedi'u cynnwys eto.
modal-active-number-of-exposures-title = Ynglŷn â'ch nifer o ddatguddiadau gweithredol
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
modal-active-number-of-exposures-part-three-all = Unwaith y byddan nhw wedi'u datrys, byddan nhw'n cael eu hychwanegu at gyfanswm eich datguddiadau wedi'u trwsio ar y dudalen Wedi Trwsio.
modal-cta-ok = Iawn
modal-open-alt = Agor
modal-close-alt = Cau
progress-card-heres-what-we-fixed-headline-all = Dyma beth rydych wedi'u trwsio
progress-card-manually-fixed-headline = Wedi'i drwsio â llaw
dashboard-tab-label-action-needed = Angen gweithredu
dashboard-tab-label-fixed = Wedi Trwsio
dashboard-exposures-all-fixed-label = Popeth wedi'i drwsio yma!
dashboard-exposures-area-headline = Gweld pob gwefan lle mae'ch manylion yn cael eu datgelu
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [zero] Heb ganfod { $exposures_unresolved_num } datguddiad o'ch data.
        [one] Wedi canfod { $exposures_unresolved_num } datguddiad o'ch data.
        [two] Wedi canfod { $exposures_unresolved_num } ddatguddiad o'ch data.
        [few] Wedi canfod { $exposures_unresolved_num } datguddiad o'ch data.
        [many] Wedi canfod { $exposures_unresolved_num } datguddiad o'ch data.
       *[other] Wedi canfod { $exposures_unresolved_num } datguddiad o'ch data.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [zero] Heb ymddangosodd ar { $data_breach_unresolved_num } toriad data.
        [one] Wedi ymddangosodd mewn { $data_breach_unresolved_num } tor-data .
        [two] Wedi ymddangosodd mewn { $data_breach_unresolved_num } tor-data .
        [few] Wedi ymddangosodd mewn { $data_breach_unresolved_num } tor-data .
        [many] Wedi ymddangosodd mewn { $data_breach_unresolved_num } tor-data .
       *[other] Wedi ymddangosodd mewn { $data_breach_unresolved_num } tor-data .
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
dashboard-exposures-filter-status-action-needed = Angen Gweithredu
dashboard-exposures-filter-status-in-progress = Ar Waith
dashboard-exposures-filter-status-fixed = Wedi Trwsio
popover-open-filter-settings-alt = Dewiswch hidlwyr
dashboard-exposures-filter-show-all = Dangos y cyfan
dashboard-exposures-filter-show-results = Dangos y canlyniadau
dashboard-exposures-filter-reset = Ailosod

## Top banner on the dashboard

dashboard-top-banner-section-label = Crynodeb bwrdd gwaith
dashboard-top-banner-scan-in-progress-title = Mae eich sgan yn dal ar waith
dashboard-top-banner-your-data-is-protected-title = Mae eich data wedi'i ddiogelu
dashboard-top-banner-your-data-is-protected-cta = Gweld beth sy'n sefydlog
dashboard-top-banner-lets-keep-protecting-title = Gadewch i ni barhau i amddiffyn eich data
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [zero] Mae gennych { $exposures_unresolved_num } amlygiad ar ôl i'w trwsio o hyd. Daliwch ati ac amddiffyn eich hun. Byddwn yn eich arwain gam wrth gam.
        [one] Mae gennych { $exposures_unresolved_num } amlygiad ar ôl i'w drwsio o hyd. Daliwch ati ac amddiffyn eich hun. Byddwn yn eich arwain gam wrth gam.
        [two] Mae gennych { $exposures_unresolved_num } amlygiad ar ôl i'w trwsio o hyd. Daliwch ati ac amddiffyn eich hun. Byddwn yn eich arwain gam wrth gam.
        [few] Mae gennych { $exposures_unresolved_num } amlygiad ar ôl i'w trwsio o hyd. Daliwch ati ac amddiffyn eich hun. Byddwn yn eich arwain gam wrth gam.
        [many] Mae gennych { $exposures_unresolved_num } amlygiad ar ôl i'w trwsio o hyd. Daliwch ati ac amddiffyn eich hun. Byddwn yn eich arwain gam wrth gam.
       *[other] Mae gennych { $exposures_unresolved_num } amlygiad ar ôl i'w trwsio o hyd. Daliwch ati ac amddiffyn eich hun. Byddwn yn eich arwain gam wrth gam.
    }
dashboard-top-banner-lets-keep-protecting-cta = Gadewch i ni ddal ati
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [zero] Canfuwyd { $exposures_unresolved_num } datguddiad o'ch data.
        [one] Canfuwyd { $exposures_unresolved_num } datguddiad eich data.
        [two] Canfuwyd { $exposures_unresolved_num } datguddiad o'ch data.
        [few] Canfuwyd { $exposures_unresolved_num } datguddiad o'ch data.
        [many] Canfuwyd { $exposures_unresolved_num } datguddiad o'ch data.
       *[other] Canfuwyd { $exposures_unresolved_num } datguddiad o'ch data.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [zero] Ymddangosodd ar draws { $data_breach_unresolved_num } toriad data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
        [one] Ymddangosodd mewn toriad data { $data_breach_unresolved_num }. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
        [two] Ymddangosodd ar draws { $data_breach_unresolved_num } toriad data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
        [few] Ymddangosodd ar draws { $data_breach_unresolved_num } toriad data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
        [many] Ymddangosodd ar draws { $data_breach_unresolved_num } toriad data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
       *[other] Ymddangosodd ar draws { $data_breach_unresolved_num } toriad data. Byddwn yn eich arwain gam wrth gam ar sut i'w drwsio.
    }
dashboard-top-banner-no-exposures-found-title = Ni chanfuwyd unrhyw ddatguddiadau
dashboard-top-banner-non-us-no-exposures-found-description = Newyddion gwych! Fe wnaethom chwilio'r holl doriadau data hysbys ac ni chanfuwyd unrhyw ddatguddiadau. Byddwn yn parhau i fonitro eich cyfeiriad e-bost a byddwn yn eich rhybuddio os bydd toriad newydd yn digwydd.
dashboard-no-exposures-label = Ni chanfuwyd unrhyw ddatguddiadau
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [zero] Gwaith gwych, mae pob { $exposures_resolved_num } datguddiad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatguddiadau newydd.
        [one] Gwaith gwych, mae datguddiad eich data yn sefydlog! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatguddiadau newydd.
        [two] Gwaith gwych, mae pob { $exposures_resolved_num } datguddiad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatguddiadau newydd.
        [few] Gwaith gwych, mae pob { $exposures_resolved_num } datguddiad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatguddiadau newydd.
        [many] Gwaith gwych, mae pob { $exposures_resolved_num } datguddiad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatguddiadau newydd.
       *[other] Gwaith gwych, mae pob { $exposures_resolved_num } datguddiad o'ch data wedi'u trwsio! Byddwn yn parhau i fonitro ac yn rhoi gwybod i chi am unrhyw ddatguddiadau newydd.
    }
dashboard-top-banner-monitor-more-cta = Monitro mwy o e-byst

# About Exposure Statuses Modal

modal-exposure-status-title = Ynglŷn â statws datguddiad
modal-exposure-status-description-all = Rydym yn chwilio am ddatguddiadau ym mhob achos hysbys o dorri data. Bydd gan eich datguddiadau un o'r statwsau canlynol:
modal-exposure-status-action-needed = Mae <b>Gweithredu sydd ei angen</b> yn golygu ei fod yn weithredol ar hyn o bryd a bod angen i chi gymryd camau i'w drwsio.
modal-exposure-status-fixed = Mae <b>Sefydlog</b> yn golygu bod y datguddiad wedi'i ddatrys ac nid oes unrhyw gamau i chi eu cymryd.
