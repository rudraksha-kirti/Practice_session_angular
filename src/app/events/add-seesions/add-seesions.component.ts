import { Component, OnInit } from '@angular/core';
import ISession from '../ISession';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
    selector: 'app-add-seesions',
    templateUrl: './add-seesions.component.html',
    styleUrls: ['./add-seesions.component.css']
})
export class AddSessionComponent implements OnInit {
    session : ISession = {
        eventId: undefined,
        sequenceId: undefined,
        name: '',
        speaker:'',
        duration: 0,
        level: 'basic',
        abstract: '',
        upvoteCount: 0
    };

    constructor( 
        private _activatedRoute : ActivatedRoute,
        private _router : Router,
        private _eventsService : EventsService ) { }

    ngOnInit() {
        this.session.eventId = +this._activatedRoute.parent.snapshot.paramMap.get( 'id' ); // we are in a child route and trying to access parent route's param id - hence .parent.snapshot
    }

    addSession( ev ) {
        ev.preventDefault(); // prevents browser default action of submitting the form
        console.log( this.session );

        this._eventsService.addSession( this.session ).subscribe(
            ( updatedSession: ISession ) => { // error handling not done (saving time)
                alert( 'A new session has been added with id = ' + updatedSession.id );
                this._router.navigateByUrl( `/events/${this.session.eventId}` ); // go back to sessions list
            }
        )
    }
}