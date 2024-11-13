import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessage().subscribe({
      next: (response: { message: string }) => {
        this.message = response.message;
      },
      error: (error: any) => {
        console.error('Error fetching message:', error);
      },
      complete: () => {
        console.log('Message fetch completed');
      },
    });
  }
}
