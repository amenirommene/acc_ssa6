import { Routes } from '@angular/router';
import { UserProfile } from './components/user-profile/user-profile';
import { Notifications } from './components/notifications/notifications';
import { FriendsList } from './components/friends-list/friends-list';
import { ConferenceList } from './components/conference-list/conference-list';
import { Home } from './components/home/home';
import { Inscription } from './components/inscription/inscription';
import { Dashboard } from './admin/dashboard/dashboard';
import { Users } from './admin/users/users';
import { Speakers } from './admin/speakers/speakers';
import { Admin } from './admin/admin/admin';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home} ,
    {path:"profile", loadComponent:
         ()=>import('./components/user-profile/user-profile').then(m=>m.UserProfile)},
    {path:"notifications", component:Notifications},
    {path:"friends", component:FriendsList},
    {path:"conferences", component:ConferenceList},
    {path:"inscription/:id", component:Inscription},
    {path:"admin", component:Admin, loadChildren:()=>import('./admin/admin.routes').then(m=>m.ADMIN_ROUTES)},
      
    
   // {path:"**", redirectTo:"home", pathMatch:"full"},

  
];
