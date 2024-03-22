import { signal } from "@angular/core";
import { IProjects } from "../interface/IProjects.interface";

export class ProjectsConfig {
  static readonly projects = signal<IProjects[]>([
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
          href: 'https://github.com/renancae91?tab=repositories'
        },
      ],
    },
  ]);

}