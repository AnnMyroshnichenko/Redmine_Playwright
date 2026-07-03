import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { TwoFAPage } from '../pages/TwoFAPage';
import { SearchPage } from '../pages/SearchPage';
import { IssuesPage } from '../pages/IssuesPage';

type Pages = {
  loginPage: LoginPage;
  twoFAPage: TwoFAPage;
  homePage: HomePage;
  searchPage: SearchPage;
  issuesPage: IssuesPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  twoFAPage: async ({ page }, use) => {
    await use(new TwoFAPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },

  issuesPage: async ({ page }, use) => {
    await use(new IssuesPage(page));
  },
});

export { expect } from '@playwright/test';