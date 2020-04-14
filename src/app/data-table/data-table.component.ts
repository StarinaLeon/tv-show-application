import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {HttpService} from '../http.service';
import {Show} from '../show';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'seasons', 'network', 'premiereDate'];
  shows: Show[];

  dataSource = new MatTableDataSource<Show>(this.shows);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data => this.shows = data);
    this.dataSource.paginator = this.paginator;
  }
}
