import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UserController {
  userService: any;

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }
}
