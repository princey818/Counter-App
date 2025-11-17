import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
counter = 0;

  ngonInit() {
    const savedValue = localStorage.getItem('counter');
    if(savedValue!==null){
      this.counter = parseInt (savedValue,10);
    }
  }

  saveCounter(){
    localStorage.setItem('counter', this.counter.toString());
  }

  increment(){
    this.counter++;
    this.saveCounter();
  }

  decrement(){
    this.counter--;
    this.saveCounter();

  }

  reset(){
    this.counter = 0;
     this.saveCounter();
  }
}
