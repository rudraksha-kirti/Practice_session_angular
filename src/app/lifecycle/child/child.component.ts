import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
    styles = 'color: olive';
    c_x = 2;

    @Input() c_i_x;

    constructor() {
        console.group( '%c constructor', this.styles );
        console.log( 'c_i_x = ', this.c_i_x );
        console.groupEnd();
    }

    ngOnChanges( simpleChanges : SimpleChanges ) { // after input data members are set
        console.group( '%c ngOnChanges', this.styles );
        console.log( 'c_i_x = ', this.c_i_x );
        console.groupEnd();
    }

    ngOnInit() {
        console.group( '%c ngOnInit', this.styles );
        console.groupEnd();

        // Any Ajax calls, any subscription, setTimeout() etc
        // const sub = this._eventsService.getSomething().subscribe(

        // );
    }

    ngOnDestroy() { // when component goes off the DOM
        // sub.unsubscribe()
        // unsubscribe, clearTimeout()
    }
}