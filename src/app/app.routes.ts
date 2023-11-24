import { Routes } from '@angular/router';
import { HomePageComponent } from './page/homepage/homepage.component';
import { DetailPageComponent } from './page/detailpage/detailpage.component';
import { AboutuspageComponent } from './page/aboutuspage/aboutuspage.component';
import { ContactusComponent } from './page/contactus/contactus.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'search/:searchItem', component: HomePageComponent },
    { path: 'tag/:tag', component: HomePageComponent },
    { path: 'detailpage/:id', component: DetailPageComponent },

    { path: 'aboutus', component: AboutuspageComponent },
    { path: 'contactus', component: ContactusComponent }
];
