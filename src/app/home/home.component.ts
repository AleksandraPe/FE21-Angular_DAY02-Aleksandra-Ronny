import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cars: Array<Car> = [];

  constructor(private carService: CarService) { }

  getCars() : void {
    this.cars = this.carService.getCars();
  }
  
  ngOnInit() : void {
    this.getCars();
  }

}
