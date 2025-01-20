import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.oauth.registerService('bluesky');

if (Meteor.isClient) {
    const loginWithBluesky = (options, callback) => {
        // support a callback without options
        if (!callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Bluesky.requestCredential(options, credentialRequestCompleteCallback);
    };

    Accounts.registerClientLoginFunction('bluesky', loginWithBluesky);
    Meteor.loginWithBluesky = (...args) => Accounts.applyLoginFunction('bluesky', args);
} else {
    Accounts.addAutopublishFields({
        forLoggedInUser: ['services.bluesky'],
        forOtherUsers: ['services.bluesky.username']
    });
}
