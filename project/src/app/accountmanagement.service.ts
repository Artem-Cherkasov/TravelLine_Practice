import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountmanagementService {

  private isAuthorizedValue: boolean = false;

  constructor() { }

  isAutorized(): boolean { 
    return this.isAuthorizedValue;
  }
  
  login(LoginName: string): void {
    this.isAuthorizedValue = true;
  }

  logout(): void {
    this.isAuthorizedValue = false;
  }

}
