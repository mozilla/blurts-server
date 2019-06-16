# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Cuenta de Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Asistencia
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Acerca de las alertas de Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Enviar comentario
terms-and-privacy = Términos y privacidad
error-scan-page-token = Has intentado escanear demasiadas direcciones de correo electrónico en un breve periodo de tiempo. Por razones de seguridad, hemos bloqueado tus búsquedas temporalmente. Puedes volver a intentarlo de nuevo más tarde.
error-could-not-add-email = No se ha podido añadir la dirección de correo electrónico a la base de datos.
error-not-subscribed = Esta dirección de correo electrónico no está suscrita a { -product-name }.
error-hibp-throttled = Demasiadas conexiones a { -brand-HIBP }.
error-hibp-connect = Error al conectar con { -brand-HIBP }.
error-hibp-load-breaches = No se han podido cargar los fallos de seguridad.
error-must-be-signed-in = Debes iniciar sesión en tu { -brand-fxa }.
home-title = { -product-name }
home-not-found = Página no encontrada.
oauth-invalid-session = La sesión no es válida
oauth-confirmed-title = { -product-name } : Suscrito
scan-title = { -product-name } : Resultados del análisis
user-add-invalid-email = Correo electrónico no válido
user-add-email-verify-subject = Verifica tu suscripción a { -product-name }.
user-add-title = { -product-name } : Confirmar correo electrónico
error-headline = Error
user-verify-token-error = Se requiere un token de verificación.
user-verify-email-report-subject = Tu informe de { -product-name }
user-verify-title = { -product-name } : Suscrito
user-unsubscribe-token-error = Se requiere un token para cancelar la suscripción.
user-unsubscribe-token-email-error = Para darse de baja se requiere un token y un hash de correo electrónico.
user-unsubscribe-title = { -product-name } : Cancelar suscripción
user-unsubscribe-survey-title = { -product-name } : Darse de baja de la encuesta
user-unsubscribed-title = { -product-name } : Suscripción cancelada

## Password Tips

pwt-section-headline = Contraseñas más robustas = Mejor protección
pwt-section-subhead = Tu información privada es tan segura como lo son tus contraseñas.
pwt-section-blurb =
    Tus contraseñas protegen algo más que tus cuentas. Protegen cada aspecto de tu información personal que hay en ellas.
    Los criminales informáticos se basan en los malos hábitos de la gente, como usar la misma contraseña para todo o usar contraseñas sencillas (1234, ¿te suena?) así que si han podido piratear una cuenta, pueden hacerlo con muchas. Aquí te mostramos cómo proteger mejor tus cuentas.
pwt-headline-1 = Usa una contraseña diferente para cada cuenta
pwt-summary-1 =
    Utilizar la misma contraseña en todas partes deja abierta la puerta a la usurpación de identidad.
    Cualquiera con esa contraseña puede acceder a todas tus cuentas.
pwt-headline-2 = Crea contraseñas seguras y difíciles de adivinar
pwt-summary-2 =
    Los criminales informáticos usan miles de contraseñas comunes para intentar adivinar la tuya. 
    Cuanto más larga y aleatoria sea tu contraseña, más difícil será de adivinar.
pwt-headline-3 = Trata las preguntas de seguridad como si fueran contraseñas adicionales
pwt-summary-3 =
    Los sitios web no comprueban que tus contraseñas sean adecuadas, solo que coincidan cada vez.
    Crea contraseñas largas, aleatorias y guárdalas en un lugar seguro.
pwt-headline-4 = Obtén ayuda para recordar tus contraseñas
pwt-summary-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas robustas y únicas. También las almacenan de forma segura y las introducen por ti en los sitios web.
pwt-headline-5 = Añade seguridad adicional con la autenticación de dos factores
pwt-summary-5 =
    La autenticación de dos factores requiere información adicional (como un código de un solo uso enviado por SMS) para acceder a tu cuenta.
    Incluso si alguien tiene tu contraseña, no podrá acceder.
pwt-headline-6 = Regístrate para recibir alertas de { -product-name-nowrap }
pwt-summary-6 =
    Las filtraciones de datos de sitios web están en aumento. Tan pronto como una nueva infracción se añada a nuestra base de datos,
    { -product-name-nowrap } te envía una alerta para que puedas tomar medidas y proteger tu cuenta.
landing-headline = Tu derecho a estar a salvo de los criminales informáticos empieza aquí.
landing-blurb =
    { -product-name-nowrap } te brinda herramientas para mantener segura tu información personal.
    Descubre lo que los criminales informáticos ya saben de ti y aprende cómo mantenerte un paso por delante de ellos.
scan-label = Comprueba si has estado involucrado en una fuga de datos.
scan-placeholder = Introduce una dirección de correo electrónico
scan-privacy = No se guardará tu correo electrónico.
scan-submit = Busca tu correo electrónico
scan-another-email = Analizar otra dirección de correo electrónico
scan-featuredbreach-label = Descubre si tu cuenta de <span class="bold">{ $featuredBreach }</span> fue comprometida.
sensitive-breach-email-required = La filtración contiene información confidencial. Se requiere verificación de correo.
scan-error = Debe ser un correo electrónico válido.
signup-banner-headline = { -product-name-nowrap } detecta amenazas a tus cuentas en línea.
signup-banner-blurb =
    Tu informe detallado de { -product-name-nowrap } muestra si la información de tus cuentas en línea ha sido filtrada o robada.
    También te avisaremos si tus cuentas aparecen en nuevas filtraciones de sitios web.
download-firefox-bar-blurb = { -product-name-nowrap } está disponible gracias al <span class="nowrap">totalmente nuevo { -brand-name } </span>.
download-firefox-bar-link = Descargar { -brand-name } ahora
download-firefox-banner-blurb = Toma el control de tu navegador
download-firefox-banner-button = Descargar { -brand-name }
signup-modal-headline = Regístrate en { -product-name-nowrap }
signup-modal-blurb = Date de alta para obtener tu informe completo, alertas cuando ocurran nuevas filtraciones y consejos de seguridad de { -product-name-nowrap }.
signup-modal-close = Cerrar
get-your-report = Consigue tu informe
signup-modal-verify-headline = Verifica tu suscripción
signup-modal-verify-blurb = Hemos enviado un enlace de verificación a <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Este enlace caduca en 24 horas.
signup-modal-verify-resend = ¿No está en la bandeja de entrada o en la de spam? Reenviar el mensaje.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = ¡Enviado!
signup-with-fxa = Regístrate con la cuenta { -brand-name }
form-signup-placeholder = Introduce correo electrónico
form-signup-checkbox = Recibe las últimas novedades de { -brand-Mozilla } y { -brand-name }.
sign-up = Registrarse
form-signup-error = Debe ser una dirección de correo electrónico válida
no-breaches-headline = Hasta aquí todo bien.
found-breaches-headline = Tu información fue comprometida en una filtración de datos.
no-breaches =
    Tu dirección de correo no aparece en nuestro análisis básico.
    Eso son buenas noticias, pero las filtraciones de datos pueden suceder en cualquier momento y aún hay algo más que puedes hacer.
    Suscríbete a { -product-name-nowrap } para un informe completo, alertas cuando sucedan nuevas filtraciones y consejos para proteger tus contraseñas.
featured-breach-results =
    { $breachCount ->
        [0] Tu cuenta parece en la filtración de <span class="bold">{ $featuredBreach }</span>, pero no aparece en otras filtraciones conocidas.
        [one] Tu cuenta parece en la filtración de <span class="bold">{ $featuredBreach }</span>, y también en otra filtración
       *[other] Tu cuenta aparece en la filtración de <span class="bold">{ $featuredBreach }</span>, así como en otras { $breachCount } filtraciones.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta no aparecer en la filtración de <span class="bold">{ $featuredBreach }</span>, pero aparece en otra filtración.
       *[other] Tu cuenta no aparecer en la filtración de <span class="bold">{ $featuredBreach }</span>, pero aparece en otras { $breachCount } filtraciones.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta apareció en { $breachCount } filtración.
       *[other] Cuentas asociadas con tu dirección de correo electrónico aparecieron en las siguientes { $breachCount } filtraciones.
    }
show-more-breaches = Mostrar más
what-to-do-headline = Qué hacer cuando tu información ha sido revelada en una filtración de datos
what-to-do-subhead-1 = Cambia tus contraseñas, aunque se trate de cuentas antiguas
what-to-do-blurb-1 =
    Si no puedes iniciar sesión contacta con el sitio web para preguntar cómo puedes recuperar o cerrar la cuenta.
    ¿Ves una cuenta que no reconoces? Es posible que el sitio haya cambiado de nombre o que alguien haya creado una cuenta en tu nombre.
what-to-do-subhead-2 = Si reutilizas una contraseña que ha sido expuesta, cámbiala
what-to-do-blurb-2 = Los criminales informáticos pueden intentar hacer uso de tu contraseña para acceder a otras cuentas. Crea una contraseña diferente para cada sitio web, especialmente para tu cuenta bancaria, correo electrónico y otros sitios web en los que guardes tu  información personal.
what-to-do-subhead-3 = Toma medidas adicionales para asegurar tus cuentas bancarias
what-to-do-blurb-3 = La mayoría de las filtraciones de datos solo exponen correos electrónicos y contraseñas, pero algunas incluyen información financiera confidencial. Si los números de tu cuenta bancaria o de tu tarjeta de crédito fueron incluidos en un caso de filtración de datos, alerta a tu banco sobre un posible fraude y revisa los movimientos de tu cuenta en busca de cargos que no reconoces.
what-to-do-subhead-4 = Obtén ayuda para crear buenas contraseñas y mantenerlas seguras.
what-to-do-blurb-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas robustas, las almacenan de forma segura y las introducen por ti en los sitios web.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Fecha de la filtración de datos:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
confirmed = ¡Confirmado!<br />¡Estás suscrito!
confirmed-blurb = { -product-name-nowrap } te enviará por correo electrónico un informe completo en breve y te enviará una alerta por correo electrónico si tu cuenta aparece en un nuevo informe de filtración.
confirmed-social-blurb = Si tus datos han sido filtrados es probable que los de tus amigos, familiares o contactos en línea también lo hayan sido. Hazles saber acerca de { -product-name-nowrap }.
unsub-headline = Cancelar la suscripción de  { -product-name-nowrap }.
unsub-blurb = Esto eliminará tu correo electrónico de la lista de { -product-name-nowrap } y ya no recibirás alertas cuando se anuncien nuevas filtraciones.
unsub-button = Cancelar suscripción
fxa-unsub-headline = Cancelar suscripción a las alertas de { -product-name }.
fxa-unsub-blurb = Ya no recibirás alertas de { -product-name }. Tu { -brand-fxa } permanecerá activa, y puede que recibas otras comunicaciones relacionadas con la cuenta.
unsub-survey-form-label = ¿Por qué cancelas la suscripción a las alertas de { -product-name-nowrap }?
unsub-reason-1 = Creo que las alertas no hacen que mis datos estén más seguros
unsub-reason-2 = Recibo muchos correos electrónicos de { -product-name-nowrap }
unsub-reason-3 = No me parece que el servicio sea de gran utilidad
unsub-reason-4 = Ya he tomado medidas para proteger mis cuentas
unsub-reason-5 = Estoy usando otro servicio para vigilar mis cuentas
unsub-reason-6 = Ninguno de las anteriores
unsub-survey-thankyou = Gracias por tu opinión.
unsub-survey-error = Por favor selecciona uno.
unsub-survey-headline-v2 = Se ha cancelado tu suscripción.
unsub-survey-blurb-v2 = Ya no recibirás alertas de { -product-name }. ¿Tienes un momento para responder a una pregunta sobre tu experiencia?
unsub-survey-button = Enviar respuesta
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Compartir
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tuitear
download-firefox-quantum = Descarga { -brand-Quantum }
download-firefox-mobile = Descarga { -brand-name } para dispositivos móviles
# Features here refers to Firefox browser features. 
features = Características
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Filtración de datos proporcionada por { $hibp-link }
site-description = ¿Se han filtrado o robado tus cuentas en una filtración de datos? Descúbrelo en { -product-name }. Busca en nuestra base de datos y date de alta para recibir alertas.
confirmation-headline = Tu informe de { -product-name } está en camino.
confirmation-blurb = Las filtraciones de datos pueden afectar a cualquiera. Corre la voz para que tus amigos y familiares puedan revisar si sus cuentas en línea están seguras.
share-email = Correo electrónico
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Otros
share-twitter = La mayoría de la gente tiene alrededor de 100 cuentas en línea. ¿Alguna de las tuyas fue expuesta en una filtración de datos? Descúbrelo.
share-facebook-headline = Comprueba si has sido parte de una filtración de datos
share-facebook-blurb = ¿Tus cuentas en línea han sido expuestas en una filtración de datos?
og-site-description = Descubre si has sido parte de una filtración de datos con { -product-name }. Regístrate para recibir alertas de futuras filtraciones y consejos para mantener tus cuentas seguras.
mozilla-security-blog = Blog de seguridad de { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Mostrar todo
fxa-landing-blurb =
    Descubre qué saben de ti los piratas informáticos,
    y aprende cómo estar un paso por delante de ellos.
fxa-scan-label = Comprueba si has aparecido en una filtración de datos.
fxa-welcome-headline = Bienvenido a { -product-name }.
fxa-welcome-blurb = Estás listo para recibir alertas si { $userEmail } aparece en una filtración de datos.
fxa-scan-another-email = ¿Quieres comprobar otra dirección de correo?
# Search Firefox Monitor
fxa-scan-submit = Buscar { -product-name }
sign-up-to-check = Regístrate para verificar
sign-in = Iniciar sesión
sign-out = Cerrar sesión
full-report-headline = Tu informe de { -product-name }
see-full-report = Ver informe completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionar { -brand-fxa }
fxa-download-firefox-bar-blurb = Brindado por { -brand-name }. 2 veces más rápido. Usa un 30% menos de memoria que { -brand-Chrome }.
fxa-download-firefox-bar-link = Descargar ahora
fxa-download-firefox-banner-blurb = Una carga de páginas mejor y más rápida que usa menos memoria del ordenador.
user-fb-compromised-headline = { $userEmail } apareció en la filtración de datos de { $breachName }.
guest-fb-compromised-headline = Esta dirección de correo apareció en la filtración de datos de { $breachName }.
user-zero-breaches-headline = { $userEmail } no apareció en ninguna filtración de datos.
guest-zero-breaches-headline = Esta dirección de correo no apareció en ninguna filtración de datos.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } apareció en 1 filtración de datos.
       *[other] { $userEmail } apareció en { $breachCount } filtraciones de datos.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Esta dirección de correo apareció en 1 filtración de datos.
       *[other] Esta dirección de correo apareció en { $breachCount } filtraciones de datos.
    }
user-no-breaches-blurb = Te informaremos si esta dirección de correo aparece en una nueva filtración de datos.
guest-no-breaches-blurb =
    Para ver si este correo electrónico aparece en filtraciones importantes, crea una { -brand-fxa }.
    También te avisaremos si esta dirección aparece en nuevas filtraciones de datos.
user-one-breach-blurb = Esta filtración expuso la siguiente información personal.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Tu dirección de correo también apareció en otra filtración.
       *[other] Tu dirección de correo también apareció en otras { $breachCount } filtraciones.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Esta dirección de correo también apareció en otra filtración.
       *[other] Esta dirección de correo también apareció en otras { $breachCount } filtraciones.
    }
user-fb-compromised-single = Esta filtración expuso la siguiente información personal. Si no lo has hecho aún, cambia tus contraseñas.
user-generic-fb-compromised-single = Esta filtración expuso la siguiente información personal.
guest-fb-compromised-single-v2 =
    Esta filtración expuso la siguiente información personal.
    Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Este correo apareció también en { $breachCount } filtración más. Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
       *[other] Este correo apareció también en otras { $breachCount } filtraciones. Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] No se expuso tu información en la filtración de { $breachName }, pero encontramos esa dirección de correo en otra filtración.
       *[other] No se expuso tu información en la filtración de { $breachName }, pero encontramos esa dirección de correo en otras filtraciones.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Esta dirección de correo no se expuso en la filtración de { $breachName }, pero sí en otra.
       *[other] Esta dirección de correo no se expuso en la filtración de { $breachName }, pero sí en otras.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] Este correo no estaba en la filtración { $breachName }, pero fue encontrado en otra. Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
       *[other] Este correo no estaba en la filtración { $breachName }, pero fue encontrado en otras. Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Esta filtración expuso la siguiente información personal. Si no lo has hecho aún, cambia tus contraseñas.
       *[other] Estas filtraciones expusieron la siguiente información personal. Si no lo has hecho aún, cambia tus contraseñas.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Esta filtración expuso la siguiente información personal.
       *[other] Estas filtraciones expusieron la siguiente información personal.
    }
have-an-account = ¿Ya tienes una cuenta?
signup-banner-sensitive-blurb =
    Descubre lo que saben de ti los piratas informáticos y aprende cómo
    estar un paso por delante de ellos. Recibe alertas si aparece tu cuenta
    en nuevas filtraciones de datos.
fxa-pwt-section-blurb =
    Las contraseñas protegen toda la información personal en tus cuentas en línea. Y
    los piratas informáticos confían en los malos hábitos, como usar la misma contraseña en todas partes o usar frases comunes (como "contraseña"), por lo que si logran entrar una cuenta,
    pueden entrar en muchas.
fxa-pwt-summary-2 =
    Las contraseñas cortas de una sola palabra son fáciles de adivinar para los piratas informáticos.
    Usa al menos dos palabras y una combinación de letras, dígitos y caracteres especiales.
fxa-pwt-summary-4 = Administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tus contraseñas y las escriben en tus sitios web. Incluso te ayudarán a crear contraseñas robustas.
fxa-pwt-summary-6 = Las filtraciones de datos van en aumento. Si tu información personal aparece en una nueva filtración de datos, { -product-name } te envía una alerta para que puedas tomar medidas y proteger tus cuentas.
fxa-what-to-do-blurb-1 =
    Si no puedes iniciar sesión, ponte en contacto con el sitio web para preguntar cómo actualizarlo.
    ¿Ves una cuenta que no reconoces? Tus datos podrían haber sido vendidos
    o redistribuidos. Esta también podría ser una cuenta que olvidaste haber creado o una empresa que cambió de nombre.
fxa-what-to-do-subhead-2 = Deja de usar la contraseña expuesta, y cámbiala en todos los lugares donde la usaste.
fxa-wtd-blurb-2 = Los piratas informáticos pueden intentar reutilizar tu contraseña expuesta para acceder a otras cuentas. Crea una contraseña diferente y única para cada cuenta, especialmente para tu cuenta bancaria, tu correo electrónico y otros sitios web en los que guardas información personal.
fxa-what-to-do-blurb-3 = La mayoría de las filtraciones solo exponen correos electrónicos y contraseñas, pero algunas incluyen información financiera confidencial. Si tu cuenta bancaria o los números de tu tarjeta de crédito se incluyeron en una filtración, avisa a tu banco sobre posibles fraudes y revisa los movimientos de tu cuenta por si hay cargos que no reconozcas.
fxa-what-to-do-subhead-4 = Consigue ayuda para recordar todas tus contraseñas y mantenerlas seguras.
fxa-what-to-do-blurb-4 = Administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tus contraseñas de forma segura y las escriben por ti en los sitios web. Usa un administrador de contraseñas en tu móvil y ordenador para que to tengas que recordarlas todas.
fb-landing-headline = ¿Tu información fue expuesta en la filtración de datos de { $breachName }?
copyright = Partes de este contenido son © 1999-{ $year } por colaboradores individuales de mozilla.org.
content-available = Contenido disponible bajo una licencia Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Regístrate para recibir alertas
sign-up-for-fxa-alerts = Regístrate para recibir alertas de { -product-name }.
create-free-account = Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
get-your-report-and-sign-up = Obtén tu informe y regístrate para recibir alertas.
# Link title
frequently-asked-questions = Preguntas más frecuentes
about-firefox-monitor = Sobre { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Preferencias
# Link title.
home = Inicio
# Link title
breaches = Filtraciones
# Link title
security-tips = Consejos de seguridad
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Abrir navegación { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMA FILTRACIÓN AÑADIDA
# Link title
more-about-this-breach = Más sobre esta filtración
take-control = Recupera el control de tu información personal.
cant-stop-hackers = No puedes evitar que te hackeen, pero sí puedes evitar malas prácticas que le facilitan el trabajo a los hackeadores.
read-more-tips = Leer más sobre consejos de seguridad
how-hackers-work = Descubre cómo trabajan los hackers
monitor-your-online-accounts = Regístrate para monitorear filtraciones con un { -brand-fxa }.
stay-alert = Mantente al día de las nuevas filtraciones
if-your-info = Si tu información aparece en una nueva filtración de datos, te enviaremos una alerta.
search-all-emails = Averigua si tus direcciones de correo han aparecido en filtraciones y recibe alertas sobre nuevas amenazas.
monitor-several-emails = Monitorea varias direcciones de correo
take-action = Actúa para proteger tus cuentas
keep-your-data-safe = Descubre lo que necesitas para mantener a salvo tu información frente a criminales cibernéticos.
website-breach = Filtración de sitios web
sensitive-breach = Filtración de sitios web sensibles
data-aggregator-breach = Filtración del recopilador de datos
unverified-breach = Filtración no verificada
spam-list-breach = Lista de filtración no deseada
website-breach-plural = Filtraciones de sitios web
sensitive-breach-plural = Filtraciones delicadas
data-aggregator-breach-plural = Filtraciones de recopiladores de datos
unverified-breach-plural = Filtraciones no verificadas
spam-list-breach-plural = Listas de filtraciones no deseadas
what-data = Qué información se filtró:
sensitive-sites = ¿Cómo trata { -product-name } los sitios sensibles?
sensitive-sites-copy =
    { -product-name } solo revela las cuentas asociadas con estos
    tipos de filtraciones una vez que se ha verificado la dirección de correo electrónico. Esto significa que eres la
    única persona que puede ver si tu información estaba expuesta (a menos que alguien
    más también tenga acceso a tu cuenta de correo electrónico).
delayed-reporting-headline = ¿Por qué se tardó tanto en informar de esta filtración?
delayed-reporting-copy =
    A veces pueden pasar meses o años antes de que las credenciales que se expusieron
    en una filtración de datos aparezcan en la web oscura. Las filtraciones se añaden a nuestra base de datos en cuanto se descubren y verifican.
about-fxm-headline = Acerca de{ -product-name }
about-fxm-blurb = { -product-name } te advierte si tus cuentas en línea estuvieron involucradas en un filtración de datos. Averigua si se han expuesto tus datos, recibe alertas sobre nuevas filtraciones y toma medidas para proteger tus cuentas en línea. { -brand-Mozilla } patrocina { -product-name }.
fxm-warns-you = { -product-name } te advierte si tus cuentas en línea estuvieron involucradas en un filtración de datos. Verifica si tu información ha sido expuesta, aprende cómo proteger mejor tus cuentas en línea y recibe alertas si tu dirección de correo se encuentra nuevamente en riesgo.
# How Firefox Monitor works
how-fxm-works = Cómo funciona { -product-name }
how-fxm-1-headline = Hacer una búsqueda básica
how-fxm-1-blurb =
    Busca tu dirección de correo en las filtraciones de datos públicas desde 
    2007. Esta búsqueda básica mostrará la mayoría de las filtraciones de datos, pero no
    las que contienen información personal sensible.
how-fxm-2-headline = Registrarse para mantenerse informado sobre las filtraciones
how-fxm-2-blurb =
    Crea una { -brand-fxa } para monitorear las filtraciones de datos de tu correo.
    Cuando hayas comprobado tu dirección de correo, recibirás un informe completo de
    filtraciones pasadas, incluidas las de información más sensible.
how-fxm-3-headline = Obtener notificaciones en el navegador
how-fxm-3-blurb = Si usas { -brand-name }, recibirás una notificación si visitas un sitio que ha sido vulnerado. Averigüa si formaste parte de esta vulnerabilidad y qué puedes hacer al respecto.
wtd-after-website = Qué hacer tras una filtración de una página web
wtd-after-data-agg = Qué hacer tras una filtración de recopilador de datos
what-is-data-agg = ¿Qué es un recopilador de datos?
what-is-data-agg-blurb =
    Los recopiladores de datos recopilan información de fuentes públicas
    y se las compran a otras empresas. Compilan la información para venderla a otras
    empresas con fines de márketing. Las víctimas de estas filtraciones no suelen sufrir
    fraudes financieros, pero los piratas informáticos pueden usar esa información para hacerse pasar por ellos.
protect-your-privacy = Protege tu privacidad en línea.
no-pw-to-change = A diferencia de una filtración web, no tienes que cambiar la contraseña.
avoid-personal-info = Evita usar información personal en las contraseñas
avoid-personal-info-blurb = Es muy fácil descubrir cumpleaños, direcciones y nombres familiares en línea. No uses esas palabras en tus contraseñas.

## What to do after data breach tips

change-pw = Cambia tu contraseña
even-for-old = Incluso en las cuentas antiguas: es importante que la actualices.
make-new-pw-unique = Consigue que la nueva contraseña sea diferente y única
strength-of-your-pw = La seguridad de tus contraseñas tiene un impacto directo en tu seguridad en línea.
create-strong-passwords = Cómo crear contraseñas seguras
stop-reusing-pw = No uses siempre las mismas contraseñas
create-unique-pw = Crea contraseñas únicas y guárdalas en algún lugar seguro, como un administrador de contraseñas.
five-myths = 5 mitos sobre los administradores de contraseñas
create-a-fxa = Crea un { -brand-fxa } para obtener un informe completo de filtraciones y recibir alertas.
feat-security-tips = Consejos de seguridad para proteger tus cuentas
feat-sensitive = Búsqueda avanzada de filtraciones sensibles
feat-enroll-multiple = Agregar varias direcciones de correo a la monitorización de filtraciones
sign-up-for-fxa = Regístrate para crear una { -brand-fxa }
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in. 
appears-in-x-breaches =
    { $breachCount ->
        [one] Aparece en { $breachCount } filtración conocida.
       *[other] Aparece en { $breachCount } filtraciones conocidas.
    }
see-if-breached = Comprueba si tus datos se han filtrado en línea.
check-for-breaches = Busca filtraciones
find-out-what-hackers-know = Averigua qué saben de ti los hackeadores. Descubre cómo ir siempre un paso por delante.
search-for-your-email = Busca tu dirección de correo en filtraciones de datos públicas hasta 2007.
back-to-top = Volver al inicio
comm-opt-0 = Avísame si mi dirección de correo aparece en una filtración de datos.
comm-opt-1 = Enviar todas las alertas de filtraciones a { $primaryEmail }.
stop-monitoring-this = Dejar de monitorear esta dirección de correo.
resend-verification = Reenviar correo de verificación
add-new-email = Agregar una nueva dirección de correo
send-verification = Enviar enlace de verificación
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-summary = Resumen de filtraciones
show-breaches-for-this-email = Mostrar todas las filtraciones de esta dirección.
link-change-primary = Cambiar dirección de correo principal
remove-fxm = Eliminar { -product-name }
remove-fxm-blurb = Desactivar las alertas de { -product-name }. Tu { -brand-fxa } seguirá activo y puede que recibas otras comunicaciones relacionadas con tu cuenta.
manage-email-addresses = Gestionar direcciones de correo
latest-breach-link = Descubre si se filtraron tus datos
welcome-back = ¡Te damos otra vez la bienvenida, { $userName }!
welcome-user = ¡Te damos la bienvenida, { $userName }!
breach-alert-subject = { -product-name } encontró tu dirección de correo en una nueva filtración de datos.
your-info-was-discovered-headline = Se descubrió información tuya en una nueva filtración de datos.
your-info-was-discovered-blurb =
    Te has suscrito para recibir alertas de { -product-name }
    cuando tu dirección de correo aparezca en una filtración de datos. Esto es lo que sabemos al respecto.
what-to-do-after-breach = Qué hacer tras una filtración de datos
ba-next-step-1 = Cambia tu contraseña por otra segura y única.
ba-next-step-blurb-1 =
    Una contraseña segura es aquella que incluye mayúsculas y minúsculas,
    símbolos y números. No debería incluir información personal como
    dirección, cumpleaños o nombres de familiares.
ba-next-step-2 = Dejar de usar esa contraseña expuesta.
ba-next-step-blurb-2 =
    Los piratas informáticos podrían encontrar tu contraseña en la web oscura
    y usarla para iniciar sesión en tus otras cuentas. La mejor forma de protegerlas
    es usando contraseñas únicas para cada una.
ba-next-step-3 = Te ayudamos a crear contraseñas seguras y a protegerlas.
ba-next-step-blurb-3 = Usa un administrador de contraseñas para crear contraseñas seguras y única. Estos administradores almacenan todos tus usuarios de forma segura para que puedas acceder a ellos en todos tus dispositivos.
faq1 = No reconozco esta empresa o sitio web. ¿Por qué aparezco en la filtración?
faq2 = ¿Por qué tardaron tanto en informarme de esta filtración?
faq3 = ¿Cómo sé que el correo de { -product-name } es legítimo?
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NUEVA FILTRACIÓN DETECTADA
       *[other] { $breachCount } NUEVAS FILTRACIONES DETECTADAS
    }
sign-up-headline-1 = Recibe alertas con { -brand-fxa }.
account-not-required = No se necesita el navegador { -brand-name } para { -brand-fxa }. Puedes recibir información sobre los servicios de { -brand-Mozilla }.
get-alerted = Recibe alertas sobre nuevas filtraciones.
was-your-info-exposed = ¿Se expuso tu información en la filtración de datos de { $breachName }?
find-out-if = Comprueba si se expusieron tus datos en esta filtración.
fb-not-comp = Este correo no aparece en la filtración de { $breachName }.
other-breaches-found =
    { $breachCount ->
        [one] Sin embargo, sí aparece en otra filtración.
       *[other] Sin embargo, sí aparece en otras { $breachCount } filtraciones.
    }
fb-comp-only = Este correo sí aparece en la filtración de { $breachName }.
fb-comp-and-others =
    { $breachCount ->
        [one] Este correo apareció en una filtración conocida, la de { $breachName }.
       *[other] Este correo apareció en { $breachCount } filtraciones conocidas, incluida la de { $breachName }.
    }
no-other-breaches-found = No se encontraron otras filtraciones en esta búsqueda rápida.
no-results-blurb = Lo sentimos, esa filtración no está en nuestra base de datos.
all-breaches-headline = Todas las filtraciones de { -product-name }
search-breaches = Buscar filtraciones
# "Appears in-page as: Showing: All Breaches"
currently-showing = Se muestran:
all-breaches = Todas las filtraciones

## Updated error messages

error-bot-headline = Búsquedas suspendidas de forma temporal
error-bot-blurb =
    Nos preocupa que seas un robot porque has buscado varias
    direcciones de correo en muy poco tiempo. Por ahora, hemos bloqueado
    las búsquedas. Inténtalo de nuevo más tarde.
error-csrf-headline = Expiró la sesión
error-csrf-blurb = Selecciona el botón Atrás de tu navegador, recarga la página y vuelve a intentarlo.
error-invalid-unsub = Cómo cancelar la suscripción a las alertas de { -product-name }
error-invalid-unsub-blurb =
    Tendrás que cancelar la suscripción desde uno de los correos
    que te envió { -product-name }. Busca correos de { -brand-team-email }
    en tu bandeja de entrada. Al final del correo, selecciona el enlace Cancelar suscripción.
login-link-pre = ¿Tienes una cuenta?
login-link = Inicia sesión
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Dirección de correo monitoreada
       *[other] Direcciones de correo monitoreadas
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
data-breaches-exposed =
    { $breaches ->
        [one] Una filtración de datos ha expuesto tu información
       *[other] Filtraciones de datos han expuesto tu información
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Contraseña expuesta en todas las filtraciones
       *[other] Contraseñas expuestas en todas las filtraciones
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Filtración de datos conocida ha expuesto tu información
       *[other] Filtraciones de datos conocidas han expuesto tu información
    }
# Button
see-additional-breaches = Ver filtraciones adicionales
# A button on the All Breaches page that restores all of the breaches
# back to the page if the user has filtered some of them out.
see-all-breaches = Ver todas las filtraciones
scan-results-known-breaches =
    { $breachCount ->
        [one] Esta dirección de correo aparece en 1 filtración de datos conocida.
       *[other] Esta dirección de correo aparece en { $breachCount } filtraciones de datos conocidas.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
results-for = Resultados para: { $userEmail }
other-monitored-emails = Otros correos monitoreados
email-verification-required = Tienes que verificar la dirección de correo
fxa-primary-email = { -brand-fxa } correo - principal
what-is-a-website-breach = ¿Qué es una filtración web?
website-breach-blurb = Una filtración web se da cuando los criminales cibernéticos roban, copian o exponen información personal de cuentas digitales. Suelen ser el resultado de piratas informáticos que encuentran puntos débiles en la seguridad de esas páginas, aunque también puede ser que se filtre información de la cuenta por accidente.
security-tips-headline = Consejos de seguridad para protegerte frente a hackers
steps-to-protect = Sigue estos pasos para proteger tu identidad en línea
take-further-steps = Sigue estos consejos para proteger tu identidad
alert-about-new-breaches = Avisarme cuando haya nuevas filtraciones
see-if-youve-been-part = Comprueba si formaste parte de una filtración de datos en línea.
get-ongoing-breach-monitoring = Monitorear filtraciones para varias direcciones de correo.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Descubrir
new-unsub-error = Tendrás que cancelar la suscripción desde uno de los correos que te envió { -product-name }.
other-known-breaches-found =
    { $breachCount ->
        [one] Pero aparecía en otra filtración conocida.
       *[other] Pero aparecía en otras { $breachCount } filtraciones conocidas.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Información adicional:
# Title
email-addresses-title = Direcciones de correo
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview = En { $breachDate }, { $breachTitle } tuvo una filtración. Cuando se descubrió y comprobó la filtración, se añadió a nuestra base de datos el { $addedDate }.
# Title appearing on the Preferences dashboard. 
monitor-preferences = Preferencias de { -product-short-name }
# When a user is signed in, this appears in the drop down menu 
# and is followed by the user's primary Firefox Account email. 
signed-in-as = Iniciase sesión como { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrar por categoría:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menú
to-affected-email = Enviar alertas de filtraciones a las direcciones de correo afectadas
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Existe la forma de proteger tu privacidad. Únete a { -brand-name }.
# Link title
learn-more-link = Saber más.
email-sent = ¡Correo enviado!
# Form title
want-to-add = ¿Quieres agregar otro correo?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
verify-the-link = Comprueba el enlace que se envió a { $userEmail } para agregarlo a { -product-name }.
# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
manage-all-emails = Gestiona todas las direcciones de correo en { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single 
# email address.
breach-alert-notifications = Notificaciones sobre filtraciones
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date. 
breach-added-label = Filtración añadida:
