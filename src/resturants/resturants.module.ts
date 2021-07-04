import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resturant } from './entities/resturant.entity';
import { ResturantResolver } from './resturants.resolver';
import { ResturantService } from './resturants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Resturant])],
  providers: [ResturantResolver, ResturantService],
})
export class ResturantsModule {}
