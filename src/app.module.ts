import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUpdates } from './updates.telegram';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';

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
  providers: [TelegramUpdates],
})
export class AppModule {}
