import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ MatDialogModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'GitHub - Renan Caetano',
      title: 'Github',
      width: '100px',
      height: '51px',
      description: '<p>Em meu GitHub você pode encontrar alguns projetos, como esse que você está visualizando agora, e também alguns projetos que desenvolvo no meu tempo livre,  lá você pode dar uma olhada em meu código e conferir a arquitetura, framework e design pattern que eu utilizo para desenvolver aplicações.</p>',
      links: [
        {
          name: 'conheça o projeto',
          href: 'https://github.com/renancae91/NodejsAPIPessoas'
        },
      ],
    },
   ]);
   public openDialog(data: IProjects) {
     this.#dialog.open(DialogProjectsComponent, {
       data,
       panelClass: EDialogPanelClass.PROJECTS
     })
    }
 }
