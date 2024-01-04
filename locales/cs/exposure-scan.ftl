exposure-landing-hero-heading = Zjistěte, zda vaše osobní údaje nebyly součástí úniku dat
exposure-landing-hero-lead = Buďte v bezpečí s nástroji pro ochranu soukromí od tvůrců { -brand-firefox(case: "gen") }, které vás chrání před hackery a společnostmi, které zveřejňují a prodávají vaše osobní údaje. Upozorníme vás na všechny známé případy úniku dat, najdeme a odstraníme vaše vyzrazené údaje a budeme průběžně hlídat, zda nedošlo k jejich novému vyzrazení.
exposure-landing-hero-email-label = E-mailová adresa
exposure-landing-hero-email-placeholder = Zadejte e-mailovou adresu
exposure-landing-hero-cta-label = Prohledat úniky

exposure-landing-result-loading = Nahrávání, prosím čekejte…
exposure-landing-result-error = Nepodařilo se zkontrolovat úniky data. Zkuste prosím stránku načíst znovu.

# Variables:
#   $email (string) - The user's email address, used to identify their data in breaches
#   $count (number) - Number of data breaches in which the user's data was found
exposure-landing-result-hero-heading =
    { $count ->
        [one] Zjistili jsme, že adresa <email>{ $email }</email> byla odhalena při <count>1</count>  úniku údajů.
        [few] Zjistili jsme, že adresa <email>{ $email }</email> byla odhalena při <count>{ $count }</count> únicích údajů.
        [many] Zjistili jsme, že adresa <email>{ $email }</email> byla odhalena při <count>{ $count }</count> únicích údajů.
       *[other] Zjistili jsme, že adresa <email>{ $email }</email> byla odhalena při <count>{ $count }</count> únicích údajů.
    }

exposure-landing-result-card-added = Přidaný únik:
exposure-landing-result-card-data = Uniklá data:
exposure-landing-result-card-nothing = Nebyly nalezeny žádné úniky dat

exposure-landing-result-footer-attribution = Údaje o únicích poskytuje <hibp-link>{ -brand-HIBP }</hibp-link>

exposure-landing-result-overflow-hero-lead = Přihlaste se a získejte jasný návod, jak tyto úniky vyřešit, zobrazte si všechny úniky a průběžně sledujte všechny nové známé úniky.
exposure-landing-result-overflow-hero-cta-label = Pro vyřešení úniků se přihlaste
exposure-landing-result-overflow-footer-cta-label = Pokud chcete zobrazit všechny, přihlaste se

exposure-landing-result-some-hero-lead = Přihlaste se a získejte jasný návod, jak tyto úniky vyřešit, zobrazte si všechny úniky a průběžně sledujte všechny nové známé úniky.
exposure-landing-result-some-hero-cta-label = Pro vyřešení úniků se přihlaste
exposure-landing-result-some-footer-cta-label = Pro vyřešení úniků se přihlaste

exposure-landing-result-none-hero-lead = Dobré zprávy! Nebyly nalezeny žádné známé úniky. Zůstaňte v bezpečí tím, že se přihlásíte k odběru upozornění na nové úniky. Tento e-mail budeme nadále sledovat a dáme vám vědět, pokud se objeví nové úniky.
exposure-landing-result-none-hero-cta-label = Nechte se upozorňovat na nové úniky dat
exposure-landing-result-none-footer-cta-label = Nechte si posílat upozornění
