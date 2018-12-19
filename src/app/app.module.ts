import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { DpDatePickerModule } from 'ng2-date-picker';


// NGRX

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule  } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from 'src/app/store/app.reducers';
import { RouterSerializer } from 'src/app/store/router-serializer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DpDatePickerModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({stateKey: 'router_state'}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: RouterSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
