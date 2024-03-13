import { Component } from '@angular/core';
import { CertificateConfig } from '../../models/certificate-config.model';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  public arrayCertificates = CertificateConfig.certificates;
}
