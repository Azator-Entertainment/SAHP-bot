let runType;
if (process.argv[2] === "start") { runType = 0; }
else if (process.argv[2] === "test") { runType = 1; }
else { runType = 2; console.error("ERR! Correct launch: \"node index.js test|start\""); process.exit(4); }
export { runType };

console.log("-------------------------------> LEA Bot <-------------------------------");
if (runType === 0) console.log("                                starting...                               ");
if (runType === 1) console.log("                                testing...                                ");
console.log("");

import { config as secret } from "dotenv";
import { Client, GatewayIntentBits, Collection } from "discord.js";

let bot = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.MessageContent
    ]
});

import fs from "fs/promises";
const packageJson = JSON.parse(await fs.readFile("./package.json"));

bot.version = packageJson.version;
bot.slashes = new Collection();
bot.ints = new Map();
bot.LEA = {
    a: [
        "411436203330502658", //b1ngo
        "607915400604286997", //samus
        "801373399564681236", //daviiid_.
        "846451292388851722", //aldix_eu
        "343386988000444417", //cenovka
    ],
    c: {
        LEAbot: "#3a9a97",
        LSPD: "#000c1e",
        SAHP: "#457cc0",
        LSSD: "#bd8131",
        LSCSO: "#b68f68",
        duty: "#5245c0",
        apology: "#c05245",
        summary: "#25be5c",
        event: "#Be25ab",
        deleted: "#c43136"
    },
    e: {
        LSPD: "<:LSPD:1178108366514565181>",
        SAHP: "<:SAHP:1174876044570931210>",
        LSSD: "<:LSSD:1178106303198011412>",
        LSCSO: "<:LSCSO:1266078681479254176>"
    },
    g: {
        LSPD: [],
        LSSD: [
            "1154446248934387828"
        ],
        SAHP: [
            "1301163398515396668"
        ]
    },
    i: {
        LEAbot: "https://i.imgur.com/EnZErOi.png",
        LSPD: "https://i.imgur.com/gfL0fGf.png",
        SAHP: "https://i.imgur.com/xgFoKuX.png",
        LSSD: "https://i.imgur.com/X3cH2iu.png",
        LSCSO: "https://i.imgur.com/Hex0MQF.png"
    },
    o: "411436203330502658" //b1ngo
};

import { events, commands, interactions } from "./src/functions/register.js";
events(bot);
commands(bot);
interactions(bot);

bot.login(secret().parsed.botToken);

export { bot };