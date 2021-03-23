import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  donation : number = 0;
  vip : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.donation += 10;
    if (this.donation >= 200) this.vip = true;
  }
}
