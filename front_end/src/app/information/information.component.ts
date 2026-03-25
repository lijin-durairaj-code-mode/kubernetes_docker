import { Component  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const BASE_URL='http://userdetails-backend-kubernetes-service:8000'
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient) {
    this.contactForm = this.fb.group({
      name: [
        '', 
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      email: [
        '', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      query: [
        '', 
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500)
        ]
      ]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // highlight all errors
      return;
    }

    this.http.post(BASE_URL+'/add_user',this.contactForm.value,{
      withCredentials: true   
    })
    .subscribe((res)=>{
      this.contactForm.reset();
    },(err)=>{
      console.log(err)
    },()=>{
      console.log('completed !!!')
    })
}
}

