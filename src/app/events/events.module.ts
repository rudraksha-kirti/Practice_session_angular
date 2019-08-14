import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UtilsModule } from '../utils/utils.module';
import { EventsRoutingModule } from './events-routing.module';
import {EventsService} from './events.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule(
    {
        declarations: [
            EventsListComponent,
            EventDetailComponent
        ],
        providers: [
            EventsService
        ],
        imports: [
            CommonModule,
            UtilsModule,
            HttpClientModule,
            EventsRoutingModule
        ],
        exports: [
            EventsListComponent,
            EventDetailComponent
        ]
    }
)
export class EventsModule {

}