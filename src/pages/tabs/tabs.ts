import { Component } from '@angular/core';

import { HomePage } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;

  constructor() {

  }
}
