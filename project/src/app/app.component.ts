import { Component } from '@angular/core';
import { PopupService } from 'src/app/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  isAuthorized: boolean = false;
  showLoginPopup: boolean = false;
  showWarningPopup: boolean = false;
  showRegistrationPopup: boolean = false;

  constructor (private popupService: PopupService)
  {
    popupService.showLoginEmitted$.subscribe(
      text => {
          this.showLogin(text);
      });
    popupService.showWarningEmitted$.subscribe(
      text => {
          this.showWarning(text);
      });
    popupService.showRegistrationEmitted$.subscribe(
      text => {
          this.showRegistration(text);
      });
  }

  showLogin(data):void{    
    this.showLoginPopup = true;
    console.log(data);
  }

  hideLogin():void{    
    this.showLoginPopup = false;
  }

  showWarning(data):void{    
    this.showWarningPopup = true;
    console.log(data);
  }

  hideWarning():void{    
    this.showWarningPopup = false;
  }

  showRegistration(data):void{
    this.hideLogin();
    this.hideWarning();   
    this.showRegistrationPopup = true;
    console.log(data);
  }

  hideRegistration():void{    
    this.showRegistrationPopup = false;
  }
}
