exposure-landing-hero-heading = Descubra se suas informações pessoais foram comprometidas
exposure-landing-hero-email-label = Endereço de email
exposure-landing-hero-email-placeholder = Digite um endereço de email
exposure-landing-hero-cta-label = Verificar se há vazamentos
exposure-landing-result-loading = Carregando, aguarde…
exposure-landing-result-error = Algo deu errado ao verificar vazamentos. Atualize a página e tente novamente.
# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Encontramos <email>{ $email }</email> exposto em <count>1</count> vazamento de dados.
       *[other] Encontramos <email>{ $email }</email> exposto em <count>{ $count }</count> vazamentos de dados.
    }
exposure-landing-result-card-added = Vazamento adicionado:
exposure-landing-result-card-data = Dados expostos:
exposure-landing-result-card-nothing = Nenhum vazamento encontrado
exposure-landing-result-overflow-hero-cta-label = Entre na sua conta para resolver vazamentos
exposure-landing-result-overflow-footer-cta-label = Entre na sua conta para ver tudo
exposure-landing-result-some-hero-cta-label = Entre na sua conta para resolver vazamentos
exposure-landing-result-some-footer-cta-label = Entre na sua conta para resolver vazamentos
exposure-landing-result-none-hero-cta-label = Receba alertas sobre novos vazamentos
exposure-landing-result-none-footer-cta-label = Cadastre-se para receber alertas
