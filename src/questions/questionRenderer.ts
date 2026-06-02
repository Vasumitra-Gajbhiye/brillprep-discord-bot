import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";

export function renderQuestion() {
  const embed = new EmbedBuilder()
    .setTitle("📘 Physics Question")
    .setDescription(
      `**What is the SI unit of force?**
  
  A) Joule
  B) Newton
  C) Pascal
  D) Watt`,
    );

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("question_1_A")
      .setLabel("A")
      .setStyle(ButtonStyle.Primary),

    new ButtonBuilder()
      .setCustomId("question_1_B")
      .setLabel("B")
      .setStyle(ButtonStyle.Primary),

    new ButtonBuilder()
      .setCustomId("question_1_C")
      .setLabel("C")
      .setStyle(ButtonStyle.Primary),

    new ButtonBuilder()
      .setCustomId("question_1_D")
      .setLabel("D")
      .setStyle(ButtonStyle.Primary),
  );

  return {
    embeds: [embed],
    components: [row],
  };
}
