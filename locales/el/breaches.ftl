# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-meta-title = { -brand-fx-monitor } - Πίνακας ελέγχου

breach-all-meta-title = { -brand-fx-monitor } - Όλες οι παραβιάσεις δεδομένων
breach-all-meta-social-title = Όλες οι παραβιάσεις που εντοπίστηκαν από το { -brand-fx-monitor }
breach-all-meta-social-description = Περιηγηθείτε στην πλήρη λίστα των γνωστών παραβιάσεων που εντοπίστηκαν από το { -brand-fx-monitor } και μάθετε εάν αποκαλύφθηκαν οι πληροφορίες σας.

# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-title = { -brand-fx-monitor } - Παραβίαση δεδομένων { $company }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = Επηρεαστήκατε από την παραβίαση δεδομένων { $company };
breach-detail-meta-social-description = Χρησιμοποιήστε το { -brand-fx-monitor } για να μάθετε εάν τα προσωπικά σας δεδομένα εκτέθηκαν σε αυτήν την παραβίαση και να κατανοήσετε τι πρέπει να κάνετε στη συνέχεια.

breach-scan-meta-title = { -brand-fx-monitor } - Αποτελέσματα παραβίασης
breach-scan-meta-social-title = { -brand-fx-monitor } - Αποτελέσματα παραβίασης
breach-scan-meta-social-description = Συνδεθείτε στο { -brand-fx-monitor } για να επιλύσετε παραβιάσεις και να έχετε συνεχή εποπτεία για τυχόν νέες παραβιάσεις.

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

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = Στις περισσότερες περιπτώσεις, θα συνιστούσαμε να αλλάξετε τον κωδικό πρόσβασής σας στον ιστότοπο της εταιρείας. Ωστόσο, <b>ο ιστότοπός της ενδέχεται να είναι εκτός λειτουργίας ή να περιέχει κακόβουλο περιεχόμενο</b>, επομένως <breached-company-link>επισκεφτείτε τον ιστότοπο</breached-company-link> με προσοχή. Για πρόσθετη προστασία, βεβαιωθείτε ότι χρησιμοποιείτε μοναδικούς κωδικούς πρόσβασης για όλους τους λογαριασμούς, έτσι ώστε τυχόν κωδικοί πρόσβασης που διέρρευσαν να μην μπορούν να χρησιμοποιηθούν για πρόσβαση σε άλλους λογαριασμούς. Το { $passwordManagerLink } μπορεί να σας βοηθήσει να παρακολουθείτε με ασφάλεια όλους τους κωδικούς πρόσβασής σας.

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = Προστατέψτε το email σας με μια υπηρεσία απόκρυψης email, όπως το { $firefoxRelayLink }.
breach-checklist-email-body = Αυτό μπορεί να αποκρύψει την πραγματική σας διεύθυνση email κατά την προώθηση των email στα πραγματικά εισερχόμενά σας.

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = Παρακολουθήστε την έκθεση πίστωσής σας για λογαριασμούς, δάνεια ή πιστωτικές κάρτες που δεν αναγνωρίζετε.
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = Εξετάστε επίσης το ενδεχόμενο να «παγώσετε» την πίστωσή σας στα { $equifaxLink }, { $experianLink } και { $transUnionLink }, ώστε να εμποδίσετε τους απατεώνες από το να ανοίξουν νέους λογαριασμούς στο όνομά σας. Είναι δωρεάν και δεν θα επηρεάσει την πιστωτική σας ικανότητα.

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = Αναφέρετε αυτήν την παραβίαση στον εκδότη της πιστωτικής σας κάρτας και ζητήστε μια νέα κάρτα με νέο αριθμό.
breach-checklist-cc-body = Θα πρέπει επίσης να ελέγξετε τα αντίγραφα κίνησης της πιστωτικής σας κάρτας για χρεώσεις που δεν αναγνωρίζετε.

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = Ειδοποιήστε αμέσως την τράπεζά σας ότι ο αριθμός λογαριασμού σας έχει παραβιαστεί.
breach-checklist-bank-body = Ενεργώντας ταχύτερα, θα έχετε πιθανώς περισσότερη νομική προστασία, που θα σας βοηθήσει να ανακτήσετε τυχόν απώλειες. Καλό θα ήταν να ελέγξετε και τους λογαριασμούς σας για τυχόν χρεώσεις που δεν αναγνωρίζετε.

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = Ειδοποιήστε τον εκδότη της κάρτας σας και αλλάξτε αμέσως το PIN σας.
breach-checklist-pin-body = Βεβαιωθείτε ότι το νέο σας PIN, ή οποιοδήποτε άλλο PIN, δεν περιλαμβάνει αριθμούς που μπορούν να μαντευτούν εύκολα, όπως η διεύθυνση ή η ημερομηνία γέννησής σας.

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = Χρησιμοποιήστε το διαδίκτυο ιδιωτικά με ένα VPN, όπως το { $mozillaVpnLink }.
breach-checklist-ip-body = Η διεύθυνση IP σας (διεύθυνση πρωτοκόλλου διαδικτύου) προσδιορίζει την τοποθεσία και τον πάροχο υπηρεσιών διαδικτύου σας. Ένα VPN μπορεί να αποκρύψει την πραγματική διεύθυνση IP σας ώστε να χρησιμοποιείτε το διαδίκτυο ιδιωτικά.

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = Αλλάξτε τυχόν κωδικούς πρόσβασης ή PIN που περιλαμβάνουν οποιοδήποτε μέρος της διεύθυνσής σας.
breach-checklist-address-body = Οι διευθύνσεις είναι εύκολο να βρεθούν σε δημόσια αρχεία και μπορούν να κάνουν πιο προφανείς αυτούς τους κωδικούς πρόσβασης και τα PIN.

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = Αλλάξτε τυχόν κωδικούς πρόσβασης ή PIN που περιλαμβάνουν την ημερομηνία γέννησής σας.
breach-checklist-dob-body = Οι ημερομηνίες γέννησης είναι εύκολο να βρεθούν στα δημόσια αρχεία και τα άτομα που τις βρίσκουν μπορούν εύκολα να μαντέψουν το PIN σας.

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = Προστατέψτε τον αριθμό τηλεφώνου σας με μια υπηρεσία απόκρυψης, όπως το { $firefoxRelayLink }, που κρύβει τον πραγματικό σας αριθμό τηλεφώνου.

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = Ενημερώστε τις ερωτήσεις ασφαλείας σας.

# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = Στις περισσότερες περιπτώσεις, θα συνιστούσαμε να ενημερώσετε τις ερωτήσεις ασφαλείας σας στον ιστότοπο της εταιρείας. Ωστόσο, <b>ο ιστότοπός της ενδέχεται να είναι εκτός λειτουργίας ή να περιέχει κακόβουλο περιεχόμενο</b>, επομένως <breached-company-link>επισκεφτείτε τον ιστότοπο</breached-company-link> με προσοχή. Για πρόσθετη προστασία, ενημερώστε αυτές τις ερωτήσεις ασφαλείας στους σημαντικούς λογαριασμούς όπου τις έχετε χρησιμοποιήσει και δημιουργήστε μοναδικούς κωδικούς πρόσβασης για όλους τους λογαριασμούς.

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = Δημιουργήστε μοναδικούς, ισχυρούς κωδικούς πρόσβασης για οποιονδήποτε λογαριασμό έχετε ξαναχρησιμοποιήσει κωδικούς πρόσβασης.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = Μια εφαρμογή διαχείρισης κωδικών πρόσβασης, όπως το { $passwordManagerLink } (το οποίο είναι δωρεάν και ενσωματωμένο στο { -brand-firefox }), μπορεί να σας βοηθήσει να έχετε ασφαλή πρόσβαση σε όλους τους κωδικούς πρόσβασής σας από όλες τις συσκευές σας.

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = Επικοινωνήστε με την { $companyName } για να τους ενημερώσετε σχετικά με αυτήν την παραβίαση και να ζητήσετε συγκεκριμένα βήματα που θα πρέπει να ακολουθήσετε.
