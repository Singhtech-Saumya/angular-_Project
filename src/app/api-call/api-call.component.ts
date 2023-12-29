import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCAllComponent {

  displayedColumns: string[] = ['id', 'title']; // Add more columns based on your API data structure
  public getjsonApi: any;
  public postjsonApi:any;

  constructor(private http:HttpClient){
    
  }
ngOnInit():void{
  this.getMethod();
  this.postMethod();
}

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) =>{
      console.log(data);
      this.getjsonApi=data;
    }
    )
  }

  public postMethod(){
    const body={
      title:"Company",
      body:'abc',
      userId:'12'
    }

    this.http.post('https://jsonplaceholder.typicode.com/posts',body).subscribe((data) =>{
      console.log(data);
      this.postjsonApi=data;

    }
    )

}
}
