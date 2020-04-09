import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }
  public product = [
    {id:"1",name:"tecno",description:"fast working",price:"20000"},
    {id:"1",name:"geonee",description:"larger storage",price:"25000"},
    {id:"1",name:"iphone",description:"working like a pc",price:"30000"},
    {id:"1",name:"samsung",description:"very smart",price:"150000"},
    {id:"1",name:"itel",description:"long life battery",price:"10000"},
  ]
  ngOnInit() {
  }

}
