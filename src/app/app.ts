import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/nav-bar/nav-bar';
import { FriendsList } from './components/friends-list/friends-list';
import { Notifications } from './components/notifications/notifications';
import { UserProfile } from './components/user-profile/user-profile';
import { ConferenceList } from './components/conference-list/conference-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NavBar, FriendsList, Notifications, UserProfile, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularSSA6');
}
