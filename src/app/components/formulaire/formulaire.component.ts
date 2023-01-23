import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private todoservice : TodoService) {
  }

  titre = 'titre'
  description='description'

  listeTodos = <any>[]

  ngOnInit(): void {
    this.listeTodos = this.todoservice.chargerTodos()
    console.table(this.listeTodos);

  }

  getInputTitre(input:any){
    console.log(input);

  }


  getInputDescription(input:any){
    console.log(input);

  }

  add(myForm: any){
    console.log(myForm);

  }
}
