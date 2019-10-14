# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Tacha' ri pitz'b'äl Tinik'öx Nutaqoya'l pa jun 24 ramaj richin nijikib'äx ri rub'i' nutaqoya'l richin Firefox Monitor.
    Toq xab'än yan re' xtitaq jun tzijol chawe.
verify-my-email = Tinik'öx Nutaqoya'l
report-scan-another-email = Tatz'ajwachib'ej  Jun Chik Taqoya'l pa { -product-name }
automated-message = Ruyonil nitaq re taqoya'l re'; we xak'ül ruma jun sachoj, majun achike tab'än.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Xqatäj re rutzijol re' pa { $userEmail } ruma ri rochochib'al taqoya'l nrajo' nuk'ül rutzijol kik'ayewal { -product-name }.
unsubscribe-email-link = We man nawajo' ta chik nak'ül { -product-name } kitzijol k'ayewal, tayuju' rutz'ib'axik ab'i'.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = { -product-name } Rutzijol
report-date = Ruq'ijul Rutzijol:
email-address = Rochochib'al Taqoya'l:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Achike Nib'an Wakami
report-headline =
    { $breachCount ->
        [0] K'a wakami, yalan ütz.
        [one] Xwachin ri rub'i' ataqoya'l pa { $breachCount } tz'ilanïk.
       *[other] Xwachin ri rub'i' ataqoya'l pa { $breachCount } taq tz'ilanïk.
    }
report-subhead-no-breaches =
    Man niwachin ta ri rub'i' ataqoya'l pa ri tz'aqät qatzijol richin kitz'ilanïk tzij.
    Yalan ütz rutzijol, chuqa' k'o yatikïr nab'än.
    Xab'achike ramaj yek'ulwachitäj ri taq tz'ilanïk, ruma ri' tasik'ij ronojel richin nawetamaj rub'eyal ye'achajij ri ewan taq atzij.
report-subhead-found-breaches = Ja tz'aqät atzijol richin Firefox Monitor re k'o wawe', ri nuk'üt ronojel ri tz'ilanïk taq tzij ruk'wan ri rochochib'al ataqoya'l.
report-pwt-blurb =
    Ri ewan taq tzij yalan kejqalem ruma ri' toq k'ïy ye'eleq'äx q'ij q'ij chuqa' yek'ayïx pa itzel k'ayb'äl.
    Ke'awokisaj jikïl ewan taq tzij richin ye'achajij ri rub'i' taq ataqoya'l chuqa' ri taq awetamab'al e k'o chi kipam.
report-pwt-headline-1 = Tawokisaj jun ewan tzij richin jun rub'i' taqoya'l
report-pwt-summary-1 =
    Nawokisaj xa jun ewan tzij richin ronojel ütz chi kiwäch ri ajjaköy.
    Yetikïr nikokisaj ri ewan taq tzij ri' richin nikitikirisaj molojri'ïl pa ch'aqa' chik rub'i' taqoya'l.
report-pwt-headline-2 = Ke'atz'uku' nimaq' chuqa' junilal ewan taq tzij
report-pwt-summary-2 =
    Ri ajjaköy nikokisaj cholb'äl relïk ewan taq tzij richin nikïl ri awichin.
    We yalan nïm raqän chuqa' k'exel ri ewan atzij, k'ayew nub'än chi kiwäch richin nikeleq'aj.
report-pwt-headline-3 = Ke'atz'eta' ri jikonel taq k'utunïk achi'el e rutz'aqat ewan taq tzij
report-pwt-summary-3 =
    Ri ajk'amaya'l taq ruxaq man yekinik'oj ta chi e ütz ri ewan taq atzij, xa xe chi tikixima' ki'. 
    Ke'atz'uku' nïm kaqän chuqa' k'exel ewan taq tzij chuqa' ke'ayaka' pa jun jikïl k'ojlib'äl.
report-pwt-headline-4 = Tawokisaj jun kinuk'samajel ewan tzij
report-pwt-summary-4 =
    Kisamaj achi'el 1Password, LastPass, Dashlane, and Bitwarden yekib'än nimaläj ewan taq tzij chuqa' yekiyäk pa jun jikïl k'ojlib'äl,
    Chuqa' nrokisaj pa ajk'amaya'l ruxaq, ke ri' man k'atzinel ta ye'anataj chi jujun ri ewan tzij.
# A link to legal information about mozilla products.
legal = Taqanel rutzijol
# Share Firefox Monitor by email subject line
share-by-email-subject = Tatz'eta' we xtz'iläx ri atzij.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Achike ab'anon,
    { -brand-name } k'o jun sipan rusamaj akuchi' yatikïr nanik'oj we xtz'iläx ri atzij. Ke re' nisamäj:
    1. Jät pa { "https://monitor.firefox.com" } richin nakanoj ri ataqoya'l.
    2. Tatz'eta' we ri rub'i' ataqoya'l pa k'amab'ey xkik'ulwachij jun tz'ilanïk kitzij.
    3. Nak'ül taq runa'oj { -product-name } chi rij ri k'o chi nab'än.
# Unsubscribe link in email.
email-unsub-link = Tiq'at rutz'ib'axik b'i'aj
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Nak'ül re taqoya'l re' ruma atz'ib'an ab'i' richin ye'akül kitzijol ri { -product-name } taq  
    rutz'ilanem. ¿La man ye'awajo' ta chik re taq taqoya'l re'? { $unsubLink }. Re re' ruyon nutäq rutzijol taqoya'l. Richin ato'ik, tatz'eta' { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Nak'ül re taqoya'l re' ruma atz'ib'an ab'i' richin ye'akül kitzijol ri { -product-name } taq rutz'ilanem. 
    Re re' ruyon nutäq rutzijol taqoya'l. Richin ato'ik, tatz'eta' { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Titz'et ri Rupas Nuchajixik
# Button text
verify-email-cta = Tinik'öx Taqoya'l
# Button text
see-all-breaches = Ketz'et Ronojel taq Tz'ilanem
# Headline of verification email
email-link-expires = Re ximonel re' xtik'is pa 24 ramaj.
email-verify-blurb = Tanik'oj ri ataqoya'l richin nitz'aqatisäx pa { -product-name } chuqa' tatz'ib'aj ab'i' richin rutzijol k'ak'a' taq tz'ilanem.
# Email headline
email-found-breaches-hl = Wawe' nuchöl kitz'ilanem tzij e k'ulwachitajinäq
# Email headline
email-breach-summary-for-email = Rucholajem rutz'ilanem { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } xwachin pa 0 kitz'ilanik tzij etaman ruwäch.
# Email headline
email-alert-hl = { $userEmail } xwachin pa jun k'ak'a' kitz'ilanik tzij etaman ruwäch
# Subject line of email
email-subject-found-breaches = { -product-name } xrïl ri awetamab'al pa re taq tz'ilanem re'
# Subject line of email
email-subject-no-breaches = { -product-name } xe'ilitäj taq tz'ilanem etaman kiwäch
# Subject line of email
email-subject-verify = Tanik'oj ri ataqoya'l richin { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Tetamäx ch'aqa' chik chi rij { $fxmLink }
email-sensitive-disclaimer =
    Ruma ruk'ayewal re tz'ilanem re', man xkek'ut ta re taq ochochib'äl xetz'iläx. 
    Xak'ül re rutzijol kayewal re' ruma xnik'öx chi at rajaw re rochochib'al taqoya'l re'.
# List headline
faq-list-headline = Jutaqil taq k'utunïk
# Link Title
faq-v2-4 = ¿Achike rub'anikil nub'än { -product-name } chi ke ri k'ayew taq ruxaq?
