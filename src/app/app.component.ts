import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Zarex Alvin Daria • Portfolio';
  zarexalvindaria = {
    fullName: 'Zarex Alvin Daria',
    jobTitle: `Data&nbsp;Engineering • Cloud&nbsp;Native&nbsp;Application`,
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
      'Mobile Application',
      'Mobile Programming',
      'Android Programming',
      'Data Structures',
      'UI/UX Design',
      'Information Security',
      'Software Development',
      'Systems & Management',
      'Programming Embedded Systems',
      'Systems and Design',
      'IT Analytics',
    ],
    certificate: [
      {
        certificateName: 'Streamlined Data Ingestion with pandas',
        provider: 'Datacamp',
        dateAcquired: '02.2023',
        credentialID: 'Credential ID fc4520137be210ac6150110171a76752bc4142f7',
        verificationURL:
          'https://www.datacamp.com/statement-of-accomplishment/course/fc4520137be210ac6150110171a76752bc4142f7',
      },
      {
        certificateName: 'Learning Hadoop',
        provider: 'LinkedIn Learning',
        dateAcquired: '02.2023',
        credentialID: 'Credential ID f31f4cb6d...',
        verificationURL:
          'https://www.linkedin.com/learning/certificates/f31f4cb6d896232eaf2b226c075301ba80bac558f96119fe39dc334ee4933035?u=35279340',
      },
      {
        certificateName: 'Google Project Management',
        provider: 'Coursera',
        dateAcquired: '11.2022',
        credentialID: 'Credential ID WLBDH9GRXAC6',
        verificationURL:
          'https://coursera.org/verify/professional-cert/WLBDH9GRXAC6',
      },
      {
        certificateName: 'Full Stack: Angular and Java Spring Boot E-Commerce Website',
        provider: 'Udemy',
        dateAcquired: '02.2022',
        credentialID: 'Credential ID UC-d0590dc0-ca03-4391-a153-01e527780932',
        verificationURL:
          'https://www.udemy.com/certificate/UC-d0590dc0-ca03-4391-a153-01e527780932',
      },
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
    projectItems: [
      {
        projectName: `NikRik's Batangas Lomi Web Application`,
        projectId: 'nikriks',
        image: [
          {
            imageName: '01_nikriks_alacarte_category',
            captionHead: "NikRik's Ala Carte Product Category",
          },
        ],
        tags: [
          'angular',
          'spring-boot',
          'mysql',
          'cloud-run',
          'cloud-sql',
          'docker',
          'container-registry',
          'github-pages',
          'full-stack-ecommerce',
          'google-cloud-platform',
        ],
        description: `
                <p><a href="https://nikriks.github.io" target="_blank">NikRik's Batangas Lomi Web Application</a> 
                is a project in our Software Development subject at Asia Pacific College. In this project, 
                I served as the Lead Developer of our Software Development team (RAMStack) in which we partnered 
                with a startup food business named NikRik's Batangas Lomi to build software from their specified 
                requirements.<br/><br/>

                As a solution to their business pain points, we built an Order Management System/Full Stack 
                E-commerce Web Application using Angular as the front end, Spring Boot as the backend, and 
                MySQL as the database.<br/><br/>

                Every 2 weeks time, we met with NikRik's owners to present the progress in the development 
                of the application and gathered their feedback.<br/><br/>

                Our team also used Docker to containerize the backend of the application, Google Cloud Platform 
                (Cloud Run for the backend and Cloud SQL for the database), and GitHub Pages (frontend) 
                to deploy the application.
                </p>
                `,
      },
      {
        projectName: "Philippine Imports '20-'21",
        projectId: 'analytics',
        image: [
          {
            imageName: '01_top_2021_commodity_imports',
            captionHead: 'Top Commodity Imports 2021',
          },
          {
            imageName: '02_top_2021_imports_source',
            captionHead: 'Source Country of 2021 Imports',
          },
          {
            imageName: '03_top_2020_commodity_imports',
            captionHead: 'Top Commodity Imports 2020',
          },
          {
            imageName: '04_top_2020_imports_source',
            captionHead: 'Source Country of 2020 Imports',
          },
        ],
        tags: [
          'tableau',
          'data-science',
          'analytics',
          'openstat',
          'philippine-imports',
          'business-intelligence',
        ],
        description: `
                <p>
                This project is part of my IT Analytics 3 track where I used Tableau 
                and Microsoft Excel to combine datasets by using Tableau's UNION and 
                JOIN function. In this project, I generated insights about the Philippines' 
                Top Commodity Imports for the year 2020 &#45; 2021
                 by processing more than a million records of datasets that I manually downloaded 
                 from PSA's OpenSTAT database. Some insights I generated from the datasets 
                 are the following:<br/><br/>
                
                 <ol>
                  <li>The Philippines relied on Indonesia's coal resources to power its economy's 
                  energy requirement for the years 2020 to 2021.</li>
                  <li>The Philippines needs to shift into renewable energy to prevent relying on 
                  Indonesia for its energy needs.</li>
                  <li>The longer the quarantine is extended, the more the Philippines will need to 
                  import coal if it does not find ways to shift into renewable energy.</li>
                  <li>Indonesia, China, Vietnam, and the US are the top four exporters to the Philippines 
                  in the year 2020 to 2021.</li>
                 </ol>
                </p>
                `,
      },
      {
        projectName: 'TechTrends',
        projectId: 'techtrends',
        image: [
          {
            imageName: 'github-actions',
            captionHead: 'GitHub Actions',
          },
          {
            imageName: 'cicd',
            captionHead: 'Continuous Delivery with ArgoCD',
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
        projectName: 'Udaconnect (Message Passing & Refactoring)',
        projectId: 'udaconnect',
        image: [
          {
            imageName: 'app-preview',
            captionHead: 'UdaConnect App',
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
        projectName: 'Observability & Metrics Dashboard',
        projectId: 'observability',
        image: [
          {
            imageName: 'dashboard',
            captionHead: 'Observability Dashboard',
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
        projectName: 'Hardened Microservice',
        projectId: 'msecurity',
        image: [
          {
            imageName: 'monitoring',
            captionHead: 'Grafana Security Monitoring',
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
        description: `<p> In this project, I have applied what I learned about STRIDE to threat 
          model a microservices environment. Then, I defined its security architecture 
          and its attack surfaces.
          
          </p> <p>Next, I hardened the application's Docker 
          environment using Docker-bench. I also created an RKE cluster and walked 
          through a testing methodology to harden a Kubernetes cluster.</p>
          
          <p>I then 
          hardened and deployed a Flask application after identifying and remediating 
          its vulnerable libraries and code using Grype and Trivy.</p>
          
          <p>Afterward, 
          I implemented runtime monitoring using Grafana to visualize runtime security 
          alerts via Sysdig Falco.</p>
          
          <p>I ran an unknown payload containing malicious 
          commands into the Kubernetes cluster to simulate a security incident. Then, I 
          remediated the incident, documented, and prepared an incident response report 
          to be submitted to a Chief Technology Officer—describing the incident, its 
          impact, and the remediation steps taken.</p>`,
      },
    ],
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
