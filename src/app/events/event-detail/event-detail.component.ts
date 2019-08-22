import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import IEvent from '../IEvent';
import ISession from '../ISession';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
    public id : number;
       
  public event : IEvent;
  public errorFetchingEvent : Error;
    constructor( private _activatedRoute : ActivatedRoute , private _eventsService : EventsService) {
        // this._activatedRoute = _activatedRoute // automatically set because access specifier (private) is mentioned in constructor argument
    }
    ngOnInit() {
        this.id = +this._activatedRoute.snapshot.params.id;
        this._eventsService.getEvent( this.id ).subscribe(
            ( data : IEvent ) => { // ajax call has succeeded
                this.event = data;
            },
            ( error : Error ) => { // ajax call fails or server responds with error code
                this.errorFetchingEvent = error;
            }/*,
            () => { // gets called immediately Ajax call results in success/error (in a general observable it gets called after observable completes)
    
            }*/
        );
    }
}