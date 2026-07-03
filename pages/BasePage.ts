import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async clickByRole(role: any, name: string) {
    await this.page.getByRole(role, { name }).click();
  }

  async fillByRole(role: any, name: string, value: string) {
    await this.page.getByRole(role, { name }).fill(value);
  }
}