import { Component, OnInit } from '@angular/core';
import data from '../events';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
    public event = data[0]; 
    
    constructor(private _activateRoute : ActivatedRoute) { 

    }

    ngOnInit() {
       this.event = data[this._activateRoute.snapshot.params.id -1]
    }
}
