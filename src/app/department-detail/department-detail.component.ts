import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId: any;
  departmentName: string;
  constructor(private activatedRouteObj:ActivatedRoute) { }
  ngOnInit() {
 

    let id = (this.activatedRouteObj.snapshot.paramMap.get('deptId'));
    let name = (this.activatedRouteObj.snapshot.paramMap.get('deptName'));

    
    this.departmentId = id;
    this.departmentName = name;
  }

}
