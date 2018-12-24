# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Selecciona el botón "Verificar mi correo" dentro de las próximas 24 horas para confirmar tu cuenta de Firefox Monitor. Tu reporte será enviado después de eso.
verify-my-email = Verificar mi correo electrónico
report-scan-another-email = Escanear otro correo electrónico en { -product-name }
automated-message = Este es un correo automatizado; si lo recibiste por error, no es necesario que hagas nada.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Enviamos este mensaje a { $userEmail } porque éste correo optó por alertas de { -product-name }.
unsubscribe-email-link = Si ya no quieres recibir alertas de { -product-name }, cancela tu suscripción.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Informe de { -product-name }
report-date = Fecha del informe:
email-address = Dirección de correo electrónico:
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Aquí está tu informe de { -product-name } completo, el cual incluye todas las filtraciones de datos conocidas que contienen a esta dirección de correo.
report-no-breaches = Tu dirección de correo no apareció en nuestra base de datos de filtraciones conocidas. Pero las filtraciones pueden ocurrir en cualquier momento. Toma estas medidas para proteger tus datos personales en línea.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Qué hacer a continuación
report-headline =
    { $breachCount ->
        [0] Hasta aquí, todo bien.
        [one] Tu cuenta apareció en { $breachCount } filtración.
       *[other] Tus cuentas aparecieron en { $breachCount } filtraciones.
    }
report-subhead-no-breaches =
    Tu cuenta no apareció en nuestro informe completo de filtraciones.
    Eso es bueno, pero hay mucho más que puedes hacer.
    Las filtraciones de datos pueden suceder en todo momento, así que lee sobre cómo puedes proteger tus contraseñas.
report-subhead-found-breaches = Aquí está tu reporte de Firefox Monitor completo, el que incluye todas las filtraciones de datos conocidas que contienen esta dirección de correo.
breach-alert-headline = Tu cuenta fue afectada por una filtración de datos.
breach-alert-subhead = Una filtración de datos reportada recientemente contiene tu correo electrónico y los siguientes datos
report-pwt-blurb =
    Las contraseñas son tan valiosas, que miles de ellas son robadas todos los días y comercializadas en el mercado negro.
    Las contraseñas más fuertes protegen tus cuentas y toda la información personal que reside en ellas.
report-pwt-headline-1 = Usa una contraseña diferente para cada cuenta
report-pwt-summary-1 =
    Reutilizar la misma contraseña en todas partes abre la puerta a los hackers.
    Ellos pueden usar esa contraseña para conectarse a tus otras cuentas.
report-pwt-headline-2 = Crea contraseñas seguras y únicas
report-pwt-summary-2 =
    Los hackers usan listas de contraseñas comunes para intentar adivinar la tuya.
    Mientras más larga y aleatoria sea tu contraseña, es más difícil que sea robada.
report-pwt-headline-3 = Trata las preguntas de seguridad como si fueran contraseñas adicionales
report-pwt-summary-3 = Los sitios web no revisan que tus respuestas sean precisas, solo que coincidan cada vez. Crea respuestas largas y aleatorias y almacénalas en algún lugar seguro.
report-pwt-headline-4 = Usa un administrador de contraseñas
report-pwt-summary-4 = Servicios como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas fuertes, las almacenan de forma segura y las ponen en los sitios web para que no tengas que recordar ninguna de ellas.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Fijate si fuiste parte de una filtración de datos.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hola,
    { -brand-name } tiene un servicio gratuito en el que puedes revisar si has sido parte de una filtración de datos.
    Aquí tienes como funciona:
    1. Ve a { "https://monitor.firefox.com" } y revisa tu correo.
    2. Mira si tus cuentas en línea han sido expuestas en una filtración de datos.
    3. Recibe consejos de { -product-name } sobre que hacer a continuación.
