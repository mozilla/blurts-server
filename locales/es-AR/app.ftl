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
-brand-fxa = Firefox Account
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Red privada de Firefox

##

GitHub-link-title = GitHub
error-scan-page-token = Intentaste escanear demasiadas direcciones de correo electrónico en un corto período de tiempo. Por razones de seguridad, bloqueamos tus búsquedas temporariamente. Podés probar de nuevo dentro de un rato.
error-could-not-add-email = No se pudo agregar la dirección de correo electrónico a la base de datos.
error-not-subscribed = Esta dirección de correo electrónico no está suscrita a { -product-name }.
error-hibp-throttled = Demasiadas conexiones a { -brand-HIBP }.
error-hibp-connect = Error al conectar con { -brand-HIBP }.
error-hibp-load-breaches = No se pudieron cargar las filtraciones de seguridad.
error-must-be-signed-in = Tenés que iniciar la sesión en tu { -brand-fxa }.
error-to-finish-verifying = Para finalizar la verificación de este correo electrónico para { -product-name }, tenés que iniciar la sesión en el correo electrónico de tu cuenta principal de correo electrónico.
home-title = { -product-name }
home-not-found = Página no encontrada.
oauth-invalid-session = Sesión inválida
scan-title = Resultados del escaneo de: { -product-name }
user-add-invalid-email = Dirección de correo electrónico inválida
user-add-too-many-emails = Estás monitoreando el número máximo de correos electrónicos posible.
user-add-email-verify-subject = Verificá tu suscripción a { -product-name }.
user-add-duplicate-email = Este correo electrónico ya se agregó a { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Andá a tu { $preferencesLink } para verificar el estado de { $userEmail }.
user-add-verification-email-just-sent = No se puede enviar otro correo electrónico de verificación tan rápido. Intentalo más tarde.
user-add-unknown-error = Algo salió mal al agregar otra dirección de correo electrónico. Intentalo más tarde.
user-delete-unknown-error = Algo salió mal al eliminar una dirección de correo electrónico. Intentalo de nuevo más tarde.
error-headline = Error
user-verify-token-error = Se requiere identificador de verificación.
user-verify-email-report-subject = Tu informe de { -product-name }
user-unsubscribe-token-error = Cancelar la suscripción requiere un identificador.
user-unsubscribe-token-email-error = Cancelar la suscripción requiere un identificador y un correo electrónico.
user-unsubscribe-title = Cancelar la suscripción a: { -product-name }
pwt-section-headline = Contraseñas más fuertes = Mejor protección
landing-headline = Tu derecho a estar a salvo de los piratas comienza aquí.
scan-placeholder = Ingresá la dirección de correo electrónico
scan-submit = Buscá tu dirección de correo electrónico
scan-error = Debe ser una dirección de correo electrónico válida.
download-firefox-banner-button = Descargar { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = ¡Enviado!
sign-up = Registrate
form-signup-error = Debe ser una dirección de correo electrónico válida
# breach-date = the calendar date a particular data theft occurred.
breach-date = Fecha de filtración:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
unsub-headline = Cancelar la suscripción de { -product-name-nowrap }
unsub-blurb = Esto eliminará tu dirección de correo electrónico de la lista { -product-name-nowrap } y ya no recibirás alertas cuando se anuncien nuevas filtraciones.
unsub-button = Cancelar suscripción
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Datos de filtración proporcionados por { $hibp-link }
share-twitter = La mayoría de las personas tienen alrededor de 100 cuentas en línea. ¿Alguna de los tuyas tuvo una filtración de datos? Descubrilo.
share-facebook-headline = Averiguá si fusite parte de una filtración de datos.
share-facebook-blurb = ¿Tus cuentas en línea fueron expuestas en una filtración de datos?
og-site-description = Averiguá si fuiste parte de una filtración de datos con { -product-name }. Registrate para recibir alertas sobre futuras filtraciones y obtené consejos para mantener tus cuentas seguras.
show-all = Mostrar todo
fxa-scan-another-email = ¿Querés consultar por otro correo electrónico?
sign-out = Cerrar la sesión
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Administrar { -brand-fxa }
have-an-account = ¿Ya tenés una cuenta?
fxa-pwt-summary-2 =
    Las contraseñas cortas de una sola palabra son fáciles de adivinar por parte de los piratas informáticos.
    Usá al menos dos palabras y una combinación de letras, dígitos y caracteres especiales.
fxa-pwt-summary-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tus  contraseñas y te las ingresan en los sitios web. Incluso te ayudarán a crear contraseñas seguras.
fxa-pwt-summary-6 = Las filtraciones de datos van en aumento. Si tu información personal aparece en una nueva filtración de datos, { -product-name } te envía una alerta para que podás tomar medidas y proteger tus cuentas.
fxa-what-to-do-blurb-1 =
    Si no podés iniciar la sesión, contactate con el sitio web para preguntar cómo actualizarlo.
    ¿Ves una cuenta que no reconocés? Tus datos podrían haberse vendido.
    O redistribuido. Esta también podría ser una cuenta que te olvidaste de haber creado o una empresa que cambió de nombre.
fxa-what-to-do-subhead-2 = Dejá de usar la contraseña expuesta y cambiala en todos los lugares en los que la usaste.
fxa-wtd-blurb-2 = Los piratas informáticos pueden intentar reutilizar tu contraseña expuesta para ingresar a otras cuentas. Creá una contraseña diferente y única para cada sitio web, especialmente para tu cuenta bancaria, tu correo electrónico y otros sitios web en los que guardás información personal.
fxa-what-to-do-blurb-3 = La mayoría de las filtraciones solo exponen correos electrónicos y contraseñas, pero algunas incluyen información financiera confidencial. Si tu cuenta bancaria o los números de tu tarjeta de crédito se incluyeron en una filtración, avisá a tu banco de posibles fraudes y supervisá los estados de cuenta de los cargos que no reconozcás.
fxa-what-to-do-subhead-4 = Obtené ayuda para recordar todas sus contraseñas y mantenerlas seguras.
fxa-what-to-do-blurb-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden almacenan tu contraseñas de forma segura y te la ingresan en los sitios web. Usa un administrador de contraseñas en tu teléfono y computadora para que no tengas que recordarlas todas.
# Alerts is a noun
sign-up-for-alerts = Registrate para recibir alertas
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
take-control = Recuperá el control de tu información personal.
cant-stop-hackers = No podés evitar que te pirateen los piratas, pero sí podés evitar la malas prácticas que les facilitan el trabajo.
read-more-tips = Ver más consejos de seguridad
how-hackers-work = Entender cómo trabajan los piratas
monitor-your-online-accounts = Registrate para monitorear filtraciones con { -brand-fxa }.
stay-alert = Mantenete alerta a las nuevas filtraciones
if-your-info = Si tu información aparece en una nueva filtración de datos, te enviaremos una alerta.
search-all-emails = Averiguá si tus direcciones de correo aparecieron en filtraciones y recibí alertas sobre nuevas amenazas.
monitor-several-emails = Controlá varias direcciones de correo
take-action = Actuá para proteger tus cuentas.
keep-your-data-safe = Averiguá qué tenés que hacer para mantener tus datos a salvo de los delincuentes cibernéticos.
website-breach = Filtración de sitio web
sensitive-breach = Filtración delicada de sitio web
data-aggregator-breach = Filtración del agregador de datos
unverified-breach = Filtración no verificada
spam-list-breach = Filtración de lista de correo no deseado
website-breach-plural = Filtraciones de sitios web
sensitive-breach-plural = Filtraciones delicadas
data-aggregator-breach-plural = Filtraciones de agregadores de datos
unverified-breach-plural = Filtraciones no verificadas
spam-list-breach-plural = Violaciones del listado de correos no deseados
what-data = Qué datos fueron comprometidos:
sensitive-sites = ¿Cómo trata { -product-name } a los sitios sensibles?
sensitive-sites-copy =
    { -product-name } solo revela las cuentas asociadas con estos
    tipos de violaciones después de que se verificó una dirección de correo electrónico. Esto significa que sos el único que puede ver si tu información estaba en esta violación (a menos que alguien más tenga acceso a tu cuenta de correo electrónico).
delayed-reporting-headline = ¿Por qué se tardó tanto en informar esta filtración?
delayed-reporting-copy =
    A veces pueden pasar meses o años antes de que las credenciales que se expusieron
    en una violación de datos aparezcan en la web oscura. Las violaciones se añaden a nuestra base de datos en cuanto se descubren y verifican.
about-fxm-headline = Acerca de { -product-name }
about-fxm-blurb = { -product-name } avisa si las cuentas en línea estuvieron involucradas en una filtración de datos. Buscá si estuviste en una filtracón, recibí alertas sobre nuevas filtraciones y seguí los pasos necesarios para proteger tus cuentas en línea. { -product-name } es provisto por { -brand-Mozilla }.
fxm-warns-you = { -product-name } te advierte si tu dirección de correo electrónico ha estado expuesta a una filtración de datos en línea. Mirá si tu información ha estado expuesta, conocé como proteger mejor tus cuentas en línea y recibí alertas si tu correo electrónico aparece en una nueva filtración.
# How Firefox Monitor works
how-fxm-works = Cómo funciona { -product-name }
how-fxm-1-headline = Hacer una búsqueda básica
how-fxm-1-blurb =
    Buscá tu dirección de correo electrónico en las violaciones de datos públicos yendo hacia atrás
    a 2007. Esta búsqueda básica mostrará la mayoría de las violaciones de datos, pero no
    las que contienen información personal privada.
how-fxm-2-headline = Registrate para controlar las violaciones
how-fxm-2-blurb =
    Creá una { -brand-fxa } para controlar tu correo electrónico en busca de violaciones continuas.
    Una vez que hayas verificado tu correo electrónico, también recibirás un informe completo de las infracciones anteriores, incluyendo las violaciones de la privacidad.
how-fxm-3-headline = Obtener notificaciones en el navegador
how-fxm-3-blurb =
    Si usás { -brand-name }, recibirás una notificación si vas a un
    sitio violado. Averiguá de inmediato si fuiste parte de esa violación y lo que podés hacer al respecto.
wtd-after-website = Qué hacer después de una violación de una página web
wtd-after-data-agg = Qué hacer después de una violación de un agregador de datos
what-is-data-agg = ¿Qué es un agregador de datos?
what-is-data-agg-blurb = Los agregadores de datos, o los intermediarios de datos, recopilan información de registros públicos  y los compran de otras empresas. Compilan estos datos para venderlos a las empresas con fines de comercialización. Las víctimas de estas violaciones tienen menos probabilidades de experimentar fraudes financieros,  pero los piratas informáticos podrían usar estos datos para hacerse pasar por ellos o perfilarlos.
protect-your-privacy = Proteger la privacidad en línea
no-pw-to-change = A diferencia de una filtración de un sitio web, no hay contraseña que cambiar.
avoid-personal-info = Evitar el uso de información personal en las contraseñas
avoid-personal-info-blurb = Resulta fácil encontrar cumpleaños, direcciones y nombres de familiares en línea. Mantené estas palabras fuera de tus contraseñas.

## What to do after data breach tips

change-pw = Cambiá la contraseña
change-pw-site = Cambiar contraseña para este sitio
even-for-old = Incluso para cuentas antiguas, es importante actualizar tu contraseña.
make-new-pw-unique = Hacé que la nueva contraseña sea diferente y única
strength-of-your-pw = La fortaleza de tus contraseñas tiene un impacto directo en tu seguridad en línea.
create-strong-passwords = Cómo crear contraseñas seguras
stop-reusing-pw = Dejá de usar siempre las mismas contraseñas
create-unique-pw = Creá contraseñas únicas y guardalas en algún lugar seguro, como un administrador de contraseñas.
five-myths = 5 mitos sobre los administradores de contraseñas
create-a-fxa = Creá una { -brand-fxa } para tener un informe completo de las violaciones y para recibir alertas.
feat-security-tips = Consejos de seguridad para proteger tus cuentas
feat-sensitive = Búsqueda avanzada de violaciones privadas
feat-enroll-multiple = Inscribí múltiples correos electrónicos en el control de violaciones
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Aparece en { $breachCount } violación conocida.
       *[other] Aparece en { $breachCount } violaciones conocidas.
    }
check-for-breaches = Buscar violaciones
find-out-what-hackers-know = Averiguá lo que los piratas informáticos saben acerca tuyo. Descubrí cómo estar siempre un paso adelante de ellos.
get-email-alerts = Mantenete seguro: recibí alertas por correo electrónico cuando tu información aparezca en una filtración conocida
search-for-your-email = Buscá tu dirección de correo en violaciones de datos públicos yendo hasta 2007.
back-to-top = Volver al inicio
comm-opt-0 = Enviame un correo electrónico si alguna de mis direcciones de correo electrónico de las que están a continuación aparece en una violación de datos.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Enviar todas las alertas de violaciones a { $primaryEmail }.
stop-monitoring-this = Dejar de controlar esta dirección correo electrónico.
resend-verification = Reenviar correo electrónico de verificación
add-new-email = Agregar una nueva dirección de correo electrónico
send-verification = Enviar enlace de verificación
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Resumen de filtraciones
show-breaches-for-this-email = Mostrar todas las filtraciones de este correo electrónico.
link-change-primary = Cambiar dirección primaria de correo electrónico
remove-fxm = Eliminar { -product-name }
remove-fxm-blurb = Desactivar alertas de { -product-name }. { -brand-fxa } seguirá activo y se podrán recibir otras comunicaciones relacionadas con la cuenta.
# Button title
manage-email-addresses = Administrar direcciones de correo electrónico
# Link title
latest-breach-link = Ver si estás en esta filtración

## Variables:
##   $userName (String) - Username

welcome-back = ¡Bienvenido de nuevo, { $userName }!
welcome-user = ¡Bienvenido, { $userName }!

##

breach-alert-subject = { -product-name } encontró tu correo electrónico en una nueva filtración de datos.
your-info-was-discovered-headline = Tu información fue descubierta en una nueva filtración de datos.
your-info-was-discovered-blurb =
    Te registraste para recibir alertas de { -product-name }
    cuando tu correo electrónico aparezca en una filtración de datos. Acá está lo que conocemos sobre esta filtración.
what-to-do-after-breach = Qué hacer después de una filtración de datos:
ba-next-step-1 = Cambiar la contraseña por una segura y única.
ba-next-step-blurb-1 =
    Una contraseña segura usa una combinación de letras mayúsculas y minúsculas,
    caracteres especiales y números. No contiene información personal como
    dirección, cumpleaños o fechas familiares.
ba-next-step-2 = Dejar de usar la contraseña expuesta por completo.
ba-next-step-blurb-2 =
    Los cibercriminales pueden encontrar tu contraseña en la dark web y usarla 
    para ingresar en tus otras cuentas. La mejor forma de proteger tus cuentas 
    es usar contraseñas únicas para cada una.
ba-next-step-3 = Obtener ayuda para crear mejores contraseñas y mantenerlas seguras.
ba-next-step-blurb-3 =
    Usar un administrador de contraseñas para crear contraseñas seguras y únicas. 
    Los administradores de contraseñas guardan de forma segura 
    todos los inicios de sesión para podás accederlos en todos tus dispositivos.
faq1 = No reconozco esta empresa o sitio web. ¿Por qué estoy en esta filtración?
faq2 = ¿Por qué tomó tanto tiempo notificarme esta filtración?
faq3 = ¿Cómo sé que este es un correo electrónico legítimo de { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] { $breachCount } NUEVA FILTRACIÓN ENCONTRADA
       *[other] { $breachCount } NUEVAS FILTRACIONES ENCONTRADAS
    }
sign-up-headline-1 = Obtener alertas continuas con { -brand-fxa }.
account-not-required = El navegador { -brand-name } no es necesario para { -brand-fxa }. Podés recibir información sobre los servicios de { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = ¿Estuvo tu información expuesta en la filtración de datos { $breachName }?
fb-not-comp = Este correo electrónico no apareció en la filtración { $breachName }..
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
       *[other] Este correo electrónico aparece en { $breachCount } filtraciones de datos conocidas, incluyendo { $breachName }.
    }

##

no-other-breaches-found = No se han encontrado otras filtraciones en una búsqueda básica.
no-results-blurb = Lo sentimos, ese filtración no está en nuestra base de datos.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>El correo electrónico no aparece en esta filtración,
    pero el número de teléfono aún puede ser vulnerable.</span> Algunas de las cuentas
    comprometidas en la filtración de Facebook incluyen números de teléfonos y otra
    información personal pero no direcciones de correo electrónico. Si alguna vez te registraste
    para una cuenta de Facebook — aún si no la usás ahora — te recomendamos
    que sigás estos pasos para protegerte
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Poné tu información como “solamente yo” o alguna otra configuración que no sea pública en <a>tu perfil de Facebook</a>.</span>
facebook-breach-what-to-do-1-copy =
    Durante esta filtración, los hackers tomaron información
    de los perfiles que estaba “abierta al público” o “compartida con amigos”.
    Esta información puede ser combinada con otros datos para acceder a alguna otra
    información personal y cuentas.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Cambiá la contraseña, PIN o alguna otra credencial de seguridad en tu <a>cuenta
    del proveedor de telefonía celular</a> para prevenir el clonado de SIM</span>.
facebook-breach-what-to-do-2-copy =
    Intercambio de SIM, que también se denomina toma de SIM,
    es cuando un pirata informático usa números de teléfono, fechas de nacimiento y otros datos para hacerse cargo
    del número de teléfono celular de una persona y luego piratear su correo electrónico, redes sociales e incluso cuentas financieras.
facebook-breach-what-to-do-3 = Ver todas las recomendaciones en nuestra página de filtración de Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = Mostrar:

## Updated error messages

error-bot-headline = Búsquedas suspendidas temporalmente
error-bot-blurb =
    Nos preocupa que podás ser un bot porque buscaste 
    varias direcciones de correo electrónico en un período corto de tiempo. 
    Por ahora estás bloqueado para nuevas búsquedas. Podés intentar de nuevo más tarde.
error-csrf-headline = Sesión caducada
error-csrf-blurb = Seleccioná el botón atrás del navegador, recargá la página e intentá nuevamente.
error-invalid-unsub = Cómo anular la suscripción de las alertas de { -product-name }
error-invalid-unsub-blurb = Necesitarás darte de baja desde uno de los correos electrónicos que { -product-name } te envió. Buscá en tu bandeja de entrada los mensajes de { -brand-team-email }. Seleccioná el enlace para darse de baja en el final del mensaje.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Dirección de correo electrónico siendo monitoreada
       *[other] Direcciones de correo electrónico siendo monitoreadas
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Contraseña expuesta a través de todas las filtraciones
       *[other] Contraseñas expuestas a través de todas las filtraciones
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] La violación de datos conocida expuso su información
       *[other] Las violaciones de datos conocidas expusieron su información
    }
# Button
see-additional-breaches = Ver filtraciones adicionales
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] El correo electrónico apareció en 1 filtración de datos conocida.
       *[other] El correo electrónico apareció en { $breachCount } filtraciones de datos conocidas.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Resultados para: { $userEmail }
other-monitored-emails = Otros correos electrónicos monitoreados
email-verification-required = Verificación de correo electrónico requerida
fxa-primary-email = Correo electrónico de { -brand-fxa } - Primario
what-is-a-website-breach = ¿Qué es una filtración de un sitio web?
website-breach-blurb = Una filtración de datos de un sitio web sucede cuando los cibercriminales roban, copian o exponen información personal de cuentas en línea. Es usualmente el resultado de hackers buscando puntos débiles en la seguridad de los sitios. Las filtraciones también suceden cuando la información de las cuentas se filtra por accidente.
security-tips-headline = Consejos de seguridad para protegerte de los hackers.
steps-to-protect = Pasos a seguir para proteger tu identidad en línea
take-further-steps = Tomá medidas adicionales para proteger tu identidad
alert-about-new-breaches = Alertarme sobre nuevas filtraciones.
see-if-youve-been-part = Fijate si fuiste parte de una violación de datos en línea.
get-ongoing-breach-monitoring = Obtené el monitoreo contínuo de las violaciones de datos para múltiples direcciones de correo electrónico.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Averiguar
new-unsub-error = Necesitás darte de baja de uno de los correos electrónicos enviados por { -product-name }.
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
email-addresses-title = Direcciones de correo electrónico
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Visión general
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = El { $breachDate }, { $breachTitle } sufrió una filtración. Una vez que se descubrió y verificó la filtración, se agregó a nuestra base de datos el { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = Preferencias de { -product-short-name }
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Conectado como: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrar por categoría:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menú
to-affected-email = Enviar alertas de filtración a la dirección de correo electrónico afectada
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Hay una manera de proteger tu privacidad. Unite a { -brand-name }.
# Link title
learn-more-link = Conocer más.
email-sent = Correo electrónico enviado
# Form title
want-to-add = ¿Quieres añadir otro correo electrónico?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verificar el enlace enviado a { $userEmail } para agregarlo a { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = ¡Correo electrónico verificado correctamente!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Te vamos a avisar si  { $email } aparece en una violación de datos.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Para ver y administrar todos los correos electrónicos que suscribiste para el monitoreo de violaciones, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = iniciar sesión

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Administra todas las direcciones de correo electrónico en { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Notificaciones de alerta de filtración
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Filtración agregada:
how-hackers-work-desc = Protejé tus contraseñas de los delincuentes cibernéticos, ya que eso es lo que más les importa.
what-to-do-after-breach-desc = Bloqueá tus cuentas para mantener tu información fuera de las manos equivocadas.
create-strong-passwords-desc = Hacé que tus contraseñas sean fuertes, seguras y difíciles de adivinar.
steps-to-protect-desc = Comprendé las amenazas más comunes para que sepas qué es lo que tenés que buscar.
five-myths-desc = Aprendé cómo evitar los malos hábitos de contraseñas que facilitan el trabajo del pirata informático.
take-further-steps-desc = Descubrí cómo mitigar los riesgos del robo de identidad para evitar pérdidas financieras.
# This message appears after a user has successfully updated their communication settings.
changes-saved = ¡Cambios guardados!
# Section headline
rec-section-headline = ¿Qué hacer con esta violación?
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
resolve-top-notification = { $affectedEmail } apareció en esta violación. <a>Qué hacer a continuación</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } apareció en esta violación. <a>Qué hacer a continuación</a>
       *[other] { $numAffectedEmails } aparecieron en esta violación. <a>Qué hacer a continuación</a>
    }

##

marking-this-subhead = Marcar esta violación como resuelta
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Una vez que hayas tomado los pasos necesarios para abordar esta violación </span>,
    podés marcarla como resuelta. Todavía podés acceder a detalles sobre la violación
    desde tu tablero en cualquier momento.
mark-as-resolve-button = Marcar como resuelto
marked-as-resolved-label = Marcado como resuelto
undo-button = Deshacer
confirmation-1-subhead = ¡Qué bueno! Resolviste tu primera violación.
confirmation-1-body = Mantené el impulso. Mirá tu panel de control para ver si hay más para hacer.
confirmation-2-subhead = ¡Fuera piratas!
confirmation-2-body = Estás tomando medidas importantes para proteger tus cuentas en línea.
confirmation-3-subhead = Otra más. ¡Muy bien!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = ¿Tu nueva contraseña es única, segura y difícil de adivinar? <a>Descubrilo</a>
generic-confirmation-subhead = Esta violación fue marcada como resuelta
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Para ver la violación que queda, mirá tu panel de control.
       *[other] Para ver todas las violaciones restantes, mirá tu panel de control.
    }
return-to-breach-details-link = Volver a los detalles de la violación
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
        [one] { $numResolvedBreaches } Resuelta
       *[other] { $numResolvedBreaches } Resueltas
    }
progress-intro-subhead = Nuevo en { -product-name }: marcar violaciones como resueltas
progress-intro-message =
    Después de revisar los detalles sobre una violación y tomar medidas para proteger
    tu información personal, podés marcarla como resueltas.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } de { $numTotalBreaches } violación marcada como resuelta
       *[other] { $numResolvedBreaches } de  { $numTotalBreaches } violaciones marcadas como resueltas
    }
progress-complete = Todas las violaciones conocidas se marcaron como resueltas

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span> ¡Empezaste muy bien! </span> Mirá a las infracciones restantes para aprender
    qué pasos tomar
progress-message-2 =
    <span>¡Seguí así!</span> Los pequeños cambios como la actualización de contraseñas tienen un gran impacto en
    mantener segura tu información personal.
progress-message-3 = <span>¡Buen trabajo para resolver esas infracciones!</span> Seguí así. Te quedan algunos más.
progress-message-4 = <span>¡Casi terminado!</span> Ya casi estás en la línea de meta.
progress-complete-message =
    <span>Se siente bien, ¿verdad?</span> Si querés continuar, este es un buen momento para
    actualizar otros inicios de sesión con contraseñas más seguras.

##

resolve-this-breach-link = Resolver esta violación
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Marcado como resuelto:
hide-resolved-button = Ocultar resueltos
show-resolved-button = Mostrar resueltos
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Contraseña expuesta en violaciones no resueltas
       *[other] Contraseñas expuestas en violaciones no resueltas
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Violación de datos conocida marcada como resuelta
       *[other] Violaciones de datos conocidas marcadas como resueltas
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nueva
mobile-promo-headline = Traé { -brand-name } a tu teléfono y tableta
mobile-promo-body = Navegación rápida, privada y segura donde quiera que vayas. Encontrá { -brand-name } en Google Play y App Store.
mobile-promo-cta = Obtené { -brand-name } en Android e iOS
promo-lockwise-headline = Llevá tus contraseñas a todas partes
lockwise-promo-body = Mantené el registro de tus inicios de sesión en todos tus dispositivos. Accedé a los mismos de forma segura desde tu computadora, celular o tableta.
promo-lockwise-cta = Obtené { -brand-lockwise }
fpn-promo-headline = Ocultá tu ubicación de sitios web y rastreadores
promo-fpn-body = { -brand-fpn } elimina los sitios web y los recopiladores de datos que te perfilan con publicidad enmascarando tu verdadera dirección IP.
promo-fpn-cta = Obtené  { -brand-fpn }
monitor-promo-headline = Informate sobre nuevas violaciones de datos
monitor-promo-body = Recibí notificaciones cuando tu información personal se encuentre en una violación de datos conocida.
ecosystem-promo-headline = Protegé tu vida en línea con productos que priorizan la privacidad
ecosystem-promo-body = Todos los productos { -brand-name } cumplen nuestra promesa de datos personales: tome menos. Mantenelo seguro. Sin secretos.
promo-ecosystem-cta = Ver todos los productos
steps-to-resolve-headline = Pasos para resolver esta violación
vpn-promo-headline = Ahora es momento de mejorar la seguridad en línea.
vpn-promo-copy = { -brand-Mozilla } Virtual Private Network ayuda a proteger la conexión a internet de hackers y espías.
vpn-promo-cta = Obtener { -brand-mozilla-vpn }
vpn-promo-headline-new = Ahorrá un 50% con una suscripción de todo un año.
vpn-promo-copy-new = Protegé tus datos en línea y elegí  un plan de suscripción a la VPN que se adapte a tus necesidades.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = Tu ubicación: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Protegete</em> con { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Protegido</em> con { -brand-mozilla-vpn }.
vpn-banner-title-1 = Estás protegido — gracias por usar { -brand-mozilla-vpn }.
vpn-banner-title-2 = Tu ubicación puede ser rastreada si no usás una VPN.
vpn-banner-subtitle-2 = Protegé tu ubicación y navegá de forma segura en tres pasos.
vpn-banner-status-protected = Estado actual: <em>Protegido ✓</em>
vpn-banner-status-not-protected = Estado actual: <em>No protegido ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Dirección IP: { $ip-address }
vpn-banner-step-1 = Suscribite a { -brand-mozilla-vpn }
vpn-banner-step-2 = Seleccioná una ubicación de VPN
vpn-banner-step-3 = Activá tu VPN y navegá de forma segura
vpn-banner-cta = Obtené { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Expandir
# button to close panel
vpn-banner-cta-close = Cerrar

## Relay and VPN educational/ad units

ad-unit-relay-cta = Conocer más sobre { -brand-relay }
ad-unit-vpn-cta = Conocer más sobre { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = ¿Cómo mantener tu correo electrónico secreto?
# ad 2 heading
ad-unit-2-do-you-worry = ¿Te preocupa la seguridad de un Wi-Fi público?
# ad 3 heading
ad-unit-3-stay-in-the-game = ¡Mantente al día!
ad-unit-3-lets-you-keep = { -brand-mozilla-vpn } te permite mantener una conexión estable segura mientras jugás o mirás películas.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Evitar la regulación
# ad 3 list item 2
ad-unit-3-be-anywhere = Podés estar en cualquier lugar del mundo
# ad 3 list item 3
ad-unit-3-access-more = Acceder a más
# ad 4 heading
ad-unit-4-shopping-with = Comprar con máscaras de correo electrónico
ad-unit-4-want-to-buy = ¿Querés comprar algo en línea y no conocés el negocio o no le tenés confianza?
ad-unit-4-shop-online = Usá una máscara de correo electrónico para comprar en línea. La confirmación te llegará a tu correo electrónico real y podrás desactivar la máscara fácilmente en cualquier momento.
# ad 5 heading
ad-unit-5-on-the-go = Sobre la marcha con { -brand-relay }
ad-unit-5-instantly-make = ¡Hacé instantáneamente una máscara de correo electrónico personalizada en cualquier lugar y donde quiera que vayas!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Conectarse sobre la marcha
ad-unit-5-privately-sign-in = Usá tu máscara de correo electrónico cuando quieras ingresar de forma privada en tu café favorito o un wi-fi público
# ad 5 subheading 2
ad-unit-5-email-receipts = Obtener los recibos por correo electrónico
ad-unit-5-share-custom-email = Compartí una máscara de correo personalizada para recibos de compras en la tienda sin compartir tu correo real
# ad 5 subheading 3
ad-unit-5-use-on-phone = Usalo en tu teléfono
ad-unit-5-no-matter-where = No importa dónde estés, creá una máscara de correo electrónico personalizada en segundos para cualquier cosa que quieras hacer
# ad 6 heading
ad-unit-6-worry-free = Registrate sin preocupaciones
ad-unit-6-want-to-start = ¿Querés iniciar una nueva suscripción, responder a una invitación u obtener un código de promoción sin que el spam inunde tu bandeja de entrada?
ad-unit-6-before-you-complete = Antes de completar el próximo registro, usá una máscara de correo elecrtrónico en lugar del real para proteger tu información y mantener el control sobre tu bandeja de entrada

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
-brand-mozilla-vpn = VPN de Mozilla
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Cuenta de Mozilla
open-in-new-tab-alt = Abrir enlace en una nueva pestaña

## Search Engine Optimization

meta-desc-2 = Averiguá si fuiste parte de una filtración de datos con { -brand-fx-monitor }. Te ayudaremos a entender qué hacer a continuación y monitorearemos continuamente si hay nuevas filtraciones.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Iniciar la sesión
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Resolver filtraciones de datos
site-nav-settings-link = Opciones
site-nav-help-link = Ayuda y soporte
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Probá nuestras otras herramientas de seguridad:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Menú principal
main-nav-button-collapse-label = Colapsar el menú
main-nav-button-collapse-tooltip = Colapsar el menú
main-nav-button-expand-label = Expandir el menú
main-nav-button-expand-tooltip = Expandir el menú
main-nav-label = Navegación
main-nav-link-home-label = Inicio
main-nav-link-dashboard-label = Tablero
main-nav-link-settings-label = Configuración
main-nav-link-faq-label = Preguntas frecuentes
main-nav-link-faq-tooltip = Preguntas frecuentes

## User menu

# Obsolete
menu-button-title = Menú de usuario
# Obsolete
menu-button-alt = Abrir menú de usuario
# Obsolete
menu-list-accessible-label = Menú de cuenta
# Obsolete
menu-item-fxa-2 = Administrar tu { -brand-mozilla-account }
# Obsolete
menu-item-settings = Opciones
# Obsolete
menu-item-help = Ayuda y soporte
# Obsolete
menu-item-logout = Cerrar sesión
user-menu-trigger-label = Abrir el menú de usuario
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Administrar tu { -brand-mozilla-account }
user-menu-settings-label = Configuración
user-menu-settings-tooltip = Configurar { -brand-mozilla-monitor }
user-menu-help-label = Ayuda
user-menu-help-tooltip = Obtener ayuda para usar { -brand-mozilla-monitor }
user-menu-signout-label = Cerrar la sesión
user-menu-signout-tooltip = Cerrar la sesión en { -brand-mozilla-monitor }

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Términos del servicio
privacy-notice = Nota de privacidad
github = { -brand-github }
footer-nav-all-breaches = Todas las filtraciones
footer-external-link-faq-label = Preguntas frecuentes
footer-external-link-faq-tooltip = Preguntas frecuentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Página no encontrada
error-page-error-404-copy = Lo sentimos, la página que estás buscando no existe más.
error-page-error-404-cta-button = Atrás
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Algo salió mal
error-page-error-other-copy = Probá de nuevo o volvé más tarde

## Breach overview page

all-breaches-headline-2 = Todas las filtraciones detectadas por { -brand-fx-monitor }
all-breaches-lead = Monitoreamos todas las filtraciones de datos para encontrar si tu información personal se vio comprometida. Acá hay una lista completa de todas las filtraciones que se informaron desde 2007.
search-breaches = Buscar filtraciones
# the kind of user data exposed to hackers in data breach.
exposed-data = Datos expuestos:

## Public breach detail page

find-out-if-2 = Fijate si estuviste involucrado en esta filtración
find-out-if-description = Te vamos a ayudar a ver rápidamente si tu dirección de correo electrónico estuvo expuesta en esta filtración para entender qué hacer a continuación.
breach-detail-cta-signup = Verificá si hay filtraciones

## Floating banner

floating-banner-text = Aumentá tu seguridad en línea con noticias, consejos y actualizaciones de { -brand-Mozilla }.
floating-banner-link-label = Registrate
floating-banner-dismiss-button-label = No, gracias

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Nuevo nombre, apariencia e incluso más formas de <b>recuperar tu privacidad</b>.
banner-monitor-rebrand-dismiss-button-label = Aceptar
banner-monitor-rebrand-dismiss-button-tooltip = Descartar
loading-accessibility = Cargando
