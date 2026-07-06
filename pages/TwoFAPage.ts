import { BasePage } from './BasePage';

export class TwoFAPage extends BasePage {
  readonly otpInput = this.page.getByRole('textbox', { name: /code/i });
  readonly submitButton = this.page.getByRole('button', { name: /login/i });

  async enterOTP(code: string) {
    await this.otpInput.fill(code);
  }

  async submit() {
    await this.submitButton.click();
  }
}