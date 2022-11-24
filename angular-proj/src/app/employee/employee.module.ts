import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeChildComponent } from './employee-child/employee-child.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeChildComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
