import { Given, When, Then } from '@cucumber/cucumber';

Given("I'm running the example {string}", (string) => {
  console.log(`running example: ${string}`);
});

When('I type my "email" with status "CONFIRMED"', () => {
  console.log('typing email');
});

When('I type my password', () => {
  console.log('typing pwd');
});

When('I click the "Sign in" button', () => {
  console.log('clicking ');
});

Then('I see "Sign out"', () => {
  console.log('seeing ');
});
