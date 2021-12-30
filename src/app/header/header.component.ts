import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fullName = 'Zarex Alvin Daria';
  jobTitle = 'Cloud Native Application Architect & Developer';
  githubURL = 'https://github.com/zarexalvindaria';
  linkedinURL = 'https://linkedin.com/in/zarexalvindaria';
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
