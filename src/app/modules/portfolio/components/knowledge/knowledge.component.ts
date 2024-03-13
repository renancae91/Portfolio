import { Component, signal } from '@angular/core';
import { KnowledgeConfig } from '../../models/knowledge-config.model';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {
  public arrayKnowledge = KnowledgeConfig.knowledges;
}


