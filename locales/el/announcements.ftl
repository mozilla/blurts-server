# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# Used as selector at the top of a dialog to display new announcements.
announcement-dialog-default-tab = Νέο
# Used as selector at the top of a dialog to display announcements that have been seen.
announcement-dialog-history-tab = Όλα
# To go back to the list of announcements
announcement-dialog-back = Πίσω
announcement-dialog-clear-all = Επισήμανση όλων ως αναγνωσμένων
announcement-dialog-empty-state-title = Καμία ενημέρωση
announcement-dialog-empty-state-description = Ελέγχετε τακτικά για ενημερώσεις και πληροφορίες σχετικά με τις πιο πρόσφατες λειτουργίες μας.
announcement-dialog-trigger-alt = Άνοιγμα ανακοινώσεων
announcement-dialog-alt = Λίστα ανακοινώσεων
announcement-small-img-alt = Εικονίδιο ανακοίνωσης
announcement-big-img-alt = Εικόνα ανακοίνωσης

# between announcement- and -title or -description is the announcement_id.

# Variables:
# $emailAddressesCount (string) - number of email addresses allowed for data breach monitoring
announcement-free-data-breach-monitoring-title =
    { $emailAddressesCount ->
        [one] Λάβετε δωρεάν εποπτεία για παραβιάσεις δεδομένων σε έως και { $emailAddressesCount } διεύθυνση email.
       *[other] Λάβετε δωρεάν εποπτεία για παραβιάσεις δεδομένων σε έως και { $emailAddressesCount } διευθύνσεις email.
    }
announcement-free-data-breach-monitoring-description = Προστατέψτε τις πληροφορίες σας με την εποπτεία για παραβιάσεις δεδομένων. Το { -brand-monitor } θα σας ειδοποιήσει αν εμφανιστούν οι πληροφορίες σας σε κάποια παραβίαση δεδομένων.
announcement-free-data-breach-monitoring-cta-label = Μάθετε περισσότερα
