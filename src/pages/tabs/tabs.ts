import { IonicPage } from 'ionic-angular';
import { MapPage } from './../map/map';
import { Component } from '@angular/core';

@IonicPage(
{
  name: 'tabs-page'
}
)

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "HomePage";
  tab2Root = MapPage;
  tab3Root = "JobPage"

  constructor() {

  }
}
