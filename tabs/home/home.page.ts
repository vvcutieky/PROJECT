import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  announcements: any[] = []
  events: any[] = []

  constructor(private data: DataService) { }

  ngOnInit() {
    this.announcements = this.data.getAnnouncements()
    this.events = this.data.getEvents();
  }

}
