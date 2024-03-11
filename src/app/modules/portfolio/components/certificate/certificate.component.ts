import { Component, signal } from '@angular/core';
import { ICertificate } from '../../interface/ICertificate.interface';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  public arrayCertificate = signal<ICertificate[]>([
    {
      summary: {
        strong: 'Generative AI for Code with watsonx Code',
        p: 'IBM | 2024'
      },
      text: '<p>entende os desafios de desenvolvimento de código assistido por IA e automação de TI que os clientes enfrentam e como o IBM watsonx Code Assistant para Red Hat Ansible Lightspeed pode resolver esses desafios. Eles podem articular o valor que as soluções fornecem e diferenciá-las das ofertas concorrentes. O detentor do crachá pode identificar e discutir os casos de uso apropriados e atuar como um consultor confiável do cliente.</p>'
    },
    {
      summary: {
        strong: 'The Python Bible™ | Everything You Need to Program in Python',
        p: 'UDEMY | 2024'
      },
      text: '<p>Gain a Solid & Unforgettable Understanding of the Python Programming Language</p>.<p>* Gain the Python Skills Necessary to Learn In-Demand Topics, such as Data Science, Web Development, AI and more.</p><p>* Build 11 Fun and Memorable Python Projects.</p><p>* Use Logic and Data Structures to Create Python Programs That Can Think.</p><p>* Use Object-Oriented Programming (An Industry-Standard Coding Technique) to Write High Quality Python Code.</p><p>* Use Raw Text Data in Python to Generate Automated Messages and Customise User Experiences.</p><p>* Use Loops in Python to Improve Code Efficiency and Maximize Your Productivity.</p><p>* Create Your Own Custom Python Functions to Simplify Your Code.</p>'
    },
    {
      summary: {
        strong: 'RxJS + Angular Material - Frontend Reativo do Zero!',
        p: 'UDEMY | 2023'
      },
      text: '<p>* Desenvolver uma aplicação real utilizando Angular Materia</p>l<p>* A definitivamente trabalhar com RxJS</p><p>* Programar de forma reativa com RxJS utilizando componenetes do Angular Material</p><p>* Aprender a diferença entre Observable e Promise ou puro AJAX.</p>'
    },
    {
      summary: {
        strong: 'Curso de Angular 2 (v17+) Typescript do Básico ao Avançado',
        p: 'UDEMY | 2023'
      },
      text: '<p>* Angular</p><p>* Javascript</p><p>* Javascript do Zero ao Avançado</p><p>* TypeScript</p><p>* TypeScript do Zero ao Avançado</p><p>* Web Development</p><p>*Criar aplicações básicas/intermediárias com o Angular</p><p>* Desenvolva projetos escaláveis no Angular</p><p>* Criar e executar projetos do zero com Angular</p><p>* Criar projetos utilizando o Angular CLI</p><p>* Criar componentes no Angular</p>'
    },
    {
      summary: {
        strong: 'IBM Blockchain Essentials V2',
        p: 'IBM | 2022'
      },
      text: '<p>desenvolve uma compreensão dos princípios e práticas do Blockchain e como eles podem ser aplicados em um ambiente de negócios. Eles têm uma compreensão do Blockchain e dos sistemas de contabilidade distribuída, dos conceitos importantes e dos principais casos de uso do Blockchain e de como os ativos podem ser transferidos em uma rede Blockchain.</p>'
    },
    {
      summary: {
        strong: 'Enterprise Design Thinking Practitioner',
        p: 'IBM | 2022'
      },
      text: '<p>adquiriu conhecimento sobre a aplicação do Enterprise Design Thinking e seu valor. Como Praticante, o ganhador do distintivo encontra oportunidades para experimentá-lo em seu trabalho diário.</p>'
    },
    {
      summary: {
        strong: 'IBM Agile Explorer',
        p: 'IBM | 2022'
      },
      text: '<p>O Agile Explorer tem uma compreensão básica dos valores, princípios e práticas Agile que lhes permite iniciar uma conversa Agile com colegas de trabalho e colegas. Este selo está disponível apenas para funcionários da IBM.</p>'
    },
    {
      summary: {
        strong: 'C#: Explorando a Linguagem',
        p: 'Alura | 2022'
      },
      text: '<p>Este curso abordou os seguintes tópicos:</p><p>* História e ecossistema da linguagem</p><p>* Nosso primeiro programa e o Visual Studio</p><p>* Variáveis numéricas</p><p>* Variáveis de texto</p><p>* Controle de fluxo com if</p><p>* Controle de fluxo com laços de repetição</p>'
    },
  ])
}
