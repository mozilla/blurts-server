# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }</span>
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = Have I Been Pwned
-brand-fxa = Cuenta de Firefox
-brand-Chrome = Chrome
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Ayuda
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Acerca de las alertas de Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Enviar comentario
terms-and-privacy = Términos y privacidad
error-scan-page-token = Intentaste escanear demasiadas direcciones de correo en un periodo de tiempo muy corto. Por razones de seguridad, hemos bloqueado temporalmente nuevas búsquedas de tu parte. Podrás volver a intentarlo más tarde.
error-could-not-add-email = No se pudo añadir el correo a la base de datos
error-not-subscribed = Este correo no está suscrito a { -product-name }.
error-hibp-throttled = Demasiadas conexiones a { -brand-HIBP }.
error-hibp-connect = Error al conectarse con { -brand-HIBP }.
error-hibp-load-breaches = No se han podido cargar las filtraciones.
hibp-notify-email-subject = { -product-name } Alerta: Tu cuenta fue afectada por una filtración.
home-title = { -product-name }
home-not-found = Página no encontrada.
oauth-invalid-session = Sesión inválida
oauth-confirmed-title = { -product-name } : Suscrito
scan-title = { -product-name } : Resultados del escaneo
user-add-invalid-email = Correo inválido
user-add-email-verify-subject = Verifica tu suscripción a { -product-name }.
user-add-title = { -product-name } : Confirmar correo
error-headline = Error
user-verify-token-error = Toquen de verificación requerido.
user-verify-email-report-subject = Tu reporte de { -product-name }
user-verify-title = { -product-name } : Suscrito
user-unsubscribe-token-error = Cancelar la suscripción requiere de un token.
user-unsubscribe-token-email-error = Cancelar la suscripción requiere de un token y de un emailHash.
user-unsubscribe-title = { -product-name }: Cancelar suscripción
user-unsubscribe-survey-title = { -product-name } : Cancelar suscripción a encuesta
user-unsubscribed-title = { -product-name }: Suscripción cancelada

## Password Tips

pwt-section-headline = Contraseñas más fuertes = Mejor protección
pwt-section-subhead = Tu información privada es solo tan segura como tus contraseñas.
pwt-section-blurb =
    Tus contraseñas protegen mucho más que solo tus cuentas. Protegen cada pedazo de información personal que reside en ellas.
    Y los hackers se aprovechan de los malos hábitos, como usar la misma contraseña en todas partes o frases comunes (el nombre de un famoso, ¿quizás?) así que si logran entrar en una cuenta, pueden entrar a varias. Aquí tienes como proteger mejor tus cuentas.
pwt-headline-1 = Usa una contraseña diferente para cada cuenta
pwt-summary-1 = Reutilizar la misma contraseña en todas partes deja la puerta abierta para la suplantación de identidad. Cualquier persona con esa contraseña puede iniciar sesión en todas tus cuentas.
pwt-headline-2 = Crea contraseñas seguras y difíciles de adivinar
pwt-summary-2 =
    Los hackers usan miles de contraseñas comunes para intentar adivinar la tuya. 
    Cuanto más larga y aleatoria sea tu contraseña, más difícil será adivinarla.
pwt-headline-3 = Trata las preguntas de seguridad como contraseñas adicionales
pwt-summary-3 =
    Los sitios web no revisan que tus contraseñas sean adecuadas, solo que coincidan.
    Crea contraseñas largas, aleatorias y guárdalas en un lugar seguro.
pwt-headline-4 = Obtén ayuda para recordar tus contraseñas
pwt-summary-4 =
    Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas seguras y únicas.
    También almacenan las contraseñas de forma segura y las colocan en los sitios web por ti
pwt-headline-5 = Agrega seguridad adicional con la autenticación de dos factores
pwt-summary-5 =
    2FA requiere información adicional (como un código de un solo uso enviado por mensaje de texto) para que te conectes con tu cuenta.
    Incluso si alguien tiene tu contraseña no podrá entrar.
pwt-headline-6 = Regístrate para recibir alertas de { -product-name-nowrap }
pwt-summary-6 = Las filtraciones de datos de sitios web están en aumento. Tan pronto como se añade una filtración a nuestra base de datos, { -product-name-nowrap } te envía una alerta — para que puedas tomar una acción inmediata y protegerla.
landing-headline = Tu derecho a estar a salvo de los hackers comienza aquí.
landing-blurb = { -product-name-nowrap } te arma con herramientas para mantener tu información personal segura. Averigua lo que los hackers ya saben de ti, y aprende cómo mantenerte un paso adelante de ellos.
scan-label = Ve si estás afectado por una filtración de datos.
scan-placeholder = Ingresa tu dirección de correo
scan-privacy = No se guardará tu correo electrónico.
scan-submit = Busca tu correo electrónico
scan-another-email = Escanear otra dirección de correo electrónico
scan-featuredbreach-label = Averigua si tu <span class="bold"> { $featuredBreach } </span> cuenta se vio comprometida.
sensitive-breach-email-required = La filtración contiene información confidencial. Se requiere verificación de correo.
scan-error = Debe ser un correo electrónico válido.
signup-banner-headline = { -product-name-nowrap } detecta amenazas contra tus cuentas en línea.
signup-banner-blurb =
    Tu informe detallado de { -product-name-nowrap } muestra si la información de tus cuentas ha sido filtrada o robada.
    También te alertaremos si tus cuentas aparecen en nuevas filtraciones de sitios.
download-firefox-bar-blurb = { -product-name-nowrap } es traído a ti por el <span class="nowrap">totalmente renovado { -brand-name }</span>.
download-firefox-bar-link = Bajar { -brand-name } ahora
download-firefox-banner-blurb = Toma el control de tu navegador
download-firefox-banner-button = Bajar { -brand-name }
signup-modal-headline = Regístrate para { -product-name-nowrap }
signup-modal-blurb = Regístrate para obtener tu informe completo, alertas cuando ocurran nuevas filtraciones y consejos de seguridad de { -product-name-nowrap }.
signup-modal-close = Cerrar
get-your-report = Recibe tu informe
signup-modal-verify-headline = Verifica tu suscripción
signup-modal-verify-blurb = Enviamos un enlace de verificación a <span id="submitted-email" class="medium"></span>.
signup-modal-verify-expiration = Este enlace caduca en 24 horas.
signup-modal-verify-resend = ¿No está en la bandeja de entrada o en la de spam? Reenviar el mensaje.
# Appears after Firefox Monitor has sent a verification email to a new user. 
signup-modal-sent = ¡Enviado!
signup-with-fxa = Regístrate con tu cuenta de { -brand-name }
form-signup-placeholder = Ingresar dirección de correo electrónico
form-signup-checkbox = Recibe las últimas novedades de { -brand-Mozilla } y { -brand-name }.
sign-up = Registrarse
form-signup-error = Debe ser una dirección de correo electrónico válida
no-breaches-headline = Hasta aquí, todo bien.
found-breaches-headline = Tu información fue parte de una filtración de datos.
no-breaches =
    Tu dirección de correo no apareció en nuestro escaneo básico.
    Eso es bueno, pero las filtraciones de datos pueden suceder en todo momento y hay mucho más que puedes hacer.
    Suscríbete a { -product-name-nowrap } para obtener un informe completo, alertas al ocurrir nuevas filtraciones y consejos para proteger tus contraseñas.
featured-breach-results =
    { $breachCount ->
        [0] Tu cuenta aparece en la filtración <span class="bold">{ $featuredBreach }</span>, pero no aparece en ninguna otra filtración de datos conocida.
        [one] Tu cuenta apareció en la filtración <span class="bold">{ $featuredBreach }</span>, así como también en otra filtración.
       *[other] Tu cuenta apareció en la filtración <span class="bold">{ $featuredBreach }</span>, así como también en { $breachCount } otras filtraciones.
    }
featured-breach-not-compromised =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta no apareció en la filtración <span class="bold">{ $featuredBreach }</span>, pero apareció en otra filtración.
       *[other] Tu cuenta no apareció en la filtración <span class="bold">{ $featuredBreach }</span>, pero apareció en { $breachCount } otras filtraciones.
    }
scan-results =
    { $breachCount ->
        [0] { no-breaches }
        [one] Tu cuenta apareció en { $breachCount } filtración.
       *[other] Cuentas asociadas a tu correo aparecieron en las siguientes { $breachCount } filtraciones.
    }
show-more-breaches = Mostrar más
what-to-do-headline = Qué hacer cuando tu información ha sido expuesta en una filtración de datos
what-to-do-subhead-1 = Cambia tus contraseñas, aunque se trate de cuentas antiguas
what-to-do-blurb-1 = Si no puedes conectarte, contacta al sitio para preguntar sobre cómo puedes recuperar o cerrar la cuenta. ¿Ves una cuenta que no reconoces? El sitio puede haber cambiado de nombre o alguien haber creado una cuenta haciéndose pasar por ti.
what-to-do-subhead-2 = Si reutilizas una contraseña que ha sido expuesta, cámbiala
what-to-do-blurb-2 = Los hackers pueden intentar reusar tus contraseñas expuestas para meterse en otras cuentas. Crea contraseñas diferentes para cada sitio, especialmente para tu cuenta bancaria, correo y otros sitios donde guardes información personal.
what-to-do-subhead-3 = Toma medidas adicionales para asegurar tus cuentas bancarias
what-to-do-blurb-3 = La mayoría de las filtraciones solo expone correos y contraseñas, pero algunas incluyen información financiera sensible. Si tu cuenta de banco o los números de tu tarjeta de crédito fueron incluidos en la filtración, alerta a tu banco de un posible fraude y monitorea los movimientos en caso de cargos que no reconozcas.
what-to-do-subhead-4 = Recibe ayuda para crear buenas contraseñas y mantenerlas seguras.
what-to-do-blurb-4 = Los administradores de contraseñas como 1Password, LastPass, Dashlane y Bitwarden generan contraseñas fuertes, las almacenan de forma segura y las colocan en los sitios web por ti.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Fecha de la filtración de datos:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
confirmed = ¡Confirmado!<br />¡Estás suscrito!
confirmed-blurb = { -product-name-nowrap } te enviará un correo con un informe completo dentro de poco, y también te enviará una alerta por correo si tu cuenta aparece en una filtración futura.
confirmed-social-blurb = Si tus datos han sido filtrados, hay muchas posibilidades de que tus amigos, familia o contactos en línea también lo hayan sido. Hazles saber sobre { -product-name-nowrap }.
unsub-headline = Cancelar la suscripción de { -product-name-nowrap }
unsub-blurb = Esto eliminará tu correo de la lista de { -product-name-nowrap } y ya no recibirás alertas cuando se anuncien nuevas filtraciones.
unsub-button = Cancelar suscripción
fxa-unsub-headline = Desuscribirse de las alertas de { -product-name }.
fxa-unsub-blurb = Ya no recibirás alertas de { -product-name }. Tu { -brand-fxa } permanecerá activa, y seguirás recibiendo otras comunicaciones relacionadas con la cuenta.
unsub-survey-form-label = ¿Por qué cancelas la suscripción a las alertas de { -product-name-nowrap }?
unsub-reason-1 = Creo que las alertas no hacen que mis datos estén más seguros
unsub-reason-2 = Recibo demasiados correos electrónicos de { -product-name-nowrap }
unsub-reason-3 = No me parece que el servicio sea de gran utilidad
unsub-reason-4 = Ya he tomado medidas para proteger mis cuentas
unsub-reason-5 = Estoy usando otro servicio para vigilar mis cuentas
unsub-reason-6 = Ninguna de las anteriores
unsub-survey-thankyou = Gracias por tu opinión.
unsub-survey-error = Por favor, selecciona una.
unsub-survey-headline-v2 = Has cancelado tu suscripción.
unsub-survey-blurb-v2 =
    Ya no recibirá las alertas de { -product-name }.
    ¿Te tomarías un momento para responder una pregunta sobre tu experiencia?
unsub-survey-button = Enviar Respuesta
# Link to share Firefox Monitor on Facebook. Positioned next to Facebook logo.
share = Compartir
# Link to share Firefox Monitor on Twitter. Positioned next to Twitter logo.
tweet = Tuitear
download-firefox-quantum = Bajar { -brand-Quantum }
download-firefox-mobile = Bajar { -brand-name } para móviles
# Features here refers to Firefox browser features. 
features = Características
# beta-nightly-developer-edition refers to additional versions of Firefox Browser
beta-nightly-developer-edition = Beta, Nightly, Developer Edition
# Breach data provided by Have I Been Pwned.
hibp-attribution = Datos de la filtración proporcionados por { $hibp-link }
site-description = ¿Han sido tus cuentas filtradas o robadas en una filtración de datos? Averígualo en { -product-name }. Busca en nuestra base de datos y regístrate para recibir alertas.
confirmation-headline = Tu reporte de { -product-name } está en camino.
confirmation-blurb = Las filtraciones de datos pueden afectar a cualquiera. Haz correr la palabra para que tus amigos y familiares puedan revisar si sus cuentas en línea están seguras.
share-email = Correo
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Otros
share-twitter = La mayoría de la gente tiene más de 100 cuentas en línea. ¿Ha sido alguna de las tuyas expuesta en una filtración de datos? Averígualo.
share-facebook-headline = Averigua si has sido parte de una filtración de datos
share-facebook-blurb = ¿Han sido tus cuentas en línea expuestas a una filtración de datos?
og-site-description = Averigua si has sido parte de una filtración de datos con { -product-name }. Registrate para recibir alertas de futuras filtraciones y consejos para mantener tus cuentas seguras.
mozilla-security-blog = Blog de seguridad de { -brand-Mozilla }
# A header for a list of links to share Firefox Monitor on various social media platforms.
layout-social = Social
show-all = Mostrar todo
fxa-landing-blurb =
    Descubre qué es lo que los hackers ya saben de ti,
    y aprende cómo estar un paso adelante de ellos.
fxa-scan-label = Revisa si has aparecido en una filtración de datos.
fxa-welcome-headline = Bienvenido a { -product-name }.
fxa-welcome-blurb = Estás listo para recibir alertas si { $userEmail } aparece en una filtración de datos.
fxa-scan-another-email = ¿Quieres revisar otro correo?
# Search Firefox Monitor
fxa-scan-submit = Buscar { -product-name }
sign-up-to-check = Regístrate para verificar
sign-in = Conectarse
sign-out = Salir
full-report-headline = Tu reporte de { -product-name }
see-full-report = Ver el reporte completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionar { -brand-fxa }
fxa-download-firefox-bar-blurb = Brindado por { -brand-name }. 2 veces más rápido. Usa un 30% menos de memoria que { -brand-Chrome }.
fxa-download-firefox-bar-link = Bajar ahora
fxa-download-firefox-banner-blurb = Una mejor y más rápida carga de páginas que usa menos memoria del computador.
user-fb-compromised-headline = { $userEmail } apareció en la filtración de datos de { $breachName }
guest-fb-compromised-headline = Este correo electrónico apareció en la filtración de datos de { $breachName }.
user-zero-breaches-headline = { $userEmail } no apareció en ninguna filtración de datos.
guest-zero-breaches-headline = Este correo electrónico no apareció en ninguna filtración de datos.
user-scan-results-headline =
    { $breachCount ->
        [one] { $userEmail } apareció en 1 filtración de datos.
       *[other] { $userEmail } apareció en { $breachCount } filtraciones de datos.
    }
guest-scan-results-headline =
    { $breachCount ->
        [one] Este correo electrónico apareció en 1 filtración de datos.
       *[other] Este correo electrónico apareció en { $breachCount } filtraciones de datos.
    }
user-no-breaches-blurb = Te avisaremos si esta dirección de correo electrónico aparece en una nueva filtración.
guest-no-breaches-blurb =
    Para ver si este correo electrónico aparece en filtraciones importantes, crea una { -brand-fxa }.
    También te avisaremos si esta dirección aparece en nuevas filtraciones de datos.
user-one-breach-blurb = Esta filtración expuso la siguiente información personal.
user-fb-compromised-blurb =
    { $breachCount ->
        [one] Tu correo electrónico también apareció en { $breachCount } filtración más.
       *[other] Tu correo electrónico también apareció en otras { $breachCount } filtraciones.
    }
user-generic-fb-compromised-blurb =
    { $breachCount ->
        [one] Este correo electrónico también apareció en { $breachCount } filtración más.
       *[other] Este correo electrónico también apareció en otras { $breachCount } filtraciones.
    }
user-fb-compromised-single = Esta filtración expuso la siguiente información personal. Si todavía no cambias las contraseñas, hazlo ya.
user-generic-fb-compromised-single = Esta filtración expuso la siguiente información personal.
guest-fb-compromised-single-v2 =
    Esta filtración expuso la siguiente información personal.
    Crea una { -brand-fxa } gratuita para recibir un reporte completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
guest-fb-compromised-blurb-v2 =
    { $breachCount ->
        [one] Este correo apareció también en { $breachCount } filtración más. Crea una { -brand-fxa } gratuita para recibir un reporte completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
       *[other] Este correo apareció también en otras { $breachCount } filtraciones. Crea una { -brand-fxa } gratuita para recibir un reporte completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
    }
user-fb-not-compromised-blurb =
    { $breachCount ->
        [one] No estabas en la filtración { $breachName }, pero encontramos esa dirección de correo electrónico en otra.
       *[other] No estabas en la filtración { $breachName }, pero encontramos esa dirección de correo electrónico en otras.
    }
user-generic-fb-not-compromised-blurb =
    { $breachCount ->
        [one] Este correo electrónico no estaba en la filtración { $breachName }, pero se encontró en otra.
       *[other] Este correo electrónico no estaba en la filtración { $breachName }, pero se encontró en otras.
    }
guest-fb-not-compromised-blurb-v2 =
    { $breachCount ->
        [one] Este correo no estaba en la filtración { $breachName }, pero fue encontrado en otra. Crea una { -brand-fxa } gratuita para recibir un reporte completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
       *[other] Este correo no estaba en la filtración { $breachName }, pero fue encontrado en otras. Crea una { -brand-fxa } gratuita para recibir un reporte completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
    }
# While English doesn’t use the actual number of breaches in this sentence,
# you can use {$breachCount} to display the number of breaches in your localization.
user-found-breaches-blurb =
    { $breachCount ->
        [one] Esta filtración expuso la siguiente información personal. Te recomendamos cambiar la contraseña.
       *[other] Estas filtraciones expusieron la siguiente información personal. Te recomendamos cambiar las contraseñas.
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
    Descubre lo que los hackers ya saben acerca de ti y aprende cómo
    estar un paso por delante de ellos. Recibe alertas si aparece tu cuenta
    en las nuevas filtraciones de datos.
fxa-pwt-section-blurb =
    Las contraseñas protegen toda la información personal en tus cuentas en línea. Y
    los hackers confían en los malos hábitos, como usar la misma contraseña en todas partes o usar frases comunes (como "contraseña"), por lo que si logran entrar una cuenta,
    pueden entrar en muchas.
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
fb-landing-headline = ¿Fue expuesta tu información en la filtración de datos de { $breachName }?
copyright = Partes de este contenido son © 1999-{ $year } por colaboradores individuales de mozilla.org.
content-available = Contenido disponible bajo una licencia Creative Commons.
# Alerts is a noun
sign-up-for-alerts = Registrarse para recibir alertas
sign-up-for-fxa-alerts = Registrarse para recibir alertas de { -product-name }.
create-free-account = Crea una { -brand-fxa } gratuita para recibir un reporte completo de filtraciones anteriores, alertas sobre nuevas filtraciones e información acerca de otros servicios de { -brand-Mozilla }.
get-your-report-and-sign-up = Obtén tu reporte y suscríbete para recibir alertas.
