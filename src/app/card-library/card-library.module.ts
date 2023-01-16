import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Prime NG Modules
import { DataViewModule } from 'primeng/dataview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
// Routing Module
import { CardLibraryRoutingModule } from './card-library-routing.module';
// Components
import { CardLibraryHolderComponent } from './components/card-library-holder/card-library-holder.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { CardFullDetailsComponent } from './components/card-full-details/card-full-details.component';
import { EnergyCostPipe } from './pipes/energy-cost.pipe';
// Pipes

@NgModule({
  declarations: [
    CardLibraryHolderComponent,
    CardPreviewComponent,
    CardFullDetailsComponent,
    EnergyCostPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardLibraryRoutingModule,
    DataViewModule,
    ProgressSpinnerModule,
    InputTextModule,
    TooltipModule,
    ToastModule,
    DialogModule
  ]
})
export class CardLibraryModule { }
