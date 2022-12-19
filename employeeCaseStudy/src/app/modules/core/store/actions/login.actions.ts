import { Action } from '@ngrx/store';

export enum LoginActionTypes { 
    DoLogin = '[Login] Do Login',
    GetLoggedEmployee = '[Login] Retrieve Logged Person'
}

export class DoLogin implements Action{
    public readonly type = LoginActionTypes.DoLogin;
    constructor(public empCred: {
        empId: string,
        password: string
    }) {}
};

export class GetLoggedEmployee implements Action{
    public readonly type = LoginActionTypes.GetLoggedEmployee;
}

export type LoginActions = 
        | DoLogin
        | GetLoggedEmployee