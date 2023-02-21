const detoxArguments = [
  '--require-module @babel/register',
  '--require detox/integration/**/*.ts',
  'features/**/sign-in-with-email.feature',
].join(' ');

module.exports = {
  default: detoxArguments,
};
