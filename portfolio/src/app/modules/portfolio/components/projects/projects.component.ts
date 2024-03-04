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
      src: 'assets/img/projects/github-black.png',
      alt: 'projeto API pessoas com Nodejs',
      title: 'API Pessoas',
      width: '100px',
      height: '51px',
      description: '<p>A API REST de Pessoas é um projeto desenvolvido utilizando Node.js e Fastify, oferecendo uma solução eficiente e escalável para gerenciar informações relacionadas a pessoas. Essa API permite a criação, leitura, atualização e exclusão de registros de pessoas em um banco de dados, seguindo os princípios RESTful para comunicação entre cliente e servidor</p>',
      links: [
        {
          name: 'conheça o projeto',
          href: 'https://github.com/renancae91/NodejsAPIPessoas'
        },
      ],
    },
    {
      src: 'assets/img/projects/github-black.png',
      alt: 'projeto para uma lista de tarefas',
      title: 'ToDo List',
      width: '100px',
      height: '51px',
      description: '<p>O Todo List é um projeto desenvolvido utilizando Angular, HTML, CSS e TypeScript, oferecendo uma aplicação web interativa para gerenciar e organizar tarefas diárias. Com uma interface intuitiva e responsiva, os usuários podem facilmente adicionar, editar, marcar como concluídas e excluir tarefas conforme necessário.</p>',
      links: [
        {
          name: 'conheça o projeto',
          href: 'https://github.com/renancae91/todo-list'
        },
      ],
    },
    {
      src: 'assets/img/projects/github-black.png',
      alt: 'projeto de um web site para um restaurante',
      title: 'Cozinha da Oma',
      width: '100px',
      height: '51px',
      description: '<p>O Site da Cozinha da Oma é uma plataforma online projetada para apresentar o charme e a culinária autêntica deste restaurante encantador. Com uma combinação de HTML e CSS, esta página proporciona aos visitantes uma visão convidativa dos pratos deliciosos e do ambiente acolhedor oferecido pela Cozinha da Oma.</p>',
      links: [
        {
          name: 'conheça o projeto',
          href: 'https://github.com/renancae91/Cozinha-da-Oma'
        },
      ],
    },
    {
      src: 'assets/img/projects/github-black.png',
      alt: 'projeto que replica a pagina do spotify',
      title: 'Projeto Spotify',
      width: '100px',
      height: '51px',
      description: '<p>O Simulador da Página do Spotify é um projeto que recria a aparência e a funcionalidade da página inicial do popular serviço de streaming de música. Utilizando HTML, CSS e JavaScript, esta simulação proporciona aos usuários uma experiência interativa que lembra a interface familiar do Spotify.</p>',
      links: [
        {
          name: 'conheça o projeto',
          href: 'https://github.com/renancae91/spotify'
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
