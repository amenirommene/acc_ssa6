import { Routes } from "@angular/router";

export const ADMIN_ROUTES : Routes = [
      {path:"", loadComponent: ()=> import('./dashboard/dashboard').then(m=>m.Dashboard)},
        {path:"speakers", loadComponent: ()=> import('./speakers/speakers').then(m=>m.Speakers)},
         {path:"users", loadComponent: ()=> import('./users/users').then(m=>m.Users)},
          {path:"conference-form", loadComponent: ()=> import('./conference-form/conference-form').then(m=>m.ConferenceForm)},
    ]
