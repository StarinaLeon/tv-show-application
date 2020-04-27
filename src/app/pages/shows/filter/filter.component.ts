import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() genres: string[];
  @Input() years: string[];
  @Output() changeSelectedQuery = new EventEmitter()
  @Output() changeSelectedGenre = new EventEmitter()
  @Output() changeSelectedYear = new EventEmitter()
  selectedGenre: string;
  selectedYear: string;
  inputValue: string;

  constructor() {}

  ngOnInit(): void {
  }

  getInputValue() {
    this.changeSelectedQuery.emit(this.inputValue)
  }

  getSelectedGenre() {
    this.changeSelectedGenre.emit(this.selectedGenre)
  }

  getSelectedYear() {
    this.changeSelectedYear.emit(this.selectedYear)
  }
}
