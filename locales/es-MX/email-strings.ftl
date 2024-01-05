# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Reporte de { -product-name }
report-date = Fecha del reporte:
email-address = Dirección de correo electrónico:

# A link to legal information about mozilla products.
legal = Legal

# Unsubscribe link in email.
email-unsub-link = Eliminar suscripción

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Estás recibiendo este correo porque estás suscrito para recibir alertas de { -product-name }. ¿Ya no deseas estos correos? { $unsubLink }. Este es un correo automático. Para ayuda, visita { $faqLink }

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy = Estás recibiendo este correo por que te suscribiste para recibir alertas de { -product-name }. Este es un correo automático. Para ayuda, visita { $faqLink }.

# Button text
verify-email-cta = Verificar correo

# Button text
see-all-breaches = Ver todas las filtraciones

# Headline of verification email
email-link-expires = Este enlace expira en 24 horas
email-verify-blurb = Verifica tu correo para añadirlo a { -product-name } y registrarte para alertas de nuevas filtraciones.

# Email headline
email-found-breaches-hl = Aquí está tu resumen de filtraciones de datos pasadas

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Resumen de filtraciones para { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } apareció en 0 filtraciones de datos conocidas.

# Email headline
email-alert-hl = { $userEmail } apreció en una nueva filtración de datos

##

# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en estas filtraciones

# Subject line of email
email-subject-no-breaches = { -product-name } se encontraron filtraciones conocidas

# Subject line of email
email-subject-verify = Verifica tu correo para { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Saber más acerca de { $fxmLink }

email-sensitive-disclaimer =
    Debido a la naturaleza sensible de esta filtración, no se harán públicas las direcciones de correo afectadas.
    Has recibido esta alerta porque se ha comprobado que eres el propietario de esta dirección de correo.

fxm-warns-you-no-breaches =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    Por ahora no se ha encontrado ninguna. Te enviaremos una alerta si tu dirección de correo aparece en una nueva filtración.

fxm-warns-you-found-breaches =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    También te has suscrito para recibir alertas si tu dirección de correo aparece en una nueva filtración.

email-breach-alert-blurb =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    Acabamos de recibir información sobre la filtración de datos de otra empresa.

# Section headline
monitor-another-email = ¿Quieres consultar otro correo electrónico?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Estás recibiendo este mensaje de correo automático como suscriptor de { -product-name }. <br>No dudes en cambiar tus preferencias de correo en cualquier momento <a { $unsubscribe-link-attr }>aquí</a>.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Filtración de datos proporcionada por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Tienes filtraciones de correo sin resolver
email-unresolved-subhead = Tu correo ha quedado expuesto. <br>Soluciónalo ahora mismo { -product-name }.
email-is-affected = Tu correo, { $email-address }, se vio afectado por al menos una filtración de datos
email-more-detail = Inicia sesión en { -product-name } ahora para ver más detalles sobre tus filtraciones de correo (incluido cuando ocurrieron y que datos se expusieron) y conoce que debes hacer cuando tu correo ha sido expuesto en una filtración de datos.
email-breach-status = Estado de la filtración actual
# table row 1 label
email-monitored = Total de correos monitoreados:
# table row 2 label
email-breach-total = Número total de filtraciones:
# table row 3 label
email-resolved = Filtraciones resueltas:
# table row 4 label
email-unresolved = Filtraciones sin resolver:
email-resolve-cta = Resolver filtraciones:

## Verification email

email-verify-heading = Protege tus datos, comenzando ahora mismo
email-verify-subhead = Verifica tu correo electrónico para comenzar a proteger tus datos después de una infracción.
email-verify-simply-click = Simplemente haz clic en el siguiente enlace para terminar de verificar tu cuenta.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Aquí está el resumen de tu filtración de datos
email-breach-detected = Los resultados de búsqueda de tu cuenta { $email-address } han detectado que tu correo electrónico puede haber sido expuesto. Te recomendamos que actúes ahora para resolver esta violación.
email-no-breach-detected = ¡Grandiosas noticias! No hemos encontrado filtraciones de datos que afecten tu correo electrónico, { $email-address }.
email-dashboard-cta = Ir al panel de control

## Breach alert

email-may-have-been-exposed = Tu correo electrónico puede haber estado expuesto en una filtración de datos
email-spotted-new-breach = Hemos detectado una nueva filtración de datos
