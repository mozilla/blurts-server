# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Selecciona el botón Comprobar mi correo electrónico en un máximo de 24 horas para confirmar tu cuenta de Firefox Monitor. Una vez hecho esto, se enviará tu informe.
verify-my-email = Comprobar mi correo electrónico
report-scan-another-email = Escanear otro correo electrónico en { -product-name }
automated-message = Este es un correo electrónico automático; si lo recibiste por error, no es necesario realizar ninguna acción.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Enviamos este mensaje a { $userEmail } porque la dirección de correo electrónico eligió recibir alertas de  { -product-name }.
unsubscribe-email-link = Si ya no deseas recibir alertas de { -product-name }, cancela la suscripción.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Informe de { -product-name }
report-date = Fecha del informe:
email-address = Dirección de correo electrónico:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Qué hacer a continuación
report-headline =
    { $breachCount ->
        [0] De momento, todo correcto.
        [one] Tu cuenta apareció en { $breachCount } filtración.
       *[other] Tus cuentas aparecieron en { $breachCount } filtraciones.
    }
report-subhead-no-breaches =
    Tu cuenta no aparece en nuestro informe completo de filtraciones de datos. 
    Esas son buenas noticias, pero hay más cosas que puedes hacer. 
    Las filtraciones de datos ocurren en cualquier momento, así que sigue leyendo para saber cómo puedes proteger tus contraseñas.
report-subhead-found-breaches = Aquí está tu informe completo de Firefox Monitor, que incluye todas las filtraciones de datos conocidas que contienen tu dirección de correo electrónico.
report-pwt-blurb =
    Las contraseñas son tan valiosas que miles de ellas son robadas cada día y vendidas en el mercado negro.
    Usar contraseñas más seguras protege tus cuentas y toda la información personal que reside dentro de ellas.
report-pwt-headline-1 = Utiliza una contraseña diferente para cada cuenta
report-pwt-summary-1 =
    Si utilizas la misma contraseña en todas partes puedes estar abriendo la puerta a los piratas informáticos.
    Pueden utilizar esa contraseña para acceder a tus otras cuentas.
report-pwt-headline-2 = Crea contraseñas seguras y únicas
report-pwt-summary-2 =
    Los piratas informáticos usan listas de contraseñas comunes para intentar adivinar la tuya. 
    Cuanto más larga y aleatoria sea tu contraseña, más difícil será de adivinar.
report-pwt-headline-3 = Trata las preguntas de seguridad como si fueran contraseñas adicionales
report-pwt-summary-3 =
    Los sitios web no comprueban que tus contraseñas sean adecuadas, solo que coincidan cada vez.
    Crea contraseñas largas, aleatorias y guárdalas en un lugar seguro.
report-pwt-headline-4 = Utilice un administrador de contraseñas
report-pwt-summary-4 = Servicios como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas robustas, las almacenan de forma segura y las introducen por ti en los sitios web para que no tengas que recordar cada una.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Descubre si te has visto involucrado en una filtración de datos.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hola,
    { -brand-name } tiene un servicio gratuito donde puedes verificar si te viste involucrado en una filtración de datos. Así es como funciona:
    1. Navega a { "https://monitor.firefox.com" } y busca tu correo electrónico.
    2. Comprueba si tus cuentas en línea resultaron expuestas en alguna filtración de datos.
    3. Obtén consejos de { -product-name } sobre qué más puedes hacer.
# Unsubscribe link in email.
email-unsub-link = Cancelar la suscripción
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Has recibido este correo porque te suscribiste a las alertas de { -product-name }.
    ¿Ya no quieres recibirlos? { $unsubLink }. Este es un correo automático. Si necesitas ayuda, consulta la página { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Has recibido este correo porque te suscribiste a las alertas de { -product-name }.
    Este es un correo automático. Si necesitas ayuda, consulta la página { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Ver Mi panel de control
# Button text
verify-email-cta = Verificar correo electrónico
# Button text
see-all-breaches = Ver todas las filtraciones
# Headline of verification email
email-link-expires = Este enlace caduca en 24 horas
email-verify-blurb = Verifica tu correo para agregarlo a { -product-name } y registrarte para recibir alertas de filtraciones.
# Email headline
email-found-breaches-hl = Este es tu resumen de las filtraciones de datos pasadas
# Email headline
email-breach-summary-for-email = Resumen de filtraciones para { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } no apareció en ninguna filtración de datos
# Email headline
email-alert-hl = { $userEmail } apareció en una nueva filtración de datos
# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en estas filtraciones
# Subject line of email
email-subject-no-breaches = { -product-name } no encontró filtraciones conocidas
# Subject line of email
email-subject-verify = Comprueba tu correo con { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Descubre más sobre { $fxmLink }
email-sensitive-disclaimer =
    Debido a la naturaleza sensible de esta filtración, no se harán publicas las direcciones de correo afectadas.
    Has recibido esta alerta porque se ha comprobado que eres el propietario de esta dirección de correo.
fxm-warns-you-no-breaches =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    Por ahora no se ha encontrado ninguna. Te enviaremos una alerta si tu dirección de correo aparece en una nueva filtración.
fxm-warns-you-found-breaches =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    También te has suscrito para receibir alertas si tu dirección de correo aparece en una nueva filtración.
email-breach-alert-blurb =
    { -product-name } te advierte sobre las filtraciones de datos que afectan a tu información personal.
    Acabamos de recibir información sobre la filtración de datos de otra empresa.
# List headline
faq-list-headline = Preguntas más frecuentes
# Link Title
faq-v2-1 = No reconozco alguna empresa o sitio web. ¿Por qué aparezco en la filtración?
# Link Title
faq-v2-2 = ¿Debo hacer algo si la filtración se produjo hace años o si es una cuenta antigua?
# Link Title
faq-v2-3 = Acabo de ver que mis datos aparecen en una filtración. ¿Qué hago ahora?
# Link Title
faq-v2-4 = ¿Cómo gestiona { -product-name } los sitios sensibles?
