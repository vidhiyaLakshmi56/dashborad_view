
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Demo data (replace with real data later)
  kpis = [
    { title: 'Users', value: 120 },
    { title: 'Appointments', value: 45 },
    { title: 'Pending Tasks', value: 8 },
  ];

  activities = [
    { id: 1, activity: 'User login', status: 'Success' },
    { id: 2, activity: 'New appointment created', status: 'Pending' },
    { id: 3, activity: 'Report generated', status: 'Completed' },
  ];
}
``
