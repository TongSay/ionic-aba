import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  image = 'assets/icon/home/transfer.png';
  constructor() { }

  ngOnInit() {
  }

}
