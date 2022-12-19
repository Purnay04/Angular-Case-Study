import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Employee } from '../../models/Employee';
import { GetEmployeeDetails } from '../../store/actions/employee.actions';
import { EmployeesState } from '../../store/reducers/Employee.reducers';
import { allEmployeesSelector } from '../../store/selectors/employee.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  employeeCred: Employee[] | undefined;
  employeeSubscription: Subscription | undefined;
  hideFlag: boolean = true;
  loginForm : FormGroup = new FormGroup({
    empId: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  constructor(
    private employeeStore: Store<EmployeesState>
  ){}

  ngOnInit(){
    this.employeeSubscription = this.employeeStore.select(allEmployeesSelector)
    .subscribe({
      next: (data) => {
        if(data)
          this.employeeCred = [...data];
      }
    })
    this.employeeStore.dispatch(new GetEmployeeDetails());
  }

  ngOnDestroy(){
    if(this.employeeSubscription)
      this.employeeSubscription.unsubscribe();
  }
}
