import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.css']
})
export class MaintainComponent implements OnInit {

  car = new FormGroup({
    brand: new FormControl("", Validators.required),
    type:new FormControl("", Validators.required),
    seats: new FormControl("", Validators.required),
    gear: new FormControl("", Validators.required),
    class: new FormControl("", Validators.required),
    img: new FormControl("", Validators.required),
  })

  constructor(private carService: CarService) { }

  onSubmit(){
    if (this.car.valid) {
      let newCar : Car = {id: Math.floor(Math.random()*1000), brand: this.car.value.brand, type: this.car.value.type, seats: this.car.value.seats, gear: this.car.value.gears, class: this.car.value.class, img: this.car.value.img}
      this.carService.addCar(newCar);
    }
  }

  ngOnInit(): void {
  }

}
