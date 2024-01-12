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
        [one] <nr>{ $nr }</nr> <label>Datenleck</label>
       *[other] <nr>{ $nr }</nr> <label>Datenlecks</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Behoben</label>
exposure-chart-legend-heading-type = Datenleck
exposure-chart-legend-heading-nr = Anzahl
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Dieses Diagramm zeigt, wie oft Ihre Daten aktiv offengelegt werden.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Dieses Diagramm zeigt die insgesamt behobenen Datenlecks ({ $total_fixed_exposures_num } von { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Privat: Adresse, Familienmitglieder und mehr sind noch nicht enthalten.
exposure-chart-returning-user-upgrade-prompt-cta = Kostenlose Überprüfung starten
exposure-chart-scan-in-progress-prompt = <b>Scan wird durchgeführt</b>: Adresse, Familienmitglieder und mehr wurden noch nicht erfasst.
modal-active-number-of-exposures-title = Über die Anzahl aktiver Datenlecks
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Dieses Diagramm zeigt, wie oft wir die einzelnen Datentypen gefunden haben, und zwar über alle Datenlecks für die E-Mail-Adresse { $limit }, die Sie gerade beobachten.
       *[other] Diese Tabelle zeigt, wie oft wir jeden Datentyp offengelegt haben, über alle Datenlecks für bis zu { $limit } E-Mail-Adressen, die Sie derzeit beobachten.
    }
modal-active-number-of-exposures-part-two = Wenn Sie beispielsweise 10 Offenlegungen Ihrer Telefonnummer haben, kann dies bedeuten, dass eine Telefonnummer auf 10 verschiedenen Websites offengelegt wurde, oder es könnte bedeuten, dass 2 verschiedene Telefonnummern auf 5 verschiedenen Websites offengelegt wurden.
modal-active-number-of-exposures-part-three-all = Sobald sie behoben wurden, werden sie zur Gesamtzahl der behobenen Offenlegungen auf der Seite „Behoben“ hinzugefügt.
modal-fixed-number-of-exposures-title = Über die Anzahl der behobenen Offenlegungen
modal-fixed-number-of-exposures-all = Diese Tabelle enthält die Gesamtzahl der Datenlecks, die für alle E-Mail-Adressen behoben wurden, die Sie derzeit überwachen. Sobald Offenlegungen als behoben markiert werden, werden sie hier zur Gesamtsumme hinzugefügt.
modal-cta-ok = OK
modal-open-alt = Öffnen
modal-close-alt = Schließen
progress-card-heres-what-we-fixed-headline-all = Sie haben Folgendes behoben
progress-card-manually-fixed-headline = Manuell behoben
dashboard-tab-label-action-needed = Handlungsbedarf
dashboard-tab-label-fixed = Behoben
dashboard-exposures-all-fixed-label = Hier ist alles behoben!
dashboard-exposures-area-headline = Alle Websites anzeigen, auf denen Ihre Daten offengelegt wurden
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Wir haben { $exposures_unresolved_num } Offenlegung Ihrer Daten gefunden.
       *[other] Wir haben { $exposures_unresolved_num } Offenlegungen Ihrer Daten gefunden.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Sie ist von { $data_breach_unresolved_num } Datenlecks betroffen.
       *[other] Sie ist bei { $data_breach_unresolved_num } Datenlecks aufgetreten.
    }
dashboard-fixed-area-headline-all = Alle behobenen Offenlegungen anzeigen
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filter
dashboard-exposures-filter-company = Firma
dashboard-exposures-filter-date-found = gefunden am
dashboard-exposures-filter-date-found-last-seven-days = Letzte 7 Tage
dashboard-exposures-filter-date-found-last-thirty-days = Letzte 30 Tage
dashboard-exposures-filter-date-found-last-year = Letztes Jahr
dashboard-exposures-filter-status = Status
dashboard-exposures-filter-status-action-needed = Handlungsbedarf
dashboard-exposures-filter-status-in-progress = In Bearbeitung
dashboard-exposures-filter-status-fixed = Behoben
popover-open-filter-settings-alt = Filter auswählen
dashboard-exposures-filter-show-all = Alle anzeigen
dashboard-exposures-filter-show-results = Ergebnisse anzeigen
dashboard-exposures-filter-reset = Zurücksetzen

## Top banner on the dashboard

dashboard-top-banner-section-label = Zusammenfassung der Übersicht
dashboard-top-banner-scan-in-progress-title = Ihre Überprüfung wird noch durchgeführt
dashboard-top-banner-your-data-is-protected-title = Ihre Daten sind geschützt
dashboard-top-banner-your-data-is-protected-cta = Sehen Sie, was behoben wurde
dashboard-top-banner-lets-keep-protecting-title = Schützen wir Ihre Daten weiterhin
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Sie haben noch { $exposures_unresolved_num } eine Offenlegung, das Sie beheben müssen. Machen Sie weiter und schützen Sie sich. Wir führen Sie Schritt für Schritt.
       *[other] Sie haben noch { $exposures_unresolved_num } Offenlegungen, die Sie beheben müssen. Machen Sie weiter und schützen Sie sich. Wir führen Sie Schritt für Schritt.
    }
dashboard-top-banner-lets-keep-protecting-cta = Machen wir weiter
dashboard-top-banner-protect-your-data-title = Schützen wir Ihre Daten
dashboard-top-banner-protect-your-data-cta = Lösen wir das Problem
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Wir haben { $exposures_unresolved_num } Offenlegung Ihrer Daten gefunden.
       *[other] Wir haben { $exposures_unresolved_num } Offenlegungen Ihrer Daten gefunden.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Sie ist von { $data_breach_unresolved_num } Datenleck betroffen. Wir zeigen Ihnen Schritt für Schritt, wie Sie das Problem beheben können.
       *[other] Sie ist von { $data_breach_unresolved_num } Datenlecks betroffen. Wir zeigen Ihnen Schritt für Schritt, wie Sie das Problem beheben können.
    }
dashboard-top-banner-no-exposures-found-title = Keine Offenlegungen gefunden
dashboard-top-banner-non-us-no-exposures-found-description = Tolle Nachrichten! Wir haben alle bekannten Datenlecks durchsucht, aber keine Offenlegungen gefunden. Wir überwachen Ihre E-Mail-Adresse weiter und benachrichtigen Sie, wenn ein neues Datenleck auftritt.
dashboard-no-exposures-label = Keine Offenlegungen gefunden
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Guten Tag, die Offenlegung Ihrer Daten wurde behoben! Wir überwachen dies weiter und warnen Sie bei jeder neuen Offenlegung.
       *[other] Gut so, alle { $exposures_resolved_num } Offenlegungen Ihrer Daten wurden behoben! Wir überwachen dies weiter und warnen Sie bei jeder neuen Offenlegung.
    }
dashboard-top-banner-monitor-more-cta = Weitere E-Mail-Adressen überwachen

# About Exposure Statuses Modal

modal-exposure-status-title = Über den Offenlegungsstatus
modal-exposure-status-description-all = Wir suchen in allen bekannten Datenlecks nach Offenlegungen. Ihre Offenlegungen haben einen der folgenden Status:
modal-exposure-status-action-needed = <b>Handlungsbedarf</b> bedeutet, dass die Offenlegung derzeit aktiv ist und Sie Maßnahmen ergreifen müssen, um diese zu beheben.
modal-exposure-status-fixed = <b>Behoben</b> bedeutet, dass die Offenlegung behoben wurde und Sie nichts tun müssen.
