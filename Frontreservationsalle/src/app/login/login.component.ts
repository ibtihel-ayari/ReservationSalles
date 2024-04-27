import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "username": "",
    "password": ""
  };
  constructor(private homesrv:HomeService, private router:Router)
  { }
 onLogin() {

    this.homesrv.login(this.loginObj).subscribe((res:any)=>{
      console.log(res,"res");
      if(res) {
        localStorage.setItem('users',JSON.stringify(res.data));
        this.router.navigateByUrl('home');
      } else {
        alert('Check User Credentials')
      }
    },
    error=> {

    })
  }



 /* onLogin(){
    this.http.post('http://localhost:4000/auth/login',this.loginObj).subscribe((res:any)=>{
    if(res.result){
      alert("login success");
      this.router.navigateByUrl('/');
    }  else{
      alert(res.error)
    }
    })
  }*/

}
export class Login{
  username: string;
password:string;
constructor(){
  this.username='';
  this.password='';
}
}
