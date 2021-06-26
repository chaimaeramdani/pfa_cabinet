import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacteznous',
  templateUrl: './contacteznous.component.html',
  styleUrls: ['./contacteznous.component.scss']
})
export class ContacteznousComponent implements OnInit {
  registrationForm! : FormGroup;

  get Fname(){
    return this.registrationForm.get('Fname');
  }
  
  get Email(){
    return this.registrationForm.get('Email');
  }
  get Message(){
    return this.registrationForm.get('Message');
  }
 
  constructor(private fb: FormBuilder){}
  
  ngOnInit() {
    return this.registrationForm = this.fb.group(
      {
    
        Fname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
        Email : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
          Message : new FormControl('')
      }
    )
  }



}
