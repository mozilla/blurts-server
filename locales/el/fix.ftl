# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fix-flow-nav-high-risk-data-breaches = Παραβιάσεις δεδομένων υψηλού κινδύνου
fix-flow-nav-leaked-passwords = Εκτεθειμένοι κωδικοί πρόσβασης
fix-flow-nav-security-recommendations = Συστάσεις ασφαλείας
guided-resolution-flow-exit = Επιστροφή στον πίνακα ελέγχου
guided-resolution-flow-next-arrow = Μετάβαση στο επόμενο βήμα
guided-resolution-flow-next-arrow-sub-step = Μετάβαση στο επόμενο αποτέλεσμα
guided-resolution-flow-step-navigation-label = Καθοδηγούμενα βήματα

# Celebration screens


## Shared CTA labels

fix-flow-celebration-next-label = Ας συνεχίσουμε
fix-flow-celebration-next-recommendations-label = Προβολή συστάσεων
fix-flow-celebration-next-dashboard-label = Μετάβαση στον πίνακα ελέγχου

## High-risk flow

fix-flow-celebration-high-risk-title = Διορθώσατε τις εκθέσεις υψηλού κινδύνου!
fix-flow-celebration-high-risk-description-in-progress = Αυτή η διαδικασία μπορεί να σας φαίνεται κουραστική, αλλά είναι σημαντική για την προστασία σας. Συνεχίστε την καλή δουλειά.
fix-flow-celebration-high-risk-description-done = Αυτή η διαδικασία μπορεί να σας φαίνεται κουραστική, αλλά είναι σημαντική για την προστασία σας.
fix-flow-celebration-high-risk-description-next-passwords = Ας διορθώσουμε τώρα τους εκτεθειμένους κωδικούς πρόσβασής σας.
fix-flow-celebration-high-risk-description-next-security-questions = Ας διορθώσουμε τώρα τις εκτεθειμένες ερωτήσεις ασφαλείας σας.
fix-flow-celebration-high-risk-description-next-security-recommendations = Στη συνέχεια, θα σας παρέχουμε εξατομικευμένες συστάσεις ασφαλείας, βάσει των δεδομένων σας που έχουν εκτεθεί.
fix-flow-celebration-high-risk-description-next-dashboard = Έχετε φτάσει στο τέλος των βημάτων σας. Μπορείτε να δείτε τυχόν στοιχεία ενεργειών και να παρακολουθήσετε την πρόοδό σας στον πίνακα ελέγχου σας.

## Leaked passwords and security questions flow

fix-flow-celebration-leaked-passwords-title = Οι κωδικοί πρόσβασής σας προστατεύονται!
fix-flow-celebration-security-questions-title = Οι ερωτήσεις ασφαλείας σας προστατεύονται!
fix-flow-celebration-leaked-passwords-description-next-security-questions = Τώρα, ας ελέγξουμε και ας ενημερώσουμε τις εκτεθειμένες ερωτήσεις ασφαλείας σας.
fix-flow-celebration-leaked-passwords-description-next-security-recommendations = Στη συνέχεια, θα σας παρέχουμε εξατομικευμένες συστάσεις ασφαλείας, βάσει των δεδομένων σας που έχουν εκτεθεί.
fix-flow-celebration-leaked-passwords-description-next-dashboard = Ωραία! Έχετε φτάσει στο τέλος των βημάτων σας. Μπορείτε να δείτε τυχόν στοιχεία ενεργειών και να παρακολουθήσετε την πρόοδό σας στον πίνακα ελέγχου σας.

## Security recommendations flow

fix-flow-celebration-security-recommendations-title = Έχετε ολοκληρώσει όλες τις συστάσεις!
fix-flow-celebration-security-recommendations-description-next-dashboard = Ωραία! Έχετε φτάσει στο τέλος των βημάτων σας. Μπορείτε να δείτε τυχόν στοιχεία ενεργειών και να παρακολουθήσετε την πρόοδό σας στον πίνακα ελέγχου σας.

# High Risk Data Breaches

high-risk-breach-heading = Ορίστε τι πρέπει να κάνετε
high-risk-breach-subheading = Αυτό απαιτεί πρόσβαση στις ευαίσθητες πληροφορίες σας, επομένως θα πρέπει να το διορθώσετε χειροκίνητα.
# Variables
# $num_breaches is the number of breaches where the high risk data was found.
high-risk-breach-summary =
    { $num_breaches ->
        [one] Εμφανίστηκε σε { $num_breaches } παραβίαση δεδομένων:
       *[other] Εμφανίστηκε σε { $num_breaches } παραβιάσεις δεδομένων:
    }
# Variables
# $breach_name is the name of the breach where the high risk data was found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
high-risk-breach-name-and-date = { $breach_name } <breach_date>στις { $breach_date }</breach_date>
high-risk-breach-mark-as-fixed = Επισήμανση ως διορθωμένο
high-risk-breach-skip = Παράλειψη προς το παρόν
# Variables:
# $estimated_time is the estimated time it would take for a user to complete breach resolution steps. It not be singular, and the + is meant as "or more".
# An example of this string is Your estimated time: 15+ minutes.
high-risk-breach-estimated-time =
    { $estimated_time ->
       *[other] Εκτιμώμενος χρόνος: { $estimated_time }+ λεπτά
    }

# Credit Card Breaches

high-risk-breach-credit-card-title = Ο αριθμός της πιστωτικής σας κάρτας εκτέθηκε
high-risk-breach-credit-card-description = Οποιοσδήποτε τον αποκτήσει μπορεί να πραγματοποιήσει μη εξουσιοδοτημένες αγορές για τις οποίες μπορεί να θεωρηθείτε υπεύθυνοι. Ενεργήστε τώρα για να αποφύγετε οποιαδήποτε οικονομική απώλεια.
high-risk-breach-credit-card-step-one = Αν έχετε ακόμα αυτήν την κάρτα, επικοινωνήστε με τον εκδότη της για να αναφέρετε την υποκλοπή της.
high-risk-breach-credit-card-step-two = Ζητήστε μια νέα κάρτα με νέο αριθμό.
high-risk-breach-credit-card-step-three = Ελέγξτε τους λογαριασμούς σας για μη εξουσιοδοτημένες χρεώσεις.

# Bank Account Breaches

high-risk-breach-bank-account-title = Ο τραπεζικός σας λογαριασμός εκτέθηκε
high-risk-breach-bank-account-description = Αν λάβετε μέτρα το συντομότερο δυνατόν, θα έχετε πιθανότατα περισσότερη νομική προστασία που θα σας βοηθήσει να ανακτήσετε τυχόν απώλειες.
high-risk-breach-bank-account-step-one = Ενημερώστε αμέσως την τράπεζά σας σχετικά με την παραβίαση του αριθμού του λογαριασμού σας.
high-risk-breach-bank-account-step-two = Αλλάξτε τον αριθμό του λογαριασμού σας.
high-risk-breach-bank-account-step-three = Ελέγξτε τους λογαριασμούς σας για μη εξουσιοδοτημένες χρεώσεις.

# Social Security Number Breaches

high-risk-breach-social-security-title = Ο αριθμός κοινωνικής ασφάλισής σας εκτέθηκε
high-risk-breach-social-security-description = Οι απατεώνες μπορούν να εκδώσουν νέα δάνεια ή πιστωτικές κάρτες με τον αριθμό κοινωνικής ασφάλισής σας. Ενεργήστε γρήγορα για να αποφύγετε οικονομική ζημία.
high-risk-breach-social-security-step-one = Προστατευτείτε <link_to_info>δημιουργώντας μια ειδοποίηση απάτης ή «παγώνοντας» τη πιστωτική σας ικανότητα.</link_to_info>
high-risk-breach-social-security-step-two = <link_to_info>Ελέγξτε την πιστωτική σας αναφορά</link_to_info> για άγνωστους λογαριασμούς.

# Social Security Number Modal

ssn-modal-title = Σχετικά με τις ειδοποιήσεις απάτης και το «πάγωμα» πιστωτικής ικανότητας
ssn-modal-description-fraud-part-one = Μια <b>ειδοποίηση απάτης</b> απαιτεί την επαλήθευση της ταυτότητάς σας από τις επιχειρήσεις πριν αυτές εκδώσουν νέα πίστωση στο όνομά σας. Είναι δωρεάν, διαρκεί ένα έτος και δεν θα επηρεάσει αρνητικά την πιστωτική σας ικανότητα.
ssn-modal-description-fraud-part-two = Για να το κάνετε, επικοινωνήστε με οποιοδήποτε από τα τρία πιστωτικά ιδρύματα. Δεν χρειάζεται να επικοινωνήσετε και με τα τρία.
ssn-modal-description-freeze-credit-part-one = Το <b>«πάγωμα» της πιστωτικής σας ικανότητας</b> εμποδίζει τον οποιονδήποτε από το να ανοίξει έναν νέο λογαριασμό στο όνομά σας. Είναι δωρεάν και δεν θα επηρεάσει αρνητικά την πιστωτική σας ικανότητα, αλλά θα πρέπει να το απενεργοποιήσετε πριν ανοίξετε νέους λογαριασμούς.
ssn-modal-description-freeze-credit-part-two = Για να «παγώσετε» την πιστωτική σας ικανότητα, επικοινωνήστε με καθένα από τα τρία πιστωτικά ιδρύματα: <equifax_link>Equifax</equifax_link>, <experian_link>Experian</experian_link> και <transunion_link>TransUnion</transunion_link>.
ssn-modal-learn-more = Μάθετε περισσότερα σχετικά με τις ειδοποιήσεις απάτης και το «πάγωμα» πιστωτικής ικανότητας
ssn-modal-ok = OK

# PIN Breaches

high-risk-breach-pin-title = Το PIN σας εκτέθηκε
high-risk-breach-pin-description = Αν λάβετε μέτρα το συντομότερο δυνατόν, θα έχετε πιθανότατα περισσότερη νομική προστασία που θα σας βοηθήσει να ανακτήσετε τυχόν απώλειες.
high-risk-breach-pin-step-one = Ενημερώστε αμέσως την τράπεζά σας σχετικά με την παραβίαση του PIN σας.
high-risk-breach-pin-step-two = Αλλάξτε το PIN σας οπουδήποτε έχετε χρησιμοποιήσει το ίδιο.
high-risk-breach-pin-step-three = Ελέγξτε τους λογαριασμούς σας για μη εξουσιοδοτημένες χρεώσεις.

# No high risk breaches found

high-risk-breach-none-title = Εξαιρετικά νέα! Δεν εντοπίσαμε παραβιάσεις δεδομένων υψηλού κινδύνου
# Variables
# $email_list is list of emails that the user is monitoring for breaches. E.g. john@yahoo.com, ali@gmail.com, sam@hotmail.com
high-risk-breach-none-description = Εντοπίζουμε παραβιάσεις δεδομένων με βάση τη διεύθυνση email σας και δεν βρήκαμε παραβιάσεις υψηλού κινδύνου για το { $email_list }.
high-risk-breach-none-sub-description-part-one = Οι παραβιάσεις δεδομένων υψηλού κινδύνου περιλαμβάνουν:
high-risk-breach-none-sub-description-ssn = Αριθμός κοινωνικής ασφάλισης
high-risk-breach-none-sub-description-bank-account = Πληροφορίες τραπεζικού λογαριασμού
high-risk-breach-none-sub-description-cc-number = Αριθμοί πιστωτικών καρτών
high-risk-breach-none-sub-description-pin = PIN
high-risk-breach-none-continue = Συνέχεια

# Security recommendations

security-recommendation-steps-label = Συστάσεις ασφαλείας
security-recommendation-steps-title = Ορίστε οι συμβουλές μας:
security-recommendation-steps-cta-label = Το κατάλαβα!

# Phone security recommendation

security-recommendation-phone-title = Προστασία αριθμού τηλεφώνου
# $num_breaches is the number of breaches where the phone number was found.
security-recommendation-phone-summary =
    { $num_breaches ->
        [one] Ο αριθμός τηλεφώνου σας εκτέθηκε σε { $num_breaches } παραβίαση δεδομένων:
       *[other] Ο αριθμός τηλεφώνου σας εκτέθηκε σε { $num_breaches } παραβιάσεις δεδομένων:
    }
security-recommendation-phone-description = Δυστυχώς, δεν μπορείτε να τον ανακτήσετε. Υπάρχουν όμως μέτρα που μπορείτε να ακολουθήσετε για να παραμείνετε ασφαλείς.
security-recommendation-phone-step-one = Αποκλείστε τους αριθμούς που κάνουν ανεπιθύμητες κλήσεις
security-recommendation-phone-step-two = Μην κάνετε κλικ σε συνδέσμους εντός μηνυμάτων από άγνωστους αποστολείς. Αν φαίνεται ότι προέρχεται από μια αξιόπιστη πηγή, καλέστε απευθείας για επιβεβαίωση

# Email security recommendation

security-recommendation-email-title = Προστασία διεύθυνσης email
# $num_breaches is the number of breaches where the email address was found.
security-recommendation-email-summary =
    { $num_breaches ->
        [one] Η διεύθυνση email σας εκτέθηκε σε { $num_breaches } παραβίαση δεδομένων:
       *[other] Η διεύθυνση email σας εκτέθηκε σε { $num_breaches } παραβιάσεις δεδομένων:
    }
security-recommendation-email-description = Δυστυχώς, δεν μπορείτε να διορθώσετε αυτό το πρόβλημα. Αλλά υπάρχουν μέτρα που μπορείτε να λάβετε για να προστατευτείτε.
security-recommendation-email-step-one = Μην κάνετε κλικ σε συνδέσμους εντός των email από άγνωστους αποστολείς. Αν φαίνεται ότι προέρχεται από μια αξιόπιστη πηγή, καλέστε απευθείας για επιβεβαίωση
security-recommendation-email-step-two = Έχετε τον νου σας για <link_to_info>απάτες ηλεκτρονικού «ψαρέματος»</link_to_info>
security-recommendation-email-step-three = Επισημάνετε τα ύποπτα email ως ανεπιθύμητα και αποκλείστε τον αποστολέα
security-recommendation-email-step-four = Χρησιμοποιήστε τις <link_to_info>μάσκες email του { -brand-relay }</link_to_info> για να προστατεύσετε το email σας στο μέλλον

# IP security recommendation

security-recommendation-ip-title = Χρησιμοποιήστε ένα VPN για περισσότερο απόρρητο
# $num_breaches is the number of breaches where the IP address was found.
security-recommendation-ip-summary =
    { $num_breaches ->
        [one] Η διεύθυνση IP σας εκτέθηκε σε { $num_breaches } παραβίαση δεδομένων:
       *[other] Η διεύθυνση IP σας εκτέθηκε σε { $num_breaches } παραβιάσεις δεδομένων:
    }
security-recommendation-ip-description = Η διεύθυνση IP σας προσδιορίζει την τοποθεσία και τον πάροχο υπηρεσιών διαδικτύου σας. Οι χάκερ θα μπορούσαν να χρησιμοποιήσουν αυτές τις πληροφορίες για να βρουν την τοποθεσία σας ή να προσπαθήσουν να συνδεθούν στις συσκευές σας.
security-recommendation-ip-step-one = Χρησιμοποιήστε ένα VPN (όπως το <link_to_info>{ -brand-mozilla-vpn }</link_to_info>) για να αποκρύψετε την πραγματική διεύθυνση IP σας και να χρησιμοποιήσετε το διαδίκτυο ιδιωτικά.

# Leaked Passwords

# Variables
# $breach_name is the name of the breach where the leaked password was found.
leaked-passwords-title = Ο κωδικός πρόσβασής σας εκτέθηκε από το { $breach_name }
# Variables
# $breach_date is the date when the breach occurred.
leaked-passwords-summary = Εμφανίστηκε σε μια παραβίαση δεδομένων στις { $breach_date }.
leaked-passwords-description = Οι απατεώνες μπορούν να αποκτήσουν πρόσβαση στον λογαριασμό σας και πιθανότατα θα προσπαθήσουν να τον χρησιμοποιήσουν σε άλλους λογαριασμούς, ώστε να δουν εάν έχετε χρησιμοποιήσει τον ίδιο κωδικό πρόσβασης. Αλλάξτε τον οπουδήποτε τον έχετε χρησιμοποιήσει για να προστατευτείτε.
leaked-passwords-steps-title = Ορίστε τι πρέπει να κάνετε
leaked-passwords-steps-subtitle = Αυτό απαιτεί πρόσβαση στον λογαριασμό σας, επομένως θα πρέπει να το διορθώσετε χειροκίνητα.
# Variables
# $breach_name is the name of the breach where the leaked password was found.
# $emails_affected are the emails associated with the breach.
leaked-passwords-step-one = Αλλάξτε τον κωδικό πρόσβασής σας για το <b>{ $emails_affected }</b> στο <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-passwords-step-two = Αλλάξτε τον όπου αλλού τον έχετε χρησιμοποιήσει.
leaked-passwords-mark-as-fixed = Επισήμανση ως διορθωμένο
leaked-passwords-skip = Παράλειψη προς το παρόν
# Variables
# $estimated_time is the amount of time it would take for a user to manually resolve a leaked password breach. It will always be a number greater than 1.
# "Est." is shortform for "Estimated".
# "mins" is shortform for "minutes".
leaked-passwords-estimated-time =
    { $estimated_time ->
       *[other] Εκτιμώμενος χρόνος ολοκλήρωσης: { $estimated_time } λεπτά ανά ιστότοπο
    }

# Leaked Security Questions

leaked-security-questions-title = Οι ερωτήσεις ασφαλείας σας εκτέθηκαν
# Variables
# $breach_name is the name of the breach where the leaked security questions were found.
# $breach_date is the date when the breach occurred.
# An example of this string is Twitter on 13/09/18.
leaked-security-questions-summary = Εμφανίστηκαν σε μια παραβίαση δεδομένων στο { $breach_name } στις { $breach_date }.
leaked-security-questions-description = Οι απατεώνες μπορούν να τις χρησιμοποιήσουν για να αποκτήσουν πρόσβαση στους λογαριασμούς σας και σε οποιονδήποτε άλλο ιστότοπο όπου έχετε χρησιμοποιήσει τις ίδιες ερωτήσεις ασφαλείας. Ενημερώστε τις τώρα για να προστατεύσετε τους λογαριασμούς σας.
leaked-security-questions-steps-title = Ορίστε τι πρέπει να κάνετε
leaked-security-questions-steps-subtitle = Αυτό απαιτεί πρόσβαση στον λογαριασμό σας, επομένως θα πρέπει να το διορθώσετε χειροκίνητα.
# Variables
# $breach_name is the name of the breach where the security questions were found.
# $email_affected is the email associated with the breach.
leaked-security-questions-step-one = Ενημερώστε τις ερωτήσεις ασφαλείας σας για το <b>{ $email_affected }</b> στο <link_to_breach_site>{ $breach_name }</link_to_breach_site>.
leaked-security-questions-step-two = Ενημερώστε τις σε οποιονδήποτε άλλο ιστότοπο χρησιμοποιήσατε τις ίδιες ερωτήσεις ασφαλείας. Βεβαιωθείτε ότι χρησιμοποιείτε διαφορετικές ερωτήσεις ασφαλείας για κάθε λογαριασμό.
