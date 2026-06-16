import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Event-Driven Data Pipeline',
      type: 'Cloud Architecture',
      description:
        'Engineered an automated workflow using S3 Event Notifications to trigger Lambda functions for asynchronous file processing and SNS for real-time alerts.',
    },
    {
      title: 'Airline Web & Admin Portal',
      type: 'Full-Stack Portal',
      description:
        'Built an airline portal featuring user login for selection/booking alongside an administrator dashboard designed to filter, shortlist, and analyze usage trends.',
    },
    {
      title: 'Bioinformatics Genomic Tool',
      type: 'Academic Research',
      description:
        'Developed bio-information analysis tools aimed at mapping genomic patterns to model and animate the dynamic effectiveness of targets against drug configurations.',
    },
    {
      title: 'Covid-19 Medical Bed Tracker',
      type: 'Academic Emergency Portal',
      description:
        'Gathered data in real-time during the pandemic to develop a live portal helping users instantly check and verify medical bed availability.',
    },
    {
      title: 'Functional Arithmetic Calculator',
      type: 'Core JavaScript Logic',
      description:
        'Built a functional calculator executing arithmetic computations to reinforce native JavaScript logic and direct browser DOM manipulation rules.',
    },
  ];
}
