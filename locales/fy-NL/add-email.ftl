# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


### Dialog window that allows a user to add a new email address to be monitored

add-email-add-another-heading = In oar e-mailadres tafoegje
# $total is the number of emails a user is allowed to add
add-email-your-account-includes =
    { $total ->
        [one] Jo account omfettet it monitoaren fan { $total } e-mailadres. Foegje in nij e-mailadres ta om te besjen oft it troffen is troch in datalek.
       *[other] Jo account omfettet it monitoaren fan { $total } e-mailadressen. Foegje in nij e-mailadres ta om te besjen oft it troffen is troch in datalek.
    }
add-email-address-input-label = E-mailadres
add-email-send-verification-button = Ferifikaasjekeppeling ferstjoere
# $email is the newly added email address. $settings-href is the URL for the Settings page. HTML tags should not be translated, e.g. `<a>`
add-email-verify-the-link = Ferifiearje de keppeling dy’t ferstjoerd is nei { $email } om dit oan { -brand-fx-monitor } ta te foegjen. Behear alle e-mailadressen yn <a { $settings-href }>Ynstellingen</a>.
