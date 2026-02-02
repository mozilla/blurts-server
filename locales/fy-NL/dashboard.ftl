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
        [one] <nr>{ $nr }</nr> <label>lek</label>
       *[other] <nr>{ $nr }</nr> <label>lekken</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Oplost</label>
exposure-chart-legend-heading-type = Lek
exposure-chart-legend-heading-nr = Oantal
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Dizze grafyk lit sjen hoe faak jo gegevens aktyf lekt binne.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Dizze grafyk toant it totaal oantal oploste lekken ({ $total_fixed_exposures_num } fan { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Wenplak, famyljeleden en mear binne noch net opnommen.
exposure-chart-returning-user-upgrade-prompt-cta = In fergeze scan starte
exposure-chart-scan-in-progress-prompt = <b>Dwaande mei scannen:</b> adres, famyljeleden en mear binne noch net opnommen.
modal-active-number-of-exposures-title = Oer jo oantal aktive lekken
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Dizze grafyk toant it totale oantal kearen dat wy elk type fan lekte gegevens fûn hawwe yn alle datalekken foar it iene e-mailadres dat jo op dit stuit kontrolearje.
       *[other] Dizze grafyk toant it totale oantal kearen dat wy elk type fan lekte gegevens fûn hawwe yn alle datalekken , oant { $limit } e-mailadressen dy’t jo op dit stuit kontrolearje.
    }
modal-active-number-of-exposures-part-two = As jo bygelyks 10 lekken fan jo telefoannûmer hawwe, kin dat betsjutte dat ien telefoannûmer op 10 ferskillende websites lekt wurde, of it kin betsjutte dat 2 ferskillende telefoannûmers op 5 ferskillende websites lekt binne.
modal-active-number-of-exposures-part-three-all = Sadree’t se oplost binne, wurde se tafoege oan jo totale oantal fêste lekken op de side Oplost.
modal-fixed-number-of-exposures-title = Oer jo oantal oploste lekken
modal-fixed-number-of-exposures-all = Dit diagram omfettet it totale oantal gegevenslekken dat reparearre is foar alle e-mailadressen dy’t jo op dit stuit kontrolearje. Sa gau as lekken as oplost markearre binne, wurde se hjir oan it totaal tafoege.
modal-cta-ok = OK
modal-cta-got-it = Begrepen
open-modal-alt = Modal iepenje
close-modal-alt = Modal slute
progress-card-heres-what-we-fixed-headline-all = Dit hawwe jo reparearre
progress-card-manually-fixed-headline = Hânmjittich reparearre
dashboard-tab-label-action-needed = Aksje nedich
dashboard-tab-label-fixed = Oplost
dashboard-exposures-all-fixed-label = Alles oplost!
dashboard-exposures-area-headline = Alle websites wêrop jo gegevens lekt binne
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Wy hawwe { $exposures_unresolved_num } lek fan jo gegevens fûn.
       *[other] Wy hawwe { $exposures_unresolved_num } lekken fan jo gegevens fûn.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Dizze binne ferskynd yn { $data_breach_unresolved_num } datalek.
       *[other] Dizze binne ferskynd yn { $data_breach_unresolved_num } datalekken.
    }
dashboard-fixed-area-headline-all = Alle oploste lekken toane
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filterje
dashboard-exposures-filter-company = Bedriuw
dashboard-exposures-filter-date-found = Datum ûntdekt
dashboard-exposures-filter-date-found-last-seven-days = Ofrûne 7 dagen
dashboard-exposures-filter-date-found-last-thirty-days = Ofrûne 30 dagen
dashboard-exposures-filter-date-found-last-year = Ofrûne jier
dashboard-exposures-filter-status = Steat
popover-open-filter-settings-alt = Filters selektearje
dashboard-exposures-filter-show-all = Alles toane
dashboard-exposures-filter-show-results = Resultaten toane
dashboard-exposures-filter-reset = Opnij ynstelle

## Top banner on the dashboard

dashboard-top-banner-section-label = Dashbordgearfetting
dashboard-top-banner-your-data-is-protected-title = Jo gegevens binne beskerme
dashboard-top-banner-your-data-is-protected-cta = Sjoch wat der oplost is
dashboard-top-banner-protect-your-data-title = Litte wy jo gegevens beskermje
dashboard-top-banner-protect-your-data-cta = Litte wy it reparearje
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Wy hawwe { $exposures_unresolved_num } lek fan jo gegevens fûn.
       *[other] Wy hawwe { $exposures_unresolved_num } lekken fan jo gegevens fûn.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Dizze binne ferskynd yn { $data_breach_unresolved_num } datalek. Wy helpe jo stap foar stap om dit te ferhelpen.
       *[other] Dizze binne ferskynd yn { $data_breach_unresolved_num } datalekken. Wy helpe jo stap foar stap om dit te ferhelpen.
    }
dashboard-top-banner-no-exposures-found-title = Gjin lekken fûn
dashboard-top-banner-non-us-no-exposures-found-description = Geweldich nijs! Wy hawwe alle bekende datalekken trochsocht en gjin lekken fûn. Wy bliuwe jo e-mailadres kontrolearje en sille jo warskôgje as in nij datalek bart.
dashboard-no-exposures-label = Gjin lekken fûn
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Goed wurk, it lek fan jo gegevens is oplost! Wy bliuwe kontrolearje en sille jo op de hichte hâlde fan nije lekken.
       *[other] Goed wurk, alle { $exposures_resolved_num } lekken fan jo gegevens is oplost! Wy bliuwe kontrolearje en sille jo op de hichte hâlde fan nije lekken.
    }
dashboard-top-banner-monitor-more-cta = Mear e-mailadressen kontrolearje

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Wy sykje nei lekken yn alle bekende gegevens datalekken.
    Jo lekken sille ien fan de folgjende statussen hawwe:
modal-exposure-indicator-title = Leksteaten
modal-exposure-indicator-action-needed = Jo moatte in avansearre of hânmjittige aksje útfiere om in aksje te foltôgjen.
modal-exposure-indicator-fixed = It lek is ferholpen en jo hoege gjin aksje te ûndernimmen.
