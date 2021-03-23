import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  cars = [
    {
      carName : "Volvo",
      carImage : "https://images.pexels.com/photos/4501407/pexels-photo-4501407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      carName : "Toyota",
      carImage : "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      carName : "Alfa Romeo",
      carImage : "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      carName : "Chevrolet",
      carImage : "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      carName : "Mercedez",
      carImage : "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
      carName : "Audi",
      carImage : "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    } 
  ];

  
  constructor() { }

  
  ngOnInit(): void {
  }

}
