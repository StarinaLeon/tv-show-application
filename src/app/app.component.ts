import {Component, OnInit} from '@angular/core';
import {Show} from './show';
import {HttpService} from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent  implements OnInit{
  shows: Show[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data => this.shows = data)
  }
}
