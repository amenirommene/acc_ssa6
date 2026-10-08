import { Component, input } from '@angular/core';

@Component({
  selector: 'app-inscription',
  imports: [],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {

  id = input.required<string>();
}
