module.exports = {
    //IMPORTANT: If you need help with the installation of Green-bot, you can join our support server here: https://green-bot.app/discord
    prefix: "-",
    // Your discord bot token. https://discord.com/developpers/bots
    token: "ODk1NzA0NzE0NTE4MzM1NTI4.YV8cBQ.HDI_40KhybRrNenxMeWsa21I_M0",
    // Your ID
    ownerID: "684444122609614865",
    // Your name/tag
    ownerName: "` ESA",
    //The footer of the embeds that the bot will send
    footer: "ZeUtilities | Made by ESA ",
    // The id of the support
    supportID: "661610891300569110",
    // The status of your bot
    game: "-help | 4/4 shards ",
    //the color of the embeds
    color: "#0000FF",
    // OPTIONAL: Your top.gg token.
    topgg: "TOPGG_TOKEN",
    // OPTIONAL: The link of your bot's top.gg page.
    topgg_url: "https://top.gg/bot/783708073390112830",
    //the default bot language. fr or en
    defaultLanguage: "en",
    // If dev mod is enabled
    devMode: true,
    // The server where you test the commands
    devServer: "661610891300569110",
    // If you want to log every command,event etc. Usefull for debuging
    logAll: true,
    // If you want to test your configuration before starting the bot
    checkConfig: null,
//The number of shards. Leave blank for auto
shards: 1,
    // The categories. Put null to enabled to disable a category
    categories: {
        configuration: { enabled: true, name: "Configuration", desc: "Setup the bot with the configuration commands" },
        moderation: { enabled: true, name: "Moderation", desc: "Moderate your server easylly with {botName}" },
        levelling: { enabled: true, name: "Levelling", desc: "Creates a rank in your server" },
        utilities: { enabled: true, name: "Utilities", desc: "Some usefull commands", aliases: ["general"] },
        music: { enabled: true, name: "Music", desc: "Listen music with Green-bot" },
        games: { enabled: null, name: "Games", desc: "Have fun with friends using Green-bot" },
        antiraid: { enabled: true, name: "Antiraid", desc: "Protect your server against raiders", aliases: ["protections"] },
        owner: { hide: true, enabled: true, name: "Owner", desc: "Manage your bot with the owner commands" }
    },
    // some usefull links about your bot, if you don't have an information, put null.
    links: {
        support: "https://discord.gg/malaga",
        website: "",
        invite: "https://discord.com/oauth2/authorize?client_id=895704714518335528&scope=bot%20applications.commands&permissions=2147483647",
        commands: ""
    },
    //Database
    database: {
        // The url of your mongodb database. Check mongodb.org
        MongoURL: "mongodb+srv://KehlanMetor:skinnyfdp1@bot-discord.zbg8s.mongodb.net/test",
        // If you want to cache the database. For big bots
        cached: false,
        delay: 300000 * 4,
    },

}
