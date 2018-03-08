import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  
  profissoes = ['Programador', 'Empresario', 'Outra' ];

salvar(form : NgForm){
  console.log("eita porra");
}

}
