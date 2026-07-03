import { test, expect } from '../fixtures/pages';

test.describe('Issues', () => {
  test('TC-004 View Public Issue Details', async ({
    page,
    issuesPage,
  }) => {
    await issuesPage.open();

    await expect(page).toHaveURL(/\/issues/);

    await issuesPage.openFirstIssue();

    await expect(page).toHaveURL(/\/issues\/\d+/);

    await expect(issuesPage.subject).toBeVisible();
    await expect(issuesPage.status).toBeVisible();
    await expect(issuesPage.author).toBeVisible();
  });

  test('TC-005 Filter Issues by Status', async ({
    page,
    issuesPage,
  }) => {
    await issuesPage.open();

    await expect(page).toHaveURL(/issues/);

    await expect(issuesPage.statusFilter).toBeVisible();

    await issuesPage.selectStatus('closed');

    await expect(issuesPage.statusFilter)
      .toHaveValue('c');

    await issuesPage.applyFilters();

    const count = await issuesPage.issueRows.count();

    for (let i = 0; i < count; i++) {
      await expect(issuesPage.issueRows.nth(i)).toContainText('Closed');
    }
  });
});