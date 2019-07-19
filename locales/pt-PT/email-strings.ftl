# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Selecione o botão Verificar o meu email dentro de 24 horas para confirmar a sua conta do Firefox Monitor.
    O seu relatório então estará a caminho.
verify-my-email = Verificar o meu email
report-scan-another-email = Verificar outro email no { -product-name }
automated-message = Este é um email automático; se o recebeu por erro, nenhuma ação é requerida.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Enviámos esta mensagem para { $userEmail } porque o endereço de email optou por alertas do { -product-name }.
unsubscribe-email-link = Se não quiser mais alertas do { -product-name }, cancele a subscrição.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Relatório do { -product-name }
report-date = Data do relatório:
email-address = Endereço de email:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = O que fazer a seguir
report-headline =
    { $breachCount ->
        [0] Até agora, tudo bem.
        [one] A sua conta apareceu em { $breachCount } brecha.
       *[other] As suas contas apareceram em { $breachCount } brechas.
    }
report-subhead-no-breaches =
    A sua conta não aparece no nosso relatório completo de brechas.
    Isto são boas notícias, mas há mais coisas que pode fazer.
    As brechas de dados acontecem a qualquer momento, então continue a ler para saber como pode proteger as suas palavras-passe.
report-subhead-found-breaches = Este é o seu relatório completo do Firefox Monitor, que inclui todas as brechas de dados conhecidas que contêm este endereço de email.
report-pwt-blurb =
    As palavras-passe são tão valiosas, que milhares delas são roubadas todos os dias e comercializadas ou vendidas no mercado negro.
    Palavras-passe mais fortes protegem as suas contas e toda a informação pessoal que reside dentro das mesmas.
report-pwt-headline-1 = Utilize uma palavra-passe diferente para cada conta
report-pwt-summary-1 =
    Reutilizar a mesma palavra-passe em todos os lugares abre a porta para os hackers.
    Estes podem utilizar essa palavra-passe para iniciar sessão nas suas outras contas.
report-pwt-headline-2 = Crie palavras-passe fortes e únicas
report-pwt-summary-2 =
    Os hackers utilizam listas de palavras-passe comuns para tentar adivinhar as suas.
    Quanto mais longa e mais aleatória for a sua palavra-passe, mais difícil será furtá-la.
report-pwt-headline-3 = Trate as questões de segurança como palavras-passe extra
report-pwt-summary-3 =
    Os websites não verificam se as suas respostas são precisas, apenas que estas correspondem todas as vezes.
    Crie respostas longas e aleatórias e armazene-as em algum lugar seguro.
report-pwt-headline-4 = Utilize um gestor de palavras-passe
report-pwt-summary-4 =
    Serviços como 1Password, LastPass, Dashlane e Bitwarden geram palavras-passe fortes, armazenam-nas com segurança,
    e preenchem-nas em websites para que não precise de se lembrar de cada uma delas.
# A link to legal information about mozilla products.
legal = Informação legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Veja se fez parte de uma brecha de dados.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Olá,
    O { -brand-name } tem um serviço gratuito onde pode verificar se fez parte de uma brecha de dados. É assim que funciona:
    1. Vá a { "https://monitor.firefox.com" } e pesquise o seu email.
    2. Veja se suas contas online foram expostas numa brecha de dados.
    3. Obtenha dicas do { -product-name } acerca do que fazer a seguir.
# Unsubscribe link in email.
email-unsub-link = Anular a subscrição
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Está a receber este e-mail porque subscreveu a alertas de { -product-name }. Não está interessado em receber este e-mails? { $unsubLink }. Este é um e-mail automático. Para apoio, visite { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Está a receber este e-mail porque subscreveu a alertas de { -product-name }. 
    Este é um e-mail automático. Para apoio, visite { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Ver o meu painel
# Button text
verify-email-cta = Confirmar e-mail
# Headline of verification email
email-link-expires = Esta ligação expira em 24 horas
email-verify-blurb = Confirme o seu e-mail para o adicionar a { -product-name } e subscreva aos alertas de intrusões.
# Email headline
email-found-breaches-hl = Eis o seu resumo para intrusões anteriores de dados
# Email headline
email-breach-summary-for-email = Resumo de intrusões para { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } apareceu em 0 intrusões de dados conhecidas
# Email headline
email-alert-hl = { $userEmail } apareceu numa nova intrusão de dados
# Subject line of email
email-subject-found-breaches = { -product-name } encontrou a sua informação numa destas intrusões
# Subject line of email
email-subject-no-breaches = { -product-name } não encontrou intrusões conhecidas
# List headline
faq-list-headline = Perguntas frequentes
