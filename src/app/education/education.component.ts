import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  @Input() schoolName = '';
  @Input() schoolAddress = '';
  @Input() course = '';
  @Input() major = '';
  @Input() graduation = '';

  relatedCoursework = [
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
  ];

  certificates = [
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
