import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouteService } from './core/services/route.service';
import { ROUTE_SERVICE_INTERFACE } from './core/services/route-service.interface';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    { provide: ROUTE_SERVICE_INTERFACE, useClass: RouteService },
  ],
};
