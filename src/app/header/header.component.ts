import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() zarexalvindaria = '';
  @Input() fullName = '';
  @Input() jobTitle = '';
  @Input() githubURL = '';
  @Input() linkedinURL = '';
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
