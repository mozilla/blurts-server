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
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Aquí está tu reporte completo de { -product-name }, que incluye todas las filtraciones de datos conocidas que contienen tu dirección de correo electrónico.
report-no-breaches =
    Tu dirección de correo electrónico no aparece en nuestra base de datos de filtraciones conocidas.
    Pero las filtraciones puede ocurrir en cualquier momento. Sigue estos pasos para mantener tu información segura.
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
breach-alert-headline = Tu cuenta estuvo involucrada en una filtración de datos.
breach-alert-subhead = Una filtración de datos conocida recientemente contiene tu correo electrónico y los siguientes datos
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
