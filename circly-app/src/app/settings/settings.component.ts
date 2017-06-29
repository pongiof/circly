import { Component } from '@angular/core';
import { fadeInAnimation } from '../shared/animations/fade.animations';

@Component({
	selector: 'settings-component',
	styleUrls: ['./settings.component.css'],
    animations: [fadeInAnimation],
	templateUrl: './settings.component.html'
})
export class SettingsComponent { }
