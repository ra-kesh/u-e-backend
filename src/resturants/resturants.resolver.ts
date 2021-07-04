import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateResturantDto } from './dtos/create-resturant.dto';
import { Resturant } from './entities/resturant.entity';
import { ResturantService } from './resturants.service';

@Resolver(() => Resturant)
export class ResturantResolver {
  constructor(private readonly resturantService: ResturantService) {}

  @Query(() => [Resturant])
  resturants(): Promise<Resturant[]> {
    return this.resturantService.getAll();
  }

  @Mutation(() => Boolean)
  createResturant(@Args() createResturantInput: CreateResturantDto): boolean {
    console.log(createResturantInput);
    return true;
  }
}
