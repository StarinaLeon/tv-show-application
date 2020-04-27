import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ShowInterface} from '../../../shared/interfaces/show.interface';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit, OnChanges {
  public readonly PAGE_OPTIONS = [2, 5, 10];
  @Input() shows: ShowInterface[];
  displayedColumns: string[] = ['name', 'seasons', 'network', 'premiereDate'];
  dataSource = new MatTableDataSource<ShowInterface>();
  pages: number;
  currentPage: number;
  pageSizeOptions: Array<number>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource.data = this.shows;
    setTimeout(() => this.getPageNumber());
  }

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
