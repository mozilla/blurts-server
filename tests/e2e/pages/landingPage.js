export class LandingPage {
    constructor(page){
        this.page = page
        this.signUpButton = page.getByRole('link', { name: 'Get Started' })
        this.signInButton = page.getByRole('link', { name: 'Sign In' })
        this.firefoxLogo = page.locator('//img[starts-with(@class, "monitor-logo")]')
    }

    async open(){
        await this.page.goto(process.env.E2E_TEST_BASE_URL)
    }

    async goHome(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.homeButton.click()
        ]);
    }

    async goToSignUp(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.signUpButton.click()
        ]);
    }

    async goToSignIn(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.signInButton.click()
        ]);
    }

    async openFirefoxAppsServices(){
        await this.firefoxAppsServices.click()
    }

    async clickFirefoxLogo(){
        await this.firefoxLogo.click()
    }

}