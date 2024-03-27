import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  announcements: any[] = [
    {
      header: 'announcement-header-1.png',
      poster: 'announcement-poster-1.png'
    },
    {
      header: 'announcement-header-2.png',
      poster: 'announcement-poster-2.png'
    },
    {
      header: 'announcement-header-3.png',
      poster: 'announcement-poster-3.png'
    },
  ]

  events: any[] = [
    {poster: 'events-poster-1.png',},
    {poster: 'events-poster-2.png',},
    {poster: 'events-poster-3.png',},
    {poster: 'events-poster-4.png',},
    {poster: 'events-poster-5.png',},
  ]

  getAnnouncements = () => this.announcements
  getEvents = () => this.events

  constructor() { }
}
