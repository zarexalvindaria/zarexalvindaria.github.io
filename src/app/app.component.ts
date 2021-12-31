import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  zarexalvindaria = [
    {
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
      relatedCoursework: [
        'Database Management',
        'Mobile & Mobile Programming',
        'Data Structures',
        'UI/UX Design',
        'Web Programming',
        'Information Security',
        'Software Development',
        'Systems & Management',
        'Programming Embedded Systems',
        'Systems and Design',
        'IT Analytics',
      ],
      certificate: [
        {
          certificateName: 'Cloud Native Application Architect Nanodegree',
          provider: 'Udacity',
          dateAcquired: '11.2021',
          credentialID: 'Credential ID HZJUTKXR',
          verificationURL: 'https://graduation.udacity.com/confirm/HZJUTKXR',
        },
        {
          certificateName: 'Associate Reactive Developer (OutSystems 11)',
          provider: 'OutSystems',
          dateAcquired: '04.2021',
          credentialID: '',
          verificationURL: '',
        },
        {
          certificateName: 'AWS Certified Cloud Practitioner (CLF)',
          provider: 'Amazon Web Services',
          dateAcquired: '03.2021',
          credentialID: 'Credential ID 4S4E4TKBK2V4Q19X',
          verificationURL:
            'https://www.youracclaim.com/badges/da75d76f-315c-4365-bfff-f5889234ccf4',
        },
      ],
    },
  ];

  constructor() {}
}
