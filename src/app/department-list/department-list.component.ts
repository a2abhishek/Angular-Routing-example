import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {

  departmentList:any = [
    {
      'departmentId':'d101',
      'departmentName':'Sales'
    },
    {
      'departmentId':'d102',
      'departmentName':'Developing'
    },
    {
      'departmentId':'d103',
      'departmentName':'Designing'
    },
    {
      'departmentId':'d104',
      'departmentName':'Facility'
    }
  ]
  
  //making a constructor of router of router type to use its properties
  constructor(private router:Router) {}

  showDetail(inp:any) {
    console.log(inp.departmentId);
    this.router.navigate(['./departments',inp.departmentId,inp.departmentName]);
  }
}
