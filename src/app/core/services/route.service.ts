import { Injectable, inject, signal, Signal } from '@angular/core';
import { Route } from '../models/route.model';
import { RouteApiService } from './route-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouteServiceInterface } from './route-service.interface';

@Injectable({
  providedIn: 'root',
})
export class RouteService implements RouteServiceInterface {
  #routeApiService = inject(RouteApiService);
  #routes = signal<Route[]>([]);
  #routesSignal = toSignal(this.#routeApiService.getRoutes(), {
    initialValue: [] as Route[],
  });
  #sortColumn = signal<string | null>(null);
  #sortDirection = signal<'asc' | 'desc'>('asc');

  fetchRoutes(): void {
    this.#routes.set(this.#routesSignal());
  }

  getRoutesSignal(): Signal<Route[]> {
    return this.#routes;
  }

  sort(column: string): void {
    const currentDirection = this.#sortDirection();
    this.#sortColumn.set(column);
    this.#sortDirection.set(currentDirection === 'asc' ? 'desc' : 'asc');
    this.#sortRoutes(column);
  }

   #sortRoutes(column: string): void {
    const direction = this.#sortDirection();
    const sortedRoutes = [...this.#routes()].sort((a, b) => {
      if (column === 'address' || column === 'gateway') {
        const ipA = this.#ipToNumber(a[column as keyof Route]);
        const ipB = this.#ipToNumber(b[column as keyof Route]);
        return direction === 'asc' ? ipA - ipB : ipB - ipA;
      }
      return direction === 'asc'
        ? a.interface.localeCompare(b.interface)
        : b.interface.localeCompare(a.interface);
    });
    this.#routes.set(sortedRoutes);
  }

   #ipToNumber(ip: string): number {
    return ip
      .split('.')
      .reduce(
        (acc, octet, index) => acc + parseInt(octet) * Math.pow(256, 3 - index),
        0
      );
  }
}
