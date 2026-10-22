import { inject, Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  //ce service est disponible dans toute l'application
  //une seule instance de ce service sera créée et partagée dans toute l'application
  providedIn: 'root',
})
export class ConferenceService {
  private http=inject(HttpClient);
  private urlAPI = "http://localhost:3000/conferences";
 getAllConferences() : Observable<Conference[]> {
    return this.http.get<Conference[]>(this.urlAPI);
  }

  
}
