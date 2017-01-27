import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllPeopleComponent } from './all-people/all-people.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'teams',
    component: AllPeopleComponent
  },
  {
    path: 'teams/:id',
    component: MemberDetailComponent
  },
  {
   path: 'admin',
   component: AdminComponent
 }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
