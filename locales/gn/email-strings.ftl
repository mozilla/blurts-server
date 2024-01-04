# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } Marandu
report-date = Marandu Arange:
email-address = Ñanduti veve kundaharape:

# A link to legal information about mozilla products.
legal = Añetegua

# Unsubscribe link in email.
email-unsub-link = Ñemboheraguapy jeheja

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Og̃uahẽ ndéve ñandutiveve eñemboheraguapýre { -product-name } ñembyaípe. 
    ¿Ndereipotavéimarõ? { $unsubLink }. Kóva ha’e ñandutiveve ijeheguíva. Eikotevẽro pytyvõ, eike kuatiarogue { $faqLink }-pe.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Og̃uahẽ ndéve ko ñanduti veve eñemboheguapy rupi ha omboúta ndéve kyhyjerã { -product-name }. 
    Kóva ha’e ñanduti veve ijeheguíva. Eñepytyvõ hag̃ua eike { $faqLink }-pe.

# Button text
verify-email-cta = Ñanduti veve jehechajey

# Button text
see-all-breaches = Ehechapaite ñembyai

# Headline of verification email
email-link-expires = Ko juajuha opáta 24 aravópe
email-verify-blurb = Ehechajey ne ñanduti veve embojuaju hag̃ua { -product-name } ha eñemboheraguapy og̃uahẽ hag̃ua kyhyjerã ñembyai rehegua.

# Email headline
email-found-breaches-hl = Ko’ãva ne mba’ekuaarã ñembyai oikova’ekue

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Ñembyai oikova’ekue { $userEmail } peg̃uarã

# Email headline
email-no-breaches-hl = { $userEmail } ojehecha 0 mba’ekuaarã ñembyai kuaapyrépe

# Email headline
email-alert-hl = { $userEmail } ojehecha mba’ekuaarã ñembyai pyahúpe

##

# Subject line of email
email-subject-found-breaches = { -product-name } ojuhu ne marandu ko’ã ñembyaípe

# Subject line of email
email-subject-no-breaches = { -product-name } ndojuhúi ñembyai kuaapyrépe

# Subject line of email
email-subject-verify = Ehechajey ne ñanduti veve { -product-name } peg̃uarã

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Eikuaave { $fxmLink } rehegua

email-sensitive-disclaimer =
    Pe ñembiai rehegua ikangy rupi, noñemoherakuãmo’ãi ñandutiveve kundaharape ivaíva. 
    Og̃uahẽ ndéve ko kyhyjerã ojehechakuaa rupi nemba’eha ko ñandutiveve kundaharape.

fxm-warns-you-no-breaches =
    { -product-name } nemongyhyje mba’ekuaarã ñembyai rehegua ombyaikuaáva ne maranduete. 
    Ko’ág̃a rupi ndojejuhúi mba’eve. Romondóta ndéve kyhyjerã ne ñandutiveve kundaharape oñembyaikuaáramo.

fxm-warns-you-found-breaches =
    { -product-name } nemongyhyje mba’ekuaarã ñembyaire omomarãkuaáva ne maranduete. 
    Eñemboheraguapy og̃uahẽ hag̃ua ndéve kyhyjerã ne ñandutiveve kundaharape imarãkuáramo.

email-breach-alert-blurb =
    { -product-name } omombe’u ndéve mba’ekuaarã ñembyai ne mba’eteéva rehegua. 
    
    Og̃uahẽramo mba’emimi mba’ekuaarã ñembyai rehegua ambue mba’apohaguasu guive.

# Section headline
monitor-another-email = ¿Eporanduse ambue ñanduti veve rupive?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Og̃uahẽ ko ñanduti veve jeheguíva eñemboheraguapýgui { -product-name } ndive. <br>Emoambuekuaa rehayhuvéva ñanduti veve ejapose vove <a { $unsubscribe-link-attr }>ápe</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Mba’ekuaarã ñembogua ome’ẽva <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Eguereko ñembogua oĩporã’ỹva
email-unresolved-subhead = Ne ñanduti veve ikatu oñembyai. <br>Emoĩporã ko’ag̃aite { -product-name }.
email-is-affected = Ne ñanduti veve, { $email-address }, oñembyai sa’ivéramo peteĩ mba’ekuaarã ñemboguápe
email-more-detail = Eñepyrũ tembiapo { -product-name } ndive ehecha porã hag̃ua mba’emimi ñembogua rehegua (oikehápe oikórõguare ha mba’e mba’ekuaarã ivaikuaa) ha eikuaa mba’épa ejapóta ne ñanduti veve ivaikuaárõ mba’ekuaarã ñembogua rupive.
email-breach-status = Mba’éicha oĩ ñembogua
# table row 1 label
email-monitored = Ñanduti vevekuéra jehechapyre:
# table row 2 label
email-breach-total = Ñemboguaguasu papapy:
# table row 3 label
email-resolved = Ñembogua moĩporãmbyre:
# table row 4 label
email-unresolved = Ñembogua oĩporã’ỹva:
email-resolve-cta = Emoĩporã ñembogua

## Verification email

email-verify-heading = Emo’ã ne mba’ekuaarã, eñepyrũ ko’ag̃aite
email-verify-subhead = Ehechajey ne ñanduti veve emo’ãkuaa hag̃ua mba’ekuaarã ñembogua rire.
email-verify-simply-click = Eikutu pe juajuha emohu’ã hag̃ua ne mbaéte jehechajey.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Na’ápe ne mba’ekuaarã ñembogua rapykuere
email-breach-detected = Ne mba’ete jeheka rapykuere { $email-address } ohechakuaa ne ñanduti veve oñembyaikuaaha. Romombe’u ndéve emyatyrõ hag̃ua ko ñembogua rehegua.
email-no-breach-detected = ¡Marandu neporãva! Ndorojuhúi mba’ekuaarã ñembogua ombyaikuaáva ne ñanduti veve, { $email-address }.
email-dashboard-cta = Eho ñangarekoha rupápe

## Breach alert

email-may-have-been-exposed = Ne ñanduti veve iñapañuãikuaa mba’ekuaarã ñembogua rupi
email-spotted-new-breach = Rohecha oĩha mba’ekuaarã ñembogua pyahu
