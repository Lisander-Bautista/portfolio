import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [ContentComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private router: Router) {}

ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (window.HSStaticMethods) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
