import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  techtrendsImages = ['github-actions', 'cicd'].map((n) => `assets/images/techtrends/${n}.png`);
  udaconnectImages = ['app-preview'].map((n) => `assets/images/udaconnect/${n}.png`);
  observabilityImages = ['dashboard'].map((n) => `assets/images/observability/${n}.png`);
  msecurityImages = ['monitoring'].map((n) => `assets/images/msecurity/${n}.png`);

  techtrendsTags = [
    'kubernetes', 'docker', 'argocd', 'python'
  ]

  udaconnectTags = [

  ]

  observabilityTags = [

  ]

  msecurityTags = [
    
  ]

  constructor() {  
  }

  ngOnInit(): void {
  }

}
