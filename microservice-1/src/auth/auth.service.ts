import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/auth.entity";
import { JwtService } from "@nestjs/jwt";
import { LoginDto, RegisterDto } from "./dto/create-auth.dto";
import * as bcrypt from 'bcrypt';




@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hash = await bcrypt.hash(dto.password, 10);

    const user = this.userRepo.create({
      email: dto.email,
      password: hash,
    });

    await this.userRepo.save(user);
    return { message: 'registered' };
  }

  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException();

    const ok = await bcrypt.compare(dto.password, user.password);
    if (!ok) throw new UnauthorizedException();

    return {
      access_token: this.jwtService.sign({ sub: user.id }),
    };
  }

  verify(token: string) {
    return this.jwtService.verify(token);
  }
}
