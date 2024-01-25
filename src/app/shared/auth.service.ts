import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import{GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }

  //login user
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then((res:any) => {
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard']);
      if(res.user?.emailVerified==true){
        this.router.navigate(['dashboard']);
      } 
  }, err=>{
    alert(err.message);
    this.router.navigate(['/login']);
  })
  }


  //register user
  register(emain:string,password:string) {
    this.fireauth.createUserWithEmailAndPassword(emain,password).then((res:any) =>{
      alert('registration successful')
this.router.navigate(['/login']);
this.sendEmailForVarification(res.user);
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

//forgetPassword
forgetPassword(email:string){
this.fireauth.sendPasswordResetEmail(email).then(() =>{
  alert("successfull");
this.router.navigate(['/verify-email']);
},err=>{
  alert(err.message);
});
}

//verifyEmail
sendEmailForVarification(user:any){
  user.sendEmailForVarification().then((res:any) =>{
this.router.navigate(['/verify-email']);	
  },(err:any)=>{
alert(err.message);
  });
}


//sign with google
googleSignIn(){
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then((res:any)=>{
    this.router.navigate(['dashboard']);
    localStorage.setItem('token', JSON.stringify(res.user?.uid))
  },err=>{
    alert(err.message);
  })
}
// sig with facebook
// signInWithFacebook() {
//   this.fireauth.signInWithPopup(new this.fireauth.FacebookAuthProvider())
//     .then((result) => {
//       console.log('User signed in:', result.user);
//     })
//     .catch((error) => {
//       console.error('Error signing in with Facebook:', error);
//     });
// }
}