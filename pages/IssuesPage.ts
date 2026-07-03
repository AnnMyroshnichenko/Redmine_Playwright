import { BasePage } from './BasePage';

export class IssuesPage extends BasePage {

  readonly statusFilter = this.page.getByRole('combobox').first();

   readonly applyButton = this.page.getByRole('link', {
    name: 'Apply',
  });

  readonly issuesTable = this.page.locator('table.issues');

  readonly issueRows = this.page.locator('table.issues tbody tr');

  readonly issue = this.page.locator('div.issue.details');

  readonly subject = this.issue.locator('.subject h3');

  readonly status = this.issue.locator('.attributes')
    .getByText('Status:')
    .locator('..');

  readonly author = this.issue.locator('p.author');

  async open() {
    await this.goto('/issues');
  }

  async openFirstIssue() {
    await this.page
      .locator('table.issues tbody tr:first-child td.id a')
      .click();
  }

   async selectStatus(status: string) {
    await this.statusFilter.selectOption({ label: status });
  }

  async applyFilters() {
    await this.applyButton.click();
  }
}