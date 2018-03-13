import { DataTableModule } from 'primeng/datatable';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    DataTableModule,
    TooltipModule
  ],
  declarations: [

    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasGridComponent,
    MessageComponent
  ],
  exports: [

    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasGridComponent,
    MessageComponent
  ]
})
export class PessoasModule { }
