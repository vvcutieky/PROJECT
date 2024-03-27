import { Component } from '@angular/core';
import { TabsPage } from '../../tabs.page';

@Component({
  selector: 'app-passers',
  templateUrl: './passers.page.html',
  styleUrls: ['./passers.page.scss'],
})
export class PassersPage {

  constructor(private tabsPage: TabsPage) { }

  ionViewWillEnter() {
    this.tabsPage.display = 'none';
  }

  ionViewWillLeave() {
    this.tabsPage.display = 'flex';
  }
}
