import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController{
    @Get()
    getHelloWord(){
        return 'Hello Word!'
    }
}