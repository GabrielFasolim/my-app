import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Gabriel';

  userData ={
    email: 'Gabrielzinho',
    role: 'Admin',

  }

  title = 'my-app';
}
