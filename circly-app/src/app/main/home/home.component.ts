import { Component } from '@angular/core';
import { fadeInAnimation } from '../../shared/animations/fade.animations';

@Component({
	selector: 'home-component',
	styleUrls: ['./home.component.css'],
    animations: [fadeInAnimation],
	templateUrl: './home.component.html'
})
export class HomeComponent { }
