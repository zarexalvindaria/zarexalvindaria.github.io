import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  zarexalvindaria = {
    fullName: 'Zarex Alvin Daria',
    jobTitle: 'Cloud Native Application Architect & Developer',
    githubURL: 'https://github.com/zarexalvindaria',
    linkedinURL: 'https://linkedin.com/in/zarexalvindaria',
    school: {
      name: 'Asia Pacific College',
      address: 'Makati City, Philippines',
      course: 'BS Information Technology',
      major: 'Major in Mobile and Internet Technologies',
      expectedGraduation: '2022',
    },
  };

  constructor() {}
}
