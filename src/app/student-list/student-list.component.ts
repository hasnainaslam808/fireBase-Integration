import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Student } from '../model/student';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  isUpdateMode: boolean = false;
studentList: Student[]=[];
studentObj:Student={
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: ''
};
id:string='';
firstName:string='';
lastName:string='';
email:string='';
mobileNumber:string='';
  constructor(private auth:AuthService,private data:DataService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }


// get all students 
  getAllStudents(){
    this.data.getAllStudent().subscribe(res =>{
      this.studentList = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err =>{
      alert('Error Fetching Dats')
    })
  }



  // delete student


  deleteStudent(student:Student){
    if(window.confirm('Are you sure want to delete this student'+student.firstName+' '+student.lastName+'?')){
    this.data.deleteStudent(student);
    }
  }

  //add student
  addStudent() {
    if (this.firstName == '' || this.lastName == '' || this.email == '' || this.mobileNumber == '') {
      alert('Please enter all fields');
      return;
    }
  
    if (this.id) {
    
      this.updateStudent();
    } else {
     
      this.studentObj.id = '';
      this.studentObj.email = this.email;
      this.studentObj.mobileNumber = this.mobileNumber;
      this.studentObj.firstName = this.firstName;
      this.studentObj.lastName = this.lastName;
      this.data.addStudent(this.studentObj);
    }
  
    this.resetForm();
  }
  
  // reset form

  resetForm(){
    this.id='',
    this.firstName= '',
    this.lastName= '',
   this.email= '',
    this.mobileNumber= ''

    this.isUpdateMode = false;
  }




  updateStudentForm(student: Student) {
 
    this.id = student.id;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.email = student.email;
    this.mobileNumber = student.mobileNumber;


    this.isUpdateMode = true;
  
  }
  updateStudent() {
    if (this.id) {
      const updatedStudent: Student = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        mobileNumber: this.mobileNumber
      };
  

      this.data.updateStudent(updatedStudent);
      this.resetForm();
    }
  }
}
