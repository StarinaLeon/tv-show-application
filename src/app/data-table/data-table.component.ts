import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {HttpService} from '../http.service';
import {Show} from '../show';
import {MatSort, Sort} from '@angular/material/sort';
import {FilterService} from '../filter.service';
import {FiltersData} from '../../common.interfaces';
import {filterByGenre, filterBySearch, filterByYear} from './data-table.helper';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  private shows: Show[];
  displayedColumns: string[] = ['name', 'seasons', 'network', 'premiereDate'];
  dataSource = new MatTableDataSource<Show>();
  pages: number;
  currentPage: number;
  pageSizeOptions: Array<number>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private httpService: HttpService,
              private filterService: FilterService
  ) {
  }

  ngOnInit(): void {
    this.filterService.filters.subscribe(this.applyFilter.bind(this));
    this.httpService.getUsers().subscribe(data => {
      this.shows = data;
      this.dataSource.data = this.shows;
      setTimeout(() => this.getPageNumber());
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(data: FiltersData) {
    this.dataSource.data = this.shows
      .filter(filterBySearch.bind(this, data))
      .filter(filterByGenre.bind(this, data))
      .filter(filterByYear.bind(this, data))
  }

  public readonly PAGE_OPTIONS = [2, 5, 10];


  getPageNumber() {
    this.pages = this.dataSource.paginator.getNumberOfPages();
    this.currentPage = this.paginator.pageIndex + 1;
    this.pageSizeOptions = this.paginator.pageSizeOptions;
  }

  nextPage() {
    this.paginator.nextPage();
  }

  previousPage() {
    this.paginator.previousPage();
  }

  changePageSize() {
    this.paginator.pageSize = 10;
  }
}
