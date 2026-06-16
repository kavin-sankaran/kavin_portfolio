import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  skillCategories = [
    {
      title: 'Development & Programming',
      skills: [
        'Angular (2+)',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'RxJS',
        'LESS',
        'JavaScript',
        'Microservices',
        'Java',
        'Python',
        'Django',
        'Artificial Intelligence (AI)',
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        'MySQL',
        'Jenkins (CI/CD)',
        'Git',
        'GitHub',
        'Visual Studio Code',
        'AWS',
        'IntelliJ',
      ],
    },
    {
      title: 'Concepts',
      skills: [
        'Component Architecture',
        'API Integration',
        'Responsive Web Design',
        'Agile Scrum',
      ],
    },
  ];
}
