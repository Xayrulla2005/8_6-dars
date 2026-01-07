import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
  TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"Xayrulla2005+",
    database:"microservice1",
    autoLoadEntities:true,
    synchronize:true
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
