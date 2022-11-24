import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeChildComponent } from "./employee-child/employee-child.component";
import { EmployeeComponent } from "./employee/employee.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "employee",
        pathMatch: "full"
    },
    {
        path: "employee",
        component: EmployeeComponent,
        children: [
            {
                path: "employee-child",
                component: EmployeeChildComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {

}