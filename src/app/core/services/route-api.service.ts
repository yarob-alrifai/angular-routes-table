import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Route } from '../models/route.model';
import { MOCK_ROUTES } from '../mock-data/mock-routes';
import { RouteApiServiceInterface } from './route-api-service.interface';

@Injectable({
  providedIn: 'root',
})
export class RouteApiService implements RouteApiServiceInterface {
  #routes: Route[] = MOCK_ROUTES;

  getRoutes(): Observable<Route[]> {
    return of(this.#routes);
  }
}
