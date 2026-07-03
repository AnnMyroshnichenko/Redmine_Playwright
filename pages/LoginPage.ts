import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly usernameInput = this.page.getByRole('textbox', {
        name: /login/i
    });

    readonly passwordInput = this.page.getByRole('textbox', {
        name: /password/i
    });

    readonly loginButton = this.page.getByRole('button', {
        name: /login/i
    });

    readonly errorMessage = this.page.locator('#flash_error');

    async open() {
        await this.goto('/login');
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSignIn() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
}
