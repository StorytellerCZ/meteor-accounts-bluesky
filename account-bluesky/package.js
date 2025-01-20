/* global Package */
Package.describe({
  name: 'storyteller:accounts-bluesky',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Adds account support for Bluesky',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/StorytellerCZ/meteor-accounts-bluesky/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom(['2.9.0', '3.0'])
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('storyteller:bluesky-oauth@1.0.0');
  api.imply('storyteller:bluesky-oauth');

  api.use(
    ['accounts-ui', 'storyteller:bluesky-config-ui@1.0.0'],
    ['client', 'server'],
    { weak: true }
  );
  api.addFiles('notice.js');
  api.addFiles('bluesky.js');
});
