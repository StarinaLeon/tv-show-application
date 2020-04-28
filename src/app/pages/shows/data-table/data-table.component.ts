import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ShowInterface} from '../../../shared/interfaces/show.interface';
import {MatSort} from '@angular/material/sort';
import {GENRES_COLORS} from '../../../shared/constants/genre.constant';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit, OnChanges {

  @Input() shows: ShowInterface[];
  @Output() genreSelected = new EventEmitter();
  @Output() sortChange = new EventEmitter();
  displayedColumns: string[] = ['name', 'seasons', 'network', 'premiereDate'];
  dataSource = new MatTableDataSource<ShowInterface>();
  public readonly GENRE_COLORS = GENRES_COLORS;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource.data = this.shows;
  }

  changeSelectedGenre(genre: string) {
    this.genreSelected.emit(genre)
  }

  onSortChange(event) {
    this.sortChange.emit(event)
  }
}
