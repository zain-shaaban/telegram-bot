import { Command, Ctx, Help, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import * as fs from 'fs';
import * as path from 'path';

let messages = [
  'You’re the reason my heart smiles every day. ❤️',
  'With you, every moment feels like a beautiful dream come true. ❤️',
  'You complete me in ways I never knew were possible. ❤️',
  'Being with you feels like home. ❤️',
  'My love for you grows stronger with every heartbeat. ❤️',
  'You’re my sunshine on the cloudiest days. ❤️',
  'I’m grateful for every second we share together. ❤️',
  'Your love lights up my world like nothing else. ❤️',
  'I fall in love with you all over again, every single day. ❤️',
  'You make my life infinitely better just by being in it. ❤️',
  'Together, we’re unstoppable. ❤️',
  'You’re my best friend, my love, and my everything. ❤️',
  'Every love story is beautiful, but ours is my favorite. ❤️',
  'I promise to love you more with every breath I take. ❤️',
  'No matter where life takes us, my love for you will always be my constant. ❤️',
];

@Update()
export class TelegramUpdates {
  private num = 4;
  @Start()
  async start(@Ctx() ctx: Context) {
    ctx.reply('مرحبًا بك في عالم الحب مع جولي ❤️');
  }

  @Command('about')
  async about(@Ctx() ctx: Context) {
    const message =
      `🌸 *About This Bot*\n\n` +
      `This bot was created with love, care, and a heart full of emotions 💌.\n` +
      `It's a little digital space dedicated to *Joulie* — a name that means beauty, warmth, and everything soft in this world.\n\n` +
      `Every message, every feature, every heartbeat of this bot exists just to bring a smile to her face 💖.\n\n` +
      `Made by someone who truly believes: *"If it's for Joulie, it's worth creating."*`;
    await ctx.reply(message, { parse_mode: 'Markdown' });
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    const message =
      `🌟 *Need some help? I'm here for you!*\n\n` +
      `Here are the things you can do with this bot:\n\n` +
      `💌 /about — Learn the sweet story behind this bot.\n` +
      `📅 /date — Get a cute date idea to share with Joulie.\n` +
      `💖 /message — Save or recall a beautiful moment.\n\n` +
      `Made with pure love for *Joulie* ✨\n\n` +
      `*Because love deserves a little magic 💫*`;

    await ctx.reply(message, { parse_mode: 'Markdown' });
  }

  @Command('date')
  async date(@Ctx() ctx: Context) {
    const message =
      `🎂 *March 10, 2005* — a day the world became softer, brighter, and more beautiful 💖\n\n` +
      `That’s the day *Joulie* was born — the girl with the warmest smile, the kindest soul, and the heart that could light up galaxies ✨\n\n` +
      `Since that day, even the stars had something to celebrate 🌟.\n` +
      `And now, every *March 10* isn't just a date... it's a reminder that love, beauty, and grace came into the world.\n\n` +
      `Happy (early or belated) birthday to the reason this bot exists 🎈\n\n` +
      `*10/03/2005 — the day the story of Joulie began 💗*`;

    await ctx.reply(message, { parse_mode: 'Markdown' });
  }

  @Command('message')
  async message(@Ctx() ctx: Context) {
    const files = fs.readdirSync('./uploads');
    await ctx.reply(messages[this.num]);
    const photo = files[this.num++];
    this.num = this.num % 15;
    await ctx.sendPhoto({ source: path.join('./uploads', photo) });
  }
}
