import { ChatInputCommandInteraction } from "discord.js";
import { renderQuestion } from "../questions/questionRenderer";

export async function physicsCommand(interaction: ChatInputCommandInteraction) {
  await interaction.reply(renderQuestion());
}
