import { Events } from "discord.js";
import { client } from "../config/client";
import { handleQuestionButtons } from "../interactions/questionButtons";

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId.startsWith("question_")) {
    await handleQuestionButtons(interaction);
  }
});
