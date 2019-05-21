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
layout-support = Soporte
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Acerca de las alertas de Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Enviar comentario
terms-and-privacy = Términos y Privacidad
error-scan-page-token = Intentaste escanear demasiadas direcciones de correo electrónico en un corto periodo de tiempo. Por cuestiones de seguridad, hemos bloqueado tus búsquedas temporalmente. Puedes intentarlo de nuevo más tarde.
error-could-not-add-email = No se pudo agregar la dirección de correo electrónico a la base de datos.
error-not-subscribed = Esta dirección de correo electrónico no está suscrita a { -product-name }.
error-hibp-throttled = Demasiadas conexiones para { -brand-HIBP }.
error-hibp-connect = Error conectándose a { -brand-HIBP }.
error-hibp-load-breaches = No se pudieron cargar las infracciones.
hibp-notify-email-subject = { -product-name } Alerta: Tu cuenta estuvo involucrada en una infracción.
home-title = { -product-name }
home-not-found = Página no encontrada.
oauth-invalid-session = Sesión inválida
oauth-confirmed-title = { -product-name } : Suscrito
scan-title = { -product-name } : Resultados del escaneo
user-add-invalid-email = Correo electrónico inválido
user-add-email-verify-subject = Verifica tu suscripción a { -product-name }.
user-add-title = { -product-name } : Confirmar correo electrónico
error-headline = Error
user-verify-token-error = Se requiere el token de verificación.
user-verify-email-report-subject = Tu reporte de { -product-name }
user-verify-title = { -product-name } : Suscrito
user-unsubscribe-token-error = Eliminar suscripción quiere un token.
user-unsubscribe-token-email-error = Eliminar suscripción requiere un token y con correo electrónico.
user-unsubscribe-title = { -product-name } : Eliminar suscripción
user-unsubscribe-survey-title = { -product-name } : Eliminar suscripción a encuesta
user-unsubscribed-title = { -product-name } : Suscripción eliminada

## Password Tips

pwt-section-headline = Contraseñas más seguras = Mejor protección
pwt-section-subhead = Tu información privada está tan segura como tus contraseñas.
pwt-section-blurb =
    Tus contraseñas protegen más que tus cuentas. Protegen cada parte de tu información personal que contienen.
    Los hackers confían los malos hábitos de la gente, como usar la misma contraseña para todo o usar frases comunes (p@ssw0rd, anyone?) así que
    ellos tratan de dañar una cuenta, pueden dañar muchas.  Aquí mostramos como proteger mejor tus cuentas.
pwt-headline-1 = Usa una contraseña diferente para cada cuenta
pwt-summary-1 =
    Volver a usar la misma contraseña en todos lados deja la puerta abierta para el robo de información.
    Cualquiera con esa contraseña puede acceder a todas tus cuentas.
pwt-headline-2 = Crea una contraseña fuerte y difícil de adivinar
pwt-summary-2 =
    Los hackers usan miles de contraseñas comunes para tratar de adivinar la tuya.
    Mientras más larga y más aleatoria es tu contraseña, es más difícil que la adivinen.
pwt-headline-3 = Trata las preguntas de seguridad como contraseñas adicionales
pwt-summary-3 =
    Los sitios web no revisan que tus contraseñas sean correctas, solamente que concuerden.
    Crea contraseñas largas y aleatorias y almacénalas en algún lugar seguro.
pwt-headline-4 = Obtener ayuda recordando tus contraseñas
pwt-summary-4 =
    Administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas fuertes y únicas.
    También almacenan las contraseñas de forma segura y las completan en los sitios web.
pwt-headline-5 = Agregar seguridad extra con autenticación de dos factores
pwt-summary-5 =
    2FA requiere una pizca de información adicional (como un código de una sola vez enviado por mensaje de texto) para iniciar sesión en tu cuenta.
    Incluso si alguien tiene tu contraseña, no podrá acceder.
pwt-headline-6 = Regístrate para recibir alertas de { -product-name-nowrap }
pwt-summary-6 = Las violaciones de datos de sitios web están en aumento. Tan pronto como se agrega una nueva violación a nuestra base de datos, { -product-name-nowrap } te envía una alerta para que puedas tomar medidas y proteger tu cuenta.
landing-headline = Tu derecho a estar segura/o de los hackers inicia aquí.
landing-blurb = { -product-name-nowrap } te brinda herramientas para mantener segura tu información personal. Descubre lo que los hackers ya saben de ti y aprende cómo mantenerte un paso adelante de ellos.
scan-label = Ver si estás involucrado en pérdida de información.
scan-placeholder = Ingresar dirección de correo electrónico
scan-privacy = Tu correo electrónico no ha sido almacenado.
scan-submit = Buscar tu correo electrónico
scan-another-email = Escanear otra dirección de correo electrónico
scan-featuredbreach-label = Buscar si tu <span class="bold">{ $featuredBreach }</span> cuenta ha sido comprometida.
sensitive-breach-email-required = La violación contiene información sensible. Se requiere verificación por correo electrónico.
scan-error = Debe ser un correo electrónico válido.
signup-banner-headline = { -product-name-nowrap } detecta amenazas contra tu cuentas en línea.
signup-banner-blurb =
    Tus reportes detallados { -product-name-nowrap } muestran si la información de tus cuentas en línea han sido filtrada o robada.
    También te avisaremos si tus cuentas aparecen en nuevas infracciones del sitio web.
download-firefox-bar-blurb = { -product-name-nowrap } es traído a ti por <span class="nowrap">totalmente nuevo { -brand-name }</span>.
download-firefox-bar-link = Descargar { -brand-name } ahora
download-firefox-banner-blurb = Toma el control de tu navegador
download-firefox-banner-button = Descargar { -brand-name }
signup-modal-headline = Regístrate para { -product-name-nowrap }
signup-modal-blurb = Registrarse para obtener tu reporte completo, alertas cuando ocurran nuevas violaciones y consejos de seguridad de { -product-name-nowrap }.
signup-modal-close = Cerrar
get-your-report = Obtener tu reporte
signup-modal-verify-headline = Verificar tu suscripción
signup-modal-verify-blurb = Hemos enviado un enlace de verificación a <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Este enlace caduca en 24 horas.
signup-modal-verify-resend = ¿No se encuentra en tu bandeja de entrada o carpeta de correo no deseado? Reenviar.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = ¡Enviado!
signup-with-fxa = Regístrate con tu cuenta de { -brand-name }
form-signup-placeholder = Ingresar dirección de correo electrónico
form-signup-checkbox = Obtén las últimas noticias de { -brand-Mozilla } y { -brand-name }.
sign-up = Registrarse
form-signup-error = Debe ser un correo electrónico válido
no-breaches-headline = Hasta ahora, todo bien.
found-breaches-headline = Tu información fue parte de una filtración de datos.
no-breaches =
    Tu dirección de correo electrónico no aparece en nuestro escaneo básico.
    Esas son buenas noticias, pero las filtraciones de datosa pueden ocurrir en cualquier momento y todavía hay más que puedes hacer.
    Suscríbete a { -product-name-nowrap } para un reporte completo y alertas cuando ocurran nuevas filtraciones y consejos para proteger tus contraseñas.
featured-breach-results =
    { $breachCount ->
        [0] Tu cuenta aparece en la filtración de <span class="bold">{ $featuredBreach }</span>, sin embargo no aparece en otras filtraciones de datos conocidas.
        [one] Tu cuenta aparece en la filtración de <span class="bold">{ $featuredBreach }</span>, así como en otra filtración.
       *[other] Tu cuenta aparece en la filtración de <span class="bold">{ $featuredBreach }</span>, así como en otras { $breachCount } filtraciones.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta no apareció en la filtración de <span class="bold">{ $featuredBreach }</span>, pero apareció en alguna otra filtración.
       *[other] Tu cuenta no apareció en la filtración de <span class="bold">{ $featuredBreach }</span>, pero apareció en otras { $breachCount } filtraciones.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta apareció en la filtración { $breachCount }.
       *[other] Cuentas asociadas con tu dirección de correo electrónico aparecieron en las siguientes filtraciones { $breachCount }.
    }
show-more-breaches = Mostrar más
what-to-do-headline = Qué hacer cuando tu información está expuesta en una filtración de datos
what-to-do-subhead-1 = Cambiar tus contraseñas, incluso para cuentas antiguas
what-to-do-blurb-1 =
    Si no puedes iniciar sesión, contacta al sitio web para preguntar como puedes recuperar o dar de baja tu cuenta.
    ¿Ves un cuenta que no reconoces? El sitio puede haber cambiado los nombres o alguien pudo haber creado una cuenta para ti.
what-to-do-subhead-2 = Si puedes usa de nuevo una contraseña descubierta, cambiala
what-to-do-blurb-2 =
    Los hackers pueden intentar usar de nuevo tu contraseña descubierta para ingresar en otras contraseñas.
    Crea una contraseña diferente para cada sitio web, especialmente para tu cuenta del banco, correos y otros sitios web que puedan tener tu información personal.
what-to-do-subhead-3 = Algunos pasos extra son importantes para tus cuentas financieras
what-to-do-blurb-3 = La mayoría de las filtraciones solamente exponen correos electrónicos y contraseñas, pero algunas muestran información financiera. Si los números de tu cuenta de banco o tarjeta de crédito fueron incluidos en la filtración, informa a tu banco de un posible fraude y monitorea cualquier cargo que no reconozcas.
what-to-do-subhead-4 = Obtén ayuda creando buenas contraseñas y mantenerlas seguras.
what-to-do-blurb-4 = Administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden, generan contraseñas fuertes, las almacenan y las usan en tus sitios web.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Fecha de violación:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
confirmed = ¡Confirmado!<br />¡Estás suscrito!
confirmed-blurb = { -product-name-nowrap } te enviará un correo electrónico con un reporte completo en un momento y te enviará una alerta de correo electrónico si tu cuenta aparece en un nuevo reporte de filtración.
confirmed-social-blurb = Si tus datos fueron filtrados es que probable de que los datos de tus amigos, familia y otras conexiones se hayan filtrado también. Informales acerca de { -product-name-nowrap }.
unsub-headline = Eliminar suscripción de { -product-name-nowrap }
unsub-blurb = Esto eliminará tu correo de la lista de { -product-name-nowrap } y no recibirás alertas cuando se anuncie alguna filtración.
unsub-button = Cancelar suscripción
fxa-unsub-headline = Eliminar suscripción a las alertas de { -product-name }.
fxa-unsub-blurb = Ya no recibirás alertas de { -product-name }. Tu { -brand-fxa } permanecerá activa, y puede que recibas otras comunicaciones relacionadas con la cuenta.
unsub-survey-form-label = ¿Por qué estás eliminando tu suscripción de las alertas de { -product-name-nowrap }?
unsub-reason-1 = Creo que las alertas no hacen que mis datos estén más seguros.
unsub-reason-2 = Recibo demasiados correos electrónicos de { -product-name-nowrap }
unsub-reason-3 = No me parece valioso el servicio
unsub-reason-4 = Ya he tomado las medidas para proteger mis cuentas
unsub-reason-5 = Estoy usando otro servicio para monitorear mis cuentas
unsub-reason-6 = Ninguna de las mencionadas
unsub-survey-thankyou = Gracias por tus comentarios.
unsub-survey-error = Por favor, selecciona uno.
unsub-survey-headline-v2 = Has cancelado tu suscripción.
unsub-survey-blurb-v2 =
    Ya no recibirás las alertas de { -product-name }.
    ¿Podrías tomar un momento para responder a una pregunta sobre tu experiencia?
unsub-survey-button = Enviar respuesta
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Compartir
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tuitear
download-firefox-quantum = Descargar { -brand-Quantum }
download-firefox-mobile = Descargar { -brand-name } móvil
# Features here refers to Firefox browser features. 
features = Características
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Filtración de datos proporcionada por { $hibp-link }
site-description = ¿Tus cuentas han sido filtradas o robadas en alguna filtración de datos? Descúbrelo en { -product-name }.  Busca en nuestra de base de datos y regístrate para las alertas.
confirmation-headline = Tu informe de { -product-name } está en camino.
confirmation-blurb = La filtración de datos puede afectar a cualquiera. Coméntalo con tus amigos y familia para que puedan revisar si sus cuentas en línea están seguras.
share-email = Correo electrónico
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Otros
share-twitter = La mayoría de las personas tienen alrededor de 100 cuentas en línea. ¿Alguno de los tuyos fue expuesta a una violación de datos? Averigua.
share-facebook-headline = Averigua si fuiste parte de una violación de datos
share-facebook-blurb = ¿Tus cuentas en línea fueron expuestas a una violación de datos?
og-site-description = Encuentra si has sido parte de una filtración de datos con { -product-name }. Regístrate para recibir alertas de futuras filtraciones y obtén consejos para mantener tus cuentas seguras.
mozilla-security-blog = Blog de seguridad de { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Mostrar todo
fxa-landing-blurb =
    Descubre lo que los piratas ya saben acerca de ti,
    y aprende cómo estar un paso adelante de ellos.
fxa-scan-label = Mira si apareces una violación de datos.
fxa-welcome-headline = Bienvenido a { -product-name }.
fxa-welcome-blurb = Estás listo para recibir alertas si aparece { $userEmail } en una violación de datos.
fxa-scan-another-email = ¿Quieres revisar otro correo electrónico?
# Search Firefox Monitor
fxa-scan-submit = Buscar { -product-name }
sign-up-to-check = Regístrate para verificar
sign-in = Inicia sesión
sign-out = Salir de la sesión
full-report-headline = Tu reporte de{ -product-name }
see-full-report = Ver reporte completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Administrar { -brand-fxa }
fxa-download-firefox-bar-blurb = Brindado por { -brand-name }. 2 veces más rápido. Usa 30% menos de memoria que { -brand-Chrome }.
fxa-download-firefox-bar-link = Descargar ahora
fxa-download-firefox-banner-blurb = Una mejor y más rápida carga de páginas que usa menos memoria de la computadora.
user-fb-compromised-headline = { $userEmail } apareció en la violación de datos de { $breachName }.
guest-fb-compromised-headline = Este correo electrónico apareció en la violación de datos de { $breachName }.
user-zero-breaches-headline = { $userEmail } apareció en cero violaciones de datos.
guest-zero-breaches-headline = Este correo electrónico apareció en cero violaciones de datos.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } apareció en 1 violación de datos.
       *[other] { $userEmail } apareció en { $breachCount } violaciones de datos.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Este correo electrónico apareció en 1 violación de datos.
       *[other] Este correo electrónico apareció en { $breachCount } filtraciones de datos.
    }
user-no-breaches-blurb = Te informaremos si esta dirección de correo electrónico aparece en una nueva violación de datos.
guest-no-breaches-blurb =
    Para ver si este correo electrónico aparece en violaciones confidenciales, crea una { -brand-fxa }.
    También te avisaremos si esta dirección aparece en nuevas violaciones de datos.
user-one-breach-blurb = Esta violación de datos expone la siguiente información personal.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Tu correo electrónico apareció en { $breachCount } otras violaciones de datos.
       *[other] Tu correo electrónico apareció en { $breachCount } otras violaciones de datos.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Este correo electrónico apareció en { $breachCount } otras violaciones de datos.
       *[other] Este correo electrónico apareció en { $breachCount } otras violaciones de datos.
    }
user-fb-compromised-single = Esta filtración muestra la siguiente información personal. Si aún no has cambiado tus contraseñas, es un buen momento.
user-generic-fb-compromised-single = Esta filtración muestra la siguiente información personal.
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
        [one] Este correo no estaba en la filtración { $breachName }, pero fue encontrado en otra. Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
       *[other] Este correo no estaba en la filtración { $breachName }, pero fue encontrado en otras. Crea una { -brand-fxa } gratuita para recibir un informe completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Esta violación expuso la siguiente información personal. Si aún no has cambiado tus contraseñas, recomendamos que lo hagas.
       *[other] Estas violaciones expusieron la siguiente información personal. Si aún no has cambiado tus contraseñas, recomendamos que lo hagas.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-generic-found-breaches-blurb =
    { $breachCount ->
        [one] Esta violación de datos muestra la siguiente información personal.
       *[other] Estas violaciones de datos muestran la siguiente información personal.
    }
have-an-account = ¿Ya tienes una cuenta?
signup-banner-sensitive-blurb =
    Descubre lo que saben de ti los hackers y aprende cómo
    estar un paso por delante de ellos. Recibe alertas si aparece tu cuenta
    en nuevas filtraciones de datos.
fxa-pwt-section-blurb =
    Las contraseñas protegen toda la información personal en tus cuentas en línea. Y
    los hackers confían en los malos hábitos, como usar la misma contraseña en todas partes o usar frases comunes (como "contraseña"), para que si logran piratear una cuenta,
    pueden piratear muchas.
fxa-pwt-summary-2 =
    Contraseñas cortas y de una sola palabra son fáciles para que adivinen los hackers.
    Usa al menos dos palabras y una combinación de letras, números y caracteres especiales.
fxa-pwt-summary-4 = Administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacena tus contraseñas y úsalas en tus sitios web. Ellos ayudarán a crear contraseñas fuertes.
fxa-pwt-summary-6 = Las filtraciones de datos van en aumento. Si tu información personal aparece en una nueva filtración de datos, { -product-name } te envía una alerta para que puedas tomar medidas y proteger tus cuentas.
fxa-what-to-do-blurb-1 =
    Si no puedes iniciar sesión, ponte en contacto con el sitio web para preguntar cómo actualizarlo.
    ¿Ves una cuenta que no reconoces? Tus datos podrían haber sido vendidos
    o redistribuidos. Esta también podría ser una cuenta que olvidaste haber creado o una empresa que cambió de nombre.
fxa-what-to-do-subhead-2 = Deja de usar la contraseña expuesta, y cambiala en todos los lugares en los que la usaste.
fxa-wtd-blurb-2 = Los hackers pueden intentar reutilizar tu contraseña expuesta para acceder a otras cuentas. Crea una contraseña diferente y única para cada cuenta, especialmente para tu cuenta bancaria, tu correo electrónico y otros sitios web en los que guardas información personal.
fxa-what-to-do-blurb-3 = La mayoría de las violaciones solo exponen correos electrónicos y contraseñas, pero algunas incluyen información financiera confidencial. Si tu cuenta bancaria o los números de tu tarjeta de crédito se incluyeron en una violación, avísale a tu banco de posibles fraudes. Monitorea los estados de cuenta por cualquier cargo que no reconozcas.
fxa-what-to-do-subhead-4 = Obtén ayuda recordando todas tus contraseñas y manteniéndolas seguras.
fxa-what-to-do-blurb-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tus contraseñas de forma segura y te las ingresan en los sitios web. Usa un administrador de contraseñas en tu dispositivo y computadora para que no tengas que recordarlas todas.
fb-landing-headline = ¿Tu información fue expuesta en la violación de datos de { $breachName }?
copyright = Partes de este contenido son © 1999-{ $year } por colaboradores individuales de mozilla.org.
content-available = Contenido disponible bajo una licencia Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Registrarse para recibir alertas
sign-up-for-fxa-alerts = Registrarse para recibir alertas de { -product-name }.
create-free-account = Crea una { -brand-fxa } gratuita para tu informe completo de violaciones pasadas, nuevas violaciones y alertas e información sobre otros servicios de { -brand-Mozilla }.
get-your-report-and-sign-up = Obtén tu informe y regístrate para recibir alertas.
# Link title
frequently-asked-questions = Preguntas frecuentemente hechas
about-firefox-monitor = Acerca de { -product-name }
mozilla-dot-org = Mozilla.org
preferences = Preferencias
# Link title.
home = Inicio
# Link title
breaches = Infracciones
# Link title
security-tips = Consejos de seguridad
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Abrir la navegación de { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMO INCUMPLIMIENTO AGREGADO
breach-added = Violación de seguridad reportada:
breach-discovered = Violación de seguridad descubierta:
# Link title
more-about-this-breach = Más acerca de esta violación de seguridad
take-control = Toma el control de tu información.
cant-stop-hackers = No puedes detener a los hackers. Pero puedes evitar malos hábitos que hagan su trabajo más sencillo.
read-more-tips = Lee más sobre consejos de seguridad
how-hackers-work = Entender cómo los hackers trabajan
monitor-your-online-accounts = Regístrate para monitorear las violaciones de seguridad con { -brand-fxa }.
stay-alert = Mantente alerta para nuevas violaciones de seguridad
if-your-info = Si tu información aparece en una nueva violación de seguridad, te enviaremos una alerta.
search-all-emails = Busca violaciones de seguridad en todas tus direcciones de correo electrónico y recibe alertas sobre nuevas amenazas.
monitor-several-emails = Monitorea varios corres electrónicos
take-action = Actúa para proteger tus cuentas
keep-your-data-safe = Descubre lo que necesitas hacer para mantener tu información segura de los criminales cibrenéticos.
website-breach = Violación del sitio web

## What to do after data breach tips


## Updated error messages

