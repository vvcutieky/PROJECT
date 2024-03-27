import { Component } from '@angular/core';
import { TabsPage } from '../../tabs.page';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage {

  constructor(private tabsPage: TabsPage) { }

  ionViewWillEnter() {
    this.tabsPage.display = 'none';
  }

  ionViewWillLeave() {
    this.tabsPage.display = 'flex';
  }
}
