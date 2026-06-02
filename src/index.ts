import dotenv from "dotenv";
import { Events } from "discord.js";
import { client } from "./config/client";

import "./handlers/commandHandler";
import "./handlers/interactionHandler";

dotenv.config();

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
