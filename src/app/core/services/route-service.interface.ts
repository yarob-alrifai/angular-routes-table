import { InjectionToken, Signal } from '@angular/core';
import { Route } from '../models/route.model';

export const ROUTE_SERVICE_INTERFACE = new InjectionToken(
  'ROUTE_SERVICE_INTERFACE'
);

export interface RouteServiceInterface {
  fetchRoutes(): void;
  getRoutesSignal(): Signal<Route[]>;
  sort(column: string): void;
}
