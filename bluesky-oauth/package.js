/* global Package */
Package.describe({
    name: 'storyteller:bluesky-oauth',
    summary: 'Bluesky OAuth flow',
    version: '1.0.0',
    git: 'https://github.com/StorytellerCZ/meteor-accounts-bluesky/'
});

Package.onUse(api => {
    api.versionsFrom(['2.9.0', '3.0']);
    api.use('ecmascript', ['client', 'server']);
    api.use('oauth2', ['client', 'server']);
    api.use('oauth', ['client', 'server']);
    api.use(['fetch', 'url'], 'server');
    api.use('random', 'client');
    api.use('service-configuration', ['client', 'server']);

    api.addFiles('bluesky_client.js', 'client');
    api.addFiles('bluesky_server.js', 'server');

    api.mainModule('namespace.js');

    api.export('Bluesky');
});
