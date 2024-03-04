import { Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' }, // Redirect to 'home' route from the root
    { path: 'todo', pathMatch: 'full' , component: HeroDetailComponent },
    { path: 'landing', component: ItemDetailComponent}, // Redirect to 'home' route from the root

];
