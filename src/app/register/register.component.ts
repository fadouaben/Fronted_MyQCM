import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form!: FormGroup;
  formuser!: FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: this.formBuilder.group({
        username: ['', Validators.required], // Champs correspondant à 'user.username' dans le modèle Django
        firstName: [''], // Champs correspondant à 'user.firstName' dans le modèle Django
        lastName: [''], // Champs correspondant à 'user.lastName' dans le modèle Django
        password: ['', Validators.required], // Champs correspondant à 'user.password' dans le modèle Django
        email: ['', Validators.required], // Champs correspondant à 'user.email' dans le modèle Django
      }),
      tele: ['', Validators.required],
      role: ['', Validators.required]
    });
     
  }
  submit():void{

    if (this.form.valid) {
      // Envoyez les données du formulaire au backend Django
      const formData = this.form.value;
      this.http.post('http://localhost:8000/user/signup/', formData).subscribe(
        () =>  this.router.navigate(['/login']),
        (error) => {
          // Gérez les erreurs ici
          console.error('Erreur lors de l\'inscription de l\'utilisateur', error);
        }
      );
  }

}
}