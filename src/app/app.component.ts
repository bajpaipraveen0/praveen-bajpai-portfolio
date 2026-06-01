import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalStatsService } from './services/global-stats/global-stats.service';
import { AppConfig } from '../enums/app-data';
import AOS from 'aos';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { filter } from 'rxjs';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        ScrollToTopComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    appConfig = AppConfig;
    hideFooter = false;

    constructor(public globalStatsService: GlobalStatsService, private router: Router) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        const hiddenRoutes = ['/', '/contact'];

        this.hideFooter = hiddenRoutes.includes(this.router.url);
      });
    }

    ngOnInit(): void {
        AOS.init({
            duration: 500,
            once: true,
        });
    }
}
