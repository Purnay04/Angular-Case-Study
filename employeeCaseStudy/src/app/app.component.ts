import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LogOut } from './modules/core/store/actions/login.actions';
import { LoginState } from './modules/core/store/reducers/login.reducers';
import { isLogged } from './modules/core/store/selectors/login.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogged: Subscription | undefined;
  signOutBtn: boolean = false;
  constructor(
    private loginStore: Store<LoginState>,
    private router: Router,
  ){}
  ngOnInit(){
    this.isLogged = this.loginStore.select(isLogged)
      .subscribe({
        next: (isLogged) => {
          if(isLogged){
            this.signOutBtn = true;
          }
          else{
            this.signOutBtn = false;
          }
        }
      })
  }
  signOut(){
    this.loginStore.dispatch(new LogOut());
    this.router.navigate(['core','login']);
  }
}
