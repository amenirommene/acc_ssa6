import { Component, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';


//méta data de la classe
@Component({
  selector: 'app-conference-list',
  //imports array of the components/Pipes/Directives used in the template
  imports: [UpperCasePipe, DatePipe, NgClass, ConferenceDetails], 
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
conferenceSelectionnee : Conference | null = null;
choisirConference(c: Conference){
  this.conferenceSelectionnee = c;
}
reserve(conf:Conference){}

   today = new Date().toISOString().split('T')[0];
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

couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'vert';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'rouge';
    } else {    
      return 'orange';
    }
  }
 
}
