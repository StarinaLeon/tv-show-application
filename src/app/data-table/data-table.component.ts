import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {HttpService} from '../http.service';
import {Show} from '../show';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  private shows: Show[];
  genres = [];
  years = [];
  selectedGenre: string;
  selectedYear: string;
  inputValue: string;
  displayedColumns: string[] = ['name', 'seasons', 'network', 'premiereDate'];
  dataSource = new MatTableDataSource<Show>();
  pages: number;
  currentPage: number;
  pageSizeOptions: Array<number>;
  currentPageSize: number;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data => {
      this.shows = data;
      this.applyFilter();
      setTimeout(() => this.getPageNumber());
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.httpService.getGenres().subscribe(data => {
      this.genres = data;
    })

    this.httpService.getYears().subscribe(data => {
      this.years = data;
    })

    console.log(this.paginator)
  }

  applyFilter() {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.data = this.shows.filter((show) => {
      // let isMatched = true;
      if (this.inputValue) {
       if (
         !show.name.toLowerCase().includes(this.inputValue.toLowerCase()) &&
         !show.network.toLowerCase().includes(this.inputValue.toLowerCase())
        )
       {
         return false;
       }
      }
      return true
    })
  }


  getSelectedGenre() {
    // console.log(this.selectedGenre)
    this.dataSource.data = this.shows.filter((show) => {
      if (this.selectedGenre) {
        if (!show.genres.includes(this.selectedGenre)) {
          return false;
        }
      } return true;
    })
  }

  getSelectedYear() {
    // console.log(this.selectedYear)
    this.dataSource.data = this.shows.filter((show) => {
      if (this.selectedYear) {
        if(!show.premiereDate.includes(this.selectedYear)) {
          return false;
        }
      } return true;
    })
  }

  getInputValue() {
    console.log(this.inputValue)
    this.applyFilter()
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
    this.paginator.previousPage()
  }

  changePageSize() {
    this.paginator.pageSize = 10;
  }
}
