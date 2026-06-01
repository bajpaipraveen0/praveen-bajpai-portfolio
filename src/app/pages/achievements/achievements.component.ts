import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { CertificateCardComponent } from '../../components/certificate-card/certificate-card.component';
import { signal } from '@angular/core';

@Component({
    selector: 'app-achievements',
    standalone: true,
    imports: [
        CertificateCardComponent,
    ],
    templateUrl: './achievements.component.html',
    styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
    public assetPaths = AssetPaths;
    public appConfig = AppConfig;

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.ACHIEVEMENTS);
    }

    selectedCertificate = signal<string | null>(null);

openCertificate(image: string): void {
    this.selectedCertificate.set(image);
    document.body.style.overflow = 'hidden';
}

closeCertificate(): void {
    this.selectedCertificate.set(null);
    document.body.style.overflow = '';
}
ngOnDestroy(): void {
        document.body.style.overflow = '';
    }
}
