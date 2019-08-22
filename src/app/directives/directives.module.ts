import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { HighlightDemoComponent } from './highlight-demo/highlight-demo.component';



@NgModule({
  declarations: [HighlightDirective, HighlightDemoComponent],
  imports: [
    CommonModule
  ],
  exports:[
  HighlightDemoComponent
  ]
})
export class DirectivesModule { }
