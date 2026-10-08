import { Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference';

@Injectable({
  //ce service est disponible dans toute l'application
  //une seule instance de ce service sera créée et partagée dans toute l'application
  providedIn: 'root',
})
export class ConferenceService {
 getAllConferences() {
  console.log(this.conf);
    return this.conferences();
  }
  conf : Conference | null = null;
  conferences = signal<Conference[]> ([
      {
        id: 1,
        title: 'Angular 21 Conference',
        description: 'Découvrir les nouveautés d’Angular 21.',
        date: '2026-10-15',
        place: 'Tunis',
        maxParticipants: 50,
        nbParticipants: 25
      },
      {
        id: 2,
        title: 'Signals Workshop',
        description: 'Atelier pratique sur les Signals Angular.',
        date: '2026-10-30',
        place: 'Ariana',
        maxParticipants: 20,
        nbParticipants: 14
      },
      {
        id: 3,
        title: 'Web Conference',
        description: 'Conférence sur le développement web moderne.',
        date: '2026-11-20',
        place: 'Sousse',
        maxParticipants: 30,
        nbParticipants: 30
      },  
      {id: 4,
        title: 'Ancienne Conference',
        description: 'Cette conférence est ancienne et ne doit pas être affichée.',
        date: '2026-08-15',
        place: 'Tunis',
        maxParticipants: 40,
        nbParticipants: 20
      }
    ]);
  
}
