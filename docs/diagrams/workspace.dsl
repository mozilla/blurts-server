workspace {

    model {
        customer = person "Monitor Customer" "A customer of the service." "Customer"

        group "Mozilla" {
            supportStaff = person "Customer Service Staff" "Customer service staff." "Mozilla Staff"

            accountsAndSubscriptions = softwaresystem "Accounts and Subscriptions" "Authenticates customer and allows subscriptions payments" "Existing system"
            monitorSystem = softwaresystem "Monitor" "Allows customers to view information about their breaches and broker cleanup activity, and manage their settings." {
                monitorFrontend = container "Monitor Frontend" "Provides access to Monitor to customers via their web browser." "Node/NextJS/React" {
                    dashboardPanel = component "User dashboard panel" "Shows user current status of breaches and broker cleanup." "JSX"
                    breachesPanel = component "User breach/broker resolution panel" "Shows current state and allows modifying breach and broker cleanup activities." "JSX"
                    adminPanel = component "Administrator UI" "Allows Customer Service access to account details" "JSX"
                }
                monitorBackend = container "Monitor Backend" "Notifies users about and cleans up leaked data on behalf of users." "Node/ExpressJS" {
                    webHookAPIs = component "Webhook APIs" "Receives breach/broker notifications from partners" "REST/JSON"
                    scheduledTask = component "Scheduled Task" "Refreshes breaches, data broker cleanup status, and icon data." "Cron"
                }
                database = container "PostgreSQL" "Stores user settings and breach data."
            }
        }

        group "Providers" {
            breachesProvider = softwaresystem "Breaches Provider" "Have I Been Pwned (HIBP)." "Data Provider"
            brokersProvider = softwaresystem "Brokers Provider" "OneRep." "Data Provider"
            emailProvider = softwaresystem "Email Provider" "Amazon Web Services (AWS) Simple Email Service (SES)." "Cloud Service"
            iconsProvider = softwaresystem "Icons Provider" "DuckDuckGo" "Data Provider"
        }

        # relationships between people and software systems
        customer -> monitorFrontend "Views breaches, and initates cleanup using"
        customer -> accountsAndSubscriptions "Authenticates and subscribes using"
        customer -> emailProvider "receives email from"
//        customer -> supportStaff "Asks questions to" "Email"
//        supportStaff -> monitorFrontend "Accesses customer details using"
//        supportStaff -> accountsAndSubscriptions "Accesses customer details using"

        monitorSystem -> emailProvider "emails users breach and broker status updates using"
        monitorFrontend -> brokersProvider "initiates cleanup of data brokers using"
        monitorFrontend -> emailProvider "Sends email using"
        monitorFrontend -> database "Accesses breach/broker data and user settings using"
        monitorBackend  -> breachesProvider "Gets breach data from"
        monitorBackend  -> brokersProvider "Gets data broker data from"
        monitorBackend  -> iconsProvider "Gets icons from"
        monitorBackend  -> database "Stores breach/broker data using"
        monitorBackend -> emailProvider "Sends email using"
        webHookAPIs -> emailProvider "Sends email using"
        webHookAPIs -> breachesProvider "Receives breach alerts from"
        webHookAPIs -> brokersProvider "Receives broker cleanup status from"
        webHookAPIs -> database "Stores broker cleanup status data using"
        scheduledTask -> database "Stores breach data using"
        scheduledTask -> breachesProvider "Fetches breach data using"
        scheduledTask -> brokersProvider "Fetches broker data using"
        scheduledTask -> iconsProvider "Fetches icons using"
        scheduledTask -> emailProvider "Sends email using"
    }

    views {
        systemContext monitorSystem "SystemContext" {
            include *
            autoLayout
        }

        container monitorSystem "Containers_Frontend" {
            include ->monitorFrontend->
            autoLayout
            description "The container diagram for the Monitor Frontend."
        }

        container monitorSystem "Containers_Backend" {
            include ->monitorBackend->
            autoLayout
            description "The container diagram for the Monitor Backend."
        }

        component monitorFrontend "Components_Frontend" {
            include *
            autoLayout
            description "The component diagram for Monitor Frontend."
        }

        component monitorBackend "Components_Backend" {
            include *
            autoLayout
            description "The component diagram for the Monitor Backend."
        }

        styles {
            element "Software System:Providers" {
                background black
                color white
            }

            element "Software System" {
                background #1168bd
                color #ffffff
            }

            element "Person" {
                shape person
                background #08427b
                color #ffffff
            }
        }
    }
}
