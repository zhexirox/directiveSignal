import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  //? Dos formas de hacer injecciones o en el constructor
  private fb = inject( FormBuilder );
   //constructor( private fb: FormBuilder ) {}

  public color: string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email] ]
  });


  changeColor() {

    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));


  }



}
