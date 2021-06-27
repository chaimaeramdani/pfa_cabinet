import { client } from '../Model/client';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  registrationForm! : FormGroup;


  get Email(){
    return this.registrationForm.get('Email');
  }
  
  get Pass(){
    return this.registrationForm.get('Pass');
  } 

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    return this.registrationForm = this.fb.group(
      {
        Email : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
        Pass :  new FormControl('',[Validators.required,Validators.pattern('[0-9a-zA-Z]{8,12}')]),
      }
    )
  }

  onSubmit(){
    console.log(this.registrationForm.value);
  }
}
