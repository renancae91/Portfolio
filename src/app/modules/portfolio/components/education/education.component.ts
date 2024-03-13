import { Component } from '@angular/core';
import { EducationConfig } from '../../models/education-config.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  public arrayEducation = EducationConfig.education;
}
