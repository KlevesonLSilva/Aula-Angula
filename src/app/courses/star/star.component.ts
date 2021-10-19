import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number = 0;

    array: number[];

    resto : number;

    ngOnChanges(): void {
        //this.starWidth = this.rating * 94/5;
        this.resto = this.rating % 1;
        let intvalue = Math.trunc( this.rating );
        this.array = Array.from(new Array(intvalue), (x,i) => i+1)
    }
}