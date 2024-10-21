import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment.development';

const authConfig: AuthConfig = {
  clientId: environment.googleOAuth.clientId,
  redirectUri: environment.googleOAuth.redirectUri,
  scope: environment.googleOAuth.scope,
  issuer: 'https://accounts.google.com',
  responseType: 'token id_token',
  strictDiscoveryDocumentValidation: false,
};

@Injectable()
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  get accessToken(): string | null {
    return this.oauthService.getAccessToken();
  }

  private configure(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
