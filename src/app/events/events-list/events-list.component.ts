import { Component, OnInit } from "@angular/core";
import { EventsService } from '../events.service';
import IEvent from '../IEvent';

@Component(
    {
        selector: 'app-events-list',
        templateUrl: './events-list.component.html',
        styleUrls: [
            './events-list.component.css'
        ]
    }
)
export class EventsListComponent implements OnInit {
    public events : IEvent[];
    public errorFetchingEvents;

    constructor( private _eventsService : EventsService ) {}

    ngOnInit() {
        this._eventsService.getEvents().subscribe(
            ( data : IEvent[] ) => { // ajax call has succeeded
                this.events = data;
            },
            ( error ) => { // ajax call fails or server responds with error code
                this.errorFetchingEvents = error;
            }/*,
            () => { // gets called immediately Ajax call results in success/error (in a general observable it gets called after observable completes)

            }*/
        );
    }
}