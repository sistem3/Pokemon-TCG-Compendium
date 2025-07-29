import { Component, Input } from '@angular/core';
import { EnergyCostPipe } from '../../pipes/energy-cost.pipe';
// Interfaces
import { Card } from '../../interfaces/card.interface';
// Services
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-full-details',
  imports: [EnergyCostPipe],
  templateUrl: './card-full-details.component.html',
  styleUrl: './card-full-details.component.css'
})
export class CardFullDetailsComponent {

  @Input() cardDetails: Card = this.cardService.getBlankCard();

  constructor(private cardService: CardService) { }

}
