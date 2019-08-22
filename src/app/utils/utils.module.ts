import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsizePipe } from './ellipsize.pipe';
import { VotingWidgetComponent } from './voting-widget/voting-widget.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
    declarations: [
        EllipsizePipe,
        VotingWidgetComponent,
        PanelComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        EllipsizePipe,
        VotingWidgetComponent,
        PanelComponent
    ]
})
export class UtilsModule { }
