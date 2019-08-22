import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import IEvent from './IEvent';
import ISession from './ISession';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private readonly _apiBaseUrl = 'http://localhost:8001';

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };

    constructor(private _http: HttpClient) {
    }

    getEvents(): Observable<IEvent[]> {
        /* Return an Observable */
        // 2 types of errors - i) network error etc.; ii) error response code from server - 400 (bad request), 403 (not authorized), 404 (not found)

        return this._http.get<IEvent[]>(`${this._apiBaseUrl}/events`).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }

    getEvent( id : number ) : Observable<IEvent> {
        return this._http.get<IEvent>(`${this._apiBaseUrl}/events/${id}`).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }

    getSessions( id: number ) : Observable<ISession[]> {
        return this._http.get<ISession[]>(`${this._apiBaseUrl}/events/${id}/sessions`).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }

    upvote( session : ISession ) {
        const sessionCopy = { ...session };
        sessionCopy.upvoteCount++;

        // import HttpHeaders from @nagular/common/http
        return this._http.put<ISession>(
            `${this._apiBaseUrl}/sessions/${sessionCopy.id}`,
            sessionCopy,
            {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json'
                })
            }
        ).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }
    
    downvote( session : ISession ) {
        const sessionCopy = { ...session };
        sessionCopy.upvoteCount--;

        return this._http.put<ISession>(
            `${this._apiBaseUrl}/sessions/${sessionCopy.id}`,
            sessionCopy,
            {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json'
                })
            }
        ).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }
    
    addSession( session : ISession ) {
        const sessionCopy = { ...session };

        return this._http.post<ISession>(
            `${this._apiBaseUrl}/sessions`,
            sessionCopy,
            {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json'
                })
            }
        ).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }
    addEvent( events : IEvent ) {
        const eventCopy = { ...events };

        return this._http.post<IEvent>(
            `${this._apiBaseUrl}/events`,
            eventCopy,
            {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json'
                })
            }
        ).pipe(
            retry(3),
            catchError( this.handleError )
        );
    }
}