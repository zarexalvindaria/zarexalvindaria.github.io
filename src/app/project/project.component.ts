import { Component, Inject, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      name: 'TechTrends',
      image: [
        {
          imageGroup: 'techtrends',
          imageURL: 'github-actions',
          captionHead: 'GitHub Actions',
          caption:
            'Used Continuous Integration (CI) via GitHub Actions to build, tag, and push the TechTrends Docker image to DockerHub.',
        },
        {
          imageGroup: 'techtrends',
          imageURL: 'cicd',
          captionHead: 'Continuous Delivery with ArgoCD',
          caption:
            'Used ArgoCD for Continuous Delivery--to release the TechTrends app to staging and production environments using templated manifests from the Helm chart.',
        },
      ],
      tags: [
        'python',
        'docker',
        'kubernetes',
        'flask',
        'helm',
        'cloud-native',
        'dockerhub',
        'cicd',
        'argocd',
        'github-actions',
        'k3s',
        'vagrant',
      ],
      description: `
              <p>TechTrends is an online news-sharing platform that enables access to the
                latest news within the cloud-native ecosystem. It is written using the
                Flask framework and uses SQLite to store submitted articles.</p>
              <p>In this project, I built endpoints for the TechTrends web application
                displaying the health of the application, metrics such as the total
                number of posts in the database, and connection requests to the
                application. I also extended the application to log events such as when
                an article is created or retrieved, when a non-existing article is
                accessed and when certain pages are accessed.
              </p>
              <p>
                I have also packaged the application using Docker—allowing the app to
                run locally inside a Docker container and used Continuous Integration
                (CI) via GitHub Actions to build, tag, and push the TechTrends Docker
                image to DockerHub.
              </p>
              <p>
                I have also deployed the web application in a Kubernetes cluster using
                k3s—creating declarative Kubernetes manifests and releasing the
                application to the sandbox environment. Throughout the deployment, I
                used Helm, a template configuration manager, to parameterize the web
                app's manifests.
              </p>
              <p>
                As the final step, I released the TechTrends application automatically
                using Continuous Delivery with ArgoCD to staging and production
                environments using templated manifests from the Helm chart.
              </p>
                `,
    },
    {
      name: 'Udaconnect (Message Passing & Refactoring)',
      image: [
        {
          imageGroup: 'udaconnect',
          imageURL: 'app-preview',
          captionHead: '',
          caption: '',
        },
      ],
      tags: [
        'python',
        'docker',
        'kubernetes',
        'flask',
        'kafka',
        'microservice',
        'rest-api',
        'postgresql',
        'grpc',
        'cloud-native',
        'refactoring',
        'message-passing',
        'monolith-architecture',
      ],
      description: `
              <p>
                Udaconnect is an application running in Flask that uses location data
                from mobile devices to help conference attendees connect by being
                informed when they have attended the same booths and presentations at an
                event.
              </p>
              <p>
                In this project, I have refactored Udaconnect's monolithic architecture
                into a microservice architecture using several message passing
                techniques. First, I have reviewed the application and chose the best
                message passing techniques suitable for each microservice—documenting
                the plan in an architecture diagram and showing the services and message
                passing techniques between them. Along the way, I used Kubernetes while
                maintaining the core functionality of the project.
              </p>
              <p>
                I refactored the application and implemented Kafka, gRPC, and RESTful
                API to allow message passing between the microservices.
              </p>
              <p>
                Lastly, I created OpenAPI documentation for the API endpoints and
                provided a Postman library for the endpoints I created.
              </p>
              `,
    },
    {
      name: 'Observability & Metrics Dashboard',
      image: [
        {
          imageGroup: 'observability',
          imageURL: 'dashboard',
          captionHead: '',
          caption: '',
        },
      ],
      tags: [
        'grafana',
        'suse',
        'prometheus',
        'slo',
        'cloud-native',
        'observability',
        'jaeger',
        'jaeger-tracing',
        'kubernetes',
        'vagrant',
      ],
      description: `
              <p>
                In this project, I created dashboards that use multiple graphs to
                monitor a sample application deployed on a Kubernetes cluster. I used
                Prometheus, Jaeger, and Grafana to monitor, trace and visualize the
                needed metrics.
              </p>
              <p>
                First, I installed Helm, Jaeger, Grafana, and Prometheus in a Kubernetes
                cluster—ensuring that all pods and services are running for all the
                components. Then, I wrote service level indicator (SLI) metrics and
                built a dashboard to measure the KPIs.
              </p>
              <p>
                I added Jaeger spans to measure the processes on the backend of the
                Flask application and then integrated Jaeger's collected metric to the
                Grafana dashboard.
              </p>
              <p>
                Lastly, I created a dashboard containing graphs that capture all the
                metrics of the KPIs that adequately represented the SLIs and SLOs.
              </p>`,
    },
    {
      name: 'Hardened Microservice',
      image: [
        {
          imageGroup: 'msecurity',
          imageURL: 'monitoring',
          captionHead: '',
          caption: '',
        },
      ],
      tags: [
        'docker',
        'kubernetes',
        'flask',
        'security',
        'microservice',
        'grafana',
        'cloud-native',
        'hardening',
        'falco',
        'stride',
        'rke',
        'trivy',
        'grype',
      ],
      description:
        "<p>In this project, I have applied what I learned about STRIDE to threat model a microservices environment. Then, I defined its security architecture and its attack surfaces. </p> <p>Next, I hardened the application's Docker environment using Docker-bench. I also created an RKE cluster and walked through a testing methodology to harden a Kubernetes cluster.</p> <p>I then hardened and deployed a Flask application after identifying and remediating its vulnerable libraries and code using Grype and Trivy.</p><p>Afterward, I implemented runtime monitoring using Grafana to visualize runtime security alerts via Sysdig Falco.</p><p>I ran an unknown payload containing malicious commands into the Kubernetes cluster to simulate a security incident. Then, I remediated the incident, documented, and prepared an incident response report to be submitted to a Chief Technology Officer—describing the incident, its impact, and the remediation steps taken.</p>",
    },
  ];

  techtrendsImages = ['github-actions', 'cicd'].map(
    (n) => `assets/images/techtrends/${n}.png`
  );
  udaconnectImages = ['app-preview'].map(
    (n) => `assets/images/udaconnect/${n}.png`
  );
  observabilityImages = ['dashboard'].map(
    (n) => `assets/images/observability/${n}.png`
  );
  msecurityImages = ['monitoring'].map(
    (n) => `assets/images/msecurity/${n}.png`
  );

  projectKeywords = {
    techtrends: [
      'python',
      'docker',
      'kubernetes',
      'flask',
      'helm',
      'cloud-native',
      'dockerhub',
      'cicd',
      'argocd',
      'github-actions',
      'k3s',
      'vagrant',
    ],
    observability: [
      'grafana',
      'suse',
      'prometheus',
      'slo',
      'cloud-native',
      'observability',
      'jaeger',
      'jaeger-tracing',
      'kubernetes',
      'vagrant',
    ],
    udaconnect: [
      'python',
      'docker',
      'kubernetes',
      'flask',
      'kafka',
      'microservice',
      'rest-api',
      'postgresql',
      'grpc',
      'cloud-native',
      'refactoring',
      'message-passing',
      'monolith-architecture',
    ],
    msecurity: [
      'docker',
      'kubernetes',
      'flask',
      'security',
      'microservice',
      'grafana',
      'cloud-native',
      'hardening',
      'falco',
      'stride',
      'rke',
      'trivy',
      'grype',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
