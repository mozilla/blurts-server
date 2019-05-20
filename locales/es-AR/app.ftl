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
-brand-fxa = Firefox Account
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Ayuda
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Acerca de las alertas de Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Dar opinión
terms-and-privacy = Términos y privacidad
error-scan-page-token = Intentaste escanear demasiadas direcciones de correo electrónico en un corto período de tiempo. Por razones de seguridad, bloqueamos tus búsquedas temporariamente. Podés probar de nuevo dentro de un rato.
error-could-not-add-email = No se pudo agregar la dirección de correo electrónico a la base de datos.
error-not-subscribed = Esta dirección de correo electrónico no está suscrita a { -product-name }.
error-hibp-throttled = Demasiadas conexiones a { -brand-HIBP }.
error-hibp-connect = Error al conectar con { -brand-HIBP }.
error-hibp-load-breaches = No se pudieron cargar las violaciones de seguridad.
hibp-notify-email-subject = Alerta de { -product-name }: Tu cuenta estuvo involucrada en una violación de seguridad.
home-title = { -product-name }
home-not-found = Página no encontrada.
oauth-invalid-session = Sesión inválida
oauth-confirmed-title = Suscrito a: { -product-name }
scan-title = Resultados del escaneo de: { -product-name }
user-add-invalid-email = Dirección de correo electrónico inválida
user-add-email-verify-subject = Verificá tu suscripción a { -product-name }.
user-add-title = Confirmar la dirección de correo electrónico: { -product-name }
error-headline = Error
user-verify-token-error = Se requiere identificador de verificación.
user-verify-email-report-subject = Tu informe de { -product-name }
user-verify-title = Suscrito a: { -product-name }
user-unsubscribe-token-error = Cancelar la suscripción requiere un identificador.
user-unsubscribe-token-email-error = Cancelar la suscripción requiere un identificador y un correo electrónico.
user-unsubscribe-title = Cancelar la suscripción a: { -product-name }
user-unsubscribe-survey-title = Cancelar la suscripción a la encuesta: { -product-name }
user-unsubscribed-title = Se canceló la suscripción a: { -product-name }:

## Password Tips

pwt-section-headline = Contraseñas más fuertes = Mejor protección
pwt-section-subhead = Tu información privada es solo tan segura como tus contraseñas.
pwt-section-blurb = Tus contraseñas protegen más que tus cuentas. Protegen cada parte de la información personal que reside en ellas. Y los piratas informáticos confían en los malos hábitos, como usar la misma contraseña en todas partes o usar frases comunes (p@ssw0rd, ¿alguien?) para que, si piratean una cuenta, puedan piratear muchas. Fijate aquí cómo proteger mejor tus cuentas.
pwt-headline-1 = Usá una contraseña diferente para cada cuenta
pwt-summary-1 = Reutilizar la misma contraseña en todas partes deja la puerta abierta para el robo de identidad. Cualquier persona con esa contraseña puede iniciar sesión en todas tus cuentas.
pwt-headline-2 = Creá contraseñas seguras y difíciles de adivinar.
pwt-summary-2 = Los piratas usan miles de contraseñas comunes para tratar de adivinar la tuya. Cuanto más larga y aleatoria sea tu contraseña, más difícil será de adivinar.
pwt-headline-3 = Tratá a las preguntas de seguridad como contraseñas adicionales
pwt-summary-3 = Los sitios web no comprueban que tus respuestas sean precisas, solo que coincidan cada vez. Creá respuestas largas y aleatorias y guardalas en un lugar seguro.
pwt-headline-4 = Conseguí ayuda para recordar tus contraseñas
pwt-summary-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas seguras y únicas. También almacenan las contraseñas de forma segura y las completan en los sitios web
pwt-headline-5 = Agregá seguridad adicional con la autenticación de dos factores
pwt-summary-5 = 2FA requiere información adicional (como un código de una sola vez enviado por mensaje de texto) para iniciar sesión en tu cuenta. Incluso si alguien tiene tu contraseña no puede entrar.
pwt-headline-6 = Registrate para recibir las alertas de { -product-name-nowrap }
pwt-summary-6 = Las violaciones de datos de sitios web están en aumento. Tan pronto como se agrega una nueva violación a nuestra base de datos, { -product-name-nowrap } te envía una alerta para que puedas tomar medidas y proteger tu cuenta.
landing-headline = Tu derecho a estar a salvo de los piratas comienza aquí.
landing-blurb = { -product-name-nowrap } te brinda herramientas para mantener segura tu información personal. Descubrí lo que los piratas ya saben de vos y aprendé cómo mantenerte un paso adelante de ellos.
scan-label = Mirá si te involucraste en una violación de datos.
scan-placeholder = Ingresá la dirección de correo electrónico
scan-privacy = Tu dirección de correo electrónico no será almacenado.
scan-submit = Buscá tu dirección de correo electrónico
scan-another-email = Escanear otra dirección de correo electrónico
scan-featuredbreach-label = Averigüá si tu cuenta <span class="bold"> { $featuredBreach } </span> fue comprometida.
sensitive-breach-email-required = La violación de datos contiene información privada. Se requiere correo electrónico de verificación.
scan-error = Debe ser una dirección de correo electrónico válida.
signup-banner-headline = { -product-name-nowrap } detecta amenazas contra tus cuentas en línea.
signup-banner-blurb = Tu informe detallado de { -product-name-nowrap } muestra si la información de tus cuentas en línea ha sido filtrada o robada. También te avisaremos si tus cuentas aparecen en nuevas violaciones de sitios web.
download-firefox-bar-blurb = { -product-name-nowrap } es presentado por el <span class="nowrap">nuevo { -brand-name }</span>.
download-firefox-bar-link = Descargar { -brand-name } ahora
download-firefox-banner-blurb = Tomá el control de tu navegador
download-firefox-banner-button = Descargar { -brand-name }
signup-modal-headline = Registrarse para { -product-name-nowrap }
signup-modal-blurb = Registrarse para obtener tu informe completo, alertas cuando ocurran nuevas violaciones y consejos de seguridad de { -product-name-nowrap }.
signup-modal-close = Cerrar
get-your-report = Conseguí tu informe
signup-modal-verify-headline = Verificá tu suscripción
signup-modal-verify-blurb = Enviamos un enlace de verificación a <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Este enlace caduca en 24 horas.
signup-modal-verify-resend = ¿No está en la bandeja de entrada o en el correo basura? Reenviar
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = ¡Enviado!
signup-with-fxa = Registrarse con la cuenta { -brand-name }
form-signup-placeholder = Ingresar dirección de correo electrónico
form-signup-checkbox = Obtené lo último de { -brand-Mozilla } y { -brand-name }.
sign-up = Registrarse
form-signup-error = Debe ser una dirección de correo electrónico válida
no-breaches-headline = Por ahora va todo bien.
found-breaches-headline = Tu información fue parte de una violación de datos.
no-breaches = Tu dirección de correo electrónico no apareció en nuestro escaneo básico. Es una buena noticia, pero las violaciones de datos pueden ocurrir en cualquier momento y todavía hay más que podés hacer. Suscribite a { -product-name-nowrap } para obtener un informe completo, alertas cuando ocurran nuevas violaciones y consejos para proteger tus contraseñas.
featured-breach-results =
    { $breachCount ->
        [0] Tu cuenta aparece en la violación <span class="bold"> { $featuredBreach } </span>, pero no aparece en ninguna otra violación de datos conocida.
        [one] Tu cuenta apareció en la violación de <span class="bold"> { $featuredBreach } </span> así como en otra violación.
       *[other] Tu cuenta apareció en la violación de <span class="bold"> { $featuredBreach } </span>, así como en otras { $breachCount } violaciones.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta no apareció en la violación <span class="bold"> { $featuredBreach } </span>, pero sí apareció en otra violación.
       *[other] Tu cuenta no apareció en la violación  <span class="bold"> { $featuredBreach } </span>, pero sí apareció en { $breachCount } otras violaciones.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta apareció en { $breachCount } violación.
       *[other] Cuentas asociadas con tu dirección de correo electrónico aparecieron en las siguientes { $breachCount } violaciones.
    }
show-more-breaches = Mostrar más
what-to-do-headline = Qué hacer cuando tu información se expone en una violación de datos
what-to-do-subhead-1 = Cambiá tus contraseñas, incluso para cuentas antiguas
what-to-do-blurb-1 = Si no podés iniciar la sesión, comunicate con el sitio web para preguntar cómo podés recuperar o cerrar la cuenta. ¿Ves una cuenta que no reconocés? Es posible que el sitio haya cambiado de nombre o que alguien haya creado una cuenta para vos.
what-to-do-subhead-2 = Si reutilizás una contraseña expuesta, cambiala.
what-to-do-blurb-2 = Los piratas pueden intentar reutilizar tu contraseña expuesta para ingresar a otras cuentas. Creá una contraseña diferente para cada sitio web, especialmente para tu cuenta bancaria, tu correo electrónico y otros sitios web en los que guardás información personal.
what-to-do-subhead-3 = Tomá medidas adicionales para asegurar sus cuentas financieras
what-to-do-blurb-3 = La mayoría de las violaciones solo exponen correos electrónicos y contraseñas, pero algunas sí incluyen información financiera confidencial. Si tu cuenta bancaria o los números de tu tarjeta de crédito se incluyeron en una violación, avisá a tu banco de posibles fraudes y supervisá los estados de cuenta de los cargos que no reconozcas.
what-to-do-subhead-4 = Conseguí ayuda para crear buenas contraseñas y mantenerlas seguras.
what-to-do-blurb-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas seguras, las almacenan de forma segura y las llenan en sitios web.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Fecha de violación:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
confirmed = ¡Confirmado! <br /> ¡Estás suscrito!
confirmed-blurb = { -product-name-nowrap } te enviará un informe completo por correo electrónico en breve, y te enviará una alerta por correo electrónico si tu cuenta aparece en una nueva violación informada.
confirmed-social-blurb = Si tuviste un problema de seguridad, es probable que tus amigos, familiares o conexiones en línea también lo hayan tenido. Comentales acerca de { -product-name-nowrap }.
unsub-headline = Cancelar la suscripción de { -product-name-nowrap }
unsub-blurb = Esto eliminará tu dirección de correo electrónico de la lista { -product-name-nowrap } y ya no recibirás alertas cuando se anuncien nuevas violaciones.
unsub-button = Cancelar suscripción
fxa-unsub-headline = Cancelar las alertas de { -product-name }.
fxa-unsub-blurb = Ya no recibirás las alertas de { -product-name }. Tu { -brand-fxa } permanecerá activa, y podrías recibir otras comunicaciones relacionadas con la cuenta.
unsub-survey-form-label = ¿Por qué cancelás la suscripción de las alertas de { -product-name-nowrap }?
unsub-reason-1 = Creo que las alertas no hacen que mis datos estén más seguros.
unsub-reason-2 = Recibo demasiados correos electrónicos de { -product-name-nowrap }
unsub-reason-3 = No me parece valioso el servicio
unsub-reason-4 = Ya tomé medidas para proteger mis cuentas.
unsub-reason-5 = Estoy usando otro servicio para monitorear mis cuentas
unsub-reason-6 = Ninguna de las mencionadas
unsub-survey-thankyou = Gracias por tu opinión.
unsub-survey-error = Por favor seleccioná uno.
unsub-survey-headline-v2 = Cancelaste tu suscripción.
unsub-survey-blurb-v2 =
    Ya no recibirás las alertas de { -product-name }.
    ¿Podrías tomarte un momento para responder una pregunta sobre tu experiencia?
unsub-survey-button = Enviar la Respuesta
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Compartir
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tuitear
download-firefox-quantum = Descargar { -brand-Quantum }
download-firefox-mobile = Descargar { -brand-name } Mobile
# Features here refers to Firefox browser features. 
features = Características
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Datos de violación proporcionados por { $hibp-link }
site-description = ¿Tus cuentas fueron filtradas o robadas en una violación de datos? Descubrilo en { -product-name }. Buscá en nuestra base de datos y registrate para recibir alertas.
confirmation-headline = Tu informe de { -product-name } está en camino.
confirmation-blurb = Las violaciones de datos pueden afectar a cualquiera. Hacé correr la voz para que tus amigos y familiares puedan verificar si sus cuentas en línea están seguras.
share-email = Correo electrónico
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Otros
share-twitter = La mayoría de las personas tienen alrededor de 100 cuentas en línea. ¿Alguno de los tuyos tuvo   una violación de datos? Descubrilo
share-facebook-headline = Averiguá si fusite parte de una violación de datos.
share-facebook-blurb = ¿Tus cuentas en línea fueron expuestas en una violación de datos?
og-site-description = Averiguá si fuiste parte de una violación de datos con { -product-name }. Registrate para recibir alertas sobre futuras infracciones y obtené consejos para mantener tus cuentas seguras.
mozilla-security-blog = Blog de seguridad de { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Mostrar todo
fxa-landing-blurb =
    Descubrí lo que los piratas ya saben acerca tuyo,
    y aprendé cómo estar un paso adelante de ellos.
fxa-scan-label = Fijate si apareciste en una violación de datos.
fxa-welcome-headline = Bienvenido a { -product-name }.
fxa-welcome-blurb = Estás listo para recibir alertas si aparece { $userEmail } en una violación de datos.
fxa-scan-another-email = ¿Querés consultar por otro correo electrónico?
# Search Firefox Monitor
fxa-scan-submit = Buscar { -product-name }
sign-up-to-check = Registrate para Verificar
sign-in = Iniciar la sesión
sign-out = Cerrar la sesión
full-report-headline = Su informe de { -product-name }
see-full-report = Ver informe completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Administrar { -brand-fxa }
fxa-download-firefox-bar-blurb = Brindado por { -brand-name }. 2 veces más rápido. Utiliza un 30% menos de memoria que { -brand-Chrome }.
fxa-download-firefox-bar-link = Descargar ahora
fxa-download-firefox-banner-blurb = Una mejor y más rápida carga de páginas que usa menos memoria de la computadora.
user-fb-compromised-headline = { $userEmail } apareció en la violación de datos de { $breachName }
guest-fb-compromised-headline = Este correo electrónico apareció en la violación de datos de { $breachName }.
user-zero-breaches-headline = { $userEmail } no apareció en ninguna violación de datos.
guest-zero-breaches-headline = Este correo electrónico no apareció en ninguna violación de datos.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } apareció en { $breachCount } violación { $userEmail } de datos.
       *[other] { $userEmail } apareció en { $breachCount } violaciones de datos.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Este correo electrónico apareció en una violación de datos.
       *[other] Este correo electrónico apareció en { $breachCount } violaciones de datos.
    }
user-no-breaches-blurb = Te avisaremos si esta dirección de correo electrónico aparece en una nueva violación.
guest-no-breaches-blurb =
    Para ver si este correo electrónico aparece en violaciones confidenciales, creá una { -brand-fxa }.
    También te avisaremos si esta dirección aparece en nuevas violaciones de datos.
user-one-breach-blurb = Esta violación expone la siguiente información personal.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Tu correo electrónico también apareció en { $breachCount } violación.
       *[other] Tu correo electrónico también apareció en { $breachCount } otras violaciones.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Este correo electrónico también apareció en { $breachCount } otra violación.
       *[other] Este correo electrónico también apareció en { $breachCount } otras violaciones.
    }
user-fb-compromised-single = Esta violación expuso la siguiente información personal. Si todavía no cambiaste las contraseñas, hacelo ya.
user-generic-fb-compromised-single = Esta violación expuso la siguiente información personal.
guest-fb-compromised-single-v2 =
    Esta violacación expuso la siguiente información personal.
    Creá una { -brand-fxa } gratuita para recibir un informe completo de violaciones anteriores, alertas sobre nuevas violaciones e información acerca de otros servicios de { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Este correo electrónico apareció también en { $breachCount } otra violación. Creá una { -brand-fxa } gratuita para recibir un informe completo de violaciones anteriores, alertas sobre nuevas violaciones e información acerca de otros servicios de { -brand-Mozilla }.
       *[other] Este correo electrónico apareció también en { $breachCount } otras violaciones. Creá una { -brand-fxa } gratuita para recibir un informe completo de violaciones anteriores, alertas sobre nuevas violaciones e información acerca de otros servicios de { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] No estabas en la violación { $breachName }, pero encontramos esa dirección de correo electrónico en otra.
       *[other] No estabas en la violación { $breachName }, pero encontramos esa dirección de correo electrónico en otras.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Este correo electrónico no estaba en la violación { $breachName }, pero se encontró en otra.
       *[other] Este correo electrónico no estaba en la violación { $breachName }, pero se encontró en otras.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] Este correo no estaba en la violación { $breachName }, pero se encontró en otra. Creá una { -brand-fxa } gratuita para recibir un informe completo de violaciones anteriores, alertas sobre nuevas  violaciones e información acerca de otros servicios de { -brand-Mozilla }.
       *[other] Este correo no estaba en la violación { $breachName }, pero se encontró en otras. Creá una { -brand-fxa } gratuita para recibir un informe completo de violaciones anteriores, alertas sobre nuevas  violaciones e información acerca de otros servicios de { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Esta violación expuso la siguiente información personal. Te recomendamos cambiar la contraseña.
       *[other] Estas violaciones expusieron  la siguiente información personal. Te recomendamos cambiar las contraseñas.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Esta violación expuso la siguiente información personal.
       *[other] Estas violaciones expusieron la siguiente información personal.
    }
have-an-account = ¿Ya tenés una cuenta?
signup-banner-sensitive-blurb =
    Descubrí lo que los piratas informáticos ya saben acerca tuyo y aprendé cómo
    estar un paso por delante de ellos. Recibí alertas si aparece tu cuenta
    en las nuevas violaciones de datos.
fxa-pwt-section-blurb =
    Las contraseñas protegen toda la información personal en tus cuentas en línea. Y
    los piratas informáticos confían en los malos hábitos, como usar la misma contraseña en todas partes o usar frases comunes (@ p @ ssw0rd, ¿alguien?) para que si piratean una cuenta,
    puedan piratear muchas.
fxa-pwt-summary-2 =
    Las contraseñas cortas de una sola palabra son fáciles de adivinar por parte de los piratas informáticos.
    Usá al menos dos palabras y una combinación de letras, dígitos y caracteres especiales.
fxa-pwt-summary-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tus  contraseñas y te las ingresan en los sitios web. Incluso te ayudarán a crear contraseñas seguras.
fxa-pwt-summary-6 = Las violaciones de datos van en aumento. Si tu información personal aparece en una nueva violación de datos, { -product-name } te envía una alerta para que puedas tomar medidas y proteger tus cuentas.
fxa-what-to-do-blurb-1 =
    Si no podés iniciar la sesión, contactate con el sitio web para preguntar cómo actualizarlo.
    ¿Ves una cuenta que no reconocés? Tus datos podrían haberse vendido.
    O redistribuido. Esta también podría ser una cuenta que te olvidaste de haber creado o una empresa que cambió de nombre.
fxa-what-to-do-subhead-2 = Dejá de usar la contraseña expuesta y cambiala en todos los lugares en los que la usaste.
fxa-wtd-blurb-2 = Los piratas informáticos pueden intentar reutilizar tu contraseña expuesta para ingresar a otras cuentas. Creá una contraseña diferente y única para cada sitio web, especialmente para tu cuenta bancaria, tu correo electrónico y otros sitios web en los que guardás información personal.
fxa-what-to-do-blurb-3 = La mayoría de las violaciones solo exponen correos electrónicos y contraseñas, pero algunas incluyen información financiera confidencial. Si tu cuenta bancaria o los números de tu tarjeta de crédito se incluyeron en una violación, avisá a tu banco de posibles fraudes y supervisá los estados de cuenta de los cargos que no reconozcas.
fxa-what-to-do-subhead-4 = Obtené ayuda para recordar todas sus contraseñas y mantenerlas seguras.
fxa-what-to-do-blurb-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tu contraseñas de forma segura y te la ingresan en los sitios web. Usa un administrador de contraseñas en tu teléfono y computadora para que no tengas que recordarlas todas.
fb-landing-headline = ¿Tu información fue expuesta en la violación de datos de { $breachName }?
copyright = Partes de este contenido son © 1999- { $year } por los contribuyentes individuales de mozilla.org.
content-available = Contenido disponible bajo licencia de Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Registrate para recibir alertas
sign-up-for-fxa-alerts = Registrate para recibir alertas de { -product-name }.
create-free-account = Creá una { -brand-fxa } gratuita para tu informe completo de violaciones pasadas, nuevas violaciones y alertas e información sobre otros servicios de { -brand-Mozilla }.
get-your-report-and-sign-up = Conseguí tu informe y registrate para recibir alertas.
# Link title
frequently-asked-questions = Preguntas frecuentes
about-firefox-monitor = Acerca de { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Preferencias
# Link title.
home = Inicio
# Link title
breaches = Violaciones
# Link title
security-tips = Consejos de seguridad
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Abrir la navegación de { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMA VIOLACIÓN AGREGADA
breach-added = Violación informada:
breach-discovered = Violación descubierta:
# Link title
more-about-this-breach = Más acerca de esta violación
take-control = Recuperá el control de tu información personal.
cant-stop-hackers = No podés evitar que te pirateen los piratas, pero sí podés evitar la malas prácticas que les facilitan el trabajo.
read-more-tips = Leer consejos de seguridad
how-hackers-work = Entender cómo trabajan los piratas
monitor-your-online-accounts = Registrate para el control de violaciones con { -brand-fxa }.
stay-alert = Mantenete alerta a las nuevas violaciones
if-your-info = Si tu información aparece en una nueva violación de datos, te enviaremos una alerta.
search-all-emails = Averiguá si tus direcciones de correo aparecieron en violaciones y recibí alertas sobre nuevas amenazas.
monitor-several-emails = Controlá varias direcciones de correo
take-action = Actuá para proteger tus cuentas.
keep-your-data-safe = Averiguá qué tenés que hacer para mantener tus datos a salvo de los delincuentes cibernéticos.
website-breach = Violación del sitio web
sensitive-breach = Violación delicada del sitio web
data-aggregator-breach = Violación del agregador de datos
unverified-breach = Violación no verificada
spam-list-breach = Violación del listado de correo no deseado
website-breach-plural = Violaciones de sitios web
sensitive-breach-plural = Violaciones delicadas
data-aggregator-breach-plural = Violaciones de agregadores de datos
unverified-breach-plural = Violaciones no verificadas
spam-list-breach-plural = Violaciones del listado de correos no deseados
what-data = Qué datos fueron comprometidos:
sensitive-sites = ¿Cómo trata { -product-name } a los sitios sensibles?
sensitive-sites-copy =
    { -product-name } solo revela las cuentas asociadas con estos
    tipos de violaciones después de que se verificó una dirección de correo electrónico. Esto significa que sos el único que puede ver si tu información estaba en esta violación (a menos que alguien más tenga acceso a tu cuenta de correo electrónico).
about-fxm-headline = Acerca de { -product-name }
# How Firefox Monitor works
how-fxm-works = Cómo funcionar { -product-name }
how-fxm-3-headline = Obtener notificaciones en el navegador

## What to do after data breach tips


## Updated error messages

