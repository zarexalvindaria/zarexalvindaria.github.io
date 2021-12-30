import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  techtrends = ['github-actions', 'cicd'].map((n) => `assets/images/techtrends/${n}.png`);
  udaconnect = [].map((n) => 'assets/images/udaconnect/${n}.png');
  observability = [].map((n) => 'assets/images/observability/${n}.png');
  msecurity = [].map((n) => 'assets/images/msecurity/${n}.png');
  images = [`techtrends-cicd`, `udaconnect-preview`, `observability-dashboard`, 
            `hardened-microservice-monitor`, `techtrends-github-actions`].map((n) => `assets/images/${n}.png`);

            
  constructor() {
  }

  ngOnInit(): void {
  }

}
