import { Component, OnInit, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EnergyCostPipe } from '../../pipes/energy-cost.pipe';
// Interfaces
import { Card } from '../../interfaces/card.interface';
// Services
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-full-details',
  standalone: true,
  imports: [NgFor, NgIf, EnergyCostPipe],
  templateUrl: './card-full-details.component.html'
})
export class CardFullDetailsComponent implements OnInit {

  @Input() cardDetails: Card = this.cardService.getBlankCard();

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

}
