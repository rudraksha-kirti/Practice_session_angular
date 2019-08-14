import { Component, OnInit } from "@angular/core";
import data from '../events';
import {EventsService} from '../events.service'
@Component(
    {
        selector: 'app-events-list',
        templateUrl: './events-list.component.html',
        styleUrls: [
            './events-list.component.css'
        ]
    }
)
export class EventsListComponent  implements OnInit{
   // public eventName = 'Angular JS Workshop';
    public events;
    public errorFetchingEvents;
    public event = this.events[0];
    constructor(private _eventsService : EventsService){

    }
    ngOnInit(){
this._eventsService.getEvents().subscribe(
    (data) => {
this.events = data;
    },
    (error) => {
this.errorFetchingEvents = error
    },
    // () =>{

    // }
)
    }
}