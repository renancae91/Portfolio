import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';
import { ExperiencesConfig } from '../../models/experiences-config.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExpirience = ExperiencesConfig.expiriences;
}
