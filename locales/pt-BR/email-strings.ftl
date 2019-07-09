# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Clique no botão 'Confirmar meu endereço de e-mail' em até 24 horas para confirmar sua conta do Firefox Monitor.
    Seu relatório então estará a caminho.
verify-my-email = Confirmar meu endereço de e-mail
report-scan-another-email = Analisar outro endereço de e-mail no { -product-name }
automated-message = Esta é uma mensagem automática; se você a recebeu por engano, nenhuma ação é necessária.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Enviamos uma mensagem para { $userEmail } porque o endereço de e-mail solicitou alertas do { -product-name }
unsubscribe-email-link = Se você não quer mais receber alertas do { -product-name }, cancele sua inscrição.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Relatório do { -product-name }
report-date = Data do relatório:
email-address = Endereço de e-mail:
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = O que fazer agora
report-headline =
    { $breachCount ->
        [0] Até agora tudo bem.
        [one] Sua conta apareceu em { $breachCount } vazamento de dados.
       *[other] Suas contas apareceram em { $breachCount } vazamentos de dados.
    }
report-subhead-no-breaches =
    Sua conta não aparece em nosso relatório completo de vazamentos.
    Isso é uma boa notícia, mas você pode fazer mais para se proteger.
    Vazamentos de dados podem acontecer a qualquer hora, então continue lendo para saber como proteger suas senhas.
report-subhead-found-breaches = Aqui está o seu relatório completo do Firefox Monitor, que inclui todos os vazamentos de dados conhecidos em que este endereço de e-mail foi afetado.
report-pwt-blurb =
    Senhas são tão importantes que milhares delas são roubadas todos os dias e negociadas ou vendidas no mercado negro.
    Senhas mais fortes protegem suas contas e todas as informações pessoais que residem dentro delas.
report-pwt-headline-1 = Use uma senha diferente para cada conta
report-pwt-summary-1 =
    Reutilizar a mesma senha em todos os lugares abre portas para hackers.
    Eles podem usar a senha para acessar suas outras contas.
report-pwt-headline-2 = Crie senhas fortes e únicas
report-pwt-summary-2 =
    Hackers usam listas de senhas comuns para tentar adivinhar a sua.
    Quanto maior e mais aleatória for sua senha, mais difícil será roubar.
report-pwt-headline-3 = Trate perguntas de segurança como senhas extras
report-pwt-summary-3 =
    Os sites não verificam se suas respostas são reais, verificam apenas se coincidem com as respostas dadas no momento do cadastro.
    Crie respostas longas e aleatórias e as armazene em algum lugar seguro.
report-pwt-headline-4 = Use um gerenciador de senhas
report-pwt-summary-4 = Serviços como o 1Password, Lastpass, Dashlane e Bitwarden geram senhas fortes, as armazenam com segurança e as preenchem nos sites para que você não precise se lembrar de cada uma.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Veja se você foi vítima de um vazamento de dados.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Olá,
    A { -brand-name } tem um serviço gratuito onde você pode verificar para saber se foi vítima de um vazamento de dados. Veja como funciona:
    1. Vá em { "https://monitor.firefox.com" } e pesquise seu endereço de email.
    2. Veja se suas contas online foram expostas em um vazamento de dados.
    3. Receba dicas do { -product-name } sobre o que fazer depois.
# Unsubscribe link in email.
email-unsub-link = Cancele a inscrição
# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Você está recebendo esses e-mails porque se inscreveu para receber alertas do { -product-name }.
    Não quer mais receber? { $unsubLink }. Este é um e-mail automático. Para obter suporte, visite { $faqLink }.
# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Você está recebendo esses e-mails porque se inscreveu para receber alertas do { -product-name }. 
    Este é um e-mail automático. Para obter suporte, visite { $faqLink }.
# Button text that takes the user to their signed in user dashboard.
view-my-dashboard-cta = Ver meu painel
# Button text
verify-email-cta = Verificar e-mail
# Headline of verification email
email-link-expires = Este link expira em 24 horas
email-verify-blurb = Confirme seu e-mail para adicionar ao { -product-name } se inscrever para receber alertas de vazamentos.
# Email headline
email-found-breaches-hl = Aqui está seu resumo de vazamentos de dados anteriores
# Email headline
email-breach-summary-for-email = Resumo de vazamentos de { $userEmail }
# Email headline
email-no-breaches-hl = { $userEmail } apareceu em 0 vazamentos conhecidos de dados
# Email headline
email-alert-hl = { $userEmail } apareceu em um novo vazamento de dados
# Subject line of email
email-subject-found-breaches = O { -product-name } encontrou informações suas nesses vazamentos
# Subject line of email
email-subject-no-breaches = O { -product-name } não encontrou nenhum vazamento conhecido
# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Saiba mais sobre o { $fxmLink }
email-sensitive-disclaimer =
    Devido à natureza sensível deste vazamento, e-mails envolvidos não podem ser descobertos publicamente. 
    Você está recebendo este alerta porque confirmou ser o dono deste endereço de e-mail.
fxm-warns-you-no-breaches =
    O { -product-name } avisa sobre vazamentos de dados que envolvem suas informações pessoais. 
    Até agora, nenhum vazamento foi encontrado. Enviaremos a você um alerta caso seu endereço de e-mail apareça em um novo vazamento.
# List headline
faq-list-headline = Perguntas frequentes
# Link Title
faq-v2-1 = Não reconheço uma dessas empresas ou sites. Por que estou neste vazamento?
# Link Title
faq-v2-2 = Preciso fazer alguma coisa se um vazamento aconteceu anos atrás, ou esta é uma conta antiga?
# Link Title
faq-v2-3 = Acabei de descobrir que estou em um vazamento de dados. O que fazer agora?
# Link Title
faq-v2-4 = Como o { -product-name } lida com sites sensíveis?
