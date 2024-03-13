import { signal } from "@angular/core";
import { IEducation } from "../interface/IEducation.interface";

export class EducationConfig {
  static readonly education = signal<IEducation[]>([
    {
      summary: {
        strong: 'Sistemas de Informação',
        p: 'Universidade Estácio de Sá | 2020 - presente'
      },
      text: '<p>Neste curso aprende sobre linguagem de programação, bancos de dados, segurança, infraestrutura em TI,tendências em sistemas de informação, engenharia de softwares e redes de computadores.</p>'
    },
    {
      summary: {
        strong: 'Gestão em Marketing',
        p: 'Universidade Estácio de Sá | 2012 - 2016'
      },
      text: '<p>O curso de Marketing apresenta disciplinas sobre gestão e estratégias da área, com foco na pesquisa de mercado e na análise de perfis de consumidores.</p>'
    },
    {
      summary: {
        strong: 'MBA Comunicação e Marketing em Mídias Digitais',
        p: 'Universidade Estácio de Sá | 2016 - 2018'
      },
      text: '<p>A pós-graduação em Comunicação e Marketing em Mídias Digitais te transforma em um profissional criativo, empreendedor, inovador e capaz de identificar oportunidades para as mídias digitais.</p>'
    },
  ])
} 