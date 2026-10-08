import { Component, inject, signal } from '@angular/core';
import { Conference } from '../../models/conference';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';
import { ConferenceService } from '../../services/conference-service';
import { RouterLink } from '@angular/router';


//méta data de la classe
@Component({
  selector: 'app-conference-list',
  //imports array of the components/Pipes/Directives used in the template
  imports: [RouterLink, UpperCasePipe, DatePipe, NgClass, ConferenceDetails], 
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
//injecting the service
confS=inject(ConferenceService);
//appeler la méthode getAllConferences() du service pour récupérer la liste des conférences
conferences = signal<Conference[]> (this.confS.getAllConferences().
filter(c => new Date(c.date) >= new Date(this.today)));

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
