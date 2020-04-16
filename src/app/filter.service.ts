import { Injectable } from '@angular/core';
import {Show} from './show';
import {MatTableDataSource} from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  shows: Show[] = [];
  dataSource = new MatTableDataSource<Show>();
  inputValue: string;


  constructor() { }

  applyFilter() {
    this.dataSource.data = this.shows.filter((show) => {
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
}
