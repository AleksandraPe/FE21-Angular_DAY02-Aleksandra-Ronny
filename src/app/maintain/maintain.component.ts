import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

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

  constructor() { }

  onSubmit(){
    if (this.car.valid) {
    }
  }

  ngOnInit(): void {
  }

}
