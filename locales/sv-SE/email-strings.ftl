# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Email headers

email-header-button-sign-in = Logga in

## Email footers

email-footer-support-heading = Frågor om { -brand-mozilla-monitor }?
email-footer-support-content = Besök vårt <support-link>Supportcenter</support-link> för hjälp
email-footer-trigger-transactional = Du får det här e-postmeddelandet som prenumerant på { -brand-mozilla-monitor }.
email-footer-reason-subscriber = Du får detta automatiska e-postmeddelande som prenumerant på { -brand-mozilla-monitor }. Om du fick det av misstag krävs ingen åtgärd. För mer information, besök <support-link>{ -brand-mozilla } Support</support-link>.
email-footer-reason-subscriber-one-time = Du har fått detta automatiska engångsmejl eftersom du prenumererar på { -brand-monitor-plus }. Du kommer inte att få några fler mejl som detta. För mer information, besök <support-link>{ -brand-mozilla } Support</support-link>.
# Variables:
#    $support_link (string) - The URL the user can visit for support, e.g. "https://support.mozilla.org"
email-footer-support-content-plain = Besök vårt supportcenter för hjälp: { $support_link }
# Variables:
#   $hibp_link (string) - URL to Have I Been Pwned, e.g. "https://haveibeenpwned.com".
email-footer-source-hibp-plain = Intrångsdata tillhandahålls av { -brand-HIBP }: { $hibp_link }
email-footer-source-hibp = Intrångsdata tillhandahållen av <hibp-link>{ -brand-HIBP }</hibp-link>
email-footer-logo-mozilla-alt = { -brand-mozilla }
email-footer-meta-privacy-notice = Sekretess
# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN
# Button text
verify-email-cta = Verifiera e-postadress
# Headline of verification email
email-link-expires = Den här länken upphör inom 24 timmar

##

# Subject line of email
email-subject-found-breaches = { -product-name } hittade din information i dessa intrång
# Subject line of email
email-subject-no-breaches = { -product-name } hittade inga kända intrång
# Subject line of email
email-subject-verify = Verifiera din e-postadress för { -product-name }
fxm-warns-you-no-breaches =
    { -product-name } varnar dig om intrång av uppgifter som involverar din personliga information.
    Hittills har inga intrång hittats. Vi skickar en varning om din e-postadress visas i ett nytt intrång.

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

# Have I Been Pwned attribution
# Variables:
#   $hibp-link-attr (String) - Link to Have I Been Pwned
email-2022-hibp-attribution = Intrångsdata tillhandahållen av <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Verification email

email-verify-heading = Skydda dina data, från och med nu
email-verify-simply-click = Klicka på länken nedan för att slutföra verifieringen av ditt konto.

## Breach report

email-breach-summary = Här är din sammanfattning av dataintrång
# Variables:
#   $email-address (string) - Email address, bolded
email-breach-detected = Sökresultat för ditt { $email-address }-konto har upptäckt att din e-post kan ha blivit avslöjad. Vi rekommenderar att du agerar nu för att lösa detta intrång.
email-dashboard-cta = Gå till översikten

## Breach alert email

email-breach-alert-all-subject = Nytt dataintrång upptäcktes
email-breach-alert-all-preview = Vi guidar dig genom stegen för att lösa det.
email-breach-alert-all-hero-heading = Du har varit med i ett nytt dataintrång
email-breach-alert-all-hero-subheading = Oroa dig inte, vi kan hjälpa dig att lösa denna exponering
email-breach-alert-all-lead = { -brand-mozilla-monitor } upptäckte följande dataintrång som inkluderar din personliga information:
email-breach-alert-all-source-title = Källa intrång:
email-breach-alert-all-data-points-title = Din exponerade data:
email-breach-alert-all-next-steps-lead = Vi guidar dig steg för steg om hur du löser detta dataintrång.
email-breach-alert-all-next-steps-cta-label = Låt oss börja
email-breach-alert-all-next-steps-button-dashboard = Gå till översikten
