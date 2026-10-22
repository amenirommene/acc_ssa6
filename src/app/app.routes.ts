import { Routes } from '@angular/router';
import { ConferenceList } from './components/conference-list/conference-list';
import { Home } from './components/home/home';
import { Inscription } from './components/inscription/inscription';
import { Admin } from './admin/admin/admin';

export const routes: Routes = [
   
    {path:"profile", loadComponent:
         ()=>import('./components/user-profile/user-profile').then(m=>m.UserProfile)},
    {path:"notifications",loadComponent:
         ()=>import('./components/notifications/notifications').then(m=>m.Notifications)},
     {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home} ,
         {path:"conferences", component:ConferenceList},
    {path:"inscription/:id", component:Inscription},
    {path:"admin", component:Admin, loadChildren:()=>import('./admin/admin.routes').then(m=>m.ADMIN_ROUTES)},
      
    
    {path:"**", redirectTo:"home", pathMatch:"full"},

  
];
