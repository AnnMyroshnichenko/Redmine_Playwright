import { test, expect } from '../fixtures/pages';

test.describe('Search', () => {
  test('TC-003 Search for an Existing Keyword', async ({
    page,
    searchPage,
  }) => {
    const keyword = 'login';

    await searchPage.open();

    await expect(searchPage.searchInput).toBeVisible();

    await searchPage.searchInput.fill(keyword);

    await expect(searchPage.searchInput).toHaveValue(keyword);

    await searchPage.searchInput.press('Enter');

    await expect(page).toHaveURL(/search/);

    await expect(searchPage.resultsHeading).toBeVisible();
    
    await expect(searchPage.searchResults).toContainText(keyword, {
      ignoreCase: true,
    });
  });
});