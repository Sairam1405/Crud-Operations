import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { log } from 'console';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  data:any
  update:boolean=false
id: any;
constructor(private show:StudentsService,private fb:FormBuilder){

}
ngOnInit(){
 this.data= this.show.Display()
}
deleteStudent(v){
  console.log("deleted");
  
  this.show.Delete(v).subscribe((res)=>{
    console.log("deleted succesfully");
    this.ngOnInit();
    
  })
}






// ************************************************************


updateForm=this.fb.group({
  id:['',[Validators.required]],
  name:[],
  place:[]
})

updateStudent(v:any){
  this.updateForm.controls.id = v;
  // this.updateForm.controls.name = this.data.name;
  console.log(this.updateForm.controls.id)
  //console.log(this.updateForm.controls.name.value)
  this.update=true
let body ={
  id : v,
  name : this.updateForm.controls.name.value,
  place : this.updateForm.controls.place.value
}
  


// this.show.Update(v, body)

 

}


}

