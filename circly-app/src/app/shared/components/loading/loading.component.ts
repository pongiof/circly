import { Component } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade.animations';


@Component({
	selector: 'loading-indicator',
	styleUrls: ['./loading.component.css'],
    animations: [fadeInAnimation],
	templateUrl: './loading.component.html'
})
export class LoadingComponent { }
