# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Breaches header

# Data classes pie chart title
breach-chart-title = Παραβιασμένα δεδομένα
# $email-select is an interactive <select> element displaying the current email address
breach-heading-email = Παραβιάσεις δεδομένων για το { $email-select }
# $count is the number of emails a user has added out of $total allowed
emails-monitored =
    { $total ->
        [one] { $count } από { $total } email υπό εποπτεία
       *[other] { $count } από { $total } email υπό εποπτεία
    }
# link to Settings page where user can add/remove emails and set message preferences
manage-emails-link = Διαχείριση email

## Breaches resolved filter

filter-label-unresolved = Μη επιλυμένες παραβιάσεις
filter-label-resolved = Επιλυμένες παραβιάσεις

## Breaches table

column-company = ΕΤΑΙΡΕΙΑ
column-breached-data = ΠΑΡΑΒΙΑΣΜΕΝΑ ΔΕΔΟΜΕΝΑ
column-detected = ΑΝΙΧΝΕΥΣΗ
# “Resolved” is shown next to a breach if all recommended actions in response to the breach have been taken.
column-status-badge-resolved = Επιλύθηκε
# “Active” is shown next to a breach if the user still has at least one recommended action to perform in response to the breach.
column-status-badge-active = Ενεργή
breaches-resolve-heading = Επίλυση παραβίασης:
breaches-none-headline = Δεν βρέθηκαν παραβιάσεις
# Variables:
#   $email (String) - An email address that we did not find breaches for, e.g. `someone@example.com`
breaches-none-copy = Καλά νέα! Δεν έχουν αναφερθεί παραβιάσεις για το { $email }. Θα συνεχίσουμε να εποπτεύουμε αυτό το email και θα σας ενημερώσουμε εάν προκύψουν νέες παραβιάσεις.
breaches-none-cta-blurb = Θέλετε να παρακολουθήσετε κάποιο άλλο email;
breaches-none-cta-button = Προσθήκη διεύθυνσης email
breaches-all-resolved-headline = Επιλύθηκαν όλες οι παραβιάσεις
# Variables:
#   $email (String) - An email address for which all breaches have been resolved, e.g. `someone@example.com`
breaches-all-resolved-copy = Ωραία! Έχετε επιλύσει όλες τις παραβιάσεις για το { $email }. Θα συνεχίσουμε να εποπτεύουμε αυτό το email και θα σας ενημερώσουμε εάν προκύψουν νέες παραβιάσεις.
breaches-all-resolved-cta-blurb = Θέλετε να παρακολουθήσετε κάποιο άλλο email;
breaches-all-resolved-cta-button = Προσθήκη διεύθυνσης email
# $breachDate and $addedDate are dates that should be localized via JS DateTimeFormat(). $dataClasses is a list of strings from data-classes.ftl that should be localized via JS ListFormat()
# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-description = Στις { $breachDate }, η { $companyName } παραβιάστηκε. Μόλις ανακαλύφθηκε και επαληθεύτηκε η παραβίαση, προστέθηκε στη βάση δεδομένων μας στις { $addedDate }. Αυτή η παραβίαση περιλάμβανε: { $dataClasses }

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = Διαχείριση κωδικών πρόσβασης { -brand-firefox }
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = Ενημερώστε τους κωδικούς πρόσβασής σας και ενεργοποιήστε την ταυτοποίηση δύο παραγόντων (2FA).

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Προστατέψτε το email σας με μια υπηρεσία απόκρυψης email, όπως το { $firefoxRelayLink }.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Παρακολουθήστε την έκθεση πίστωσής σας για λογαριασμούς, δάνεια ή πιστωτικές κάρτες που δεν αναγνωρίζετε.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Αναφέρετε αυτήν την παραβίαση στον εκδότη της πιστωτικής σας κάρτας και ζητήστε μια νέα κάρτα με νέο αριθμό.
breach-checklist-cc-body = Θα πρέπει επίσης να ελέγξετε τα αντίγραφα κίνησης της πιστωτικής σας κάρτας για χρεώσεις που δεν αναγνωρίζετε.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Ειδοποιήστε αμέσως την τράπεζά σας ότι ο αριθμός λογαριασμού σας έχει παραβιαστεί.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Ειδοποιήστε τον εκδότη της κάρτας σας και αλλάξτε αμέσως το PIN σας.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Χρησιμοποιήστε το διαδίκτυο ιδιωτικά με ένα VPN, όπως το { $mozillaVpnLink }.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Αλλάξτε τυχόν κωδικούς πρόσβασης ή PIN που περιλαμβάνουν οποιοδήποτε μέρος της διεύθυνσής σας.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Αλλάξτε τυχόν κωδικούς πρόσβασης ή PIN που περιλαμβάνουν την ημερομηνία γέννησής σας.

## Prompts the user for changes when there is a breach detected of phone number


## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Ενημερώστε τις ερωτήσεις ασφαλείας σας.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Δημιουργήστε μοναδικούς, ισχυρούς κωδικούς πρόσβασης για οποιονδήποτε λογαριασμό έχετε ξαναχρησιμοποιήσει κωδικούς πρόσβασης.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Επικοινωνήστε με την { $companyName } για να τους ενημερώσετε σχετικά με αυτήν την παραβίαση και να ζητήσετε συγκεκριμένα βήματα που θα πρέπει να ακολουθήσετε.
