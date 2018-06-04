import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

    public imageSources: any[] = [
        { url: 'assets/banner1.png', title: 'Hastle Free CSR' },
        { url: 'assets/banner2.png', title: 'Exponential Funding Growth' }
    ];

    constructor() { }

    ngOnInit() {
    }

}
