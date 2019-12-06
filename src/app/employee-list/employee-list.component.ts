import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public empObj: any;
  empArray:IEmployee[];

  constructor(private employeeObj:EmployeeService) { }
  ngOnInit() {
    this.employeeObj.getEmployees().subscribe(data=>this.empArray=data);
  }

  onSelect(empObj:any) {
    this.empObj=empObj;
  }
}
