import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstCustComponent } from './first-cust/first-cust.component';
import { FsChild1Component } from './fs-child1/fs-child1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScChild1Component } from './sc-child1/sc-child1.component';
import { SecondCustComponent } from './second-cust/second-cust.component';

const routes: Routes = [
  {path:'', redirectTo: 'first-cust', pathMatch: 'full'},
  {
    path:'first-cust',
    component: FirstCustComponent,
    children: [
      {path: 'first-child', component: FsChild1Component}
    ]
  },
  {
    path:'second-cust',
    canActivate: [AuthGuard],
    component: SecondCustComponent,
    children: [
      {path: 'second-child', component: ScChild1Component}
    ]
  },
  {
    path:"employee",
    loadChildren: () => import("./employee/employee.module").then(x => x.EmployeeModule)
  },
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
