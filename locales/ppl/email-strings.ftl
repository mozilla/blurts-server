# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } Shikteilwi
report-date = Itunal ne Tenewalis:
email-address = Titantukayit:

# A link to legal information about mozilla products.
legal = Tajtuli

# Unsubscribe link in email.
email-unsub-link = Shikishti mutukay

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Tikselia ini titanamat ika tiktalijtuk mutukay iwan { -product-name }
    tanawatilis. Tea tikneki ini titanamat? { $unsubLink }. Ini se titanamat. Ken tepalewilis, shikita { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Tikselia ini titanamat ika tiktalijtuk mutukay iwan { -product-name } tanawatilis.
     Ini se titanamat. Ken tepalewilis, shikita { $faqLink }.

# Button text
verify-email-cta = Shiknelti Titantukayit

# Button text
see-all-breaches = Shikita Muchi Taichtekilis

# Headline of verification email
email-link-expires = Ini ilpika puliwi tik 24 horaj.
email-verify-blurb = Shiknelti mutitantukay pal tiktalia iwan { -product-name } wan shiktali mutukay pal tiknawatiat taichtekilis.

# Email headline
email-found-breaches-hl = Nikan nemi mutapualis ipal tamatilichtekilis

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Ne itapualis ne tamatilichtekilis ipal { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } nest tik 0 tamatil taichtekilis

# Email headline
email-alert-hl = { $userEmail } nesik tik se yankwik tamatil taichtekilis

##

# Subject line of email
email-subject-found-breaches = { -product-name } kiajsik mutamatilis tik se taichtekilis

# Subject line of email
email-subject-no-breaches = { -product-name } te kiajsik se taichtekilis

# Subject line of email
email-subject-verify = Shiknelti mutitantukay ipal { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Shimumachti ipanpa { $fxmLink }

email-sensitive-disclaimer =
    Ipanpa nejmach ini taichtekilis, ne titanamat te weli mutemua.
    Tikselia ini tanawatilis ika taja ne itekuyu ini titantukayit.

fxm-warns-you-no-breaches =
    { -product-name } metznawatia ipanpa se tamatil taichtekilis ne nemi itech mutamatilisyu.
    Ijkiashan, te kanaj se taichtekilis. Tiu-timetznawatiat asu mutitantukay nesi tik se yankwik taichtekilis.

fxm-warns-you-found-breaches =
    { -product-name } metznawatia ipanpa se tamatil taichtekilis ne nemi itech mutamatilisyu.
    Nusan tiktalijtuk mutukay pal tikselia tanawatilis asu mutitantukay nesi tik se yankwik taichtekilis.

email-breach-alert-blurb =
    { -product-name } metznawatia ipanpa se tamatil taichtekilis ne nemi itech mutamatilisyu.
    San tikselijket tamatilis ipanpa se taichtekilis tik seuk tekipan.

# Section headline
monitor-another-email = Tikneki tikishkupawia ukse titantukayit?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

## Verification email

## Breach report
## Variables:
##   $email-address (string) - Email address

## Breach alert

