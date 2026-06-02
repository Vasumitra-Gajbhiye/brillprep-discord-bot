import { Events } from "discord.js";
import { client } from "../config/client";
import { physicsCommand } from "../commands/physics";

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case "physics":
      await physicsCommand(interaction);
      break;
  }
});
