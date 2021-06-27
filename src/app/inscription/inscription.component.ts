import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { clientService } from '../Service/Client.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  

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
  return this.registrationForm.get('Phone');
}
get Pass(){
  return this.registrationForm.get('Pass');
} 
constructor(private fb: FormBuilder , private client: clientService ){}

ngOnInit() {
  return this.registrationForm = this.fb.group(
    {
  
      Fname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      Lname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      Email : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      Phone : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      Pass :  new FormControl('',[Validators.required,Validators.pattern('[0-9a-zA-Z]{8,12}')]),
      cin : "null",
      ville:"Rabat",
      genre:"X",
      couvSociale:"KNOPS",
      profession:"ponstar",
      age:"23",
      image:"null",
      fichiers:[]
    }
  )
}

onSubmit(){
  console.log(JSON.stringify(this.registrationForm.value) );
  this.client.AddClient(this.registrationForm);
}
}
