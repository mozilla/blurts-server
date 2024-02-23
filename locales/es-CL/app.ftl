# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Strings for the main app


## The following messages are brand and should be kept entirely in English
## unless otherwise indicated.

-product-name = Mozilla Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-product-short-name = Monitor
-brand-name = Firefox
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Cuenta de Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Red privada de Firefox

##

GitHub-link-title = GitHub
error-scan-page-token = Intentaste escanear demasiadas direcciones de correo en un periodo de tiempo muy corto. Por razones de seguridad, hemos bloqueado temporalmente nuevas búsquedas de tu parte. Podrás volver a intentarlo más tarde.
error-could-not-add-email = No se pudo añadir el correo a la base de datos
error-not-subscribed = Este correo no está suscrito a { -product-name }.
error-hibp-throttled = Demasiadas conexiones a { -brand-HIBP }.
error-hibp-connect = Error al conectarse con { -brand-HIBP }.
error-hibp-load-breaches = No se han podido cargar las filtraciones.
error-must-be-signed-in = Debes estar conectado a tu { -brand-fxa }.
error-to-finish-verifying = Para terminar de verificar este correo para { -product-name }, debes estar conectado al correo primario de tu cuenta.
home-title = { -product-name }
home-not-found = Página no encontrada.
oauth-invalid-session = Sesión inválida
scan-title = { -product-name } : Resultados del escaneo
user-add-invalid-email = Correo inválido
user-add-too-many-emails = Estás monitorizando el número máximo de correos posible.
user-add-email-verify-subject = Verifica tu suscripción a { -product-name }.
user-add-duplicate-email = Este correo ya ha sido añadido a { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Visita tus { $preferencesLink } para revisar el estado de { $userEmail }.
user-add-verification-email-just-sent = No se puede enviar otro correo electrónico de verificación tan pronto. Por favor, vuelve a intentarlo más tarde.
user-add-unknown-error = Algo falló al agregar otra dirección de correo electrónico. Por favor, vuelve a intentarlo más tarde.
user-delete-unknown-error = Algo falló al remover una dirección de correo electrónico. Por favor, vuelve a intentarlo más tarde.
error-headline = Error
user-verify-token-error = Toquen de verificación requerido.
user-verify-email-report-subject = Tu reporte de { -product-name }
user-unsubscribe-token-error = Cancelar la suscripción requiere de un token.
user-unsubscribe-token-email-error = Cancelar la suscripción requiere de un token y de un emailHash.
user-unsubscribe-title = { -product-name }: Cancelar suscripción
pwt-section-headline = Contraseñas más fuertes = Mejor protección
landing-headline = Tu derecho a estar a salvo de los hackers comienza aquí.
scan-placeholder = Ingresa tu dirección de correo
scan-submit = Busca tu correo electrónico
scan-error = Debe ser un correo electrónico válido.
download-firefox-banner-button = Bajar { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = ¡Enviado!
sign-up = Registrarse
form-signup-error = Debe ser una dirección de correo electrónico válida
# breach-date = the calendar date a particular data theft occurred.
breach-date = Fecha de la filtración de datos:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
unsub-headline = Cancelar la suscripción de { -product-name-nowrap }
unsub-blurb = Esto eliminará tu correo de la lista de { -product-name-nowrap } y ya no recibirás alertas cuando se anuncien nuevas filtraciones.
unsub-button = Cancelar suscripción
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Datos de la filtración proporcionados por { $hibp-link }
share-twitter = La mayoría de la gente tiene más de 100 cuentas en línea. ¿Ha sido alguna de las tuyas expuesta en una filtración de datos? Averígualo.
share-facebook-headline = Averigua si has sido parte de una filtración de datos
share-facebook-blurb = ¿Han sido tus cuentas en línea expuestas a una filtración de datos?
og-site-description = Averigua si has sido parte de una filtración de datos con { -product-name }. Registrate para recibir alertas de futuras filtraciones y consejos para mantener tus cuentas seguras.
show-all = Mostrar todo
fxa-scan-another-email = ¿Quieres revisar otro correo?
sign-out = Salir
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionar { -brand-fxa }
have-an-account = ¿Ya tienes una cuenta?
fxa-pwt-summary-2 =
    Las contraseñas cortas de una sola palabra son fáciles de adivinar para los hackers.
    Usa al menos dos palabras y una combinación de letras, dígitos y caracteres especiales.
fxa-pwt-summary-4 = Administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden guardan tus  contraseñas y te las ingresan en los sitios web. Incluso te ayudarán a crear contraseñas seguras.
fxa-pwt-summary-6 = Las filtraciones de datos van en aumento. Si tu información personal aparece en una nueva filtración de datos, { -product-name } te envía una alerta para que puedas tomar medidas y proteger tus cuentas.
fxa-what-to-do-blurb-1 =
    Si no puedes iniciar sesión, contáctate con el sitio web para preguntar cómo actualizarla.
    ¿Ves una cuenta que no reconoces? Tus datos podrían haber sido vendidos
    o redistribuidos. Esta también podría ser una cuenta que te olvidaste de haber creado o una empresa que cambió de nombre.
fxa-what-to-do-subhead-2 = Deja de usar la contraseña expuesta, y cambiala en todos los lugares en los que la usaste.
fxa-wtd-blurb-2 = Los hackers pueden intentar reutilizar tu contraseña expuesta para ingresar a otras cuentas. Crea una contraseña diferente y única para cada sitio web, especialmente para tu cuenta bancaria, tu correo electrónico y otros sitios web en los que guardas información personal.
fxa-what-to-do-blurb-3 = La mayoría de las filtraciones solo exponen correos electrónicos y contraseñas, pero algunas incluyen información financiera confidencial. Si tu cuenta bancaria o los números de tu tarjeta de crédito se incluyeron en una filtración, avisa a tu banco sobre posibles fraudes y revisa los estados de cuenta de los cargos que no reconozcas.
fxa-what-to-do-subhead-4 = Recibe ayuda para recordar todas tus contraseñas y mantenerlas seguras.
fxa-what-to-do-blurb-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tu contraseñas de forma segura y las colocan en los sitios web. Usa un administrador de contraseñas en tu teléfono y computador para que no tengas que recordarlas todas.
# Alerts is a noun
sign-up-for-alerts = Registrarse para recibir alertas
# Link title
frequently-asked-questions = Preguntas frecuentes
about-firefox-monitor = Acerca de { -product-name }
# Link title
preferences = Preferencias
# Link title
home = Inicio
# Link title
security-tips = Consejos de seguridad
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Abrir la navegación de { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMA FILTRACIÓN AGREGADA
# Link title
more-about-this-breach = Más acerca de esta filtración
take-control = Recupera el control de tu información personal.
cant-stop-hackers = No puedes detener a los hackers. Pero puedes evitar malos hábitos que hagan su trabajo más sencillo.
read-more-tips = Leer más consejos de seguridad
how-hackers-work = Descubre cómo trabajan los hackers
monitor-your-online-accounts = Regístrate para monitorear filtraciones con una { -brand-fxa }.
stay-alert = Mantente al día de las nuevas filtraciones
if-your-info = Si tu información aparece en una nueva filtración de datos, te enviaremos una alerta.
search-all-emails = Busca filtraciones para todas tus direcciones de correo y recibe alertas sobre nuevas amenazas.
monitor-several-emails = Monitorea varios correos
take-action = Actúa para proteger tus cuentas
keep-your-data-safe = Descubre que necesitas hacer para mantener tus datos seguros frente a cibercriminales.
website-breach = Filtración de sitio
sensitive-breach = Filtración de sitio sensible
data-aggregator-breach = Filtración de agregador de datos
unverified-breach = Filtración no verificada
spam-list-breach = Filtración de lista de spam
website-breach-plural = Filtraciones de sitios
sensitive-breach-plural = Filtraciones sensibles
data-aggregator-breach-plural = Filtraciones de agregadores de datos
unverified-breach-plural = Filtraciones no verificadas
spam-list-breach-plural = Filtraciones de listas de spam
what-data = Qué datos fueron comprometidos:
sensitive-sites = ¿Cómo trata { -product-name } los sitios sensibles?
sensitive-sites-copy =
    { -product-name } solo revela las cuentas asociadas con estos
    tipos de filtraciones una vez que se ha verificado la dirección de correo electrónico. Esto significa que eres la
    única persona que puede ver si tu información estuvo expuesta (a menos que alguien
    más también tenga acceso a tu cuenta de correo electrónico).
delayed-reporting-headline = ¿Por qué tardó tanto reportar esta filtración?
delayed-reporting-copy =
    A veces pueden pasar meses o años antes de que las credenciales que se expusieron
    en una filtración de datos aparezcan en la web oscura. Las filtraciones se añaden a nuestra base de datos en cuanto se descubren y verifican.
about-fxm-headline = Acerca de { -product-name }
about-fxm-blurb =
    { -product-name } te advierte si tus cuentas en línea estuvieron involucradas
     en un filtración de datos. Averigua si se han expuesto tus datos, recibe alertas sobre
     nuevas filtraciones y toma medidas para proteger tus cuentas en línea. { -brand-Mozilla } patrocina
    a { -product-name }.
fxm-warns-you = { -product-name } te advierte si tus cuentas en línea estuvieron involucradas en un filtración de datos. Verifica si tu información ha sido expuesta, aprende cómo proteger mejor tus cuentas en línea y recibe alertas si tu dirección de correo se encuentra nuevamente en riesgo.
# How Firefox Monitor works
how-fxm-works = Cómo funciona { -product-name }
how-fxm-1-headline = Realizar una búsqueda básica
how-fxm-1-blurb =
    Busca tu dirección de correo en las filtraciones de datos públicas desde 
    2007. Esta búsqueda básica mostrará la mayoría de las filtraciones de datos, pero no
    las que contienen información personal sensible.
how-fxm-2-headline = Regístrate para mantenerte informado sobre las filtraciones
how-fxm-2-blurb =
    Crea una { -brand-fxa } para monitorear las filtraciones de datos de tu correo.
    Cuando hayas comprobado tu dirección de correo, recibirás un informe completo de
    filtraciones pasadas, incluidas las de información más sensible.
how-fxm-3-headline = Recibir notificaciones en el navegador
how-fxm-3-blurb = Si usas { -brand-name }, recibirás una notificación si visitas un sitio que ha sido vulnerado. Averigua si formaste parte de esta vulnerabilidad y qué puedes hacer al respecto.
wtd-after-website = Qué hacer tras una filtración de una página web
wtd-after-data-agg = Qué hacer tras una filtración de recopilador de datos
what-is-data-agg = ¿Qué es un agregador de datos?
what-is-data-agg-blurb =
    Los recopiladores de datos recopilan información de fuentes públicas
    y la compran a otras empresas. Compilan la información para venderla a otras
    empresas con fines de marketing. Las víctimas de estas filtraciones tienen menos probabilidades de sufrir
    fraudes financieros, pero los hackers pueden usar esa información para hacerse pasar por ellas.
protect-your-privacy = Protege tu privacidad en línea
no-pw-to-change = A diferencia de una filtración de un sitio web, no hay contraseña que cambiar.
avoid-personal-info = Evita usar información personal en contraseñas
avoid-personal-info-blurb = Resulta fácil encontrar cumpleaños, direcciones y nombres de familiares en línea. Mantén estas palabras fuera de tus contraseñas.

## What to do after data breach tips

change-pw = Cambia tu contraseña
change-pw-site = Cambiar contraseña para este sitio
even-for-old = Incluso para cuentas antiguas, es importante actualizar tu contraseña.
make-new-pw-unique = Haz que la nueva contraseña sea diferente y única
strength-of-your-pw = La fuerza de tus contraseñas impacta directamente en tu seguridad en línea.
create-strong-passwords = Cómo crear contraseñas seguras
stop-reusing-pw = No uses siempre las mismas contraseñas
create-unique-pw = Crea contraseñas únicas y guárdalas en algún lugar seguro, como en un administrador de contraseñas.
five-myths = 5 mitos sobre los administradores de contraseñas
create-a-fxa = Crea una { -brand-fxa } para obtener un informe completo de filtraciones y recibir alertas.
feat-security-tips = Consejos de seguridad para proteger tus cuentas
feat-sensitive = Búsqueda avanzada de filtraciones sensibles
feat-enroll-multiple = Agrega varias direcciones de correo al control de filtraciones
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Aparece en { $breachCount } filtración conocida.
       *[other] Aparece en { $breachCount } filtraciones conocidas.
    }
check-for-breaches = Busca filtraciones
find-out-what-hackers-know = Averigua qué saben de ti los hackers. Descubre cómo ir siempre un paso por delante.
get-email-alerts = Mantente seguro: recibe alertas por correo cuando tu información aparezca en una filtración conocida
search-for-your-email = Busca tu dirección de correo en filtraciones de datos públicas yendo hasta 2007.
back-to-top = Volver arriba
comm-opt-0 = Envíame un correo electrónico si alguna de mis direcciones de correo electrónico de las que están a continuación aparece en una filtración de datos.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Enviar todas las alertas de filtraciones a { $primaryEmail }.
stop-monitoring-this = Dejar de monitorear este correo.
resend-verification = Reenviar correo de verificación
add-new-email = Agregar una nueva dirección de correo
send-verification = Enviar enlace de verificación
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Resumen de filtraciones
show-breaches-for-this-email = Mostrar todas las filtraciones para este correo.
link-change-primary = Cambiar dirección de correo primaria
remove-fxm = Eliminar { -product-name }
remove-fxm-blurb = Desactivar alertas de { -product-name }. Tu { -brand-fxa } permanecerá activa, y podrás seguir recibiendo otras comunicaciones relacionadas a la cuenta.
# Button title
manage-email-addresses = Gestionar direcciones de correo
# Link title
latest-breach-link = Revisa si estás en esta filtración

## Variables:
##   $userName (String) - Username

welcome-back = ¡Bienvenido nuevamente { $userName }!
welcome-user = ¡Bienvenido { $userName }!

##

breach-alert-subject = { -product-name } encontró tu correo en una nueva filtración de datos.
your-info-was-discovered-headline = Tu información fue descubierta en una nueva filtración de datos.
your-info-was-discovered-blurb =
    Te has suscrito para recibir alertas de { -product-name }
    cuando tu dirección de correo aparezca en una filtración de datos. Esto es lo que sabemos al respecto.
what-to-do-after-breach = Qué hacer después de una filtración de datos:
ba-next-step-1 = Cambia tu contraseña por una que sea segura y única.
ba-next-step-blurb-1 =
    Una contraseña segura usa una combinación de letras mayúsculas y minúsculas,
    caracteres especiales y números. No contiene información personal como
    dirección, cumpleaños o nombres de familiares.
ba-next-step-2 = Deja ya de usar la contraseña expuesta.
ba-next-step-blurb-2 =
    Los cibercriminales pueden encontrar tu contraseña en la dark web y usarla 
    para ingresar en tus otras cuentas. La mejor forma de proteger tus cuentas 
    es usar contraseñas únicas para cada una.
ba-next-step-3 = Obtén ayuda para crear mejores contraseñas y mantenerlas seguras.
ba-next-step-blurb-3 =
    Usa un administrador de contraseñas para crear contraseñas seguras y únicas. 
    Los administradores de contraseñas guardan de forma segura 
    todas tus credenciales para que puedas acceder a ellas en todos tus dispositivos.
faq1 = No reconozco esta empresa o sitio web. ¿Por qué aparezco en la filtración?
faq2 = ¿Por qué tomó tanto tiempo notificarme sobre esta filtración?
faq3 = ¿Cómo sé que este es un correo electrónico legítimo de { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NUEVA FILTRACIÓN ENCONTRADA
       *[other] { $breachCount } NUEVAS FILTRACIONES ENCONTRADAS
    }
sign-up-headline-1 = Recibe alertas con { -brand-fxa }.
account-not-required = No se necesita el navegador { -brand-name } para { -brand-fxa }. Puedes recibir información sobre los servicios de { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = ¿Se expuso tu información en la filtración de datos de { $breachName }?
fb-not-comp = Este correo electrónico no apareció en la filtración { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Sin embargo, apareció en { $breachCount } filtración.
       *[other] Sin embargo, apareció en { $breachCount } otras filtraciones.
    }
fb-comp-only = Este correo electrónico apareció en la filtración { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Este correo apareció en { $breachCount } filtración conocida, incluyendo { $breachName }.
       *[other] Este correo apareció en { $breachCount } filtraciones conocidas, incluyendo { $breachName }.
    }

##

no-other-breaches-found = No se encontraron otras filtraciones en la búsqueda básica.
no-results-blurb = Lo sentimos, esa filtración no está en nuestra base de datos.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>Tu correo electrónico no aparece en esta filtración,
    pero tu número de teléfono aún podría ser vulnerable.</span> Algunas de las cuentas
    comprometidas en la filtración de Facebook incluyen números de teléfonos y otra
    información personal pero no direcciones de correo electrónico. Si alguna vez te registraste
    para una cuenta de Facebook — incluso si ya no la usas — te recomendamos
    que sigas estos pasos para protegerte
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Establece tu información a "Solo yo" u otro ajuste no público en <a>tu perfil de Facebook</a>.</span>
facebook-breach-what-to-do-1-copy =
    Durante esta filtración, los hackers tomaron información
    de los perfiles que estaban “abiertos al público” o “compartidos con amigos”.
    Esta información puede ser combinada con otros datos para acceder a más
    información personal y cuentas.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline = <span>Cambiar la contraseña, PIN u otras credenciales de seguridad en tus <a>cuestas de operador móvil</a> para prevenir el SIM-swapping</span>.
facebook-breach-what-to-do-2-copy =
    SIM swapping, también conocido como intercambio de SIM o secuestro de SIM,
    es cuando un hacker usa números de teléfono, fecha de nacimiento y otros datos para adueñarse
    del número de teléfono de una persona y luego hackear sus cuentas de correo electrónico, de redes sociales e incluso financieras.
facebook-breach-what-to-do-3 = Revisa todas las recomendaciones en nuestra página de filtración de Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Mostrando:

## Updated error messages

error-bot-headline = Búsquedas temporalmente suspendidas
error-bot-blurb =
    Nos preocupa que seas un robot porque has buscado varias
    direcciones de correo en muy poco tiempo. Por ahora, hemos bloqueado
    las búsquedas. Vuelve a intentarlo más tarde.
error-csrf-headline = Sesión expirada
error-csrf-blurb = Selecciona el botón Atrás de tu navegador, recarga la página y vuelve a intentarlo.
error-invalid-unsub = Cómo cancelar la suscripción a las alertas de { -product-name }
error-invalid-unsub-blurb =
    Tendrás que cancelar la suscripción desde uno de los correos
    que te envió { -product-name }. Busca correos de { -brand-team-email }
    en tu bandeja de entrada. Al final del correo, selecciona el enlace para cancelar la suscripción.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Dirección de correo monitorizada
       *[other] Direcciones de correo monitorizadas
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
        [one] Filtración conocida ha expuesto tu información
       *[other] Filtraciones conocidas han expuesto tu información
    }
# Button
see-additional-breaches = Ver filtraciones adicionales
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Este correo apareció en 1 filtración de datos conocida.
       *[other] Este correo apareció en { $breachCount } filtraciones de datos conocidas.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Resultados para: { $userEmail }
other-monitored-emails = Otros correos monitorizados
email-verification-required = Verificación de correo requerida
fxa-primary-email = Correo de { -brand-fxa } - Primario
what-is-a-website-breach = ¿Qué es una filtración de sitio?
website-breach-blurb = Una filtración de datos de un sitio web sucede cuando los cibercriminales roban, copian o exponen información personal de cuentas en línea. Es usualmente el resultado de hackers buscando puntos débiles en la seguridad de los sitios. Las filtraciones también suceden cuando la información de las cuentas se filtra por accidente.
security-tips-headline = Consejos de seguridad para protegerte de los hackers
steps-to-protect = Pasos a seguir para proteger tu identidad en línea
take-further-steps = Toma medidas adicionales para proteger tu identidad
alert-about-new-breaches = Avisarme cuando haya nuevas filtraciones
see-if-youve-been-part = Comprueba si fuiste parte de una filtración de datos en línea.
get-ongoing-breach-monitoring = Obtén monitoreo de filtraciones para varias direcciones de correo.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Averiguar
new-unsub-error = Tendrás que cancelar la suscripción desde uno de los correos que te envió { -product-name }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Sin embargo, apareció en { $breachCount } filtración conocida.
       *[other] Sin embargo, apareció en { $breachCount } filtraciones conocidas.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Información adicional, incluyendo:
# Title
email-addresses-title = Direcciones de correo
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = General
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = El { $breachDate }, { $breachTitle } fue vulnerado. Una vez que la filtración fue descubierta y verificada, ésta fue añadida a nuestra base de datos el { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Preferencias de { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Conectado cómo: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrar por categoría:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menú
to-affected-email = Enviar alertas de filtraciones a los correos afectados
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Hay una forma de proteger tu privacidad. Únete a { -brand-name }.
# Link title
learn-more-link = Aprender más.
email-sent = ¡Correo enviado!
# Form title
want-to-add = ¿Quieres añadir otro correo?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifica el enlace enviado a { $userEmail } para añadirlo a { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = ¡Correo verificado exitosamente!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Te avisaremos si { $email } aparece en una filtración de datos.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Para ver y gestionar todos los correos que has registrado para que se realice una monitorización de filtraciones, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = conéctate

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Gestiona todas las direcciones de correo en { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Notificaciones de alerta de filtraciones
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Filtración añadida:
how-hackers-work-desc = Protege tus contraseñas de los cibercriminales, ya que es lo que más les importa.
what-to-do-after-breach-desc = Protege tus cuentas para mantener tu información lejos de las manos equivocadas.
create-strong-passwords-desc = Haz que tus contraseñas sean fuertes, seguras y difíciles de adivinar.
steps-to-protect-desc = Comprende las amenazas más comunes y aprende en qué fijarte.
five-myths-desc = Aprende cómo evitar malos hábitos relacionados con las contraseñas para no facilitarle la pega a los hackers.
take-further-steps-desc = Averigua cómo mitigar los riesgos de la suplantación de identidad para prevenir pérdidas financieras.
# This message appears after a user has successfully updated their communication settings.
changes-saved = ¡Cambios guardados!
# Section headline
rec-section-headline = Qué hacer con esta filtración
rec-section-subhead = Te recomendamos que sigas estos pasos para mantener segura tu información personal y proteger tu identidad digital.
# Section headline
rec-section-headline-no-pw = Qué hacer para proteger tu información personal
rec-section-subhead-no-pw = Aunque las contraseñas no estuvieron expuestas en esta violación, hay pasos que podés seguir para proteger mejor tu información personal.
# Button
see-additional-recs = Ver recomendaciones adicionales

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } apareció en esta filtración. <a>Qué hacer a continuación</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
       *[other] { $numAffectedEmails } de tus cuentas de correo aparecieron en esta filtración. <a>Qué hacer a continuación</a>
    }

##

marking-this-subhead = Marcando esta filtración como resuelta
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Una vez que hayas tomado los pasos necesarios para abordar esta filtración</span>,
    puedes marcarla como resuelta. Todavía puedes acceder a detalles sobre esta filtración
    desde tu tablero en cualquier momento.
mark-as-resolve-button = Marcar como resuelto
marked-as-resolved-label = Marcado como resuelto
undo-button = Deshacer
confirmation-1-subhead = ¡Estupendo! Acabas de resolver tu primera filtración.
confirmation-1-body = Mantente así. Revisa tu panel de control para ver si es que hay más por hacer.
confirmation-2-subhead = ¡Tomen eso, hackers!
confirmation-2-body = Estás tomando importantes medidas para proteger tus cuentas en línea.
confirmation-3-subhead = Otro menos. ¡Buen trabajo!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = ¿Es tu nueva contraseña única, fuerte y difícil de adivinar? <a>Averígualo</a>
generic-confirmation-subhead = Esta filtración ha sido marcada como resuelta
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Para ver la filtración pendiente, ve a tu panel de control.
       *[other] Para ver todas las filtraciones pendientes, ve a tu panel de control.
    }
return-to-breach-details-link = Regresar a los detalles de la filtración
go-to-dashboard-link = Ir al panel de control
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% completo
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } resuelta
       *[other] { $numResolvedBreaches } resueltas
    }
progress-intro-subhead = Nuevo en { -product-name }: marcar filtraciones como resueltas
progress-intro-message = Después de revisar los detalles acerca de una filtración y tomar los pasos para proteger tu información personal, puedes marcar las filtraciones como resueltas.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } de { $numTotalBreaches } filtración marcada como resuelta
       *[other] { $numResolvedBreaches } de  { $numTotalBreaches } filtraciones marcadas como resueltas
    }
progress-complete = Todas las filtraciones conocidas han sido marcadas como resuletas

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 = <span>¡Partiste súper bien!</span> Revisa el resto de las filtraciones para saber que medidas tomar.
progress-message-2 = <span>¡Sigue así!</span> Pequeños cambios como la actualización de contraseñas tienen un gran impacto en mantener segura tu información personal.
progress-message-3 = <span>¡Excelente trabajo resolviendo esas filtraciones!</span> Sigue así. Te quedan unos pocos más.
progress-message-4 = <span>¡Casi listo!</span> Estás muy cerca de la meta.
progress-complete-message =
    <span>Se siente bien, ¿verdad?</span> Si quieres continuar, este es un buen momento para
    actualizar otras credenciales con contraseñas más seguras.

##

resolve-this-breach-link = Resolver esta filtración
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Marcada como resuelta:
hide-resolved-button = Ocultar resueltas
show-resolved-button = Mostrar resueltas
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Contraseña expuesta en filtraciones no resueltas
       *[other] Contraseñas expuestas en filtraciones no resueltas
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Filtración de datos conocida marcada como resuelta
       *[other] Filtraciones de datos conocidas marcadas como resueltas
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nueva
mobile-promo-headline = Lleva { -brand-name } a tu celular y tablet
mobile-promo-body = Navegación rápida, privada y segura donde sea que vayas. Busca { -brand-name } en Google Play y App Store.
mobile-promo-cta = Obtén { -brand-name } en Android e iOS
promo-lockwise-headline = Lleva tus contraseñas a todas partes
lockwise-promo-body = Mantén un registro de tus credenciales en todos tus dispositivos. Accede a ellas de forma segura desde tu computador, celular o tablet.
promo-lockwise-cta = Obtén { -brand-lockwise }
fpn-promo-headline = Enmascara tu ubicación ante sitios web y rastreadores
promo-fpn-body = { -brand-fpn } despista a los sitios web y recolectores de datos que te perfilan con publicidad enmascarando tu dirección IP real.
promo-fpn-cta = Obtén { -brand-fpn }
monitor-promo-headline = Infórmate sobre nuevas filtraciones de datos
monitor-promo-body = Recibe notificaciones la próxima vez que tu información personal sea expuesta en una filtración conocida.
ecosystem-promo-headline = Protege tu vida en línea con productos orientados a la privacidad
ecosystem-promo-body = Todos los productos { -brand-name } honran nuestra promesa de datos personales: Tomar menos. Mantenerlo seguro. Sin secretos.
promo-ecosystem-cta = Ver todos los productos
steps-to-resolve-headline = Pasos para resolver esta filtración
vpn-promo-headline = Ahora es tiempo de mejorar su seguridad en línea.
vpn-promo-copy = La red privada virtual de { -brand-Mozilla } te ayuda a proteger tu conexión a Internet de hackers y espías.
vpn-promo-cta = Obtener { -brand-mozilla-vpn }
vpn-promo-headline-new = Ahorra 50% con una suscripción de año completo
vpn-promo-copy-new = Protege tus datos en línea—y elige un plan de suscripción a VPN que funcione para ti.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Tu ubicación: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Protégete</em> con { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Protegido</em> con { -brand-mozilla-vpn }.
vpn-banner-title-1 = Estás bajo protección — gracias por usar { -brand-mozilla-vpn }.
vpn-banner-title-2 = Tu ubicación puede ser rastreada si no usas un VPN.
vpn-banner-subtitle-2 = Protege tu ubicación y navega de forma segura en 3 pasos
vpn-banner-status-protected = Estado actual: <em>Bajo protección</em>
vpn-banner-status-not-protected = Estado actual: <em>Sin protección ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Dirección IP: { $ip-address }
vpn-banner-step-1 = Suscríbete a { -brand-mozilla-vpn }
vpn-banner-step-2 = Selecciona una ubicación de VPN
vpn-banner-step-3 = Activa el VPN y navega de forma segura
vpn-banner-cta = Obtener { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Expandir
# button to close panel
vpn-banner-cta-close = Cerrar

## Relay and VPN educational/ad units

ad-unit-relay-cta = Aprender más sobre { -brand-relay }
ad-unit-vpn-cta = Aprender más sobre { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = ¿Cómo mantienes en secreto tu dirección de correo electrónico?
# ad 2 heading
ad-unit-2-do-you-worry = ¿Te preocupa la seguridad en las redes Wi-Fi públicas?
# ad 3 heading
ad-unit-3-stay-in-the-game = ¡Mantente al día!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } te permite mantener una conexión estable y segura mientras juegas o reproduces películas.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Previene las limitaciones
# ad 3 list item 2
ad-unit-3-be-anywhere = Te permite estar en cualquier lugar del mundo
# ad 3 list item 3
ad-unit-3-access-more = Accede a más
# ad 4 heading
ad-unit-4-shopping-with = Compra con correos electrónicos enmascarados
ad-unit-4-want-to-buy = ¿Quieres comprar algo en línea y no conoces o no confías plenamente en la tienda?
ad-unit-4-shop-online = Usa una máscara de correo electrónico cada vez que compres en línea. Obtén la confirmación enviada en tu correo electrónico real y luego desactiva fácilmente la máscara en cualquier momento posterior.
# ad 5 heading
ad-unit-5-on-the-go = Sobre la marcha con { -brand-relay }
ad-unit-5-instantly-make = ¡Crea instantáneamente una máscara de correo electrónico personalizada en cualquier lugar y donde sea que vayas!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Conéctate sobre la marcha
ad-unit-5-privately-sign-in = Usa tu máscara de correo electrónico cuando desees conectarte de forma privada al Wi-Fi de tu cafetería favorita o red pública
# ad 5 subheading 2
ad-unit-5-email-receipts = Obtener tus recibos por correo
ad-unit-5-share-custom-email = Comparte una máscara personalizada de tu correo electrónico para recibos de compras en la tienda sin compartir tu correo electrónico real
# ad 5 subheading 3
ad-unit-5-use-on-phone = Úsalo en tu teléfono
ad-unit-5-no-matter-where = No importa dónde estés, crea una máscara de correo electrónico personalizada en segundos para cualquier cosa que desees hacer
# ad 6 heading
ad-unit-6-worry-free = Regístrate sin preocupaciones
ad-unit-6-want-to-start = ¿Quieres iniciar una nueva suscripción, responder a una invitación u obtener un código de promoción sin que el spam inunde tu bandeja de entrada?
ad-unit-6-before-you-complete = Antes de completar el próximo registro, usa una máscara de correo en lugar del real para proteger tu información y mantener el control sobre tu bandeja de entrada

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Fundación Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Cuenta de Mozilla
open-in-new-tab-alt = Abrir enlace en una nueva pestaña

## Search Engine Optimization

meta-desc-2 = Descubre si has sido parte de una filtración de datos con { -brand-fx-monitor }. Te ayudaremos a comprender qué hacer a continuación y monitorearemos continuamente cualquier nueva filtración.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Conectarse
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Resolver filtraciones de datos
site-nav-settings-link = Ajustes
site-nav-help-link = Ayuda y soporte
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Prueba nuestras otras herramientas de seguridad:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Menú principal
main-nav-button-collapse-label = Contraer menú
main-nav-button-collapse-tooltip = Contraer menú
main-nav-button-expand-label = Expandir menú
main-nav-button-expand-tooltip = Expandir menú
main-nav-label = Navegación
main-nav-link-home-label = Inicio
main-nav-link-dashboard-label = Panel
main-nav-link-settings-label = Ajustes
main-nav-link-faq-label = Preguntas frecuentes
main-nav-link-faq-tooltip = Preguntas frecuentes

## User menu

# Obsolete
menu-button-title = Menú del usuario
# Obsolete
menu-button-alt = Abrir menú del usuario
# Obsolete
menu-list-accessible-label = Menú de la cuenta
# Obsolete
menu-item-fxa-2 = Gestiona tu { -brand-mozilla-account }
# Obsolete
menu-item-settings = Ajustes
# Obsolete
menu-item-help = Ayuda y soporte
# Obsolete
menu-item-logout = Salir
user-menu-trigger-label = Abrir menú del usuario
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Gestiona tu { -brand-mozilla-account }
user-menu-settings-label = Ajustes
user-menu-settings-tooltip = Configurar { -brand-mozilla-monitor }
user-menu-help-label = Ayuda y soporte
user-menu-help-tooltip = Obtén ayuda para usar { -brand-mozilla-monitor }
user-menu-signout-label = Salir
user-menu-signout-tooltip = Salir de { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Términos del servicio
privacy-notice = Política de privacidad
github = { -brand-github }
footer-nav-all-breaches = Todas las filtraciones
footer-external-link-faq-label = Preguntas frecuentes
footer-external-link-faq-tooltip = Preguntas frecuentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Página no encontrada
error-page-error-404-copy = Lo sentimos, la página que buscas ya no existe.
error-page-error-404-cta-button = Retroceder
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Algo salió mal
error-page-error-other-copy = Por favor, vuelve a intentarlo o regresa más tarde

## Breach overview page

all-breaches-headline-2 = Todas las filtraciones detectadas por { -brand-fx-monitor }
all-breaches-lead = Supervisamos todas las filtraciones de datos conocidas para averiguar si tu información personal se vio comprometida. Aquí hay una lista completa de todas las filtraciones que se han informado desde 2007.
search-breaches = Buscar filtraciones
# the kind of user data exposed to hackers in data breach.
exposed-data = Datos expuestos:

## Public breach detail page

find-out-if-2 = Averigua si te viste involucrado en esta filtración
find-out-if-description = Te ayudaremos a comprobar rápidamente si tu dirección de correo electrónico se vio expuesta en esta filtración y saber qué hacer a continuación.
breach-detail-cta-signup = Busca filtraciones

## Floating banner

floating-banner-text = Mejora tu seguridad en línea con noticias, consejos y actualizaciones de { -brand-Mozilla }.
floating-banner-link-label = Registrarse
floating-banner-dismiss-button-label = No, gracias

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: nuevo nombre, apariencia e incluso más formas de <b>recuperar tu privacidad</b>.
banner-monitor-rebrand-dismiss-button-label = Aceptar
banner-monitor-rebrand-dismiss-button-tooltip = Ocultar
loading-accessibility = Cargando
