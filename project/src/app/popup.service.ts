import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

    // Observable string sources
    private emitShowLogin = new Subject<any>();
    // Observable string streams
    showLoginEmitted$ = this.emitShowLogin.asObservable();
    // Service message commands
    showLogin(change: any) {
        this.emitShowLogin.next(change);
    }

    // Observable string sources
    private emitShowWarning = new Subject<any>();
    // Observable string streams
    showWarningEmitted$ = this.emitShowWarning.asObservable();
    // Service message commands
    showWarning(change: any) {
        this.emitShowWarning.next(change);
    }

    // Observable string sources
    private emitShowRegistration = new Subject<any>();
    // Observable string streams
    showRegistrationEmitted$ = this.emitShowRegistration.asObservable();
    // Service message commands
    showRegistration(change: any) {
        this.emitShowRegistration.next(change);
    }    
}