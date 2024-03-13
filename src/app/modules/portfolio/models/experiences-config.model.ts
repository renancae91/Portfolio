import { signal } from "@angular/core";
import { IExperiences } from "../interface/IExperiences.interface";

export class ExperiencesConfig {
  static readonly expiriences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor de Softwares',
        p: 'IBM | Out 2022 - Presente'
      },
      text: '<p>Desde outubro de 2022, atuo como estagiário em desenvolvimento de softwares na IBM, destacando-me nas áreas de front-end e back-end</p>'
    },
    {
      summary: {
        strong: 'Auxiliar Administrativo',
        p: 'Universidade Estácio de Sá | Ago 2011 - presente'
      },
      text: '<p>Desde Agosto de 2011, atuo como auxiliar administrativo na Estácio de Sá, destacando-me nas áreas de atendimento e suporte ao cliente</p>'
    },
  ]);
}