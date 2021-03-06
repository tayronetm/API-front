import { AuthService } from './auth.service';
import { AuthHttp } from 'angular2-jwt';

import { Injectable } from '@angular/core';

@Injectable()
export class LogoutService {

  tokensRevokeUrl = 'http://localhost:8080/tokens/revoke'

  constructor(private http: AuthHttp,
              private auth: AuthService) { }


  logout() {
    return this.http.delete(this.tokensRevokeUrl, { withCredentials: true})
    .toPromise()
    .then(() => {
      this.auth.limparAccessToken();
      
    });
  }

}


