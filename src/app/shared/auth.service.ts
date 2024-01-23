import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }

  //login user
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard']);
  }, err=>{
    alert(err.message);
    this.router.navigate(['/login']);
  })
  }


  //register user
  register(emain:string,password:string) {
    this.fireauth.createUserWithEmailAndPassword(emain,password).then(() =>{
      alert('registration successful')
this.router.navigate(['/login']);
    }, err =>{
      alert(err.message);
 this.router.navigate(['/register']);   
    });  
}

//logout

logOut() {
  this.fireauth.signOut().then(() =>{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
,err=>{
  alert(err.message);
});
}
}