# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Informe de { -product-name }
report-date = Fecha del informe:
email-address = Dirección de correo electrónico:

# A link to legal information about mozilla products.
legal = Legal

# Unsubscribe link in email.
email-unsub-link = Desuscribirse

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Estás recibiendo este correo por que te registraste para recibir alertas de { -product-name }. ¿No quieres seguir recibiendo estos correos? { $unsubLink }. Este es un correo automático. Para ayuda, visita { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Estás recibiendo este correo por que te registraste para recibir alertas de { -product-name }. Este es un correo automático. Para ayuda, visita { $faqLink }.

# Button text
verify-email-cta = Verificar correo

# Button text
see-all-breaches = Ver todas las filtraciones

# Headline of verification email
email-link-expires = Este enlace expira en 24 horas.
email-verify-blurb = Verifica tu correo para añadirlo a { -product-name } y registrarte para alertas de nuevas filtraciones.

# Email headline
email-found-breaches-hl = Aquí tienes tu resumen sobre filtraciones anteriores

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Resumen de filtraciones para { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } apareció en 0 filtraciones de datos conocidas

# Email headline
email-alert-hl = { $userEmail } apareció en una nueva filtración de datos

##

# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en las siguientes filtraciones

# Subject line of email
email-subject-no-breaches = { -product-name } no encontró filtraciones conocidas

# Subject line of email
email-subject-verify = Verifica tu correo para { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Aprender más sobre { $fxmLink }

email-sensitive-disclaimer = Debido a la naturaleza sensible de esta filtración, los correos involucrados no son expuestos públicamente. Estás recibiendo esta alerta por que eres el dueño verificado de esta dirección de correo.

fxm-warns-you-no-breaches =
    { -product-name } te advierte sobre filtraciones de datos que involucren información personal tuya.
    Hasta el momento, no se han encontrado filtraciones. Te enviaremos una alerta si tu correo aparece en una nueva filtración.

fxm-warns-you-found-breaches =
    { -product-name } te advierte sobre filtraciones de datos que involucren información personal tuya.
    También estás registrado para recibir alertas si tu correo aparece en una nueva filtración.

email-breach-alert-blurb =
    { -product-name } te advierte sobre filtraciones de datos que involucren información personal tuya.
    Acabamos de recibir detalles acerca de una filtración de datos de otra compañía.

# Section headline
monitor-another-email = ¿Quieres monitorizar otro correo?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Estás recibiendo este correo electrónico automático como suscriptor de { -product-name }. <br>Puedes cambiar tus preferencias de correo electrónico en cualquier momento <a { $unsubscribe-link-attr }>aquí</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Datos de filtración provistos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Tienes filtraciones sin resolver
email-unresolved-subhead = Tu correo electrónico ha sido expuesto. <br>Arréglalo ya mismo con { -product-name }.
email-is-affected = Tu correo electrónico, { $email-address }, se vio afectado por al menos una filtración de datos
email-more-detail = Conéctate a { -product-name } ahora para ver más detalles sobre tus filtraciones (incluido cuándo ocurrieron y qué datos se expusieron) y aprende qué se debe hacer cuando tu correo electrónico se ha visto expuesto en una filtración de datos.
email-breach-status = Estado actual de filtraciones
# table row 1 label
email-monitored = Total de correos monitoreados:
# table row 2 label
email-breach-total = Número total de filtraciones:
# table row 3 label
email-resolved = Filtraciones resueltas:
# table row 4 label
email-unresolved = Filtraciones sin resolver:
email-resolve-cta = Resolver filtraciones

## Verification email

email-verify-heading = Protege tus datos, empieza ya
email-verify-subhead = Verifica tu correo electrónico para empezar a proteger tus datos después de una filtración.
email-verify-simply-click = Simplemente haz clic en el enlace a continuación para terminar de verificar tu cuenta.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Aquí está el resumen de tu filtración de datos
email-breach-detected = Los resultados de búsqueda de tu cuenta { $email-address } han detectado que tu correo electrónico podría haber sido expuesto. Te recomendamos que actúes ahora para resolver este problema.
email-no-breach-detected = ¡Excelentes noticias! No hemos encontrado filtraciones de datos que afecten tu correo electrónico, { $email-address }.
email-dashboard-cta = Ir al panel de control

## Breach alert

email-may-have-been-exposed = Tu correo electrónico puede haber quedado expuesto en una filtración de datos
email-spotted-new-breach = Hemos detectado una nueva filtración de datos
