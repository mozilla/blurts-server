export class DashboardPage {
    constructor(page){
        this.page = page;

        this.dataBreachEmailDropdown = page.locator('custom-select')
        this.siteFoundImage = page.locator('figure img')
        this.breachStats = page.locator('breach-stats')
    }

    async open() {
        await this.page.goto('/user/breaches');
    }
}