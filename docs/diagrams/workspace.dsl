workspace {

    model {
        customer = person "Monitor Customer" "A customer of the service." "Customer"

        group "Mozilla" {
            supportStaff = person "Customer Service Staff" "Customer service staff." "Mozilla Staff"
            monitorSystem = softwaresystem "Monitor" "Allows customers to view information about their breaches, and manage their settings." {
                monitorFrontend = container "Monitor Frontend" "Provides access to Monitor to customers via their web browser." {
                    addEmail = component "Add email UI component" "Allows users to add email." "React/JSX"
                }
                monitorBackend = container "Monitor Backend" "Notifies users about and cleans up leaked data on behalf of users." "Existing System" {
                    email = component "Email Component" "Sends emails to users." "Nodemailer"
                    webHookAPIs = component "Webhook APIs" "Receives breach/broker notifications from partners" "REST/JSON"
                }
                database = container "PostgreSQL" "Stores user settings and breach data."

                emailProvider = container "Email System" "Amazon Web Services (AWS) Simple Email Service (SES)." "Existing System"
            }
        }
        group "Providers" {
            breachesProvider = softwaresystem "Breaches Provider" "Have I Been Pwned (HIBP)." "Existing System"
            brokersProvider = softwaresystem "Brokers Provider" "OneRep." "Existing System"
        }

        # relationships between people and software systems
        customer -> monitorFrontend "Views breaches, and initates cleanup using"
        monitorFrontend -> monitorBackend "Gets account information from, and initiates cleanup of breaches using"
        monitorFrontend -> email "Sends email using"
        email -> customer "Sends emails to"
        customer -> supportStaff "Asks questions to" "Email"
        supportStaff -> monitorFrontend "Uses"
        monitorBackend  -> breachesProvider "Gets breach data from"
        monitorBackend  -> brokersProvider "Gets data broker data from"
    }

        views {
        systemContext monitorSystem "SystemContext" {
            include *
            autoLayout
        }

        container monitorSystem "Containers" {
            include *
            autoLayout
            description "The container diagram for the Monitor System."
        }

        component monitorBackend "Components" {
            include *
            autoLayout
            description "The component diagram for the Monitor Backend."
        }

        styles {
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