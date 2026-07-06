import { test, expect } from '../fixtures/pages';
import { faker } from '@faker-js/faker';
import { env } from '../config/env';
import { generateOTP } from '../utils/otp';

test.describe('Login', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('TC-001 User logs in successfully with valid credentials and 2FA', 
    async ({ loginPage, twoFAPage, homePage,}) => {
    await loginPage.enterUsername(env.username);
    await loginPage.enterPassword(env.password);
    await loginPage.clickSignIn();

    await expect(twoFAPage.otpInput).toBeVisible();
    await twoFAPage.enterOTP(generateOTP());
    await twoFAPage.submit();

    await expect(homePage.myAccountLink).toBeVisible();
    await expect(homePage.signOutLink).toBeVisible();
  });

  test('TC-002 User cannot log in with invalid credentials', async ({
    page, loginPage, twoFAPage, homePage }) => {
    const fakeUsername = faker.internet.username();
    const fakePassword = faker.internet.password({
      length: 16,
      memorable: false,
    });

    await loginPage.login(fakeUsername, fakePassword);
    await expect(page).toHaveURL(/\/login/);
    await expect(loginPage.errorMessage).toContainText(
      'Invalid user or password'
    );

    await expect(twoFAPage.otpInput).toHaveCount(0);
    await expect(homePage.myAccountLink).toHaveCount(0);
    await expect(homePage.signOutLink).toHaveCount(0);
  });
});