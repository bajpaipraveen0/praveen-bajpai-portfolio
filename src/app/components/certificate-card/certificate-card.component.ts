import { Component, input, InputSignal } from '@angular/core';
import { Certificate } from '../../../interfaces/certificate.interface';

@Component({
  selector: 'app-certificate-card',
  standalone: true,
  imports: [],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.scss'
})
export class CertificateCardComponent {
    certificateData: InputSignal<Certificate> = input.required<Certificate>();
}
