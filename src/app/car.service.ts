import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars : Array<Car> = [];

  constructor() { 
    this.cars = CARS;
  }

  getCars() : Array<Car> {
    return this.cars;
  }

  addCar(car : Car) : void {
    this.cars.push(car);
  }
}
