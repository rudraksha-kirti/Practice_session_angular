import { Component, OnInit } from '@angular/core';
import IEvent from '../IEvent';
import ISession from '../ISession';
import { ActivatedRoute ,Router } from '@angular/router';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  public id : number;
  public areEventsVisible : boolean = true;

  events : IEvent = {
    id:undefined,
     name: ' ',
  description: ' ',
  startDate:' ',
    endDate: ' ',
  time:  ' ',
  location: {
      address:  '',
      city:  ' ',
      state:  '',
  },
  modes: {
      inPerson: true,
      online: true,
  },
  imageUrl:  ''
}
constructor( 
  private _activatedRoute : ActivatedRoute,
  private _router : Router,
  private _eventsService : EventsService ) { }

ngOnInit() {
  this.id = +this._activatedRoute.snapshot.params.id;
}

addEvent( ev ) {
  ev.preventDefault(); // prevents browser default action of submitting the form
  console.log( this.events );

  this._eventsService.addEvent( this.events ).subscribe(
      ( updatedEvent: IEvent ) => { // error handling not done (saving time)
          alert( 'A new session has been added with id = ' + updatedEvent.id );
          this._router.navigateByUrl( `/events/${this.events.id}` ); // go back to sessions list
      }
  )
}

}
