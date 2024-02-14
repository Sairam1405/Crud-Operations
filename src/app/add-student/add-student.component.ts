import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { error, log } from 'console';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
mm: any;
msg:boolean=false
constructor(private fb:FormBuilder, private ser:StudentsService){

}
addForm=this.fb.group({
  id:['',[Validators.required]],
  name:[],
  place:[]
})
saveData(){
  // console.log(this.addForm.value);
  this.msg=true
  this.ser.Add(this.addForm. value).subscribe((result)=>{
    console.log(result);
    
    
  })
  
}
removeMsg(){
  this.msg=false
}


}
