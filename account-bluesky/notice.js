if (Package['accounts-ui']
    && !Package['service-configuration']
    && !Object.prototype.hasOwnProperty.call(Package, 'bluesky-config-ui')) {
    console.warn(
        "Note: You're using accounts-ui and accounts-bluesky,\n" +
        "but didn't install the configuration UI for the Bluesky\n" +
        "OAuth. You can install it with:\n" +
        "\n" +
        "    meteor add bluesky-config-ui" +
        "\n"
    );
}
