import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  readonly searchInput = this.page.getByRole('textbox', {
    name: 'Search:',
  });

  readonly resultsHeading = this.page.getByRole('heading', {
    name: /results/i,
  });

  readonly searchResults = this.page.locator('#search-results');

  async open() {
    await this.goto('/');
  }

  async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }
}