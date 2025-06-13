import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import {
  ROUTE_SERVICE_INTERFACE,
  RouteServiceInterface,
} from '../../core/services/route-service.interface';

@Component({
  selector: 'app-routes-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.scss'],
})
export class RoutesTableComponent implements OnInit {
   readonly #routeService = inject<RouteServiceInterface>(
    ROUTE_SERVICE_INTERFACE
  );

  routes = this.#routeService.getRoutesSignal();
  displayedColumns: string[] = ['address', 'gateway', 'interface'];

  ngOnInit(): void {
    this.#routeService.fetchRoutes();
  }

  sort(column: string): void {
    this.#routeService.sort(column);
  }
}
