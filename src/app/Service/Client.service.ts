import {BehaviorSubject, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { client } from '../Model/client';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
  
  export class clientService {
    res: any;
    // private isAuth: BehaviorSubject<boolean>;
    // private result: BehaviorSubject<string>;
    // private resultLog: BehaviorSubject<string>;
    // private client:BehaviorSubject<client>;
    // private reponse: BehaviorSubject<string>;
    constructor(private httpClient: HttpClient) {
    //   this.isAuth = new BehaviorSubject<boolean>(false);
    //   this.client = new BehaviorSubject<client>(null);
    //   this.resultLog = new BehaviorSubject<string>(null);
    }

    headers= new HttpHeaders()
   .set('content-type', 'application/json')
   .set('Access-Control-Allow-Credentials', 'true')
   .set("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
   .set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
   .set('Access-Control-Allow-Origin', 'http://localhost:4200')
   .set('Access-Control-Allow-Origin', '*');

   AddClient(form:FormGroup){
    this.httpClient.post('http://127.0.0.1:8000/api/post', JSON.stringify(form.value) , { headers : this.headers }).toPromise().then(data => {
    //   localStorage.setItem('user',data['user']['id']);
    //   this.client.next(data['user']);
    console.log(data);
      
    //   this.resultLog.next('isok');
    //   this.isAuth.next(true);

        }).catch((error) => {
            console.log(error);
            
        });
    }

   
//   getMessage():Observable<string>{
//     // return  this.resultLog.asObservable();
//   }
    
}