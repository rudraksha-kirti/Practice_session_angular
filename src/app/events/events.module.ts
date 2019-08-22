import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UtilsModule } from '../utils/utils.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventsService } from './events.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSessionComponent } from './add-seesions/add-seesions.component';
import { SessionsComponent } from './seesions/seesions.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { AddSeesionsReactiveComponent } from './add-seesions-reactive/add-seesions-reactive.component'

@NgModule(
    {
        declarations: [
            EventsListComponent,
            EventDetailComponent,
            AddSessionComponent,
            SessionsComponent,
            AddEventsComponent,
            AddSeesionsReactiveComponent
        ],
        providers: [
            EventsService
        ],
        imports: [
            CommonModule,
            UtilsModule,
            HttpClientModule, /* export HttpClient service */
            EventsRoutingModule,
            FormsModule,
            ReactiveFormsModule
        ],
        exports: [
            EventsListComponent,
            EventDetailComponent
        ]
    }
)
export class EventsModule {

}