import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
url='http://localhost:3000/Students'
  constructor(private hp:HttpClient) { }

  Display(){
   return this.hp.get(this.url)
  }

  Add(data:any){
    return this.hp.post(this.url,data)
    
  }

  Delete(id:any){
    return this.hp.delete(`${this.url}/${id}`);
    }

  Update(id:any,body:any){
    return this.hp.put(`${this.url}/${id}`, body);
  }

}
