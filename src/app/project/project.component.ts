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

  projectKeywords: ProjectKeywords =  {
    "techtrends": ["python", "docker", "kubernetes", "flask", "helm", "cloud-native", "dockerhub", "cicd", "argocd", "github-actions", "k3s", "vagrant"],
    "observability": ["grafana", "suse prometheus", "slo", "cloud-native", "observability", "jaeger", "jaeger-tracing", "kubernetes", "vagrant"],
    "udaconnect": ["python", "docker", "kubernetes", "flask", "kafka", "microservice", "rest-api", "postgresql", "grpc", "cloud-native", "refactoring", "message-passing", "monolith-architecture"],
    "msecurity": ["docker", "kubernetes", "flask", "security", "microservice", "grafana", "cloud-native", "hardening", "falco", "stride", "rke", "trivy", "grype"]
  }

  constructor(){  
  }

  ngOnInit(): void {
  }

}

export interface ProjectKeywords {
  techtrends: string[],
  observability: string[],
  udaconnect: string[],
  msecurity: string[],
}
