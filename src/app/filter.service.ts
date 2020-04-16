import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {FiltersData} from '../common.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filters = new Subject<FiltersData>()
  constructor() {}
}
