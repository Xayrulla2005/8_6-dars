import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ProductModule,
   TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"Xayrulla2005+",
    database:"microservice2",
    autoLoadEntities:true,
    synchronize:true
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
