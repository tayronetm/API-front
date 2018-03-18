import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let msg: string;

  
    if (errorResponse instanceof Response
      && errorResponse.status >= 400 && errorResponse.status <= 499) {
    let errors;
    msg = 'Ocorreu um erro ao processar a sua solicitação';

    if (errorResponse.status === 403){
      msg = 'Você não tem permissão para executar esta ação.'
    }

    try {
      errors = errorResponse.json();

      msg = errors[0].mensagemUsuario;
    } catch (e) { }
  }
    else {
      console.log("erro"+errorResponse);
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }

    this.toasty.error(msg);
  }

}
