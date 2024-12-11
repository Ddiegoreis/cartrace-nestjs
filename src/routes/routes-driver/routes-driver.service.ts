import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RoutesDriverService {
  constructor(private prismaService: PrismaService) {}

  processRoute(dto: { route_id: string; lat: number; lng: number }) {
    return this.prismaService.routeDriver.upsert({
      include: {
        route: true,
      },
      where: { route_id: dto.route_id },
      create: {
        route_id: dto.route_id,
        points: {
          set: {
            location: {
              lat: dto.lat,
              lng: dto.lng,
            },
          },
        },
      },
      update: {
        points: {
          push: {
            location: {
              lat: dto.lat,
              lng: dto.lng,
            },
          },
        },
      },
    });
  }
}