# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify = Seleccioná el botón Verificar mi correo electrónico dentro de las 24 horas para confirmar tu cuenta de Firefox Monitor. Tu informe estará en camino.
verify-my-email = Verificar mi correo electrónico
report-scan-another-email = Escanear otro correo electrónico en { -product-name }
automated-message = Este es un correo electrónico automático; si lo recibiste por error, no tenés que hacer nada.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Enviamos este mensaje a { $userEmail } porque la dirección de correo electrónico optó por las alertas de { -product-name }.
unsubscribe-email-link = Si no querés más alertas de { -product-name }, cancelá la suscripción.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Informe  de { -product-name }
report-date = Fecha del informe:
email-address = Dirección de correo electrónico:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = Qué hacer a continuación
report-headline =
    { $breachCount ->
        [0] Por ahora, todo bien
        [one] Tu cuenta apareció en { $breachCount } violación.
       *[other] Tus cuentas aparecieron en { $breachCount } violaciones.
    }
report-subhead-no-breaches = Tu cuenta no aparece en nuestro informe completo de violaciones. Son buenas noticias, pero hay más que podés hacer. Las violaciones de datos ocurren en cualquier momento, así que seguí leyendo para saber cómo podés proteger tus contraseñas.
report-subhead-found-breaches = Aquí está tu informe completo de Firefox Monitor, que incluye todas las violaciones de datos conocidas que contienen esta dirección de correo electrónico.
report-pwt-blurb = Las contraseñas son tan valiosas que miles de ellas son robadas cada día y negociadas o vendidas en el mercado negro. Las contraseñas más seguras protegen tus cuentas y toda la información personal incluida en ellas.
report-pwt-headline-1 = Usá una contraseña diferente para cada cuenta
report-pwt-summary-1 = Reutilizar la misma contraseña en todas partes abre la puerta a los piratas. Pueden usar esa contraseña para iniciar sesión en tus otras cuentas.
report-pwt-headline-2 = Creá contraseñas seguras y únicas.
report-pwt-summary-2 = Los piratas usan miles de contraseñas comunes para tratar de adivinar la tuya. Cuanto más larga y aleatoria sea tu contraseña, será más difícil de adivinar.
report-pwt-headline-3 = Tratá las preguntas de seguridad como contraseñas adicionales
report-pwt-summary-3 = Los sitios web no verifican que tus respuestas sean precisas, solo que coincidan cada vez. Creá respuestas largas y aleatorias y guardalas en un lugar seguro.
report-pwt-headline-4 = Usá un administrador de contraseñas
report-pwt-summary-4 = Los servicios como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas seguras, las almacenan de forma segura y las rellenan en sitios web para que no tengas que recordar cada una de ellas.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Fijate si fuiste parte de una violación de datos.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Hola,
    { -brand-name } tiene un servicio gratuito donde podés verificar si fuiste parte de una violación de datos. Funciona así:
    1. Andá a { "https://monitor.firefox.com" } y buscá tu correo electrónico.
    2. Fijate si tus cuentas en línea se expusieron en una violación de datos.
    3. Obtené consejos de { -product-name } sobre lo que hacer a continuación.
# Unsubscribe link in email.
email-unsub-link = Cancelar suscripción
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Estás recibiendo este correo electrónico porque te registraste en alerteas de { -product-name } ¿No querés recibir más estos correos? { $unsubLink }. Este es un correo electrónico automatizado. Buscá ayuda en  { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Estás recibiendo este correo electrónico porque te registraste para recibir alertas de { -product-name }.
    Este es un correo electrónico automatizado. Para recibir ayuda, visitá { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Ver mi Panel de control
# Button text
verify-email-cta = Verificar correo electrónico
# Headline of verification email
email-link-expires = Este enlace vence en 24 horas.
email-verify-blurb = Verificá tu correo electrónico para agregarlo a { -product-name } e inscribite para recibir alertas de violaciones.
# Email headline
email-found-breaches-hl = Aquí está tu resumen de las violaciones de datos anteriores
# Email headline
email-breach-summary-for-email = Resumen de la violación para { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } apareció en 0 violaciones de datos conocidas
# Email headline
email-alert-hl = { $userEmail } apareció en una nueva violación de datos
# Subject line of email
email-subject-found-breaches = { -product-name } encontró tu información en estas violaciones
# Subject line of email
email-subject-no-breaches = { -product-name } no encontró violaciones conocidas
# Subject line of email
email-subject-verify = Verificá tu correo electrónico para { -product-name }
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Aprender más sobre { $fxmLink }
email-sensitive-disclaimer =
    Debido a la naturaleza privada de esta violación, los correos electrónicos involucrados no se ven de manera pública.
    Estás recibiendo este alerta porque sos el propietario verificado de esta dirección de correo electrónico.
fxm-warns-you-no-breaches =
    { -product-name } te advierte sobre violaciones de datos relacionadas con tu información personal.
    Hasta el momento, no se encontraron infracciones. Te enviaremos un alerta si tu dirección de correo electrónico aparece en una nueva violación.
fxm-warns-you-found-breaches =
    { -product-name } te advierte sobre violaciones de datos relacionadas con tu información personal.
    También te registraste para recibir alertas si tu dirección de correo electrónico aparece en una nueva violación.
email-breach-alert-blurb =
    { -product-name } te advierte sobre violaciones de datos relacionadas con tu información personal.
    Recién recibimos detalles sobre la violación de datos de otra empresa.
# List headline
faq-list-headline = Preguntas frecuentes
# Link Title
faq-v2-1 = No reconozco esta empresa o sitio web. ¿Por qué estoy en esta violación?
