import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  images = [`techtrends-cicd`, `udaconnect-preview`, `observability-dashboard`, 
            `hardened-microservice-monitor`, `techtrends-github-actions`].map((n) => `assets/images/${n}.png`);

  constructor() { }

  ngOnInit(): void {
  }

}
