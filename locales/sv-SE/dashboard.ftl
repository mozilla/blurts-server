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
        [one] <nr>{ $nr }</nr> <label>exponering</label>
       *[other] <nr>{ $nr }</nr> <label>exponeringar</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed =
    { $nr ->
        [one] <nr>{ $nr }</nr> <label>löst</label>
       *[other] <nr>{ $nr }</nr> <label>lösta</label>
    }
exposure-chart-legend-heading-type = Exponering
exposure-chart-legend-heading-nr = Antal
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Det här diagrammet visar hur många gånger din information har aktivt exponerats.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Det här diagrammet visar antalet exponeringar som är lösta ({ $total_fixed_exposures_num } av { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Hemadress, familjemedlemmar med mera är inte inkluderade ännu.
exposure-chart-returning-user-upgrade-prompt-cta = Starta en gratis skanning
exposure-chart-scan-in-progress-prompt = <b>Skanning pågår:</b> adress, familjemedlemmar och mer är inte inkluderade ännu.
modal-active-number-of-exposures-title = Om ditt antal aktiva exponeringar
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Det här diagrammet visar det totala antalet gånger vi hittade varje typ av data exponerad i dataintrång för { $limit } e-postadress som du för närvarande övervakar.
       *[other] Det här diagrammet visar det totala antalet gånger vi hittade varje typ av data exponerad i dataintrång för upp till { $limit } e-postadresser som du för närvarande övervakar.
    }
modal-active-number-of-exposures-part-two = Till exempel, om du har 10 exponeringar av ditt telefonnummer, kan det betyda att ett telefonnummer exponerats på 10 olika webbplatser eller så kan det betyda att 2 olika telefonnummer exponerades på 5 olika webbplatser.
modal-active-number-of-exposures-part-three-all = När de är lösta läggs de till ditt totala antal lösta exponeringar på sidan Lösta.
modal-fixed-number-of-exposures-title = Om ditt antal lösta exponeringar
modal-fixed-number-of-exposures-all = Det här diagrammet innehåller det totala antalet dataintrång som har åtgärdats för alla e-postadresser du för närvarande övervakar. När exponeringar är markerade som lösta läggs de till den totala här.
modal-cta-ok = OK
modal-cta-got-it = Jag förstår
open-modal-alt = Öppna modal
close-modal-alt = Stäng modal
progress-card-heres-what-we-fixed-headline-all = Det här löste du
progress-card-manually-fixed-headline = Manuellt löst
dashboard-tab-label-action-needed = Åtgärd behövs
dashboard-tab-label-fixed = Löst
dashboard-exposures-all-fixed-label = Allt löst här!
dashboard-exposures-area-headline = Se alla webbplatser där din information är exponerad
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Vi hittade { $exposures_unresolved_num } exponering av din data.
       *[other] Vi hittade { $exposures_unresolved_num } exponeringar av din data.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Den förekom i { $data_breach_unresolved_num } dataintrång.
       *[other] Den förekom i { $data_breach_unresolved_num } dataintrång.
    }
dashboard-fixed-area-headline-all = Visa alla exponeringar som är lösta
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Företag
dashboard-exposures-filter-date-found = Datum för upptäckt
dashboard-exposures-filter-date-found-last-seven-days = Senaste 7 dagarna
dashboard-exposures-filter-date-found-last-thirty-days = Senaste 30 dagarna
dashboard-exposures-filter-date-found-last-year = Förra året
dashboard-exposures-filter-status = Status
popover-open-filter-settings-alt = Välj filter
dashboard-exposures-filter-show-all = Visa alla
dashboard-exposures-filter-show-results = Visa resultat
dashboard-exposures-filter-reset = Återställ

## Top banner on the dashboard

dashboard-top-banner-section-label = Sammanfattning av översikten
dashboard-top-banner-your-data-is-protected-title = Dina uppgifter är skyddade
dashboard-top-banner-your-data-is-protected-cta = Se vad som är löst
dashboard-top-banner-protect-your-data-title = Låt oss skydda din data
dashboard-top-banner-protect-your-data-cta = Låt oss lösa det
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Vi hittade { $exposures_unresolved_num } exponering av din data.
       *[other] Vi hittade { $exposures_unresolved_num } exponeringar av din data.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Den förekom i { $data_breach_unresolved_num } dataintrång. Vi guidar dig steg-för-steg om hur du åtgärdar det.
       *[other] Den förekom i { $data_breach_unresolved_num } dataintrång. Vi guidar dig steg-för-steg om hur du åtgärdar det.
    }
dashboard-top-banner-no-exposures-found-title = Inga exponeringar hittades
dashboard-top-banner-non-us-no-exposures-found-description = Goda nyheter! Vi genomsökte alla kända dataintrång och hittade inga exponeringar. Vi kommer att fortsätta övervaka din e-postadress och kommer att varna dig om ett nytt intrång uppstår.
dashboard-no-exposures-label = Inga exponeringar hittades
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Bra jobbat, exponeringen av din data är löst! Vi kommer att fortsätta övervaka och kommer att varna dig om eventuella nya exponeringar.
       *[other] Bra jobbat, alla { $exposures_resolved_num } exponeringar av din data är lösta! Vi kommer att fortsätta övervaka och kommer att varna dig om eventuella nya exponeringar.
    }
dashboard-top-banner-monitor-more-cta = Övervaka fler e-postadresser

# About Exposure Indicators Modal

modal-exposure-status-description-all = Vi söker efter exponeringar i alla kända dataintrång. Dina exponeringar kommer att ha en av följande statusar:
modal-exposure-indicator-title = Exponeringsstatusar
modal-exposure-indicator-action-needed = Avancerade eller manuella åtgärder behövs för att slutföra en åtgärd.
modal-exposure-indicator-fixed = Exponeringen har lösts och det finns inga åtgärder för dig att vidta.
