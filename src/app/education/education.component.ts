import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    standalone: false
})
export class EducationComponent implements OnInit {
  @Input() schoolName = '';
  @Input() schoolAddress = '';
  @Input() course = '';
  @Input() major = '';
  @Input() graduation = '';
  @Input() honor = '';
  @Input() courseworks = [''];
  @Input() certs = [
    {
      certificateName: '',
      provider: '',
      dateAcquired: '',
      credentialID: '',
      verificationURL: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
