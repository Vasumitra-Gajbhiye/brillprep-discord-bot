import { ButtonInteraction } from "discord.js";
import { renderExplanation } from "../questions/explanationRenderer";

export async function handleQuestionButtons(interaction: ButtonInteraction) {
  const [, questionId, selectedOption] = interaction.customId.split("_");

  if (questionId !== "1") return;

  const { row, embed } = renderExplanation(selectedOption);

  await interaction.update({
    components: [row],
  });

  await interaction.followUp({
    embeds: [embed],
  });
}
