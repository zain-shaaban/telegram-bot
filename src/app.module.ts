import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUpdates } from './updates.telegram';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '7964455939:AAG3C5uBT-4axnEcXAp0UvLbOLf-X3c7KRU',
    }),
  ],
  providers: [TelegramUpdates],
})
export class AppModule {}
