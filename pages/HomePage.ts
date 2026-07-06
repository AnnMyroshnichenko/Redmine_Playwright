import { BasePage } from './BasePage';


export class HomePage extends BasePage {
  readonly myAccountLink = this.page.getByRole('link', { name: 'My account'});
  readonly signOutLink = this.page.getByRole('link', { name: 'Sign out' });
  readonly signInLink = this.page.getByRole('link', { name: 'Sign in'});
}