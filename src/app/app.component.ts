import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './page/homepage/homepage.component';
import { HeaderComponent } from './pagepart/header/header.component'
import { FooterComponent } from './pagepart/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, HomePageComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'HeritageHub';
}
