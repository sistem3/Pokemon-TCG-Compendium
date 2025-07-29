import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EnergyCostPipe } from '../../pipes/energy-cost.pipe';
// Interfaces
import { Card } from '../../interfaces/card.interface';
// Services
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-preview',
  imports: [EnergyCostPipe],
  templateUrl: './card-preview.component.html',
  styleUrl: './card-preview.component.css'
})
export class CardPreviewComponent {

  @Input() cardDetails: Card = this.cardService.getBlankCard();
  @Output() displayFullDetails: EventEmitter<Card> = new EventEmitter<Card>();

  constructor(private cardService: CardService) { }

  emitFullDetails(card: Card) {
    this.displayFullDetails.emit(card);
  }

}
