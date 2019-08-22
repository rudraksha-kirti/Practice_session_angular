import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
@Input () heading : string;
 isOpen : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  togglePanel(){
    this.isOpen = !this.isOpen;
  }
}
