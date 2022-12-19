import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/modules/core/models/Employee';
import { AddEmployee } from 'src/app/modules/core/store/actions/employee.actions';
import { EmployeesState } from 'src/app/modules/core/store/reducers/Employee.reducers';
import { LoginState } from 'src/app/modules/core/store/reducers/login.reducers';
import { allEmployeesSelector } from 'src/app/modules/core/store/selectors/employee.selectors';
import { getLoggedEmp } from 'src/app/modules/core/store/selectors/login.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  loggedEmployeeId: string = "";
  employeeCred: Employee[] = [];
  totalEmployee: number = 0;
  loggedEmployee: Employee | undefined;
  employeeColumns: string[] = ['id', 'name', 'department', 'dateofjoining'];
  employeeByDepartment: {deptName: string, count: number}[] = [];

  employeeForm: FormGroup = new FormGroup({
    empId: new FormControl(null, Validators.required),
    fname: new FormControl(null, Validators.required),
    lname: new FormControl(null, Validators.required),
    department: new FormControl(null, Validators.required),
    dateofjoining: new FormControl(null, Validators.required),
  })

  constructor(
    private employeeStore: Store<EmployeesState>,
    private loginStore: Store<LoginState>,
  ){}
  ngOnInit(){
    this.getLoggedEmployeeDetails();
    this.getEmployeeDetails();
  }
  getEmployeeDetails(){
    this.employeeStore.select(allEmployeesSelector)
    .subscribe({
      next: (data) => {
        if(data){
          this.employeeByDepartment = [];
          this.employeeCred = [...data];
          this.employeeCred.forEach(emp => {
            let dept: {deptName: string, count: number} | undefined = this.employeeByDepartment.filter(dept => dept.deptName === emp.department)[0];
            if(dept){
              dept.count += 1;
            }
            else{
              this.employeeByDepartment.push({
                deptName: emp.department,
                count: 1
              });
            }
          })
          console.log("employeeByDepartment", this.employeeByDepartment);
          this.totalEmployee = this.employeeCred.length;
          if(this.loggedEmployeeId != "")
            this.loggedEmployee = this.employeeCred.filter(employee => employee.empId === this.loggedEmployeeId)[0];
        }
      }
    })
  }

  getLoggedEmployeeDetails(){
    this.loginStore.select(getLoggedEmp)
      .subscribe({
        next: (data) => {
          this.loggedEmployeeId = data.empId
        },
        error: (data) => {
          this.loggedEmployeeId = ""
        }
      })
  }

  addEmployee(){
    if(this.employeeForm.valid){
      console.log("addEmployee", this.employeeForm.getRawValue());
      this.employeeStore.dispatch(new AddEmployee(this.employeeForm.getRawValue()));
    }
  }
}
