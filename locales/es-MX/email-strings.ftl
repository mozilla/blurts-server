# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Selecciona el botón Verificar mi correo electrónico en un máximo de 24 horas para confirmar tu cuenta de Firefox Monitor. Una vez hecho esto, se enviará tu informe.
verify-my-email = Verificar mi correo electrónico
report-scan-another-email = Escanéa otro correo en { -product-name }
automated-message = Este es un correo automatizado; si lo recibiste por error, no es necesario que hagas nada.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Enviamos este mensaje a { $userEmail } porque la dirección de correo electrónico eligió recibir alertas de  { -product-name }.
unsubscribe-email-link = Si ya no quieres recibir alertas de { -product-name }, elimina tu suscripción.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Reporte de { -product-name }
report-date = Fecha del reporte:
email-address = Dirección de correo electrónico:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Qué hacer a continuación
report-headline =
    { $breachCount ->
        [0] Hasta ahora, todo bien
        [one] Tu cuenta apareció en la filtración { $breachCount }.
       *[other] Tus cuentas aparecieron en filtraciones de { $breachCount }.
    }
report-subhead-no-breaches =
    Tu cuenta no aparece en nuestro informe completo de filtraciones de datos. 
    Esas son buenas noticias, pero hay más cosas que puedes hacer. 
    Las filtraciones de datos pueden ocurrir en cualquier momento, así que sigue leyendo para saber cómo puedes proteger tus contraseñas.
report-subhead-found-breaches = Aquí está tu informe completo de Firefox Monitor, que incluye todas las filtraciones de datos conocidas que contienen tu dirección de correo electrónico.
report-pwt-blurb =
    Las contraseñas son tan valiosas que miles de ellas son robadas cada día y vendidas en el mercado negro.
    Usar contraseñas más seguras protege tus cuentas y toda la información personal que está dentro de ellas.
report-pwt-headline-1 = Usar una contraseña diferente para cada cuenta
report-pwt-summary-1 =
    Usar la misma contraseña para todo abre la puerta a los hackers.
    Ellos pueden usar esas contraseñas para iniciar sesión en otras cuentas.
report-pwt-headline-2 = Crea fuertes y únicas contraseñas
report-pwt-summary-2 =
    Los hackers usan lista de contraseñas comunes para intentar adivinar la tuya.
    Mientras más larga y aleatoria sea tu contraseña, es más difícil que sea robada.
report-pwt-headline-3 = Trata las preguntas de seguridad como si fueran contraseñas extras
report-pwt-summary-3 =
    Los sitios web no revisan que tus respuestas sean correctas, simplemente necesitan coincidir cada vez.
    Crear largas y aleatorias respuestas y mantenlas en algún lugar seguro.
report-pwt-headline-4 = Usa un administrador de contraseñas
report-pwt-summary-4 =
    Servicios como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas fuertes y las almacenan en lugares seguros,
    además los usan en tus sitios web, así no tienes que recordar cada contraseña.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Descubre si fuiste parte de una violación de datos.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hola,
    { -brand-name } tiene un servicio gratuito donde puedes verificar si fuiste parte de una violación de datos. Así es como funciona:
    1. Ir a { "https://monitor.firefox.com" } y buscar tu correo electrónico.
    2. Ver si tus cuentas en línea se expusieron a una violación de datos.
    3. Obtener consejos de { -product-name } sobre los siguientes pasos a tomar.
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
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Ver mi panel de control
# Button text
verify-email-cta = Verificar correo
# Headline of verification email
email-link-expires = Este enlace expira en 24 horas
email-verify-blurb = Verifica tu correo para añadirlo a { -product-name } y registrarte para alertas de nuevas filtraciones.
# Email headline
email-found-breaches-hl = Aquí está tu resumen de filtraciones de datos pasadas
# Email headline
email-breach-summary-for-email = Resumen de filtraciones para { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } apareció en 0 filtraciones de datos conocidas.
# Email headline
email-alert-hl = { $userEmail } apreció en una nueva filtración de datos
# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en estas filtraciones
# Subject line of email
email-subject-no-breaches = { -product-name } se encontraron filtraciones conocidas
# Subject line of email
email-subject-verify = Verifica tu correo para { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Saber más acerca de { $fxmLink }
# List headline
faq-list-headline = Preguntas frecuentemente realizadas
