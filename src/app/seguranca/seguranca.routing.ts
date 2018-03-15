import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';
import { PessoasPesquisaComponent } from '../pessoas/pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SegurancaRouting { }
