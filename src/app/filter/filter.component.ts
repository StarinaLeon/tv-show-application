import {Component, OnInit, Output} from '@angular/core';
import {HttpService} from '../http.service';
import {FilterService} from '../filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genres: [];
  years: [];
  selectedGenre: string;
  selectedYear: string;
  inputValue: string;


  constructor(private httpService: HttpService,
              private filterService: FilterService
              ) {}

  ngOnInit(): void {
    this.httpService.getYears().subscribe( data => {
      this.years = data;
    })
    this.httpService.getGenres().subscribe( data => {
      this.genres = data;
    })
  }

  getInputValue() {
    this.emitValues()
  }

  getSelectedGenre() {
    this.emitValues()
  }

  getSelectedYear() {
    this.emitValues()
  }

  emitValues() {
    this.filterService.filters.next({inputValue: this.inputValue, year: this.selectedYear, genre: this.selectedGenre})
  }
}
