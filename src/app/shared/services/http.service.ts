import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShowInterface} from '../interfaces/show.interface';
import {Observable} from 'rxjs';
import {map, toArray} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getShows(): Observable<ShowInterface[]> {
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
      let genres = data["genres"]
      return genres
    }))
  }

  getYears() {
    return this.http.get('assets/db.json').pipe(map(data => {
      let years = data["years"]
      return years
    }))
  }
}
