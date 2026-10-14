import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-inscription',
  imports: [],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  x : string= "tttt";
  y = signal("bonjour");
  //id est un signal
  id = input.required<string>();
}
