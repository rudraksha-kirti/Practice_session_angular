import { Component, OnInit } from '@angular/core';
import ISession from '../ISession';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
    selector: 'app-sessions',
    templateUrl: './seesions.component.html',
    styleUrls: ['./seesions.component.css']
})
export class SessionsComponent implements OnInit {
    public id : number;
    
    public sessions : ISession[]; // [ sessio1, sessio2, ]
    public filteredSessions : ISession[];
    public errorFetchingSessions : Error;

    public searchKey : string;

    public areSessionsVisible : boolean = true;

    constructor( private _activatedRoute : ActivatedRoute, private _eventsService : EventsService ) {
        // this._activatedRoute = _activatedRoute // automatically set because access specifier (private) is mentioned in constructor argument
    }

    ngOnInit() {
        this.id = +this._activatedRoute.snapshot.params.id;

        console.log( this._activatedRoute );

        this._eventsService.getSessions( this.id ).subscribe(
            ( data : ISession[] ) => { // ajax call has succeeded
                this.sessions = data;
                this.filteredSessions = this.sessions;
            },
            ( error : Error ) => { // ajax call fails or server responds with error code
                this.errorFetchingSessions = error;
            }
        );
    }

    upvote( session, index, ev ) {
        console.log( 'ev = ', ev );
        this._eventsService.upvote( session ).subscribe(
            ( sessionNew ) => {
                this.sessions.splice( index, 1, sessionNew );
                alert( 'Your vote has been registered' );
            }
        );
    }

    downvote( session, index, ev ) {
        console.log( 'ev = ', ev );
        this._eventsService.downvote( session ).subscribe(
            ( sessionNew ) => {
                this.sessions.splice( index, 1, sessionNew );
                alert( 'Your vote has been registered' );
            }
        );
    }

    filterSessions() {
        console.log( 'filterSessions' );
        this.filteredSessions = this.sessions.filter(
            session => {
                return session.abstract.toUpperCase().includes( this.searchKey.toUpperCase() ) ||
                session.name.toUpperCase().includes( this.searchKey.toUpperCase() )
            }
        );
    }
}