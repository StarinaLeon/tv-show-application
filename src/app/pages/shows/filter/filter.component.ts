import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpService} from '../../../http.service';
import {FilterService} from '../../../filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() genres: string[];
  @Input() years: string[];
  selectedGenre: string;
  selectedYear: string;
  inputValue: string;


  constructor(private httpService: HttpService,
              private filterService: FilterService
  ) {
  }

  ngOnInit(): void {
  }

  getInputValue() {
    this.emitValues();
  }

  getSelectedGenre() {
    this.emitValues();
  }

  getSelectedYear() {
    this.emitValues();
  }

  emitValues() {
    this.filterService.filters.next({inputValue: this.inputValue, year: this.selectedYear, genre: this.selectedGenre});
  }
}
