import { Component } from '@angular/core';
import { RoutesTableComponent } from './features/routes-table/routes-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoutesTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routes-table';
}
