import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectsConfig } from '../../models/projects-config.model';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public arrayProjects = ProjectsConfig.projects;

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
