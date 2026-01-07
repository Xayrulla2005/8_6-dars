import { IsEmail, IsString, MinLength} from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}



export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
