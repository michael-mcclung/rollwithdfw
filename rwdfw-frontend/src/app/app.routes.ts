import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '', component: HomePageComponent
    }
    // },
    // {
    //     path: 'contact-us', loadComponent: () => import(
    //         './components/sushi-contact-us/sushi-contact-us.component').
    //         then(m => m.SushiContactUsComponent)
    // },
    // {
    //     path: '**', redirectTo: ''

    // }
];
