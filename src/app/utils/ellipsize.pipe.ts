import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsize'
})
export class EllipsizePipe implements PipeTransform {
    transform( value : string, cutoff : number ): any {
        const pattern = /<p>(.*?)<\/p>/;
        const result = pattern.exec( value );
        
        if( result === null ) {
            return '';
        } else {
            if( !cutoff ) {
                return result[0];
            } else {
                return `<p>${result[1].slice( 0, cutoff )}...</p>`;
            }
        }
    }
}