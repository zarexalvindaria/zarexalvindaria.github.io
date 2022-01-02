import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() projectItems = [
    {
      projectName: '',
      projectId: '',
      image: [{ imageName: '', captionHead: '' }],
      tags: [''],
      description: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
