import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChotchkiesListComponent } from './list/chotchkies-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateChotchkiesModule } from './create-form/create-chotchkies.module';
import { ChotchkiesService } from './chotchkies.service';
import { ChotchkiesContainerComponent } from './chotchkies-container.component';

@NgModule({
  declarations: [ChotchkiesListComponent, ChotchkiesContainerComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, CreateChotchkiesModule, FormsModule],
  exports: [ChotchkiesListComponent, ChotchkiesContainerComponent],
  providers: [ChotchkiesService]
})
export class ChotchkiesModule {}
