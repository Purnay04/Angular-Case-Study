import { Action, State } from "@ngrx/store";
import { Employee } from "../../models/Employee";
import { LoggedEmp } from "../../models/LoggedEmp";
import { LoginActionTypes } from "../actions/login.actions";

export interface LoginState{
    loggedEmployee: Readonly<LoggedEmp>,
    loading: boolean
}

const nullEmployee: Employee = {
    empId: "",
    firstName: "",
    department: "",
    password: ""
}
const initialState: LoginState = {
    loggedEmployee : {
        empId: "",
        empDetails: nullEmployee, 
    },
    loading: false
};

export function LoginReducer(state = initialState, action: Action): LoginState {
    switch (action.type){
        case LoginActionTypes.GetLoggedEmployee:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}