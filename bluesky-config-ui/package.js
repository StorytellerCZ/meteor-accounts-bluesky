/* global Package */
Package.describe({
    name: 'storyteller:bluesky-config-ui',
    summary: 'Blaze configuration templates for Bluesky OAuth.',
    version: '1.0.0',
    git: 'https://github.com/StorytellerCZ/meteor-accounts-bluesky/'
});

Package.onUse(api => {
    api.versionsFrom(['2.9.0', '3.0'])
    api.use('ecmascript', 'client');
    api.use('templating@1.4.4', 'client');
    api.addFiles('bluesky_login_button.css', 'client');
    api.addFiles(
        ['bluesky_configure.html', 'bluesky_configure.js'],
        'client'
    );
});
