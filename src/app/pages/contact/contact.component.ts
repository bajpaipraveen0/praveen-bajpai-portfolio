import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppConfig } from '../../../enums/app-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 protected readonly appConfig = AppConfig;
    protected readonly AssetPaths = AssetPaths;
}
