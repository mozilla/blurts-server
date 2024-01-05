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
legal = Legal

# Unsubscribe link in email.
email-unsub-link = Cancele a inscrição

# This string appears in the footer of breach report and breach alert emails.
# { $unsubLink } is a link to the user's dashboard where they can unsubscribe from Monitor
# and uses the text from { email-unsub-link }. { $faqLink } is a link to the 
# Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-footer-blurb =
    Você recebeu este email porque se inscreveu para receber alertas do { -product-name }.
    Não quer mais receber? { $unsubLink }. Este é um email automático. Para obter suporte, visite { $faqLink }.

# This string appears in the footer of verification emails. { $faqLink } is a link
# to the Firefox Monitor SUMO page and uses the text from { frequently-asked-questions }.
email-verify-footer-copy =
    Você recebeu este email porque se inscreveu para receber alertas do { -product-name }. 
    Este é um email automático. Para obter suporte, visite { $faqLink }.

# Button text
verify-email-cta = Verificar email

# Button text
see-all-breaches = Ver todos os vazamentos

# Headline of verification email
email-link-expires = Este link expira em 24 horas
email-verify-blurb = Confirme seu email para adicionar ao { -product-name } e inscrever-se para receber alertas de vazamentos.

# Email headline
email-found-breaches-hl = Aqui está seu resumo de vazamentos de dados anteriores

## Variables:
##   $userEmail (string) - User email address

# Email headline
email-breach-summary-for-email = Resumo de vazamentos de { $userEmail }

# Email headline
email-no-breaches-hl = { $userEmail } não apareceu em nenhum vazamento de dados conhecido

# Email headline
email-alert-hl = { $userEmail } apareceu em um novo vazamento de dados

##

# Subject line of email
email-subject-found-breaches = O { -product-name } encontrou informações suas nesses vazamentos

# Subject line of email
email-subject-no-breaches = O { -product-name } não encontrou nenhum vazamento conhecido

# Subject line of email
email-subject-verify = Confirme seu email no { -product-name }

# { $fxmLink } is a link to Firefox Monitor and uses the text from { -product-name }.
learn-more-about-fxm = Saiba mais sobre o { $fxmLink }

email-sensitive-disclaimer =
    Devido à natureza sensível deste vazamento, emails envolvidos não podem ser descobertos publicamente. 
    Você recebeu este alerta porque confirmou ser o dono deste endereço de email.

fxm-warns-you-no-breaches =
    O { -product-name } avisa sobre vazamentos de dados que envolvem suas informações pessoais. 
    Até agora, nenhum vazamento foi encontrado. Enviaremos a você um alerta caso seu endereço de email apareça em um novo vazamento.

fxm-warns-you-found-breaches =
    O { -product-name } avisa sobre vazamentos de dados que envolvem suas informações pessoais. 
    Você também se inscreveu para receber alertas caso seu endereço de email apareça em um novo vazamento.

email-breach-alert-blurb =
    O { -product-name } avisa sobre vazamentos de dados que envolvem suas informações pessoais. 
    Acabamos de receber detalhes sobre um vazamento de dados de outra empresa.

# Section headline
monitor-another-email = Quer monitorar outro email?

## 2022 email template. HTML tags should not be translated, e.g. `<a>`

email-2022-unsubscribe = Você está recebendo este email automático porque tem assinatura do { -product-name }. <br>Sinta-se à vontade para alterar <a { $unsubscribe-link-attr }>aqui</a> quando quiser suas preferências de email.
# Have I Been Pwned attribution
email-2022-hibp-attribution = Dados de vazamentos fornecidos por <a { $hibp-link-attr }>{ -brand-HIBP }</a>

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`

## Monthly email for unresolved breaches. HTML tags should not be translated, e.g. `<br>`
## Variables:
##   $email-address (string) - Email address

email-unresolved-heading = Você tem vazamentos não resolvidos
email-unresolved-subhead = Seu email foi exposto. <br>Corrija agora mesmo com o { -product-name }.
email-is-affected = Seu email, { $email-address }, foi afetado por pelo menos um vazamento de dados
email-more-detail = Entre agora na sua conta no { -product-name } para ver mais detalhes sobre seus vazamentos (incluindo quando ocorreram e quais dados foram expostos) e saiba o que deve fazer quando seu email for exposto em um vazamento de dados.
email-breach-status = Status atual de vazamentos
# table row 1 label
email-monitored = Total de emails monitorados:
# table row 2 label
email-breach-total = Número total de vazamentos:
# table row 3 label
email-resolved = Vazamentos resolvidos:
# table row 4 label
email-unresolved = Vazamentos não resolvidos:
email-resolve-cta = Resolver vazamentos

## Verification email

email-verify-heading = Proteja seus dados, começando agora mesmo
email-verify-subhead = Verifique seu email para começar a proteger seus dados após um vazamento.
email-verify-simply-click = Basta clicar no link abaixo para concluir a verificação da sua conta.

## Breach report

## Breach report
## Variables:
##   $email-address (string) - Email address

email-breach-summary = Aqui está o resumo de vazamento de dados
email-breach-detected = Os resultados da pesquisa da sua conta { $email-address } detectaram que seu email pode ter sido exposto. Recomendamos você agir agora para resolver este vazamento.
email-no-breach-detected = Boas notícias! Não encontramos nenhum vazamento de dados que afete seu email, { $email-address }.
email-dashboard-cta = Ir para o painel

## Breach alert

email-may-have-been-exposed = Seu email pode ter sido exposto em um vazamento de dados
email-spotted-new-breach = Detectamos um novo vazamento de dados
