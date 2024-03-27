import { Component } from '@angular/core';
import { TabsPage } from '../../tabs.page';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage  {

  constructor(private tabsPage: TabsPage) { }

  ionViewWillEnter() {
    this.tabsPage.display = 'none';
  }

  ionViewWillLeave() {
    this.tabsPage.display = 'flex';
  }
}
