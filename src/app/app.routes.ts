import { Routes } from '@angular/router';
import { UserProfile } from './components/user-profile/user-profile';
import { Notifications } from './components/notifications/notifications';
import { FriendsList } from './components/friends-list/friends-list';
import { ConferenceList } from './components/conference-list/conference-list';
import { Home } from './components/home/home';
import { Inscription } from './components/inscription/inscription';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home} ,
    {path:"profile", component:UserProfile},
    {path:"notifications", component:Notifications},
    {path:"friends", component:FriendsList},
    {path:"conferences", component:ConferenceList},
    {path:"inscription/:id", component:Inscription},
   // {path:"**", redirectTo:"home", pathMatch:"full"},

  
];
