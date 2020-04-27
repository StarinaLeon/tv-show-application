import {Component, OnInit} from '@angular/core';
import {HttpService} from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})

export class AppComponent  implements OnInit {
  ngOnInit() {
  }
}
