# String IDs beginning with "-product" and "-brand" should remain in English.
# They should not be:
# - Declined to adapt to grammatical case.
# - Transliterated.
# - Translated.
-product-name = Firefox Monitor
-product-name-nowrap = <span class="nowrap">{ -product-name }
-brand-name = Firefox
-brand-Quantum = Firefox Quantum
-brand-Mozilla = Mozilla
-brand-HIBP = He sido Pwned
layout-Firefox = { -brand-name }
# Descriptive headline for a column of links where users can give feedback, or get additional information about, Firefox Monitor.
layout-support = Soporte
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Enviar comentario
terms-and-privacy = Términos y Privacidad
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
# breach-date = the calendar date a particular data theft occurred. 
breach-date = Fecha de violación:
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Cuentas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Datos comprometidos:
confirmed = ¡Confirmado!<br />¡Estás suscrito!
unsub-button = Cancelar suscripción
unsub-survey-headline = Ya no estás suscrito.
unsub-reason-1 = Creo que las alertas no hacen que mis datos estén más seguros.
unsub-reason-2 = Recibo demasiados correos electrónicos de { -product-name-nowrap }
unsub-reason-3 = No me parece valioso el servicio
unsub-reason-6 = Ninguna de las mencionadas
unsub-survey-thankyou = Gracias por tus comentarios.
unsub-survey-error = Por favor, selecciona uno.
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
