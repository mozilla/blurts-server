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
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Ayuda
# Link that takes the user to a blog post on blog.mozilla.org about the alerts
about-firefox-alerts = Acerca de las alertas de Firefox
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Enviar comentario
terms-and-privacy = Términos y privacidad
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
pwt-headline-1 = Usa una contraseña diferente para cada cuenta
pwt-headline-2 = Crea contraseñas seguras y difíciles de adivinar
pwt-summary-2 =
    Los hackers usan miles de contraseñas comunes para intentar adivinar la tuya. 
    Cuanto más larga y aleatoria sea tu contraseña, más difícil será adivinarla.
pwt-headline-3 = Trata las preguntas de seguridad como contraseñas adicionales
pwt-summary-3 =
    Los sitios web no revisan que tus contraseñas sean adecuadas, solo que coincidan.
    Crea contraseñas largas, aleatorias y guárdalas en un lugar seguro.
pwt-headline-4 = Obtén ayuda para recordar tus contraseñas
pwt-headline-5 = Agrega seguridad adicional con la autenticación de dos factores
pwt-headline-6 = Regístrate para recibir alertas de { -product-name-nowrap }
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
download-firefox-bar-link = Bajar { -brand-name } ahora
download-firefox-banner-blurb = Toma el control de tu navegador
download-firefox-banner-button = Bajar { -brand-name }
signup-modal-headline = Regístrate para { -product-name-nowrap }
signup-modal-blurb = Regístrate para obtener tu informe completo, alertas cuando ocurran nuevas filtraciones y consejos de seguridad de { -product-name-nowrap }.
signup-modal-close = Cerrar
get-your-report = Recibe tu informe
signup-modal-verify-headline = Verifica tu suscripción
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
show-more-breaches = Mostrar más
what-to-do-headline = Qué hacer cuando tu información ha sido expuesta en una filtración de datos
what-to-do-subhead-1 = Cambia tus contraseñas, aunque se trate de cuentas antiguas
what-to-do-subhead-2 = Si reutilizas una contraseña que ha sido expuesta, cámbiala
what-to-do-subhead-3 = Toma medidas adicionales para asegurar tus cuentas bancarias
what-to-do-subhead-4 = Recibe ayuda para crear buenas contraseñas y mantenerlas seguras.
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Fecha de la filtración de datos:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
confirmed = ¡Confirmado!<br />¡Estás suscrito!
unsub-headline = Cancelar la suscripción de { -product-name-nowrap }
unsub-button = Cancelar suscripción
unsub-survey-headline = Ya no estás suscrito.
unsub-survey-form-label = ¿Por qué cancelas la suscripción a las alertas de { -product-name-nowrap }?
unsub-reason-1 = Creo que las alertas no hacen que mis datos estén más seguros
unsub-reason-2 = Recibo demasiados correos electrónicos de { -product-name-nowrap }
unsub-reason-3 = No me parece que el servicio sea de gran utilidad
unsub-reason-4 = Ya he tomado medidas para proteger mis cuentas
unsub-reason-5 = Estoy usando otro servicio para vigilar mis cuentas
unsub-reason-6 = Ninguna de las anteriores
unsub-survey-thankyou = Gracias por tu opinión.
unsub-survey-error = Por favor, selecciona una.
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
share-email = Correo
# Appears at the end of a list of email-clients and refers to any other unlisted email-client.
share-other = Otros
share-twitter = La mayoría de la gente tiene más de 100 cuentas en línea. ¿Ha sido alguna de las tuyas expuesta en una filtración de datos? Averígualo.
share-facebook-headline = Averigua si has sido parte de una filtración de datos
share-facebook-blurb = ¿Han sido tus cuentas en línea expuestas a una filtración de datos?
og-site-description = Averigua si has sido parte de una filtración de datos con { -product-name }. Registrate para recibir alertas de futuras filtraciones y consejos para mantener tus cuentas seguras.
