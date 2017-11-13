import { Component } from '@angular/core';

import { HomePage, DescubrePage, CreaPage } from '../pages';

@Component({
  templateUrl: 'tabsPage.html'
})
export class TabsPage {

  homeTab = HomePage;
  descubreTab = DescubrePage;
  creaTab = CreaPage;

  constructor() {

  }
}
