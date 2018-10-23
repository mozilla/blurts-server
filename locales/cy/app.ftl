# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Cefnogaeth
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Rhoi Adborth
terms-and-privacy = Telerau a Phreifatrwydd
error-not-subscribed = Nid yw'r cyfeiriad e-bost hwn wedi'i danysgrifio i { -product-name }.
error-hibp-throttled = Gormod o gysylltiadau i { -brand-HIBP }.
error-hibp-connect = Gwall wrth gysylltu i { -brand-HIBP }.
error-hibp-load-breaches = Mehu llwytho'r bylchau.
hibp-notify-email-subject = Rhybudd { -product-name }: Mae eich cyfrif wedi ei gynnwys mewn bylchiad.
home-title = { -product-name }
home-not-found = Heb ganfod tudalen.
oauth-invalid-session = Sesiwn annilys
oauth-confirmed-title = { -product-name } : Wedi tanysgrifio
scan-title = { -product-name } : Canlyniadau Sganio
user-add-invalid-email = E-bost Annilys
user-add-email-verify-subject = Dilysu eich tanysgrifiad i { -product-name }.
user-add-title = { -product-name } : Cadarnhau E-bost
user-verify-token-error = Mae angen tocyn dilysu.
user-verify-email-report-subject = Eich adroddiad { -product-name }
user-verify-title = { -product-name } : Tanysgrifiwyd
user-unsubscribe-token-error = Mae tanysgrifio angen tocyn.
user-unsubscribe-token-email-error = Mae tanysgrifio angen tocyn a hashe-bost.
user-unsubscribe-title = { -product-name } : Dad-danysgrifio
user-unsubscribe-survey-title = { -product-name } : Dad-danysgrifio o'r Arolwg
user-unsubscribed-title = { -product-name } : Wedi Dad-danyscrifio

## Password Tips

pwt-section-headline = Cyfrineiriau Cryfach = Gwell Diogelwch
pwt-section-subhead = Mae eich manylion preifat ond mor ddiogel â'ch cyfrineiriau.
pwt-section-blurb = Mae eich cyfrineiriau'n gwarchod mwy na'ch cyfrifon. Maen nhw'n diogelu pob darn o wybodaeth bersonol sy'n bod o'u mewn. Ac mae hacwyr yn dibynnu ar arferion drwg, fel defnyddio'r un cyfrinair ym mhobman neu ddefnyddio ymadroddion cyffredin (p@ssw0rd??) felly os byddan nhw'n hacio un cyfrif, mae modd iddyn nhw hacio llwyth. Dyma sut i amddiffyn eich cyfrifon yn well.
pwt-headline-1 = Defnyddiwch gyfrinair gwahanol ar gyfer pob cyfrif
pwt-summary-1 = Mae ailddefnyddio'r un cyfrinair ym mhobman yn agor y drws lled y pen ar gyfer dwyn hunaniaeth. Gall unrhyw un sydd â'r cyfrinair hwnnw fewngofnodi i'ch holl gyfrifon.
pwt-headline-2 = Creu cyfrineiriau cryf, anodd eu dyfalu
pwt-summary-2 = Mae hacwyr yn defnyddio miloedd o gyfrineiriau cyffredin i geisio dyfalu eich un chi. Yr hiraf a mwyaf annisgwyl ydyw, yr anoddaf fydd i'w ddyfalu.
pwt-headline-3 = Rhaid trin cwestiynnau diogelwch fel cyfrineiriau ychwanegol
pwt-summary-3 = Nid yw gwefannau yn gwirio bod eich atebion yn gywir, dim ond eu bod yn cyfateb bob tro. Crewch atebion hir, ar hap a'u storio yn rhywle diogel.
pwt-headline-4 = Helpu eich hun i gofio eich cyfrineiriau
pwt-summary-4 = Mae rheolwyr cyfrinair fel 1Password, LastPass, Dashlane, a Bitwarden yn creu cyfrineiriau cryf, unigryw. Maen nhw hefyd yn storio cyfrineiriau'n ddiogel a'u llanw ar wefannau i chi
pwt-headline-5 = Ychwanegwch ddiogelwch ychwanegol gyda dilysu dau gam
pwt-summary-5 = Mae dilysu dau gam yn gofyn am ddarn ychwanegol o wybodaeth (fel cod un-amser a anfonir trwy neges destun) i fewngofnodi i'ch cyfrif. Hyd yn oed os oes gan rywun eich cyfrinair, does dim modd iddyn nhw gael mynediad.
pwt-headline-6 = Cofrestru ar gyfer rhybuddion { -product-name-nowrap }
pwt-summary-6 = Mae tor-data gwefanau ar gynnydd. Cyn gynted ag y bydd tor-data newydd yn cael ei ychwanegu at ein cronfa ddata, mae { -product-name-nowrap } yn anfon rhybudd i chi - fel y gallwch chi weithredu a diogelu'ch cyfrif.
scan-label = Gweld os ydych wedi bod yn rhad o dor-data.
scan-featuredbreach-label = Gweld os yw eich cyfrif <span class="bold"> { $featuredBreach } </span> wedi ei gyfaddawdu.
signup-banner-blurb = Mae eich adroddiad manwl { -product-name-nowrap } yn dangos os yw gwybodaeth o'ch cyfrifon ar-lein wedi cael ei ryddhau neu ei ddwyn. Byddwn hefyd yn eich hysbysu os bydd eich cyfrifon yn ymddangos mewn achosion o dor-data gwefannau newydd.
signup-modal-blurb = Cofrestrwch am eich adroddiad llawn, rhybuddion pan fo toriadau newydd yn digwydd, ac awgrymiadau diogelwch o { -product-name-nowrap }.
no-breaches-headline = Go lew, hyd yma.
found-breaches-headline = Mae eich manylion wedi bod yn rhan o dor-ddata.
no-breaches =
    Nid oedd eich cyfeiriad e-bost yn ymddangos yn ein sgan sylfaenol.
    Mae hynny'n newyddion da, ond gall tor-ddata ddigwydd ar unrhyw adeg ac mae mwy y gallwch chi ei wneud.
    Tanysgrifiwch i { -product-name-nowrap } am adroddiad llawn, rhybuddion pan fo tor-ddata newydd yn digwydd, ac awgrymiadau ar ddiogelu eich cyfrineiriau.
featured-breach-results =
    { $breachCount ->
        [zero] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, ond nid yw'n ymddangos mewn unrhyw achosion o dor-ddata eraill.
        [one] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal ag un tor-data arall.
        [two] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal a { $breachCount } tor-data arall.
        [few] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
        [many] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
       *[other] Mae eich cyfrif yn ymddangos yn tor-ddata <span class="bold">{ $featuredBreach }</span>, yn ogystal â { $breachCount } tor-data arall.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [zero] { no-breaches }
        [one] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn un tor-data arall.
        [two] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
        [few] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
        [many] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
       *[other] Nid oedd eich cyfrif yn ymddangos yn y tor-data <span class="bold">{ $featuredBreach }</span>, ond mae'n ymddangos mewn { $breachCount } tor-data eraill.
    }
scan-results =
    { $breachCount ->
        [zero] { no-breaches }
        [one] Ymddangosodd eich cyfrif mewn { $breachCount } tor-data.
        [two] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
        [few] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
        [many] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
       *[other] Ymddangosodd cyfrifon sy'n gysylltiedig â'ch cyfeiriad e-bost yn y { $breachCount } tor-data canlynol.
    }
show-more-breaches = Dangos Rhagor
what-to-do-headline = Beth i'w Wneud pan mae eich Manylion wedi'i Amlygu mewn Tor-data
