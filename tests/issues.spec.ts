import { test, expect } from '../fixtures/pages';
import { issuesData } from '../test-data/issues.data';

test.describe('Issues', () => {

  test.beforeEach(async ({ page, issuesPage }) => {
    await issuesPage.open();
    await expect(page).toHaveURL(/\/issues/);
  });

  test('TC-004 View Public Issue Details', async ({ page, issuesPage,}) => {
    await issuesPage.openFirstIssue();
    await expect(page).toHaveURL(/\/issues\/\d+/);

    await expect(issuesPage.subject).toBeVisible();
    await expect(issuesPage.status).toBeVisible();
    await expect(issuesPage.author).toBeVisible();
  });

  test('TC-005 Filter Issues by Status', async ({ issuesPage}) => {
    const { option, value, label } = issuesData.filters.closed;
    
    await expect(issuesPage.statusFilter).toBeVisible();
    await issuesPage.selectStatus(option);
    await expect(issuesPage.statusFilter).toHaveValue(value);
    await issuesPage.applyFilters();

    const count = await issuesPage.issueRows.count();

    for (let i = 0; i < count; i++) {
      await expect(issuesPage.issueRows.nth(i)).toContainText(label, { ignoreCase: true });
    }
  });
});