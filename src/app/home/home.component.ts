import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars : Array<Car> = [
    {id: 1, brand: "VW", type: "Golf", seats: 4, gear: "Manual", class: "Standard", img: "https://i.auto-bild.de/mdb/extra_large/66/golf-285.png"},
    {id: 2, brand: "Mercedes", type: "E250", seats: 4, gear: "Automatic", class: "Premium", img: "https://www.autoscout24.at/assets/auto/images/model/mercedes-benz/mercedes-benz-e-250/mercedes-benz-e-250-l-01.jpg"},
    {id: 3, brand: "Mercedes", type: "S500", seats: 4, gear: "Automatic", class: "Luxury", img: "https://bilder.t-online.de/b/64/26/58/60/id_64265860/610/tid_da/mercedes-benz-s500.jpg"},
    {id: 4, brand: "Renault", type: "Twingo", seats: 4, gear: "Manual", class: "Economy", img: "https://media.renault.ch/__/129669.d4f76491.jpg"},
    {id: 5, brand: "Opel", type: "Zafira", seats: 6, gear: "Automatic", class: "Van", img: "https://image.stern.de/8522752/t/Gq/v3/w960/r0/-/09--artikel22692bild09jpg---92b5ef1d643e2568.jpg"}]

  constructor() { }

  ngOnInit(): void {
  }

}
