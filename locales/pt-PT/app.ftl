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
-brand-fxa = Conta Firefox
-brand-pocket = Pocket
-brand-lockwise = Firefox Lockwise
-brand-send = Firefox Send
-brand-fpn = Firefox Private Network

##

GitHub-link-title = GitHub
error-scan-page-token = Tentou verificar muitos endereços de email num curto período de tempo. Por motivos de segurança, bloqueámos-lhe de novas pesquisas. Irá poder tentar novamente mais tarde.
error-could-not-add-email = Não foi possível adicionar o endereço de email à base de dados.
error-not-subscribed = Este endereço de email não está subscrito no { -product-name }.
error-hibp-throttled = Demasiadas ligações para { -brand-HIBP }.
error-hibp-connect = Erro ao ligar a { -brand-HIBP }.
error-hibp-load-breaches = Não foi possível carregar as violações de dados.
error-must-be-signed-in = Deve estar autenticado na sua { -brand-fxa }.
error-to-finish-verifying = Para concluir a confirmação deste e-mail para { -product-name }, deve estar autenticado com a sua conta de e-mail primária.
home-title = { -product-name }
home-not-found = Página não encontrada.
oauth-invalid-session = Sessão inválida
scan-title = { -product-name } : Resultados da verificação
user-add-invalid-email = Email inválido
user-add-too-many-emails = Está a monitorizar o número máximo de endereços de email.
user-add-email-verify-subject = Verifique a sua subscrição do { -product-name }.
user-add-duplicate-email = Este e-mail já foi adicionado ao { -product-name }.
# Variables:
#   $preferencesLink (String) - Link to preferences
#   $userEmail (String) - User email address
user-add-duplicate-email-part-2 = Consulte as suas { $preferencesLink } para consultar o estado para { $userEmail }.
user-add-verification-email-just-sent = Não é possível enviar outro e-mail de verificação num intervalo de tempo tão curto. Por favor, tente novamente mais tarde.
user-add-unknown-error = Algo correu mal ao adicionar outro endereço de e-mail. Por favor, tente novamente mais tarde.
user-delete-unknown-error = Ocorreu algo de errado ao remover um endereço de e-mail. Por favor, tente novamente mais tarde.
error-headline = Erro
user-verify-token-error = É necessário um código de verificação.
user-verify-email-report-subject = O seu relatório do { -product-name }
user-unsubscribe-token-error = Cancelar a subscrição requer um token.
user-unsubscribe-token-email-error = Cancelar a subscrição requer um token e emailHash.
user-unsubscribe-title = { -product-name } : Cancelar subscrição
pwt-section-headline = Palavras-passe mais fortes = melhor proteção
landing-headline = O seu direito de estar a salvo de piratas informáticos começa aqui.
scan-placeholder = Inserir endereço de e-mail
scan-submit = Pesquisar pelo seu e-mail
scan-error = Tem de ser um email válido.
download-firefox-banner-button = Transferir o { -brand-name }
# Appears after Firefox Monitor has sent a verification email to a new user.
signup-modal-sent = Enviado!
sign-up = Registar
form-signup-error = Tem de ser um email válido
# breach-date = the calendar date a particular data theft occurred.
breach-date = Data da violação de dados
# compromised accounts = the total number of user accounts exposed in data breach
compromised-accounts = Contas comprometidas:
# compromised-data = the kind of user data exposed to hackers in data breach.
compromised-data = Dados comprometidos:
unsub-headline = Cancelar subscrição de { -product-name-nowrap }
unsub-blurb = Isto irá remover o seu email da lista do { -product-name-nowrap } e não irá receber mais alertas quando novas brechas são anunciadas.
unsub-button = Cancelar subscrição
# Breach data provided by Have I Been Pwned.
# Variables:
#   $hibp-link (String) - Link to Have I Been Pwned
hibp-attribution = Dados de brechas fornecidos por { $hibp-link }
share-twitter = A maioria das pessoas tem cerca de 100 contas na Internet. Será que alguma das suas foi exposta numa violação de dados? Vamos descobrir.
share-facebook-headline = Descubra se fez parte de uma violação de dados
share-facebook-blurb = Alguma das suas contas na Internet foi exposta numa violação de dados?
og-site-description = Descubra se fez parte de uma violação de dados com o { -product-name }. Registe-se para receber alertas acerca de futuras violações de dados e receba dicas para manter as suas contas seguras.
show-all = Mostrar todas
fxa-scan-another-email = Pretende verificar outro email?
sign-out = Terminar sessão
# Manage Firefox Account, link to page where account holders can change their account settings.
manage-fxa = Gerir { -brand-fxa }
have-an-account = Já tem uma conta?
fxa-pwt-summary-2 =
    Palavras-passe curtas e de palavra única são fáceis de adivinhar para os piratas informáticos.
    Utilize pelo menos duas palavras e uma combinação de letras, dígitos e caracteres especiais.
fxa-pwt-summary-4 =
    Os gestores de palavras-passe como 1Password, LastPass, Dashlane e Bitwarden armazenam as suas
    palavras-passe em segurança e preenchem-nas em websites por si. Estes também lhe ajudam a fazer palavras-passe mais fortes.
fxa-pwt-summary-6 =
    As brechas de dados estão em ascensão. Se a sua informação pessoal aparecer numa nova brecha de dados,
    o { -product-name } irá enviar um alerta — para que possa tomar medidas e proteger as suas contas.
fxa-what-to-do-blurb-1 =
    Se não conseguir iniciar sessão, contacte o website para perguntar como atualizá-la.
    Vê uma conta que não reconhece? Os seus dados podem ter sido vendidos
    ou redistribuídos. Esta também pode ser uma conta que se esqueceu que
    criou ou uma empresa que mudou de nome.
fxa-what-to-do-subhead-2 = Pare de utilizar a palavra-passe exposta e altere-a em todos os lugares em que a utilizou.
fxa-wtd-blurb-2 =
    Os piratas informáticos podem tentar utilizar essa mesma palavra-passe e o seu e-mail para aceder a outras contas.
    Crie uma palavra-passe diferente e única para cada conta, especialmente para a sua conta bancária,
    email e outros sites onde guarda informação pessoal.
fxa-what-to-do-blurb-3 =
    A maioria das brechas apenas expõem emails e palavras-passe, mas algumas incluem informação financeira sensível.
    Se a sua conta bancária ou números de cartão de crédito foram expostos, alerte o seu banco sobre possíveis fraudes.
    Monitorize os extratos por cobranças que não reconhece.
fxa-what-to-do-subhead-4 = Obtenha ajuda para se lembrar de todas as suas palavras-passe e mantê-las seguras.
fxa-what-to-do-blurb-4 =
    Os gestores de palavras-passe como 1Password, LastPass, Dashlane e Bitwarden armazenam as suas
    palavras-passe em segurança e preenchem-nas em websites por si. Utilize um gestor de palavras-passe
    no seu telefone e computador, para que não precise de se lembrar de todas elas.
# Alerts is a noun
sign-up-for-alerts = Registar-se para receber alertas
# Link title
frequently-asked-questions = Perguntas frequentes
about-firefox-monitor = Acerca do { -product-name }
# Link title
preferences = Preferências
# Link title
home = Início
# Link title
security-tips = Dicas de segurança
fxa-account = { -brand-fxa }
# Aria button message to open menu. "Open Firefox Account Navigation"
open-fxa-menu = Abrir navegação do { -brand-fxa }
# Appears above a snippet about the breach most recently reported to Firefox Monitor.
latest-breach = ÚLTIMA VIOLAÇÃO DE DADOS ADICIONADA
# Link title
more-about-this-breach = Mais acerca desta brecha
take-control = Retome o controlo dos seus dados pessoais.
cant-stop-hackers = Não pode impedir que os piratas informáticos sejam piratas. Mas pode evitar os maus hábitos que lhes facilitam o trabalho.
read-more-tips = Ler mais dicas de segurança
how-hackers-work = Compreender como é que os piratas informáticos trabalham
monitor-your-online-accounts = Registe-se para a monitorização de violações de dados com uma { -brand-fxa }.
stay-alert = Mantenha-se atento às novas violações de dados
if-your-info = Se a sua informação apareceu numa nova violação de dados, iremos enviar-lhe um alerta.
search-all-emails = Procure por violações de dados para todos os seus endereços de e-mail e receba alertas sobre novas ameaças.
monitor-several-emails = Monitorize vários emails
take-action = Tome medidas para proteger as suas contas
keep-your-data-safe = Descubra o que precisa de fazer para manter os seus dados seguros de cibercriminosos.
website-breach = Brecha de website
sensitive-breach = Brechas de websites sensíveis
data-aggregator-breach = Brecha agregadora de dados
unverified-breach = Brecha não verificada
spam-list-breach = Brecha de listas de spam
website-breach-plural = Brechas de websites
sensitive-breach-plural = Brechas sensíveis
data-aggregator-breach-plural = Brechas agregadoras de dados
unverified-breach-plural = Brechas não verificadas
spam-list-breach-plural = Brechas de listas de spam
what-data = Que dados foram comprometidos:
sensitive-sites = Como é que o { -product-name } trata sites sensíveis?
sensitive-sites-copy =
    { -product-name } só revela as contas associadas com a estes 
    tipos de violações de dados depois de um endereço de e-mail ter sido confirmado. Isto significa que 
    você é a única pessoa que pode ver se a sua informação estava numa violação de dados (a menos que 
    alguém tenha acesso à sua conta de e-mail).
delayed-reporting-headline = Porque demorou tanto tempo até esta violação de dados ser reportada?
delayed-reporting-copy =
    Pode demorar meses ou até mesmo anos para as credenciais expostas 
    numa violação de dados aparecerem na dark web. As violações de dados são adicionadas à nossa base de dados 
    assim que são descobertas e validadas.
about-fxm-headline = Acerca do { -product-name }
about-fxm-blurb = { -product-name } indica que as suas contas online estiveram envolvidas numa fuga de dados. Descubra se esteve numa fuga de dados, obtenha alertas sobre novas fugas e execute os procedimentos para proteger as suas contas onlines. { -product-name } é fornecido por { -brand-Mozilla }.
fxm-warns-you =
    O { -product-name } indica se o seu endereço de e-mail foi exposto 
    numa violação de dados na Internet. Confirme se a sua informação foi exposta, aprenda a 
    proteger melhor as suas contas na Internet e receba alertas caso o seu endereço de e-mail 
    apareça numa nova violação de dados.
# How Firefox Monitor works
how-fxm-works = Como é que o { -product-name } funciona
how-fxm-1-headline = Realizar uma pesquisa básica
how-fxm-1-blurb =
    Procure pelo seu endereço de e-mail em violações de dados públicas desde 
    2007. Esta pesquisa básica vai apresentar a maior parte das violações de dados, mas não 
    as que contenham dados pessoais sensíveis.
how-fxm-2-headline = Registe-se para monitorizar violações de dados
how-fxm-2-blurb =
    Crie uma { -brand-fxa } para monitorizar o seu e-mail relativamente a violações de dados atuais. 
    Assim que confirmar o seu e-mail, irá também receber um relatório completo sobre violações de dados anteriores, 
    incluindo violações de dados sensíveis.
how-fxm-3-headline = Receba notificações no seu navegador
how-fxm-3-blurb =
    Se utilizar o { -brand-name }, irá receber uma notificação se visitar um 
    site cujos dados tenham sido acedidos. Saiba imediatamente se faz parte dessa violação de dados 
    e o que pode fazer relativamente a isso.
wtd-after-website = O que fazer depois de uma violação de dados num site
wtd-after-data-agg = O que fazer depois de uma violação de dados num agregador de dados
what-is-data-agg = O que é um agregador de dados?
what-is-data-agg-blurb =
    Agregadores ou agentes de dados, recolhem informações de registos 
    públicos e adquirem dados de outras empresas. Trabalham estes dados para os venderem a outras empresas 
    para fins de marketing. As vítimas destas violações de dados têm uma probabilidade mais baixa de fraude financeira 
    mas os piratas informáticos podem utilizar estes dados para se fazerem passar por estas pessoas ou para criarem perfis.
protect-your-privacy = Proteja a sua privacidade online
no-pw-to-change = Ao contrário de uma violação de dados num site, não há uma palavra-passe para alterar.
avoid-personal-info = Evite utilizar informação pessoal nas palavras-passe
avoid-personal-info-blurb = É fácil encontrar aniversários, moradas e nomes de membros de família online. Mantenha estas palavras fora das suas palavras-passe.

## What to do after data breach tips

change-pw = Altere a sua palavra-passe
change-pw-site = Altere a palavra-passe para este site
even-for-old = Mesmo para as contas antigas, é importante atualizar a sua palavra-passe.
make-new-pw-unique = Torne a nova palavra-passe diferente e única
strength-of-your-pw = A força das suas palavras-passe tem um impacto direto na sua segurança online.
create-strong-passwords = Como criar palavras-passe fortes
stop-reusing-pw = Pare de reutilizar as mesmas palavras-passe
create-unique-pw = Crie palavras-passe únicas e guarde-as num lugar seguro, tal como um gestor de palavras-passe.
five-myths = 5 mitos sobre os gestores de palavras-passe
create-a-fxa = Crie uma { -brand-fxa } para ter acesso ao seu relatório completo das violações de dados e para receber alertas.
feat-security-tips = Dicas de segurança para proteger as suas contas
feat-sensitive = Pesquisa avançada em violações de dados sensíveis
feat-enroll-multiple = Registar vários e-mails para a monitorização de violações de dados
# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (Integer) - Number of breaches
appears-in-x-breaches =
    { $breachCount ->
        [one] Aparece em { $breachCount } violação de dados conhecida.
       *[other] Aparece em { $breachCount } violações de dados conhecidas.
    }
check-for-breaches = Pesquisar por violações de dados
find-out-what-hackers-know = Descubra o que os piratas informáticos já sabem sobre si e aprenda como ficar um passo à frente dos mesmos.
get-email-alerts = Mantenha-se seguro: receba alertas por e-mail quando a sua informação aparecer numa falha conhecida
search-for-your-email = Pesquise pelo seu endereço de e-mail em violações de dados públicas de dados desde 2007.
back-to-top = Voltar ao topo
comm-opt-0 = Enviar um e-mail para mim caso um dos meus endereços de e-mail abaixo aparecer numa violação de dados.
# Variables:
#   $primaryEmail (String) - User primary email address
comm-opt-1 = Enviar todos alertas de violações de dados para { $primaryEmail }.
stop-monitoring-this = Pare de monitorizar este e-mail.
resend-verification = Reenviar e-mail de verificação
add-new-email = Adicionar um novo endereço de e-mail
send-verification = Enviar ligação de verificação
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-summary = Resumo da violação de dados
show-breaches-for-this-email = Mostrar todas as violações de dados para este e-mail.
link-change-primary = Alterar endereço de e-mail primário
remove-fxm = Remover { -product-name }
remove-fxm-blurb =
    Desativar os alertas de { -product-name }. A sua { -brand-fxa } continuará ativa e poderá receber 
    outras comunicações relacionadas com a conta.
# Button title
manage-email-addresses = Gerir endereços de e-mail
# Link title
latest-breach-link = Veja se esteve nesta violação de dados

## Variables:
##   $userName (String) - Username

welcome-back = Bem-vindo(a) de volta, { $userName }!
welcome-user = Bem-vindo(a), { $userName }!

##

breach-alert-subject = O { -product-name } encontrou o seu e-mail numa nova violação de dados.
your-info-was-discovered-headline = Os seus dados foram descobertos numa nova violação de dados.
your-info-was-discovered-blurb =
    Registou-se para receber alertas do { -product-name } 
    quando o seu e-mail aparece numa violação de dados. Eis o que sabemos sobre esta violação de dados.
what-to-do-after-breach = O que fazer depois de uma violação de dados:
ba-next-step-1 = Altere a sua palavra-passe para uma palavra-passe forte e única.
ba-next-step-blurb-1 =
    Uma palavra-passe forte utiliza uma combinação de letras maiúsculas e minúsculas, 
    carateres especiais e números. Não contem informações pessoais tais como 
    a sua morada, data de nascimento ou apelidos.
ba-next-step-2 = Nunca mais volte a utilizar a palavra-se exposta.
ba-next-step-blurb-2 =
    Os cibercriminosos poderão encontrar a sua palavra-passe na "dark web" e utilizá-la 
    para iniciar a sessão nas suas outras contas. O melhor modo para proteger as suas 
    contas é utilizar palavras-passe únicas para cada uma.
ba-next-step-3 = Obtenha ajuda para criar melhores palavras-passe e as manter seguras.
ba-next-step-blurb-3 =
    Utilize um gestor de palavras-passe para criar palavras-passe fortes e únicas. Os gestores de palavras-passe guardam 
    com segurança todas as suas credenciais para que possa aceder às mesmas em todos os seus dispositivos.
faq1 = Eu não reconheço esta empresa ou site. Porque é que eu estou nesta violação de dados?
faq2 = Porque é que demorou tanto para me notificarem desta violação de dados?
faq3 = Como é que eu sei que é um e-mail legitimo do { -product-name }?
# Variables:
#   $breachCount (Integer) - Number of breaches
new-breaches-found =
    { $breachCount ->
        [one] ENCONTRADA { $breachCount } NOVA VIOLAÇÃO DE DADOS
       *[other] ENCONTRADAS { $breachCount } NOVAS VIOLAÇÕES DE DADOS
    }
sign-up-headline-1 = Receba alertas atuais com uma { -brand-fxa }.
account-not-required = O navegador { -brand-name } não é obrigatório para uma { -brand-fxa }. Poderá receber informações sobre os serviços da { -brand-Mozilla }.

## Variables:
##   $breachName (String) - Number of the breach

was-your-info-exposed = A sua informação foi exposta na violação de dados de { $breachName }?
fb-not-comp = Este e-mail não apareceu na violação de dados { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-breaches-found =
    { $breachCount ->
        [one] Contudo, este apareceu em { $breachCount } outra violação de dados.
       *[other] Contudo, este apareceu em { $breachCount } outras violações de dados.
    }
fb-comp-only = Este e-mail apareceu na violação de dados { $breachName }.
# Variables:
#   $breachCount (Integer) - Number of breaches
fb-comp-and-others =
    { $breachCount ->
        [one] Este e-mail apareceu em { $breachCount } violação de dados conhecida, incluindo { $breachName }.
       *[other] Este e-mail apareceu em { $breachCount } violações de dados conhecidas, incluindo { $breachName }.
    }

##

no-other-breaches-found = Não foram encontradas outras violações de dados a partir de uma pesquisa básica.
no-results-blurb = Lamentamos, mas esta violação de dados não está na nossa base de dados.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-note =
    <span>O seu e-mail não aparece nesta fuga, 
    mas o seu número de telefone ainda pode estar vulnerável.</span> Algumas das contas 
    comprometidas na fuga do Facebook incluíam números de telefone e outras 
    informações pessoais, mas não endereços de e-mail. Se já tinha criado 
    alguma conta no Facebook - mesmo que não a utilize agora - recomendamos que você 
    siga estes passos para se proteger
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-1-headline = <span>Defina as suas informações como “Apenas eu” ou outra configuração não pública no <a>seu perfil do Facebook</a>.</span>
facebook-breach-what-to-do-1-copy =
    Durante esta fuga, os hackers extraíram informações de perfil 
    que foram definidas como “disponíveis ao público” ou “partilhadas com amigos”.
    Estas informações podem ser combinadas com outros dados para aceder ainda a mais
    informações pessoais e contas suas.
# This string contains nested markup that is later used to style and link the text inside of it.
# Please do not modify or remove "<a>", "</a>", "<span>" and "</span>".
facebook-breach-what-to-do-2-headline =
    <span>Altere a palavra-passe, PIN ou outras credenciais de segurança nas suas <a>
    contas da sua operadora de comunicações</a> para evitar troca de SIM</span>.
facebook-breach-what-to-do-2-copy =
    Troca de SIM, também chamada de apropriação de SIM,
    é quando um hacker utiliza números de telefone, data de nascimento e outros dados para se apropriar
    do número de telemóvel de uma pessoa e assim aceder ao respetivo e-mail, redes sociais e até mesmo a contas financeiras.
facebook-breach-what-to-do-3 = Consulte todas as recomendações na nossa página de fuga do Facebook
# "Appears in-page as: Showing: All Breaches"
currently-showing = A mostrar:

## Updated error messages

error-bot-headline = Pesquisas temporariamente suspensas
error-bot-blurb =
    Nós estamos preocupados que seja um "bot" porque pesquisou 
    vários endereços de e-mail num curto espaço de tempo. Por agora, as novas 
    pesquisas estão bloqueadas. Pode tentar novamente mais tarde.
error-csrf-headline = A sessão expirou
error-csrf-blurb = Selecione o seu botão de retroceder do seu navegador, recarregue a página e tente novamente.
error-invalid-unsub = Como cancelar a subscrição dos alertas do { -product-name }
error-invalid-unsub-blurb =
    Terá de cancelar a subscrição a partir de um dos 
    e-mails que o { -product-name } lhe enviou. Procure na sua caixa de correio por mensagens 
    de { -brand-team-email }. Selecione a ligação de cancelamento da subscrição no final da mensagem.
# This string is displayed under a large numeral that indicates the total number
# of email address a user has signed up for monitoring. Don’t add $emails to
# your localization, because it would result in the number showing twice.
email-addresses-being-monitored =
    { $emails ->
        [one] Endereço de email a ser monitorizado
       *[other] Endereços de email a serem monitorizados
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that exposed a user’s password. Don’t add $passwords to
# your localization, because it would result in the number showing twice.
passwords-exposed =
    { $passwords ->
        [one] Palavra-passe exposta em todas as brechas
       *[other] Palavras-passe expostas em todas as brechas
    }
# This string is displayed under a large numeral that indicates the total number
# of data breaches that have exposed the user’s information. Don’t add $breaches to
# your localization, because it would result in the number showing twice.
known-data-breaches-exposed =
    { $breaches ->
        [one] Brecha de dados conhecida expôs a sua informação
       *[other] Brechas de dados conhecidas expuseram a sua informação
    }
# Button
see-additional-breaches = Ver brechas adicionais
# Variables:
#   $breachCount (Integer) - Number of breaches
scan-results-known-breaches =
    { $breachCount ->
        [one] Este email apareceu numa brecha de dados conhecida.
       *[other] Este email apareceu em { $breachCount } brechas de dados conhecidas.
    }
# This string is shown at the top of the scan results page and is followed
# by the email address that the user searched.
# In page, it reads "Results for: searchedEmail@monitor.com"
# Variables:
#   $userEmail (String) - User email address
results-for = Resultados para: { $userEmail }
other-monitored-emails = Outros emails monitorizados
email-verification-required = Verificação de email requerida
fxa-primary-email = Email do { -brand-fxa } - Primário
what-is-a-website-breach = O que é uma violação de dados do site?
website-breach-blurb = Uma violação de dados de um site ocorre quando os cibercriminosos roubam, copiam ou expõem a informação pessoal de contas na Internet. Geralmente, é a consequência dos piratas informáticos encontrarem um ponto fraco na segurança do site. As violações de dados também podem acontecer quando a informação sobre contas é divulgada de forma acidental.
security-tips-headline = Dicas de segurança para se proteger contra piratas informáticos
steps-to-protect = Passos a tomar para proteger a sua identidade online
take-further-steps = Mais passos para proteger a sua identidade
alert-about-new-breaches = Alertar-me acerca de novas brechas
see-if-youve-been-part = Veja se fez parte de uma violação de dados na Internet.
get-ongoing-breach-monitoring = Obtenha a monitorização contínua de violações de dados para vários endereços de e-mail.
# This is a button and follows a headline reading "Was your info exposed in the ___ breach?"
find-out = Descobrir
new-unsub-error = Terá de cancelar a subscrição de um dos e-mails que o { -product-name } lhe enviou.
# Variables:
#   $breachCount (Integer) - Number of breaches
other-known-breaches-found =
    { $breachCount ->
        [one] Contudo, este apareceu em { $breachCount } outra violação de dados conhecida.
       *[other] Contudo, este apareceu em { $breachCount } outras violações de dados conhecidas.
    }
# This string appears on breach detail pages and is followed by a list
# of data classes that the breach exposed.
additional-information-including = Informação adicional, incluindo:
# Title
email-addresses-title = Endereços de e-mail
# This is a section headline on the breach detail page that appears above
# a short summary about the breach.
breach-overview-title = Sinopse
# This is a standardized breach overview blurb that appears on all breach detail pages.
# $breachTitle is the name of the breached company or website.
# $breachDate and $addedDate are calendar dates.
breach-overview-new = A { $breachDate }, { $breachTitle } foi comprometido. Assim que a violação de dados foi descoberta e confirmada, foi adicionada à nossa base de dados a { $addedDate }.
# Title appearing on the Preferences dashboard.
monitor-preferences = { -product-short-name } - Preferências
# When a user is signed in, this appears in the drop down menu
# and is followed by the user's primary Firefox Account email.
# Variables:
#   $userEmail (String) - User email address
signed-in-as = Sessão iniciada como: { $userEmail }
# Appears on the All Breaches page and is followed by a list of filter options
# that a user can filter the visible breaches by.
filter-by = Filtrar por categoria:
# Title that appears in the mobile menu bar and opens the mobile menu when clicked.
menu = Menu
to-affected-email = Enviar alertas de violações de dados para o endereço de e-mail afetado
# This string appears in a banner at the top of each page and is followed by a "Learn More" link.
join-firefox = Existe um modo para proteger a sua privacidade. Registe-se em { -brand-name }.
# Link title
learn-more-link = Saber mais.
email-sent = Email enviado!
# Form title
want-to-add = Quer adicionar outro email?
# This is part of a confirmation message that appears after a user has submitted
# the form to add an additional email to Firefox Monitor.
# Variables:
#   $userEmail (String) - User email address
verify-the-link = Verifique a ligação enviada para { $userEmail } para adicioná-la ao { -product-name }.

## These are part of a confirmation page that appears after a user has verified
## an additional email to Firefox Monitor.

email-verified = E-mail confirmado com sucesso!
# Variables:
#   $email (String) - User email address
email-added-to-subscription = Iremos alertá-lo se { $email } aparecer numa violação de dados.
# This message is displayed after the user has verified their email address.
# { $nestedSignInLink } is replaced by a link, using sign-in-nested as text ("sign in" for English).
email-verified-view-dashboard = Para ver e gerir todos os e-mails que registou para a monitorização de violações de dados, { $nestedSignInLink }.
# This message is used as a text for the subscribe link in email-verified-view-dashboard
sign-in-nested = iniciar sessão

##

# This is part of a confirmation message that appears after a user has submited the
# form to add an additional email to Firefox Monitor. { $preferencesLink } is a link
# to the Preferences page. The code and text for the link is generated elsewhere
# using the { preferences } string.
# Variables:
#   $preferencesLink (String) - Link to preferences
manage-all-emails = Gira todos os endereços de email nas { $preferencesLink }.
# This string is a header on the user preferences page and
# appears above a check-box list of user options which allow
# the user to choose whether or not they want to receive breach
# alerts for all of their monitored email addresses to a single
# email address.
breach-alert-notifications = Notificações de alerta de brecha
# This string is a label for the calendar date a breach is added to the database
# and is followed by that date.
breach-added-label = Brecha adicionada:
how-hackers-work-desc = Proteja as palavras-passe de cibercriminosos, dado que são o que mais lhes interessa.
what-to-do-after-breach-desc = Protejas as suas contas para manter a sua informação fora das mãos erradas.
create-strong-passwords-desc = Torne as suas palavras-passe fortes, seguras e difíceis de adivinhar.
steps-to-protect-desc = Compreenda as ameaças mais comuns e saiba ao que deve estar atento.
five-myths-desc = Saiba como evitar más práticas para palavras-passe que facilitam o trabalho aos piratas.
take-further-steps-desc = Descubra como mitigar os riscos de roubo de identidade que levam a perdas financeiras.
# This message appears after a user has successfully updated their communication settings.
changes-saved = Alterações guardadas!
# Section headline
rec-section-headline = O que fazer para esta violação de dados
rec-section-subhead = Recomendamos que siga estes passos para manter os seus dados pessoais seguros e proteger a sua identidade digital.
# Section headline
rec-section-headline-no-pw = O que fazer para proteger os seus dados pessoais
rec-section-subhead-no-pw = Embora as palavras-passe não tenham sido expostas nesta violação de dados, ainda existem passos que pode executar para proteger melhor os seus dados pessoais.
# Button
see-additional-recs = Ver recomendações adicionais

## This string contains nested markup that becomes a link later in the code.
## Please do not modify or remove "<a>" and "</a>".

# Variables:
#   $affectedEmail (String) - User email address
resolve-top-notification = { $affectedEmail } apareceu nesta violação de dados. <a>O que fazer a seguir</a>
# Variables:
#   $numAffectedEmails (Integer) - Number of affected email address
resolve-top-notification-plural =
    { $numAffectedEmails ->
        [one] { $numAffectedEmails } endereço de e-mail seu apareceu nesta violação de dados. <a>O que fazer a seguir</a>
       *[other] { $numAffectedEmails } endereços de e-mail seus apareceram nesta violação de dados. <a>O que fazer a seguir</a>
    }

##

marking-this-subhead = Marcar esta violação de dados como resolvida
# This string contains nested markup that is later used to style the text inside of it.
# Please do not modify or remove "<span>" and "</span>".
marking-this-body =
    <span>Depois de ter tomado as medidas necessárias para minimizar o impacto desta violação de dados</span>,
    pode marcar a situação como resolvida. Pode ainda, a qualquer momento, aceder aos detalhes 
    sobre a violação de dados no seu painel.
mark-as-resolve-button = Marcar como resolvida
marked-as-resolved-label = Marcado como resolvido
undo-button = Desfazer
confirmation-1-subhead = Boa! Acabou de resolver a sua primeira violação de dados.
confirmation-1-body = Mantenha o ritmo. Consulte o seu painel para ver se existem mais coisas a resolver.
confirmation-2-subhead = Tomem lá, piratas!
confirmation-2-body = Está a tomar medidas importantes para proteger as suas contas na Internet.
confirmation-3-subhead = Mais uma resolvida. Bom trabalho!
# This string contains nested markup that becomes a link later in the code.
# Please do not modify or remove "<a>" and "</a>".
confirmation-3-body = A sua nova palavra-passe é única, forte e difícil de adivinhar? <a>Descubra se sim</a>
generic-confirmation-subhead = Esta violação de dados foi marcada como resolvida
# Variables:
#   $numUnresolvedBreaches (Integer) - Number of resolved breaches
generic-confirmation-message =
    { $numUnresolvedBreaches ->
        [one] Para ver a violação de dados remanescente, aceda ao seu painel.
       *[other] Para ver as violações de dados remanescentes, aceda ao seu painel.
    }
return-to-breach-details-link = Voltar aos detalhes da violação de dados
go-to-dashboard-link = Ir para o painel
# This string appears above a breach resolution progress bar and indicates
# the percentage of breaches a user has resolved. For instance, "27% complete".
# Variables:
#   $percentComplete (String) - Completion percentage
progress-percent-complete = { $percentComplete }% concluídas
# This string appears in the purple callouts at the top of the user dashboard and shows
# the total number of breaches a user has resolved. For instance, "5 Resolved".
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
num-resolved =
    { $numResolvedBreaches ->
        [one] { $numResolvedBreaches } resolvida
       *[other] { $numResolvedBreaches } resolvidas
    }
progress-intro-subhead = Novo no { -product-name }: marque violações de dados como resolvidas
progress-intro-message =
    Depois de analisar os detalhes sobre uma violação de dados e tomar medidas para proteger
    as suas informações pessoais, pode marcar as violações de dados como resolvidas.
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
#   $numTotalBreaches (Integer) - Total number of breaches
progress-status =
    { $numTotalBreaches ->
        [one] { $numResolvedBreaches } (de { $numTotalBreaches }) violação de dados de  marcada como resolvida
       *[other] { $numResolvedBreaches } (de { $numTotalBreaches }) violações de dados marcadas como resolvidas
    }
progress-complete = Todas as violações de dados conhecidas foram marcadas como resolvidas

## These strings contain nested markup that is later used to style the text inside of it.
## Please do not modify or remove "<span>" and "</span>".

progress-message-1 =
    <span>Começou bem!</span> Analise as violações de dados remanescentes para saber
    que medidas deve adotar.
progress-message-2 =
    <span>Continue assim!</span> Pequenas alterações, como atualizar palavras-passe, têm um grande impacto
    na manutenção da confidencialidade das suas informações pessoais.
progress-message-3 = <span>Bom trabalho ao resolver estas violações de dados!</span> Continue assim. Ainda tem mais algumas para resolver.
progress-message-4 = <span>Muito perto!</span> Está quase na linha de chegada.
progress-complete-message =
    <span>Sabe bem, não é?</span> Se quiser continuar, é um bom momento para
    atualizar outras credenciais com palavras-passe mais fortes.

##

resolve-this-breach-link = Resolver esta violação de dados
# This string appears in resolved breach cards and is followed by
# the date the user marked the breach as resolved.
marked-resolved = Marcada como resolvida:
hide-resolved-button = Ocultar resolvidas
show-resolved-button = Mostrar resolvidas
# Variables:
#   $numPasswords (Integer) - Number of exposed passwords
unresolved-passwords-exposed =
    { $numPasswords ->
        [one] Palavra-passe exposta em violações de dados não resolvidas
       *[other] Palavras-passe expostas em violações de dados não resolvidas
    }
# Variables:
#   $numResolvedBreaches (Integer) - Number of resolved breaches
known-data-breaches-resolved =
    { $numResolvedBreaches ->
        [one] Violação de dados conhecida marcada como resolvida
       *[other] Violações de dados conhecidas marcadas como resolvidas
    }
# A status indicator that appears in the top right corner of new breach cards
new-breach = Nova
mobile-promo-headline = Traga o { -brand-name } para o seu telemóvel ou tablet
mobile-promo-body = Navegação rápida, privada e segura onde quer que vá. Encontre o { -brand-name } no Google Play e App Store.
mobile-promo-cta = Obtenha o { -brand-name } no Android e iOS
promo-lockwise-headline = Leve as suas palavras-passe para todo o lado
lockwise-promo-body = Controle as suas credenciais em todos os dispositivos. Tenha acesso às mesmas, com segurança, no seu computador, telefone ou tablet.
promo-lockwise-cta = Obter o { -brand-lockwise }
fpn-promo-headline = Mascare a sua localização de sites e de rastreadores
promo-fpn-body = O { -brand-fpn } mascara o seu endereço IP real, despistando os sites e coletores de dados que criam um perfil seu com recurso a anúncios.
promo-fpn-cta = Obtenha o { -brand-fpn }
monitor-promo-headline = Seja informado de novas violações de dados
monitor-promo-body = Seja notificado da próxima vez que as suas informações pessoais forem expostas numa violação de dados conhecida.
ecosystem-promo-headline = Proteja a sua vida na Internet com produtos de privacidade focados na privacidade
ecosystem-promo-body = Todos os produtos { -brand-name } honram o nosso compromisso com os dados pessoais: recolher menos; manter seguro; sem segredos.
promo-ecosystem-cta = Ver todos os produtos
steps-to-resolve-headline = Passos para resolver esta violação
vpn-promo-headline = Agora é o momento de reforçar a sua segurança na Internet.
vpn-promo-copy = A rede privada virtual da { -brand-Mozilla } ajuda a proteger a sua ligação com a Internet de piratas e de espiões.
vpn-promo-cta = Obter a { -brand-mozilla-vpn }
vpn-promo-headline-new = Economize 50% com uma subscrição anual
vpn-promo-copy-new = Proteja os seus dados na Internet - e escolha um plano de subscrição de VPN que melhor se adeque si.

## VPN promotional banner.  HTML tags should not be translated, e.g. `<em>`

# Variables:
#   $ip-location (String) - User's IP location is determined dynamically by 3rd-party,
#                           eg: "Your location: Los Angeles, CA".  The 3rd-party service
#                           provides its own localization.
vpn-banner-location = A sua localização: { $ip-location }
vpn-banner-protect-yourself-with-vpn = <em>Proteja-se</em> com a { -brand-mozilla-vpn }.
vpn-banner-protected-with-vpn = <em>Protegido</em> com a { -brand-mozilla-vpn }.
vpn-banner-title-1 = Está protegido — obrigado por utilizar a { -brand-mozilla-vpn }.
vpn-banner-title-2 = A sua localização pode ser monitorizada se não utilizar uma VPN.
vpn-banner-subtitle-2 = Proteja a sua localização e navegue com segurança com 3 passos
vpn-banner-status-protected = Estado atual: <em>Protegido ✓</em>
vpn-banner-status-not-protected = Estado atual: <em>Não protegido ⚠</em>
# Variables:
#   $ip-address (String) - User's IP address is determined dynamically, eg: "IP address: 192.168.1.1"
vpn-banner-ip-address = Endereço de IP: { $ip-address }
vpn-banner-step-1 = Subscrever a { -brand-mozilla-vpn }
vpn-banner-step-2 = Selecione uma localização para a VPN
vpn-banner-step-3 = Ative a VPN e navegue com segurança
vpn-banner-cta = Obter a { -brand-mozilla-vpn }
# button to expand panel
vpn-banner-cta-expand = Expandir
# button to close panel
vpn-banner-cta-close = Fechar

## Relay and VPN educational/ad units

ad-unit-relay-cta = Saber mais sobre o { -brand-relay }
ad-unit-vpn-cta = Saiba mais sobre a { -brand-mozilla-vpn }
# ad 1 heading
ad-unit-1-how-do-you-keep = Como manter o seu endereço de e-mail em segredo?
# ad 2 heading
ad-unit-2-do-you-worry = Preocupa-se com a segurança das redes sem fio públicas?
# ad 3 heading
ad-unit-3-stay-in-the-game = Mantenha-se atualizado!
ad-unit-3-lets-you-keep = A { -brand-mozilla-vpn } permite manter uma conexão estável segura e protegida enquanto joga ou transmite filmes.
# ad 3 list item 1
ad-unit-3-prevent-throttling = Previna limitações
# ad 3 list item 2
ad-unit-3-be-anywhere = Esteja em qualquer lugar do mundo
# ad 3 list item 3
ad-unit-3-access-more = Aceda a mais
# ad 4 heading
ad-unit-4-shopping-with = Compras com Máscaras de E-mail
ad-unit-4-want-to-buy = Quer comprar algo online e não conhece ou confia totalmente na loja?
ad-unit-4-shop-online = Utilize um e-mail virtual sempre que fizer compras online. Tenha a confirmação enviada para o seu e-mail real e desative o e-mail virtual a qualquer momento.
# ad 5 heading
ad-unit-5-on-the-go = Em movimento com { -brand-relay }
ad-unit-5-instantly-make = Crie instantaneamente uma máscara de e-mail personalizada em qualquer momento e lugar que vá!
# ad 5 subheading 1
ad-unit-5-connect-on-the-go = Conecte-se em qualquer lugar
ad-unit-5-privately-sign-in = Use a sua máscara de e-mail quando quiser fazer iniciar sessão privadamente na rede Wi-Fi pública ou do seu café favorito
# ad 5 subheading 2
ad-unit-5-email-receipts = Obtenha comprovativos de email
ad-unit-5-share-custom-email = Utilize um e-mail virtual personalizado para recibos de compras em lojas sem partilhar o seu e-mail real
# ad 5 subheading 3
ad-unit-5-use-on-phone = Utilize no seu telemóvel
ad-unit-5-no-matter-where = Não importa onde esteja, crie um e-mail virtual personalizado em segundos para qualquer coisa que queira fazer
# ad 6 heading
ad-unit-6-worry-free = Inscrições sem preocupações
ad-unit-6-want-to-start = Deseja iniciar uma nova subscrição, responder a um convite ou obter um código promocional sem ter SPAM a inundar a sua caixa de entrada?
ad-unit-6-before-you-complete = Antes de concluir a próxima inscrição, utilize um e-mail virtual em vez do real para proteger os seus dados e manter o controlo sobre a sua caixa de entrada

# Monitor V2


## The following messages are brands and should be kept entirely in English

-brand-firefox = Firefox
-brand-monitor = Monitor
-brand-fx-monitor = Mozilla Monitor
-brand-mozilla = Mozilla
-brand-premium = Premium
-brand-monitor-premium = Monitor Premium
-brand-mozilla-foundation = Fundação Mozilla
-brand-github = GitHub
-brand-mozilla-vpn = Mozilla VPN
-brand-relay = Firefox Relay
-brand-mozilla-monitor = Mozilla Monitor
-brand-monitor-plus = Monitor Plus

##

# “account” can be localized, “Mozilla” must be treated as a brand,
# and kept in English.
-brand-mozilla-account = Conta Mozilla
open-in-new-tab-alt = Abrir ligação num novo separador

## Search Engine Optimization

meta-desc-2 = Descubra se fez parte de uma violação de dados com o { -brand-fx-monitor }. Iremos ajudar a compreender o que fazer a seguir e mantemos uma monitorização contínua à procura de quaisquer novas violações de dados.

## Header

# Deprecated
brand-fx-monitor = { -brand-fx-monitor }
sign-in = Iniciar sessão
brand-mozilla-monitor = { -brand-fx-monitor }

## Site navigation

site-nav-breaches-link = Resolver Violações de Dados
site-nav-settings-link = Definições
site-nav-help-link = Ajuda e Apoio
# This call-out is above 2 image links for Firefox Relay and Mozilla VPN
site-nav-ad-callout = Experimente as nossas outras ferramentas de segurança:
brand-relay = { -brand-relay }
brand-mozilla-vpn = { -brand-mozilla-vpn }
mobile-menu-label = Menu principal
main-nav-button-collapse-label = Colapsar menu
main-nav-button-collapse-tooltip = Colapsar menu
main-nav-button-expand-label = Expandir menu
main-nav-button-expand-tooltip = Expandir menu
main-nav-label = Navegação
main-nav-link-home-label = Início
main-nav-link-dashboard-label = Painel
main-nav-link-settings-label = Definições
main-nav-link-faq-label = Perguntas frequentes
main-nav-link-faq-tooltip = Perguntas frequentes

## User menu

# Obsolete
menu-button-title = Menu do utilizador
# Obsolete
menu-button-alt = Abrir menu do utilizador
# Obsolete
menu-list-accessible-label = Menu da conta
# Obsolete
menu-item-fxa-2 = Gerir a sua { -brand-mozilla-account }
# Obsolete
menu-item-settings = Definições
# Obsolete
menu-item-help = Ajuda e apoio
# Obsolete
menu-item-logout = Terminar sessão
user-menu-trigger-label = Abrir menu do utilizador
user-menu-trigger-tooltip = Perfil
user-menu-manage-fxa-label = Gerir a sua { -brand-mozilla-account }
user-menu-settings-label = Definições
user-menu-settings-tooltip = Configurar a { -brand-mozilla-monitor }
user-menu-help-label = Ajuda e apoio
user-menu-help-tooltip = Obter ajuda na utilização do { -brand-mozilla-monitor }
user-menu-signout-label = Terminar sessão
user-menu-signout-tooltip = Terminar sessão do { -brand-mozilla-monitor }?

## Footer

mozilla = { -brand-Mozilla }
terms-of-service = Termos do serviço
privacy-notice = Informação de privacidade
github = { -brand-github }
footer-nav-all-breaches = Todas as falhas de segurança
footer-external-link-faq-label = Perguntas frequentes
footer-external-link-faq-tooltip = Perguntas frequentes

## Error page

# Variables:
#   $errorCode (number) - "404"
error-page-error-404-title = { $errorCode } Página não encontrada
error-page-error-404-copy = Infelizmente, a página que está à procura já não existe.
error-page-error-404-cta-button = Voltar
# Variables:
#   $errorCode (number) - the status code of the error, e.g. 403
error-page-error-other-title = { $errorCode } Ocorreu algo de errado
error-page-error-other-copy = Por favor, tente novamente ou volte mais tarde

## Breach overview page

all-breaches-headline-2 = Todas as falhas de segurança detetadas por { -brand-fx-monitor }
all-breaches-lead = Monitorizamos todas as violações de dados conhecidas para descobrir se a sua informação pessoal foi comprometida. Aqui está uma lista completa de todas as violações de dados que foram reportadas desde 2007.
search-breaches = Procurar por violações de dados
# the kind of user data exposed to hackers in data breach.
exposed-data = Dados expostos:

## Public breach detail page

find-out-if-2 = Saiba se esteve envolvido nesta falha de segurança
find-out-if-description = Iremos ajudar a perceber muito rapidamente se o seu endereço de e-mail foi exposto nesta violação de dados e a compreender o que fazer a seguir.
breach-detail-cta-signup = Pesquisar por falhas de segurança

## Floating banner

floating-banner-text = Aumente a sua segurança online com notícias, dicas e atualizações da { -brand-Mozilla }.
floating-banner-link-label = Criar conta
floating-banner-dismiss-button-label = Não, obrigado

## Firefox Monitor -> Mozilla Monitor rebrand banner

banner-monitor-rebrand-text = <b>{ -brand-mozilla-monitor }</b>: Um novo nome, visual e ainda mais formas de <b>recuperar a sua privacidade</b>.
banner-monitor-rebrand-dismiss-button-label = Ok
banner-monitor-rebrand-dismiss-button-tooltip = Dispensar
loading-accessibility = A carregar
