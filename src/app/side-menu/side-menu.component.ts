import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menuType: string = 'push';
  constructor() { }

  ngOnInit() {}

}
