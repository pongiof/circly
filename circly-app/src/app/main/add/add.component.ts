import { Component } from '@angular/core';
import { fadeInAnimation } from '../../shared/animations/fade.animations';

@Component({
	selector: 'add-component',
	styleUrls: ['./add.component.css'],
    animations: [fadeInAnimation],
	templateUrl: './add.component.html'
})
export class AddComponent { }
