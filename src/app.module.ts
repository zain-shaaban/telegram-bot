import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BotUpdates } from './bot.updates';
import { AppController } from './app.controller';
import { BotService } from './bot.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        token: <string>configService.get('TELEGRAM_TOKEN'),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [BotUpdates, BotService],
})
export class AppModule {}
