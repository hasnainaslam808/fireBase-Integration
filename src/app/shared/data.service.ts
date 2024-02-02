import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { Student } from '../model/student';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import{getMessaging,getToken,onMessage} from'firebase/messaging';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  currentMessage = new BehaviorSubject<any>(null);
 message:any = null;
  token={
    tokennid:""
   }

  // productLength: any
  constructor(private afs:AngularFirestore,private afm: AngularFireMessaging) {
    
    this.afm.messages.subscribe((_messaging:any) => {
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    })
  }
   


  

  requestPermission() {



    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log(currentToken);
           this.token.tokennid = currentToken;
            this.addToken();
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });


  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.currentMessage.next(payload);
    });
  }

  receiveMessage() {
    this.afm.messages.subscribe((payload: any)=>{
      console.log("received message", payload);
      this.currentMessage.next(payload)

    })
  }

  // add student

  addStudent(student:Student){
    // const classroom = {
    //   className: 'student',
    //   rollnumber:"three"
    // }
    student.id = this.afs.createId();
    return this.afs.collection('/students').add(student);
  }

//add token
addToken() {
  return this.afs.collection('/token').add(this.token);
}
  // get all students
  getAllStudent(){
    return this.afs.collection('/students').snapshotChanges();
  }

  // delete student

  deleteStudent(student:Student){
  return this.afs.doc('/students/'+student.id).delete();
  }

  //update student

  updateStudents(student:Student){
this.deleteStudent(student);
this.addStudent(student);

  }

  updateStudent(student: Student) {
    return this.afs.doc('/students/' + student.id).update(student);
  }
  

  // get all products

  getAllProduct(){
    return this.afs.collection('/product').snapshotChanges();
  }
}
