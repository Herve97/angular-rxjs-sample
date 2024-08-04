import { Component, OnInit, ViewChild } from '@angular/core';
import { Chotchkie } from '../chotchkies.model';
import { ChotchkiesService } from '../chotchkies.service';
import { merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from 'rxjs/operators';
import { FormBuilder, NgModel } from '@angular/forms';

@Component({
  selector: 'app-chotchkies-list',
  templateUrl: './chotchkies-list.component.html',
  styleUrls: ['./chotchkies-list.component.css'],
})
export class ChotchkiesListComponent implements OnInit {
  @ViewChild('filterInput') filterInput: NgModel | any;

  searchTerm!: string;

  chotchkies!: Chotchkie[];

  constructor(
    private formBuilder: FormBuilder,
    private chotchkiesService: ChotchkiesService
  ) {}

  ngOnInit(): void {
    console.log("Filter input: ", this.filterInput)
    const emptySearch$ = this.filterInput.valueChanges.pipe(
      filter((v) => !!!v),
      debounceTime(500),
      switchMap(() => this.chotchkiesService.getAllChotchkies())
    );

    const valueSearch$ = this.filterInput.valueChanges.pipe(
      filter((v) => !!v),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.chotchkiesService.getChotchkiesBySearchTerm(term)
      )
    );

    this.chotchkiesService.refreshNeeded$
      .pipe(tap(() => this.filterInput.control.reset(null)))
      .subscribe();

    merge(emptySearch$, valueSearch$).subscribe(
      (results: any) => (this.chotchkies = results)
    );
  }

  protected decrementInventory(id: number) {
    this.chotchkiesService
      .patchChotchkie(id, {
        purchasedQuantity: 1,
      })
      .subscribe(
        () => console.log(`Quantity updated...`),
        (error) => alert(JSON.stringify(error))
      );
  }

  protected removeChotchkie(id: number) {
    this.chotchkiesService.removeChotchkie(id).subscribe(
      () => console.log(`${id} deleted.`),
      (error) => alert(JSON.stringify(error))
    );
  }
}
