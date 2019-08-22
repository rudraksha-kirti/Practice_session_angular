import { RouterModule, Routes, Router } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { NgModule } from '@angular/core';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {SessionsComponent} from './seesions/seesions.component'
import {AddSessionComponent} from './add-seesions/add-seesions.component';
import {AddEventsComponent} from './add-events/add-events.component';
import {AddSeesionsReactiveComponent} from './add-seesions-reactive/add-seesions-reactive.component'
const routes : Routes = [
    { path: 'events', 
    component: EventsListComponent,
    children :[
        {path: 'addEvents', component:AddEventsComponent }
    ] 
     },
    {
        path:'events/:id',
        component: EventDetailComponent,
         children:[
            { path: '', component: SessionsComponent },
            { path: 'add', component: AddSeesionsReactiveComponent },
            ]
    },
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