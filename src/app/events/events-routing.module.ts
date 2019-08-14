import { RouterModule, Routes, Router } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { NgModule } from '@angular/core';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes : Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class EventsRoutingModule {

}