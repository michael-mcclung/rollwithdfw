import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [RouterOutlet],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent { }
