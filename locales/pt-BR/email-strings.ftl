# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox
click-to-verify =
    Clique no botão Verificar Meu Endereço de E-mail dentro de 24 horas para confirmar sua conta do Firefox Monitor.
    Seu relatório então estará a caminho.
verify-my-email = Verificar Meu Endereço de E=mail
report-scan-another-email = Analisar Outro Endereço de E-mail no { -product-name }
automated-message = Esta é uma mensagem automática; se você a recebeu por engano, nenhuma ação é necessária.
# Without HTML markup reads: We sent this message to [user’s email address] because the email address opted into alerts from Firefox Monitor.
we-sent-this-alert = Enviamos uma mensagem para { $userEmail } porque o endereço de e-mail solicitou alertas do { -product-name }
unsubscribe-email-link = Se você não quer mais receber alertas do { -product-name }, desinscreva-se.
# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Relatório do { -product-name }
report-date = Data do Relatório:
email-address = Endereço de E-mail:
# "full report" should be understood to mean the "complete report" or, the complete list of known data breaches that included the user’s information. 
your-full-report = Aqui está o seu relatório completo do { -product-name }, que inclui todos os vazamentos de dados conhecidos em que este endereço de e-mail foi afetado.
report-no-breaches =
    Seu endereço de e-mail não aparece na nossa base de vazamentos conhecidos.
    Porém vazamentos podem acontecer a qualquer momento. Tome estas medidas para manter seus dados pessoais seguros online.
# A list of next steps someone should take if their information has been involved in a data breach.
what-to-do-next = O Que Fazer Agora
report-headline =
    { $breachCount ->
        [0] Até agora tudo bem
        [one] Sua conta não foi afetada por vazamentos de dados.
       *[other] Suas contas apareceram em { $breachCount } vazamentos.
    }
report-subhead-no-breaches =
    Sua conta não aparece em nosso relatório completo de vazamentos.
    Isso é uma boa notícia, mas você pode fazer mais para se proteger.
    Vazamentos de dados podem acontecer a qualquer hora, então leia adiante para saber como proteger suas senhas.
report-subhead-found-breaches = Aqui está o seu relatório completo do Firefox Monitor, que inclui todos os vazamentos de dados conhecidos em que este endereço de e-mail foi afetado.
breach-alert-headline = Sua conta foi afetada por um vazamento de dados.
breach-alert-subhead = Um vazamento de dados que veio a público recentemente contém o seu endereço de e-mail e os seguintes dados
report-pwt-blurb =
    Senhas são tão importantes que milhares delas são roubadas todos os dias e trocadas ou vendidas no mercado negro.
    Senhas mais fortes protegem suas contas e todas as informações pessoais que residem dentro delas.
report-pwt-headline-1 = Use uma senha diferente para cada conta
report-pwt-summary-1 =
    Reutilizar a mesma senha em todos os lugares abre portas para hacker.
    Eles podem usar a senha para acessar as suas outras contas.
report-pwt-headline-2 = Criando senhas fortes e únicas
report-pwt-summary-2 =
    Hackers usam listas de senhas comuns para tentar adivinhar a sua.
    Quanto maior e mais aleatória for a sua senha, mais difícil ela será de ser roubada.
report-pwt-headline-3 = Trate perguntas de segurança como senhas extras
report-pwt-summary-3 =
    Sites não verificam se suas respostas são reais, eles apenas verificam se elas coincidem com as respostas dadas no momento do cadastro.
    Crie respostas longas e aleatórias e as armazene em algum lugar seguro.
report-pwt-headline-4 = Use um gerenciador de senhas
report-pwt-summary-4 = Serviços como o 1Password, Lastpass, Dashlane e Bitwarden geram senhas fortes, as armazenam com segurança e as preenchem nos sites para que você não precise se lembrar de cada uma.
# A link to legal information about mozilla products.
legal = Legal
# Share Firefox Monitor by email subject line
share-by-email-subject = Veja se você foi vítima de uma violação de dados.
# Share Firefox Monitor by email message. {"https://monitor.firefox.com"} should not be translated or modified. 
share-by-email-message =
    Olá,
    A { -brand-name } tem um serviço gratuito onde você pode verificar para saber se foi vítima de uma violação de dados. Veja como funciona:
    1. Vá em { "https://monitor.firefox.com" } e pesquise seu endereço de email.
    2. Veja se suas contas online foram expostas em uma violação de dados.
    3. Receba dicas do { -product-name } sobre o que fazer depois.
