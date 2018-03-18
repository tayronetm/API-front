import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof Response
        && errorResponse.status === 401) {
      let errors;
      msg = 'Acesso negado.';

      try {
        errors = errorResponse.json();

        msg = errors[0].mensagemUsuario;
      } catch (e) { }
      

      console.error('Ocorreu um erro', errorResponse);

    } 
    else if (errorResponse instanceof Response
      && errorResponse.status === 0) {
    let errors;
    msg = 'Conexão recusada! Verifique se o backend foi iniciado.';

    try {
      errors = errorResponse.json();

      msg = errors[0].mensagemUsuario;
    } catch (e) { }
    

    console.error('Ocorreu um erro', errorResponse);

  } 
    else if (errorResponse instanceof Response
      && errorResponse.status >= 402 && errorResponse.status <= 499) {
    let errors;
    msg = 'Ocorreu um erro ao processar a sua solicitação';

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
