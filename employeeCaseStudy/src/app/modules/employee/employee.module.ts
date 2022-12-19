import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.modules';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginReducer } from '../core/store/reducers/login.reducers';
import { StoreModule } from '@ngrx/store';
import { EmployeeReducer } from '../core/store/reducers/Employee.reducers';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,  
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forFeature('login', LoginReducer),
    StoreModule.forFeature('employee', EmployeeReducer),
  ]
})
export class EmployeeModule { }
