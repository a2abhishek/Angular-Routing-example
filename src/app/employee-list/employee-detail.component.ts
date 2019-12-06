import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  empArray:IEmployee[];
// @Input() public emp;
  constructor(private empObj:EmployeeService) { }

  ngOnInit() {
    this.empObj.getEmployees().subscribe(data=>this.empArray=data);
  }
}
