import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName:new FormControl("", Validators.required),
    street: new FormControl("", Validators.required),
    streetNo: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    zip: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email])
  })
  constructor() { }

  onSubmit(){
    if (this.contact.valid) {
      Swal.fire(`Dear ${this.contact.value.firstName}, we will contact you soon.`)
    }
  }
  ngOnInit(): void {
  }

}
