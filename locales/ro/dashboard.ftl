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
        [one] <nr>{ $nr }</nr> <label>expunere</label>
        [few] <nr>{ $nr }</nr> <label>expuneri</label>
       *[other] <nr>{ $nr }</nr> <label>de expuneri</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>Remediate</label>
exposure-chart-legend-heading-type = Expunere
exposure-chart-legend-heading-nr = Număr
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Acest grafic arată de câte ori informațiile tale sunt expuse în mod activ.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Acest grafic arată expunerile totale care sunt remediate ({ $total_fixed_exposures_num } din { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Adresa de domiciliu, membrii familiei și altele nu sunt încă incluse.
exposure-chart-returning-user-upgrade-prompt-cta = Începe o scanare gratuită
exposure-chart-scan-in-progress-prompt = <b>Scanare în curs:</b> adresa, membrii familiei și altele nu sunt încă incluse.
modal-active-number-of-exposures-title = Despre numărul tău de expuneri active
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Acest grafic include numărul total de cazuri în care am descoperit fiecare tip de date expuse în toate încălcările de securitate a datelor pentru maxim { $limit } adresă de e-mail pe care o monitorizezi în prezent.
        [few] Acest grafic include numărul total de cazuri în care am descoperit fiecare tip de date expuse în toate încălcările de securitate a datelor pentru maxim { $limit } adrese de e-mail pe care le monitorizezi în prezent.
       *[other] Acest grafic include numărul total de cazuri în care am descoperit fiecare tip de date expuse în toate încălcările de securitate a datelor pentru maxim { $limit } de adrese de e-mail pe care le monitorizezi în prezent.
    }
modal-active-number-of-exposures-part-two = De exemplu, dacă ai 10 expuneri ale numărului de telefon, ar putea însemna că un număr de telefon este expus pe 10 site-uri diferite sau că 2 numere de telefon diferite au fost expuse pe 5 site-uri diferite.
modal-active-number-of-exposures-part-three-all = Odată rezolvate, vor fi adăugate la numărul total de expuneri fixe de pe pagina de Remediate.
modal-fixed-number-of-exposures-title = Despre numărul tău de expuneri remediate
modal-fixed-number-of-exposures-all = Acest grafic include numărul total de încălcări ale securității datelor care au fost remediate pentru toate adresele de e-mail pe care le monitorizezi. Odată ce expunerile sunt marcate ca remediate, vor fi adăugate la totalul de aici.
modal-cta-ok = OK
modal-cta-got-it = Am înțeles
open-modal-alt = Deschide fereastra de dialog
close-modal-alt = Închide fereastra de dialog
open-tooltip-alt = Deschide sugestii
progress-card-heres-what-we-fixed-headline-all = Iată ce ai remediat
progress-card-manually-fixed-headline = Remediat manual
dashboard-tab-label-action-needed = Necesită atenție
dashboard-tab-label-fixed = Rezolvat
dashboard-exposures-all-fixed-label = Totul s-a rezolvat aici!
dashboard-exposures-area-headline = Vezi toate site-urile unde sunt expuse informațiile tale
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Am găsit o { $exposures_unresolved_num } expunere ale datelor tale.
        [few] Am găsit { $exposures_unresolved_num } expuneri ale datelor tale.
       *[other] Am găsit { $exposures_unresolved_num } de expuneri ale datelor tale.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] A apărut în { $data_breach_unresolved_num } încălcare a securității datelor.
        [few] A apărut în { $data_breach_unresolved_num } încălcări ale securității datelor.
       *[other] A apărut în { $data_breach_unresolved_num } de încălcări ale securității datelor.
    }
dashboard-fixed-area-headline-all = Vezi toate expunerile care sunt remediate
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Filtrează
dashboard-exposures-filter-company = Companie
dashboard-exposures-filter-date-found = Data găsirii
dashboard-exposures-filter-date-found-last-seven-days = Ultimele 7 zile
dashboard-exposures-filter-date-found-last-thirty-days = Ultimele 30 de zile
dashboard-exposures-filter-date-found-last-year = Anul trecut
dashboard-exposures-filter-status = Stare
popover-open-filter-settings-alt = Selectează filtrele
dashboard-exposures-filter-show-all = Afișează tot
dashboard-exposures-filter-show-results = Afișează rezultatele
dashboard-exposures-filter-reset = Resetează

## Top banner on the dashboard

dashboard-top-banner-section-label = Rezumatul tabloului de bord
dashboard-top-banner-scan-in-progress-title = Scanarea este încă în curs
dashboard-top-banner-your-data-is-protected-title = Datele tale sunt protejate
dashboard-top-banner-your-data-is-protected-cta = Vezi ce s-a remediat
dashboard-top-banner-lets-keep-protecting-title = Hai să îți protejăm în continuare datele
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Mai ai încă { $exposures_unresolved_num } expunere de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
        [few] Mai ai încă { $exposures_unresolved_num } expuneri de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
       *[other] Mai ai încă { $exposures_unresolved_num } de expuneri de remediat. Continuă și protejează-te. Te vom ghida pas cu pas.
    }
dashboard-top-banner-lets-keep-protecting-cta = Să continuăm
dashboard-top-banner-protect-your-data-title = Să îți protejăm datele
dashboard-top-banner-protect-your-data-cta = Să o remediem
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Am găsit { $exposures_unresolved_num } expunere a datelor tale.
        [few] Am găsit { $exposures_unresolved_num } expuneri ale datelor tale.
       *[other] Am găsit { $exposures_unresolved_num } de expuneri ale datelor tale.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] A apărut în { $data_breach_unresolved_num } încălcare a securității datelor. Te vom ghida pas cu pas despre cum să o remediezi.
        [few] A apărut în { $data_breach_unresolved_num } încălcări ale securității datelor. Te vom ghida pas cu pas despre cum să le remediezi.
       *[other] A apărut în { $data_breach_unresolved_num } de încălcări ale securității datelor. Te vom ghida pas cu pas despre cum să le remediezi.
    }
dashboard-top-banner-no-exposures-found-title = Nu s-au găsit expuneri
dashboard-top-banner-non-us-no-exposures-found-description = Vesti bune! Am căutat toate încălcările cunoscute de securitate a datelor și nu am găsit nicio expunere. Vom continua să îți monitorizăm adresa de e-mail și te vom avertiza dacă apare o nouă încălcare.
dashboard-no-exposures-label = Nu s-au găsit expuneri
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Bine lucrat! Expunerea datelor tale a fost remediată! Vom continua monitorizarea și te vom anunța dacă apar orice expuneri noi.
        [few] Bine lucrat! Toate cele { $exposures_resolved_num } expuneri ale datelor tale au fost remediate! Vom continua monitorizarea și te vom anunța dacă apar orice expuneri noi.
       *[other] Bine lucrat! Toate cele { $exposures_resolved_num } de expuneri ale datelor tale au fost remediate! Vom continua monitorizarea și te vom anunța dacă apar orice expuneri noi.
    }
dashboard-top-banner-monitor-more-cta = Monitorizează mai multe adrese de e-mail

# About Exposure Indicators Modal

modal-exposure-status-description-all =
    Căutăm expuneri în toate încălcările cunoscute de securitate a datelor.
    Expunerile tale vor avea unul dintre următoarele stări:
modal-exposure-indicator-title = Stări expuneri
modal-exposure-indicator-action-needed = Necesită o acțiune avansată sau manuală din partea ta pentru finalizarea unei acțiuni.
modal-exposure-indicator-fixed = Expunerea a fost remediată și nu mai ai nimic de făcut.
