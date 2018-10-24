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
# Link that takes the user to a Firefox Monitor survey. 
give-feedback = Dar opinión
terms-and-privacy = Términos y privacidad
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
pwt-section-blurb = Tus contraseñas protegen más que tus cuentas. Protegen cada parte de la información personal que reside en ellas. Y los piratas informáticos confían en los malos hábitos, como usar la misma contraseña en todas partes o usar frases comunes (p@ssw0rd, ¿alguien?) para que, si piratean una cuenta, puedan piratear muchas. Mirá aquí cómo proteger mejor tus cuentas.
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
        [one] Tu cuenta apareció en la violación de <span class="bold"> pr{ $featuredBreach } </span> pero no aparece en ninguna otra violación de datos conocida
       *[other] Tu cuenta apareció en la violación de <span class="bold"> { $featuredBreach } </span>, así como en otra violación.
    }
