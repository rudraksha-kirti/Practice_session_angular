import { Component, OnInit } from '@angular/core';
import ISession from '../ISession';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
 
@Component({
  selector: 'app-add-seesions-reactive',
  templateUrl: './add-seesions-reactive.component.html',
  styleUrls: ['./add-seesions-reactive.component.css']
})
export class AddSeesionsReactiveComponent implements OnInit {
  constructor( 
    private _activatedRoute : ActivatedRoute,
    private _router : Router,
    private _eventsService : EventsService,
    private _fb : FormBuilder ) { }

  session = this._fb.group({ // created using form builder syntax
    eventId: [ '', Validators.required ], // created using form builder syntax
    sequenceId: [ '', [ Validators.required, Validators.pattern( /^\d+$/ ) ] ], // created using form builder syntax
    name: new FormControl( '', [Validators.required , Validators.pattern(/^[A-Za-z -]+$/) ]  ),
    speaker: new FormControl( '', Validators.required ),
    duration: new FormControl( 0, [ Validators.required, , Validators.pattern( /^\d+\.?\d+$/ ) ] ),
    level: new FormControl( 'basic', Validators.required ),
    abstract: new FormControl( '', Validators.minLength( 20 ) ),
    upvoteCount: new FormControl( 0, [ Validators.required, Validators.pattern( /^d+$/ ) ] )
});
  
   
  
      ngOnInit() {
          this.session.get( 'eventId' ).setValue( +this._activatedRoute.parent.snapshot.paramMap.get( 'id' ) ) // we are in a child route and trying to access parent route's param id - hence .parent.snapshot
      }
  
      addSession( ev ) {
          ev.preventDefault(); // prevents browser default action of submitting the form
          console.log( this.session.value, this.session.get( 'eventId' ).value );
  
          this._eventsService.addSession( this.session.value ).subscribe(
              ( updatedSession: ISession ) => { // error handling not done (saving time)
                  alert( 'A new session has been added with id = ' + updatedSession.id );
                  this._router.navigateByUrl( `/events/${this.session.get( 'eventId' ).value}` ); // go back to sessions list
              }
          )
      }
  }