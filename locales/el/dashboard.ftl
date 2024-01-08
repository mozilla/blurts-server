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
        [one] <nr>{ $nr }</nr> <label>έκθεση</label>
       *[other] <nr>{ $nr }</nr> <label>εκθέσεις</label>
    }
# Variables:
#   $nr (number) - Number of fixed exposures found for the user
exposure-chart-heading-fixed = <nr>{ $nr }</nr> <label>διορθώσεις</label>
exposure-chart-legend-heading-type = Έκθεση
exposure-chart-legend-heading-nr = Αριθμός
# Variables:
#   $nr (number) - Number of a particular type of exposure found for the user
exposure-chart-legend-value-nr = { $nr }×
exposure-chart-caption = Αυτό το γράφημα δείχνει πόσες φορές εκτίθενται ενεργά οι πληροφορίες σας.
# Variables:
#   $total_fixed_exposures_num (number) - Number of fixed exposures
#   $total_exposures_num (number) - Number of total exposures
exposure-chart-caption-fixed = Αυτό το γράφημα εμφανίζει τα συνολικά διορθωμένα ανοίγματα ({ $total_fixed_exposures_num } από { $total_exposures_num })
exposure-chart-returning-user-upgrade-prompt = Η διεύθυνση οικίας, τα μέλη της οικογένειας και πολλά άλλα δεν έχουν συμπεριληφθεί ακόμα.
exposure-chart-returning-user-upgrade-prompt-cta = Έναρξη δωρεάν σάρωσης
exposure-chart-scan-in-progress-prompt = <b>Σάρωση σε εξέλιξη:</b> η διεύθυνση, τα μέλη της οικογένειας και πολλά άλλα δεν έχουν συμπεριληφθεί ακόμα.
modal-active-number-of-exposures-title = Σχετικά με τον αριθμό των ενεργών εκθέσεών σας
# Variables:
#   $limit (number) - Number of email addresses included in the plan
modal-active-number-of-exposures-part-one-all =
    { $limit ->
        [one] Αυτό το γράφημα περιλαμβάνει τον συνολικό αριθμό φορών που βρήκαμε κάθε τύπο δεδομένων σε όλες τις παραβιάσεις δεδομένων για τη { $limit } διεύθυνση email που εποπτεύετε αυτήν τη στιγμή.
       *[other] Αυτό το γράφημα περιλαμβάνει τον συνολικό αριθμό φορών που βρήκαμε κάθε τύπο δεδομένων σε όλες τις παραβιάσεις δεδομένων για έως και { $limit } διευθύνσεις email που εποπτεύετε αυτήν τη στιγμή.
    }
modal-active-number-of-exposures-part-two = Για παράδειγμα, αν έχετε 10 προβολές του αριθμού τηλεφώνου σας, αυτό μπορεί να σημαίνει ότι ένας αριθμός τηλεφώνου εκτίθεται σε 10 διαφορετικούς ιστοτόπους, ή μπορεί να σημαίνει ότι 2 διαφορετικοί αριθμοί τηλεφώνου έχουν εκτεθεί σε 5 διαφορετικές ιστοσελίδες.
modal-active-number-of-exposures-part-three-all = Μόλις επιλυθούν, θα προστεθούν στον συνολικό αριθμό σταθερών προβολών στη σελίδα Διόρθωση.
modal-cta-ok = OK
modal-open-alt = Άνοιγμα
modal-close-alt = Κλείσιμο
progress-card-heres-what-we-fixed-headline-all = Ορίστε τι διορθώσατε
progress-card-manually-fixed-headline = Διορθώθηκε χειροκίνητα
dashboard-tab-label-action-needed = Απαιτείται ενέργεια
dashboard-tab-label-fixed = Διορθώθηκε
dashboard-exposures-all-fixed-label = Όλα διορθώθηκαν εδώ!
dashboard-exposures-area-headline = Προβολή όλων των ιστοτόπων όπου εκτίθενται οι πληροφορίες σας
# Note: this line precedes dashboard-exposures-area-description-all-line2.
# Variables:
#   $exposures_unresolved_num (number) - the unresolved number of exposures the user has.
dashboard-exposures-area-description-all-line1 =
    { $exposures_unresolved_num ->
        [one] Βρήκαμε { $exposures_unresolved_num } έκθεση των δεδομένων σας.
       *[other] Βρήκαμε { $exposures_unresolved_num } εκθέσεις των δεδομένων σας.
    }
# Note: this line follows dashboard-exposures-area-description-all-line1.
# Variables:
#   $data_breach_unresolved_num (number) - the unresolved number of data breaches the user has.
dashboard-exposures-area-description-all-line2 =
    { $data_breach_unresolved_num ->
        [one] Εμφανίστηκε σε { $data_breach_unresolved_num } παραβίαση δεδομένων.
       *[other] Εμφανίστηκε σε { $data_breach_unresolved_num } παραβιάσεις δεδομένων.
    }
dashboard-fixed-area-headline-all = Δείτε όλες τις διορθώσεις προθέσεων
# This is the label on a button that opens a popover menu, which shows a menu to adjust filters for the listed exposures.
dashboard-exposures-filter = Φίλτρο
dashboard-exposures-filter-company = Εταιρεία
dashboard-exposures-filter-date-found = Ημερομηνία εύρεσης
dashboard-exposures-filter-date-found-last-seven-days = Τελευταίες 7 ημέρες
dashboard-exposures-filter-date-found-last-thirty-days = Τελευταίες 30 ημέρες
dashboard-exposures-filter-date-found-last-year = Πέρυσι
dashboard-exposures-filter-status = Κατάσταση
dashboard-exposures-filter-status-action-needed = Απαιτείται ενέργεια
dashboard-exposures-filter-status-in-progress = Σε εξέλιξη
dashboard-exposures-filter-status-fixed = Διορθώθηκε
popover-open-filter-settings-alt = Επιλέξτε φίλτρα
dashboard-exposures-filter-show-all = Εμφάνιση όλων
dashboard-exposures-filter-show-results = Εμφάνιση αποτελεσμάτων
dashboard-exposures-filter-reset = Επαναφορά

## Top banner on the dashboard

dashboard-top-banner-section-label = Περίληψη πίνακα ελέγχου
dashboard-top-banner-scan-in-progress-title = Η σάρωση είναι ακόμα σε εξέλιξη
dashboard-top-banner-your-data-is-protected-title = Τα δεδομένα σας προστατεύονται
dashboard-top-banner-your-data-is-protected-cta = Δείτε τι διορθώθηκε
dashboard-top-banner-lets-keep-protecting-title = Ας συνεχίσουμε να προστατεύουμε τα δεδομένα σας
# Variables:
# $exposures_unresolved_num is the remaining number of exposures the user has to resolve.
dashboard-top-banner-lets-keep-protecting-description =
    { $exposures_unresolved_num ->
        [one] Σας απομένει ακόμη { $exposures_unresolved_num } έκθεση για διόρθωση. Συνεχίστε και προστατευτείτε. Θα σας καθοδηγήσουμε βήμα προς βήμα.
       *[other] Απομένουν ακόμη { $exposures_unresolved_num } προθέσεις για διόρθωση. Συνεχίστε και προστατευτείτε. Θα σας καθοδηγήσουμε βήμα προς βήμα.
    }
dashboard-top-banner-lets-keep-protecting-cta = Ας συνεχίσουμε
# Note: this line is followed by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $exposures_unresolved_num (number) - the total number of exposures the user has.
dashboard-top-banner-non-us-protect-your-data-description-line1 =
    { $exposures_unresolved_num ->
        [one] Βρήκαμε { $exposures_unresolved_num } έκθεση των δεδομένων σας.
       *[other] Βρήκαμε { $exposures_unresolved_num } εκθέσεις των δεδομένων σας.
    }
# Note: this line is preceded by `dashboard-top-banner-non-us-protect-your-data-description-line1`.
# Variables:
#   $data_breach_unresolved_num (number) - the total number of data breaches the user has.
dashboard-top-banner-non-us-protect-your-data-description-line2 =
    { $data_breach_unresolved_num ->
        [one] Εμφανίστηκε σε { $data_breach_unresolved_num } παραβίαση δεδομένων. Θα σας καθοδηγήσουμε βήμα προς βήμα για το πώς να το διορθώσετε.
       *[other] Εμφανίστηκε σε { $data_breach_unresolved_num } παραβιάσεις δεδομένων. Θα σας καθοδηγήσουμε βήμα προς βήμα για το πώς να το διορθώσετε.
    }
dashboard-top-banner-no-exposures-found-title = Δεν βρέθηκαν εκθέσεις
dashboard-top-banner-non-us-no-exposures-found-description = Εξαιρετικά νέα! Αναζητήσαμε όλες τις γνωστές παραβιάσεις δεδομένων και δεν βρήκαμε έκθεση. Θα συνεχίσουμε να εποπτεύουμε τη διεύθυνση email σας και θα σας ειδοποιήσουμε αν συμβεί νέα παραβίαση.
dashboard-no-exposures-label = Δεν βρέθηκαν εκθέσεις
# Variables:
# $exposures_resolved_num is the number of exposures the user has resolved.
dashboard-top-banner-non-us-your-data-is-protected-description =
    { $exposures_resolved_num ->
        [one] Εξαιρετική δουλειά, διορθώθηκε η έκθεση των δεδομένων σας! Θα συνεχίσουμε να παρακολουθούμε και θα σας ειδοποιήσουμε για τυχόν νέα έκθεση.
       *[other] Εξαιρετική δουλειά, διορθώθηκαν και οι { $exposures_resolved_num } προβολές των δεδομένων σας! Θα συνεχίσουμε να παρακολουθούμε και θα σας ειδοποιήσουμε για τυχόν νέα έκθεση.
    }
dashboard-top-banner-monitor-more-cta = Εποπτεία περισσότερων email

# About Exposure Statuses Modal

modal-exposure-status-title = Σχετικά με τις καταστάσεις έκθεσης
modal-exposure-status-description-all = Αναζητούμε προθέσεις σε όλες τις γνωστές παραβιάσεις δεδομένων. Οι προβολές σας θα έχουν μία από τις εξής καταστάσεις:
modal-exposure-status-action-needed = <b>Απαιτείται ενέργεια</b>. σημαίνει ότι είναι ενεργή αυτήν τη στιγμή και ότι πρέπει να λάβετε μέτρα για να το διορθώσετε.
modal-exposure-status-fixed = <b>Διορθώθηκε</b> ότι η έκθεση έχει επιλυθεί και δεν χρειάζεται να κάνετε κάποια ενέργεια.
