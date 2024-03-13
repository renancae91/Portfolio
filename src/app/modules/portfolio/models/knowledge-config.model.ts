import { signal } from "@angular/core";
import { Iknowledge } from "../interface/Iknowledge.interface";

export class KnowledgeConfig {
    static readonly knowledges = signal<Iknowledge[]>([
        {
          src: 'assets/icons/knowledge/angular.svg',
          alt: 'icone de conhecimento do angular'
        },
        {
          src: 'assets/icons/knowledge/css3.svg',
          alt: 'icone de conhecimento do css3'
        },
        {
          src: 'assets/icons/knowledge/html5.svg',
          alt: 'icone de conhecimento do html5'
        },
        {
          src: 'assets/icons/knowledge/javascript.svg',
          alt: 'icone de conhecimento do javascript'
        },
        {
          src: 'assets/icons/knowledge/nodejs.svg',
          alt: 'icone de conhecimento do nodejs'
        },
    
      ]);
}