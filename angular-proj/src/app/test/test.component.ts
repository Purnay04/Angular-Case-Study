import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  state: boolean = false;
  name = 'Gaurav';
  fontColor = 'Red';
  email = 'test@gmail.com';
  numbers: number[] = [];
  index = 1;
  shoppingCartItem = '';
  @ViewChild('phone') input: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {
    this.state = false;
  }

  changeState() {
    this.state = !this.state;
  }

  callUser() {
    if(this.input)
      alert('Calling user phone number:' + this.input.nativeElement.value);
  }

  updateName() {
    this.name =
      this.name === 'Gaurav' ? 'Boris' : this.name != 'Boris' ? 'Gaurav' : '';
  }

  updateFontColor() {
    this.fontColor = this.fontColor === 'Red' ? 'Blue' : 'Red';
  }

  updateNewName(name: string) {
    this.name = name;
  }

  increment() {
    this.index++;
    this.numbers.push(this.index);
  }

  clear() {
    this.numbers = [];
  }

  addToCart(value: string) {
    this.shoppingCartItem = value;
  }
}
