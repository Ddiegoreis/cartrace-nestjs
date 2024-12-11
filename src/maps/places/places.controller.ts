import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  getPlaces(@Query('place') place: string) {
    return this.placesService.getPlaces(place);
  }
}
