import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateResturantDto } from './dtos/create-resturant.dto';
import { Resturant } from './entities/resturant.entity';

@Resolver(() => Resturant)
export class ResturantResolver {
  @Query(() => [Resturant])
  resturants(@Args('veganonly') veganonly: boolean): Resturant[] {
    console.log(veganonly);
    return [];
  }

  @Mutation(() => Boolean)
  createResturant(@Args() createResturantInput: CreateResturantDto): boolean {
    console.log(createResturantInput);
    return true;
  }
}
