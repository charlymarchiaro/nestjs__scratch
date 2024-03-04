import {Controller, Get} from "@nestjs/common";

@Controller('/app')
export class AppController {
  @Get('/hello')
  getHelloRoute() {
    return 'Hi there!';
  }

  @Get('/bye')
  getByeRoute() {
    return 'Bye there!';
  }
}
