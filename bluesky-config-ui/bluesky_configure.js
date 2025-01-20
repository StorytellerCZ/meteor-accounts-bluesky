Template.configureLoginServiceDialogForBluesky.helpers({
    siteUrl: () => Meteor.absoluteUrl(),
});

Template.configureLoginServiceDialogForBluesky.fields = () => [
    {
        property: 'clientId',
        label: 'Client ID'
    }
];
