import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL='http://localhost:8000'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data:any[]=[]

  constructor(private http:HttpClient){}

  

  ngOnInit(){
    this.http.get(BASE_URL+'/',{
      withCredentials: true  
    }).subscribe(res=>{
      this.data=res as []
    })
  }

}
