import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore';
import { Student } from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  // productLength: any
  constructor(private afs:AngularFirestore) {}
   



  // add student

  addStudent(student:Student){
    const classroom = {
      className: 'student',
      rollnumber:"three"
    }
    student.id = this.afs.createId();
    return this.afs.collection('/classrooms').add(classroom);
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
