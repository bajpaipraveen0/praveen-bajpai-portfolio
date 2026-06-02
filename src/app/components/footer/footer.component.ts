import { Component, Input } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { Router } from '@angular/router';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public readonly currentDate = new Date();
    public readonly currentYear = this.currentDate.getFullYear();

    
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;
    constructor(public router: Router) {}

    get shouldHideFooter(): boolean {
        return this.router.url === '/' || this.router.url === '/contact';
    }
}
