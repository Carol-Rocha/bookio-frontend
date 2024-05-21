import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '../footer/footer.component'
import { NavBarComponent } from '../nav-bar/nav-bar.component'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
