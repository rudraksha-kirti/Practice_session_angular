import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    styles = 'color: crimson';
    p_x = 1;

    @Input() i_x;

    c_i_x_in_parent = 2;

    constructor() {
        console.group( '%c constructor', this.styles );
        console.log( 'i_x = ', this.i_x );
        console.groupEnd();
    }

    ngOnChanges() { // after input data members are set
        console.group( '%c ngOnChanges', this.styles );
        console.log( 'i_x = ', this.i_x );
        console.groupEnd();
    }

    ngOnInit() {
        // debugger; // programmatic breakpoint
        // you will see that data-bound properties have still not appeared in the DOM
        console.group( '%c ngOnInit', this.styles );
        console.groupEnd();

        setInterval(() => {
            this.c_i_x_in_parent++;
        }, 5000)
    }
}