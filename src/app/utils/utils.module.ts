import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsizePipe } from './ellipsize.pipe';

@NgModule({
    declarations: [
        EllipsizePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        EllipsizePipe
    ]
})
export class UtilsModule { }
