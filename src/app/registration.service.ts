import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http :HttpClient) { }

  userx = new User();
  //userid!: number;

  filluser(user:User){
    this.userx=user;
    
  }

  votersession: boolean = false;
  adminsession : boolean = false;

  public sendtoupdatetostop(){
    this.updatetostop(this.userx).subscribe({
      next: (v) => {console.log(v)},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });
  }

  link = "http://localhost:8081";

  public loginuserfromweb(user1:User){
   return this.http.post("http://localhost:8081/login",user1)      };
  

  public loginasadmin(user2:User){
    return this.http.post("http://localhost:8081/adminlogin",user2);
   }
  
   public registervoter(user3:User):Observable<any>{

    return this.http.post<any>("http://localhost:8081/register",user3)
   }
  
   public updateparty(id:number) {
    return this.http.post(this.link +'/updateparty',id);
  }


public updatetostop(user:any){
  console.log(user.emailid)
  console.log(user.password)

  return this.http.post("http://localhost:8081/stoptovote",user);

}

public checktostop(email:String){

  return this.http.post("http://localhost:8081/checktostop",email);
}

  }
