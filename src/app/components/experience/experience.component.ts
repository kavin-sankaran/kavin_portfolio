import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  workHistory = [
    {
      company: 'Tata Consultancy Services (TCS)',
      location: 'Chennai, India',
      role: 'Front-End Developer (Angular)',
      tenure: 'Feb 2024 - Present (2 years)',
      highlights: [
        'Enterprise Application Development: Developing and maintaining responsive enterprise applications using Angular (2+), TypeScript, HTML5, CSS3, and Bootstrap.',
        'Performance Optimization: Built reusable UI components, handled form validations, and optimized performance using RxJS and lazy loading.',
        'Module Ownership (Admin): Spearheaded the development of the core Admin Module, focusing on internal business operations and system configurations.',
        'HR & Access Management: Engineered the Employee Component to streamline staff onboarding; implemented complex logic for employee record creation and Role-Based Access Control.',
        'Financial Portfolio Tools: Developed the Loan & Interest Portfolio module, creating data-driven interfaces to manage user loan lifecycle, interest calculations, and portfolio tracking.',
        'FinTech Operations: Built Routing Masters for payment gateway configuration, enabling dynamic management and troubleshooting of payment routes.',
        'Inventory Management: Developed the Product List component featuring advanced filtering, bulk actions, and real-time status updates using RxJS.',
        'System Architecture: Implemented a robust Routing and Guarding strategy to secure admin tools and used Angular Material/Bootstrap for a consistent, responsive UI.',
        'Dynamic Data Integration: Integrated RESTful APIs with front-end components to enable seamless real-time data rendering and implemented Interceptors for robust error handling.',
        'DevOps: Streamlined the deployment lifecycle by configuring CI/CD pipelines using GitHub Actions/Jenkins for automated testing and deployment to AWS S3 and CloudFront.',
        'Agile Collaboration: Actively contributed to Agile/Scrum sprints, utilizing Git for version control and JIRA for task tracking.',
      ],
    },
  ];
}
