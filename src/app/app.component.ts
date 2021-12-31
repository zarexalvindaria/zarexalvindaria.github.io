import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zarexalvindaria';
  zarexalvindaria = {
    'fullName': 'Zarex Alvin Daria',
    'jobTitle': 'Cloud Native Application Architect & Developer',
    'githubURL': 'https://github.com/zarexalvindaria',
    'linkedinURL': 'https://linkedin.com/in/zarexalvindaria'
}
  
  constructor() { }
 
  
}
