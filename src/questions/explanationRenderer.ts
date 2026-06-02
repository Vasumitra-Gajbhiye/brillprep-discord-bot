import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";

export function renderExplanation(selectedOption: string) {
  const correctOption = "B";

  const buttons = ["A", "B", "C", "D"].map((option) => {
    let style = ButtonStyle.Secondary;

    if (option === correctOption) {
      style = ButtonStyle.Success;
    }

    if (option === selectedOption && selectedOption !== correctOption) {
      style = ButtonStyle.Danger;
    }

    return new ButtonBuilder()
      .setCustomId(`question_1_${option}`)
      .setLabel(option)
      .setStyle(style)
      .setDisabled(true);
  });

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(buttons);

  const embed = new EmbedBuilder()
    .setTitle(selectedOption === correctOption ? "✅ Correct!" : "❌ Incorrect")
    .setDescription(
      `**Explanation**
  
  Force is measured in **newtons (N)**.
  
  The unit is named after **Isaac Newton**, whose laws of motion describe how forces affect objects.
  
  **Correct Answer:** B) Newton
  
  **Topic:** Mechanics
  **Difficulty:** Easy`,
    );

  return {
    row,
    embed,
  };
}
