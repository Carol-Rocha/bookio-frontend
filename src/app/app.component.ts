import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component'
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component'
import { LoadingComponent } from './shared/components/loading/loading.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainLayoutComponent,
    LoadingComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookio-frontend';
}
