import { Observable } from 'rxjs';
import { Route } from '../models/route.model';

export interface RouteApiServiceInterface {
  getRoutes(): Observable<Route[]>;
}
