# Firefox Monitor is a product name and should not be translated.
-product-name = Firefox Monitor
# Firefox is a brand name and should not be translated.
-brand-name = Firefox

# Firefox Relay is a product name and should not be translated.
-product-name-relay = Firefox Relay
# Mozilla VPN is a product name and should not be translated.
-product-name-vpn = Mozilla VPN

# A Firefox Monitor Report is an emailed statement from Firefox Monitor containing a list of known data breaches where the user’s email address was found amongst the stolen data.
firefox-monitor-report = Relatório do { -product-name }
report-date = Data do relatório:
email-address = Endereço de email:

# A link to legal information about mozilla products.
legal = Informação legal

# Unsubscribe link in email.
email-unsub-link = Anular a subscrição

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb = Está a receber este e-mail porque subscreveu a alertas de { -product-name }. Não está interessado em receber estes e-mails? { $unsubLink }. Este é um e-mail automático. Para apoio, consulte as { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Está a receber este e-mail porque subscreveu a alertas de { -product-name }. 
    Este é um e-mail automático. Para apoio, visite { $faqLink }.

# Button text
verify-email-cta = Confirmar e-mail

# Button text
see-all-breaches = Ver todas as brechas

# Headline of verification email
email-link-expires = Esta ligação expira em 24 horas
email-verify-blurb = Confirme o seu e-mail para o adicionar a { -product-name } e subscreva aos alertas de violações de dados.

# Email headline
email-found-breaches-hl = Eis o seu resumo para violações de dados de dados anteriores

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Resumo de violações de dados para { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } apareceu em 0 violações de dados conhecidas

# Email headline
email-alert-hl = { $userEmail } apareceu numa nova violação de dados

##

# Subject line of email
email-subject-found-breaches = { -product-name } encontrou a sua informação numa destas violações de dados

# Subject line of email
email-subject-no-breaches = { -product-name } não encontrou violações de dados conhecidas

# Subject line of email
email-subject-verify = Confirme o seu e-mail para { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Saiba mais sobre { $fxmLink }

email-sensitive-disclaimer =
    Devido à natureza sensível desta violação de dados, os e-mails envolvidos não são pesquisáveis publicamente. 
    Se está a receber este alerta, isto deve-se ao facto de ser o proprietário confirmado deste endereço de e-mail.

fxm-warns-you-no-breaches =
    O { -product-name } alerta sobre violações de dados que envolvam os seus dados pessoais. 
    Até ao momento, não foram encontradas violações de dados. Nós iremos enviar-lhe um alerta se o seu endereço de e-mail aparecer numa nova violação de dados.

fxm-warns-you-found-breaches =
    O { -product-name } alerta sobre violações de dados que envolvam os seus dados pessoais. 
    Também tem ativa a subscrição ao envio de alertas se o seu endereço de e-mail for encontrado numa nova violação de dados.

email-breach-alert-blurb =
    O { -product-name } alerta sobre violações de dados que envolvam os seus dados pessoais. 
    Acabámos de receber detalhes sobre uma violação de dados de outra empresa.

# Section headline
monitor-another-email = Quer monitorizar outro e-mail?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Está a receber este e-mail automático como subscritor de { -product-name }. <br>Sinta-se à vontade para alterar as suas preferências de e-mail <a { $unsubscribe-link-attr }>aqui</a> a qualquer momento.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Dados de violação de dados fornecidos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Tem violações de dados não resolvidas
email-unresolved-subhead = O seu e-mail foi exposto. <br>Corrija a situação imediatamente com { -product-name }.
email-is-affected = O seu e-mail { $email-address } é afetado por, pelo menos, uma violação de dados
email-more-detail = Inicie sessão em { -product-name } imediatamente para consultar mais detalhes sobre as suas violações de dados (incluindo quando estas ocorreram e quais dados que foram expostos) e saiba o que deve fazer quando o seu e-mail for exposto numa violação de dados.
email-breach-status = Estado atual da violação de dados
# table row 1 label
email-monitored = Total de e-mails monitorizados:
# table row 2 label
email-breach-total = Número total de violações de dados:
# table row 3 label
email-resolved = Violações de dados resolvidas:
# table row 4 label
email-unresolved = Violações de dados não resolvidas:
email-resolve-cta = Resolver violações de dados

## Verification email

email-verify-heading = Proteja os seus dados, a partir de agora
email-verify-subhead = Confirme o seu e-mail para começar a proteger os seus dados após uma violação de dados.
email-verify-simply-click = Basta clicar na ligação abaixo para concluir a confirmação da sua conta.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Eis o resumo da sua violação de dados
email-breach-detected = Os resultados da pesquisa para a sua conta { $email-address } detetaram que o seu e-mail pode ter sido exposto. Recomendamos que atue imediatamente para resolver esta violação de dados.
email-no-breach-detected = Boas notícias! Não encontrámos nenhuma violação de dados que afete o seu e-mail, { $email-address }.
email-dashboard-cta = Ir para o painel

## Breach alert

email-may-have-been-exposed = O seu e-mail pode ter sido exposto numa violação de dados
email-spotted-new-breach = Detetámos uma nova violação de dados
