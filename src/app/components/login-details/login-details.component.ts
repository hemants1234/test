import { Component,  ViewChildren, QueryList  } from '@angular/core';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent {

 tes: any;
 
 @ViewChildren('notification') private notificationsElements: any =  QueryList<Element>;

 opens() {    

  this.notificationsElements.forEach((element:any)=>{      
  const htmlElement = element.nativeElement as HTMLElement;
  htmlElement.setAttribute("style", "display:block;")
   });
}

close(){
  console.log('close')
  this.notificationsElements.forEach((element:any)=>{      
    const htmlElement = element.nativeElement as HTMLElement;
    htmlElement.setAttribute("style", "display: null;")
     });
}


}
