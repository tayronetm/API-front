import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { SharedModule } from './../shared/shared.module';
import { DataTableModule } from 'primeng/datatable';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    DataTableModule,
    TooltipModule,
    SharedModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [

    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasGridComponent
  ],
  exports: [

    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasGridComponent
  ]
})
export class PessoasModule { }
