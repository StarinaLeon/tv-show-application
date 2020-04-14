import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Show} from './show';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Show[]> {
    return this.http.get('assets/db.json').pipe(map(data => {
      let serials = data["serials"];
      return serials.map((show: any) => {
        return {
          name: show.name,
          seasons: show.seasons,
          network: show.network,
          genres: show.genres,
          premiereDate: show.premiereDate
        };
      });
    }));
  }

  getGenres() {
    return this.http.get('assets/db.json').pipe(map(data => {
      let genres = [];

    }))
  }
}
