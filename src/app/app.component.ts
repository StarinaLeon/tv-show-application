import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})




export class AppComponent  implements OnInit {
  genres;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.genres = this.httpService.getGenres()
  }
}
