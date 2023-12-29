import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApi';
  //data="Form Datas";

ChangeValue(title:any){
  this.title=title.name;
}
getData(data:any){
  alert(data);
}
}
