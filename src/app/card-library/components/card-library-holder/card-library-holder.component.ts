import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { DataView } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CardPreviewComponent } from '../card-preview/card-preview.component';
import { CardFullDetailsComponent } from '../card-full-details/card-full-details.component';
// Interfaces
import { Card } from '../../interfaces/card.interface';
import { QueryConfig } from '../../interfaces/query-config.interface';
// Services
import { CardService } from '../../services/card.service';
import { QueryConfigService } from '../../services/query-config.service';

@Component({
  selector: 'app-card-library-holder',
  imports: [
    FormsModule,
    InputTextModule,
    DialogModule,
    DataView,
    CardPreviewComponent,
    CardFullDetailsComponent],
  templateUrl: './card-library-holder.component.html',
  styleUrl: './card-library-holder.component.css'
})
export class CardLibraryHolderComponent implements OnInit {

  mainTitle: string = 'Pokemon TCG: Compendium';
  loadingCards: boolean = true;
  cards: Array<Card> = [];
  cardsTotalCount: number = 0;
  searchTerm: string = '';
  queryConfig: QueryConfig = this.queryConfigService.getBlankQuery();
  searchDebounce: Subject<any> = new Subject();
  showCardDetails: boolean = false;
  tempFullCardDetails: any;

  constructor(private cardService: CardService,
              private queryConfigService: QueryConfigService) { }

  ngOnInit(): void {
    this.setupSearch();
    this.getCards(this.queryConfig);
  }

  setupSearch() {
    this.searchDebounce.asObservable()
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.queryConfig.page = 1;
        this.queryConfig.first = 0;
        this.queryConfig.q = 'name:' + this.searchTerm + '*';
        this.getCards(this.queryConfig);
      });
  }

  searchCards() {
    this.searchDebounce.next(null);
  }

  getCards(queryConfig: QueryConfig) {
    this.loadingCards = true;
    this.cardService.getCards(queryConfig).subscribe((data: HttpResponse<any>) => {
      this.cards = data.body.data;
      this.cardsTotalCount = data.body.totalCount;
      this.loadingCards = false;
    });
  }

  loadMoreCards(event: any) {
    const pageCheck =  (event.first / this.queryConfig.pageSize) + 1;
    if (pageCheck > 1 || (this.queryConfig.page > pageCheck)) {
      this.queryConfig.page = pageCheck;
      this.queryConfig.first = event.first;
      this.getCards(this.queryConfig);
    }
  }

  handleFullDetailsDisplay(card: Card) {
    console.log(card);
    this.tempFullCardDetails = null;
    this.tempFullCardDetails = card;
    this.showCardDetails = true;
  }

}
