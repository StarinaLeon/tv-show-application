import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {AppComponent} from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DataTableComponent} from './pages/shows/data-table/data-table.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule} from '@angular/forms';
import {PaginatorComponent} from './pages/shows/paginator/paginator.component';
import {PaginationPipe} from './shared/pipes/pagination.pipe';
import {FilterComponent} from './pages/shows/filter/filter.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {ShowsEffects} from './store/shows/effects';
import {reducers} from './store/root.reducers';
import {AppContainer} from './app.container';
import {FilterContainer} from './pages/shows/filter/filter.container';
import {DataTableContainerComponent} from './pages/shows/data-table/data-table.container';
import {PaginatorContainer} from './pages/shows/paginator/paginator.container';

@NgModule({
	declarations: [
		AppComponent,
		AppContainer,
		DataTableComponent,
		DataTableContainerComponent,
		PaginatorComponent,
		PaginatorContainer,
		PaginationPipe,
		FilterComponent,
		FilterContainer
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatSelectModule,
		MatPaginatorModule,
		MatChipsModule,
		MatSortModule,
		FormsModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([ShowsEffects]),
		StoreDevtoolsModule.instrument({
			name: 'TV App DevTools',
			maxAge: 25,
			logOnly: environment.production
		})
	],
	providers: [],
	bootstrap: [AppContainer]
})
export class AppModule {}
