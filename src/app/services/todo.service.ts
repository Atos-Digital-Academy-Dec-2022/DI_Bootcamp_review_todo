import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos =[
    {
      titre:'Exercise XP',
      description:'DI Exercise XP'
    },
    {
      titre:'Exercise XP Ninja',
      description:'DI Exercise XP'
    },
    {
      titre:'Exercise XP Gold',
      description:'DI Exercise XP'
    }
  ]

  chargerTodos(){
    return this.todos
  }

}
