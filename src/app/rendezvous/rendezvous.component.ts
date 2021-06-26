import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {

  registrationForm! : FormGroup;

  get Fname(){
    return this.registrationForm.get('Fname');
  }
  get Lname(){
    return this.registrationForm.get('Lname');
  }
  get Email(){
    return this.registrationForm.get('Email');
  }
  get Phone(){
    return this.registrationForm.get('Date');
  }
 
  constructor(private fb: FormBuilder){}
  
  ngOnInit() {
    return this.registrationForm = this.fb.group(
      {
    
        Fname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
        Lname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
        Email : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
        Date : new FormControl('')
      }
    )
  }
  
  onSubmit(){
    console.log(this.registrationForm.value);
  }
}
