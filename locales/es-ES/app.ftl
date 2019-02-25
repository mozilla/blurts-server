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
hibp-notify-email-subject = Alerta de { -product-name }: Tu cuenta estuvo involucrada en un fallo de seguridad.
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
fxa-welcome-headline = Bienvenido a { -product-name }.
fxa-scan-another-email = ¿Quieres comprobar otra dirección de correo?
# Search Firefox Monitor
fxa-scan-submit = Buscar { -product-name }
sign-in = Iniciar sesión
sign-out = Cerrar sesión
full-report-headline = Tu informe de { -product-name }
see-full-report = Ver informe completo
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gestionar { -brand-fxa }
fxa-download-firefox-bar-link = Descargar ahora
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
