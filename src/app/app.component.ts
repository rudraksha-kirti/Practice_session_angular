import { Component } from '@angular/core';

@Component(
    {
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css', './app-another.component.css']
    }
)
export class AppComponent {
  title = 'Events App';
}