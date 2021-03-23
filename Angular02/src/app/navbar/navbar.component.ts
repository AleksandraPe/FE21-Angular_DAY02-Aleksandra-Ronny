import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projectName:string;

  clickCounter :number = 10;

  constructor() { 
    this.projectName = "Cars";
  }

  countClick(){
    this.clickCounter = this.clickCounter+10;
}

  ngOnInit(): void {
  }

}
