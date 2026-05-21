# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Mewngofnodi

## Email footers

email-footer-support-heading = Cwestiynau am { -brand-mozilla-monitor }?
email-footer-support-content = Ewch i'n <support-link>Canolfan Gymorth</support-link> am gymorth
email-footer-trigger-transactional = Rydych chi'n derbyn yr e-bost hwn fel tanysgrifiwr { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Rydych chi'n derbyn yr e-bost awtomatig hwn fel tanysgrifiwr o { -brand-mozilla-monitor }. Os ydych wedi ei dderbyn ar gam, does dim angen gweithredu. Am ragor o wybodaeth, ewch i <support-link>{ -brand-mozilla } Cefnogaeth</support-link>.
email-footer-reason-subscriber-one-time = Rydych chi wedi derbyn yr e-bost awtomataidd un-tro hwn oherwydd eich bod wedi tanysgrifio i { -brand-monitor-plus }. Byddwch chi ddim yn derbyn unrhyw e-byst pellach fel hyn. Am ragor o wybodaeth, ewch i <support-link>{ -brand-mozilla } Cefnogaeth</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = Ewch i'n Canolfan Gymorth am help: { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Data tor-amod wedi'i ddarparu gan { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Darparwyd manylion tor-data gan <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Preifatrwydd
email-unsubscribe-link = <link_to_unsub>Dad-danysgrifio</link_to_unsub>
# Variables:
#   $unsub_link (string) - URL to the unsubscribe page, e.g. "https://monitor.mozilla.org/unsubscribe/...".
email-unsubscribe-link-plain = Dad-danysgrifio: { $unsub_link }
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Dilysu E-bost
# Headline of verification email
email-link-expires = Daw'r ddolen hon i ben mewn 24 awr

##

# Subject line of email
email-subject-found-breaches = Mae { -product-name } wedi canfod gwybodaeth amdanoch yn y tor-data yma
# Subject line of email
email-subject-no-breaches = Nid yw { -product-name } wedi canfod unrhyw dor-data hysbys
# Subject line of email
email-subject-verify = Gwirio eich e-bost ar gyfer { -product-name }
fxm-warns-you-no-breaches = Mae { -product-name } yn eich rhybuddio am dor-data sy'n cynnwys eich manylion personol. Hyd yn hyn, nid ydym wedi darganfod unrhyw dor-data. Byddwn yn anfon rhybudd atoch os bydd eich cyfeiriad e-bost yn ymddangos mewn tor-data newydd.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Data tor-data wedi'i ddarparu gan <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Diogelwch eich data, gan ddechrau nawr
email-verify-simply-click = Cliciwch ar y ddolen isod i orffen dilysu'ch cyfrif.

## Breach report

email-breach-summary = Dyma eich crynodeb tor-data
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Mae canlyniadau chwilio eich cyfrif { $email-address } wedi canfod y gallai eich e-bost fod wedi'i ddatgelu. Rydym yn argymell eich bod yn gweithredu nawr i ddatrys y tor-data hwn.
email-dashboard-cta = Mynd i'r Bwrdd Gwaith

## Breach alert email

email-breach-alert-all-subject = Wedi canfod tor-data newydd
email-breach-alert-all-preview = Byddwn yn eich arwain trwy'r camau i'w datrys.
email-breach-alert-all-hero-heading = Rydych chi wedi bod yn rhan o dor-data newydd
email-breach-alert-all-hero-subheading = Peidiwch â phoeni, gallwn eich helpu i ddatrys y datguddiad hwn
email-breach-alert-all-lead = Mae { -brand-mozilla-monitor } wedi darganfod y tor-data canlynol sy'n cynnwys eich manylion personol:
email-breach-alert-all-source-title = Ffynhonnell y toriad:
email-breach-alert-all-data-points-title = Eich data datgelwyd:
email-breach-alert-all-next-steps-lead = Byddwn yn eich arwain gam wrth gam ar sut i ddatrys y tor-data hwn.
email-breach-alert-all-next-steps-cta-label = Cychwyn arni
email-breach-alert-all-next-steps-button-dashboard = Mynd i'r Bwrdd Gwaith

## Breach alert redesigned strings

# $company-name is the name of the company/site that was breached.
email-breach-alert-all-hero-heading-1 = Manylion tor-data { $company-name }
# $company-name is the name of the company/site that was breached.
# $breach-date is the date of the breach.
email-breach-alert-all-lead-1 = Daeth { -brand-mozilla-monitor } o hyd i'ch manylion mewn tor-data ynglŷn â { $company-name } ar { $breach-date }. Rydych chi'n cael y rhybudd hwn oherwydd i chi gofrestru ar gyfer <link_to_settings>hysbysiadau tor-data</link_to_settings>.
email-breach-alert-all-source-title-1 = Manylion y tor-data
email-breach-alert-company = Cwmni:
email-breach-alert-date-of-breach = Dyddiad y tor-data:
email-breach-alert-info-exposed = Eich manylion sydd wedi eu datgelu:
email-breach-alert-next-steps = Camau nesaf
email-breach-alert-next-steps-description = <sign_in_link>Mewngofnodwch</sign_in_link> i'ch bwrdd dangos { -brand-mozilla-monitor }. Byddwn yn eich arwain trwy'r camau sydd eu hangen i'w ddatrys.
email-breach-alert-all-next-steps-button-resolve-breach-on-dashboard = Datrys tor-data ar y bwrdd dangos
email-breach-alert-faqs-title = Cwestiynau Cyffredin
email-breach-alert-faq-qn-1 = Pam ydw i'n derbyn hwn?
email-breach-alert-faq-ans-1 = Rydych wedi cofrestru ar gyfer rhybuddion tor-data. <link_to_settings>Diweddarwch eich dewisiadau</link_to_settings> unrhyw bryd yn y gosodiadau.
email-breach-alert-faq-qn-2 = Pam nad ydw i'n adnabod y cwmni neu'r wefan hon?
email-breach-alert-faq-ans-2 = Efallai ei fod wedi newid perchnogaeth neu enw, yn cynnwys hen gyfrif neu un a gafodd ei greu ar eich cyfer, neu'n dod o restr a brynwyd o fanylion personol sydd wedi'u datgelu.
email-breach-alert-faq-qn-3 = Beth yw rhybudd tor-data?
email-breach-alert-faq-ans-3 = Hysbysiad mae { -brand-mozilla-monitor } yn ei anfon pan fydd manylion personol rydych chi'n ei fonitro'n cael ei ddatgelu, ei ddwyn neu ei gopïo heb ganiatâd.
email-breach-alert-faq-qn-4 = Beth yw { -brand-mozilla-monitor }?
email-breach-alert-faq-ans-4 = Gwasanaeth hysbysu tor-data rhad ac am ddim sy'n eich rhybuddio os yw'ch cyfrifon ar-lein wedi bod yn rhan o dor-data.
