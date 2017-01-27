import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllPeopleComponent } from './all-people/all-people.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'teams',
    component: AllPeopleComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
