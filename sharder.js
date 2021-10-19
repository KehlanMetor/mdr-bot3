const { ShardingManager } = require("discord.js");
const config = require("./config")
const manager = new ShardingManager("./index.js", {
    token: process.env.TOKEN,
    shardArgs: process.argv,
    totalShards: config.shards ? config.shards : "auto",
});
console.log("[Shards] Starting spawn");
manager.spawn();
