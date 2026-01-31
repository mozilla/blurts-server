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
        [one] <nr>{ $nr }</nr> <label>jehechauka</label>
       *[other] <nr>{ $nr }</nr> <label>jehechaukakuéra</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Ojáva</label>
exposure-chart-legend-heading-type = Ejehechauka
exposure-chart-legend-heading-nr = Papapy
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Ko ta’ãnga ohechauka mba’eichaitépa ne marandu oñembyaikuaa.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Ko ta’ãnga ohechauka mboyjeýpa jehechauka oñemoĩporã ({ $total_fixed_exposures_num } { $total_exposures_num }) mba’e
exposure-chart-returning-user-upgrade-prompt = Pe óga, pehẽnguekuéra ha ambue mba’ekuaarã ndoikéi gueteri.
exposure-chart-returning-user-upgrade-prompt-cta = Emoha’ãnga reiete
exposure-chart-scan-in-progress-prompt = <b>Oñemoha’ãngahína:</b> kundaharape, pehẽnguekuéra ha hetave ndoikéi gueteri.
modal-active-number-of-exposures-title = Mboyjeýmapa ipapapy jehechauka hendýva
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Ko gráfico ogueroike mboy jeýpa rojuhu peteĩteĩva mba’ekuaarã osẽkuaáva opaite mba’ekuaarã { $limit }-pe g̃uarã ñanduti veve kundaharape emongu’éva ko’ág̃a.
       *[other] Ko gráfico ogueroike mboy jeýpa rojuhu peteĩteĩva mba’ekuaarã osẽkuaáva opaite mba’ekuaarã { $limit }-pe g̃uarã ñanduti veve kundaharape emongu’éva ko’ág̃a.
    }
modal-active-number-of-exposures-part-two = Techapyrã, eguerekóramo 10 mba’evaikuaa ne pumbyry papapy rehegua, upéva ikatu he’ise peteĩ pumbyry papapy imarãkuaaha 10 tendápe térã ikatu he’ise 2 pumbyry papapy iñambuéva imarãkuaahague 5 tenda ambuévape.
modal-active-number-of-exposures-part-three-all = Oñemoĩporã vove, oñembojuajúta nde papapy jehechapy oĩporãmava kuatiarogue Moĩporãhápe.
modal-fixed-number-of-exposures-title = Mboyjeýmapa ipapapy jehechauka opytáva
modal-fixed-number-of-exposures-all = Ko ta’ãnga’i ogueroikéta mboyete mba’ekuaarã ñemboguápa oñemoĩporã opaite ñanduti vevépe g̃uarã ehecháva ko’ág̃a peve. Oñemongurusupa rire ñemoĩporãmbyrévaramo, oñembojoajupaitéta ko’ápe.
modal-cta-ok = MONEĨ
modal-cta-got-it = Aikũmby
open-modal-alt = Embojuruja modal
close-modal-alt = Emboty modal
progress-card-heres-what-we-fixed-headline-all = Kóva pe emoĩporãva
progress-card-manually-fixed-headline = Pópe ñembojáva
dashboard-tab-label-action-needed = Tekotevẽva ojejapo
dashboard-tab-label-fixed = Opytáva
dashboard-exposures-all-fixed-label = ¡Oĩporãma ko’ápe!
dashboard-exposures-area-headline = Ehecha umi tenda ne marandu oñembyaikuaaha
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Rojuhu { $exposures_unresolved_num } ne mba’ekuaarã jehechauka.
       *[other] Rojuhu { $exposures_unresolved_num } ne mba’ekuaarã jehechauka.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Ojehecha { $data_breach_unresolved_num } mba’ekuaarã ñemboguápe:
       *[other] Ojehecha { $data_breach_unresolved_num } mba’ekuaarã ñemboguápe:
    }
dashboard-fixed-area-headline-all = Ehecha umi jehechaukakue oĩporãjeýmava
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Mbogua
dashboard-exposures-filter-company = Atyguasu
dashboard-exposures-filter-date-found = Arange juhupyre
dashboard-exposures-filter-date-found-last-seven-days = 7 ára ohasaramova
dashboard-exposures-filter-date-found-last-thirty-days = 30 ára ohasaramova
dashboard-exposures-filter-date-found-last-year = Ary ohasaramóva
dashboard-exposures-filter-status = Tekotee
popover-open-filter-settings-alt = Eiporavo mboguaha
dashboard-exposures-filter-show-all = Techaukapaite
dashboard-exposures-filter-show-results = Ehechauka tembiapokue
dashboard-exposures-filter-reset = Mbojevyjey

## Top banner on the dashboard

dashboard-top-banner-section-label = Mba’erupa momichĩ
dashboard-top-banner-your-data-is-protected-title = Ne mba’ekuaarã oñemo’ã
dashboard-top-banner-your-data-is-protected-cta = Ehecha oĩporãmava
dashboard-top-banner-protect-your-data-title = Romo’ãta ne mba’ekuaarã
dashboard-top-banner-protect-your-data-cta = Romoĩ porãta
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Rojuhu { $exposures_unresolved_num } ne mba’ekuaarã jehechauka.
       *[other] Rojuhu { $exposures_unresolved_num } ne mba’ekuaarã jehechauka.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Nderupyty’imi { $data_breach_unresolved_num } mba’ekuaarã ñembogua. Rombohapéta eku’évo emoĩporã hag̃ua.
       *[other] Nderupyty’imi { $data_breach_unresolved_num } mba’ekuaarã ñembogua. Rombohapéta eku’évo emoĩporã hag̃ua.
    }
dashboard-top-banner-no-exposures-found-title = Ndojejuhúi máva jehechauka
dashboard-top-banner-non-us-no-exposures-found-description = ¡Mba’éichapa! Roheka umi mba’ekuaarã ñembogua ojekuaáva ha ndorojuhúi mba’evairã. Rohapykuehóta ne ñanduti veve kundaharape ha romomarandúta oĩramo ñembogua.
dashboard-no-exposures-label = Ndojejuhúi máva jehechauka
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] ¡Tembiapo iporãva! ¡Oñemyatyrõma ne mba’ekuaarã rekomarã! Rohechameméta ha roikuaaukáta ndéve oimeraẽ tekomarã pyahu oĩvare.
       *[other] ¡Tembiapo iporãva! ¡Oñemyatyrõma ne mba’ekuaarã { $exposures_resolved_num } rekomarã! Rohechameméta ha roikuaaukáta ndéve oimeraẽ tekomarã pyahu oĩvare.
    }
dashboard-top-banner-monitor-more-cta = Roma’ẽag̃uíta hetave ñanduti vevére

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Roheka ñembyaikua opaite mba’ekuaarã ñembogua ojekuaávape.
    Ne ñembyaikua orekokuaa peteĩva ko’ã tekotee:
modal-exposure-indicator-title = Mba’éichapa ejehechakuaa
modal-exposure-indicator-action-needed = Tekotevẽ eku’e mbarete térã nde poite rupi ejapopa hag̃ua.
modal-exposure-indicator-fixed = Oĩporãma pe jehechaukakue ha natekotevẽvéima ejapo mba’evete.
