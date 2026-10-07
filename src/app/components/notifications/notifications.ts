import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-notifications',
  imports: [NgIf],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  show= signal(false);
  showNotifications() {
    this.show.set(!this.show());
  }
}
