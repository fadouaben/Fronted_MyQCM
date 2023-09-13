import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form!: FormGroup;
  csrfToken: string = '';

  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router){}

  ngOnInit(): void {
      this.form=this.formBuilder.group({
        username:'',
        password:''
      });
      this.http.get('http://localhost:8000/get-csrf-token/').subscribe((data: any) => {
        this.csrfToken = data.csrfToken;
      });
  }
  submit():void{
    const headers = {
      'X-CSRFToken': this.csrfToken
    };

    this.http.post('http://localhost:8000/user/signin/', this.form.getRawValue(), { headers }).subscribe(() => this.router.navigate(['/skills']));

  }
}
