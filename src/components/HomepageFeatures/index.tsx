import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FeatureContent {
  title:    string;
  img:     string;
  experiences: string[];
  periodAndLocation?: string;
}

const FeatureList:FeatureContent[] = [
  {
    title: 'Skills',
    img: require('@site/static/img/Skills_Banner.png').default,
    experiences: [
      "Worked extensively using Java, JavaScript/React/Redux, MySQL/RDS, Oracle on Windows/UNIX/Docker/AWS and related technologies in areas of eCommerce, desktop, web product development, systems development, automation and tools.",
      "A good technical team leader and a (very) loyal follower. Follows Agile/Scrum best practices.",
      "Likes to organize communities and tech talks and to find other opportunities to teach other engineers and to encourage them to teach others as well.",
      "Engages teams and individuals in PM/XD/PD and end-users at a high level from ideas, concepts,  development, testing and to deployment.",
      "Specialties: Dev Ops, Business and Technical Analysis, Research and Development, Engineering, Re-Engineering, Problem Solving, UX Design"
    ],
  },
  {
    title: 'Staff Software Engineer @ Intuit',
    img: require('@site/static/img/Intuit_Banner.png').default,
    experiences: [
      "The technical lead of a team of 5 partnering with Accounting core, Reports, Payroll and Timekeeping teams to manage and measure profitability of projects serviced by Small Businesses. Working on core QuickBooks online Java core code-base - both frontend and backend. Oversees agile practices, building relationships with external PD and care teams, planning. Frontend has legacy dojo components and more modern Typescript.",
      "Worked with the Operational data lake team to measure development speed like time a release it built, frequency of releases per team, average PR review time, abandoned PRs. Tools include Athena, Elastic Search.",
      "Drove innovations and experiments like using ProxySQL / mariadb connector/j to take advantage of RDS read replicas. Using CloudFront for caching services and speedup access to service from non-US regions.",
      "Organized a business-unit wide community for engineers to foster a culture of sharing and paying it forward. Established internal security and production readiness review processes for new microservices based on Kubernetes. Organized monthly “Lightning Talks” to share ideas across teams and have fun in the process.",
      "Responsible for planning, development and deployment of Project Service microservice (that Project Management module of QBO and QBLive now uses) to AWS and later on migrating to container-based Intuit’s Kubernetes implementation including ArgoCD.",
      "Responsible for building proof-of-concept for using React Redux which we later used to build QB Accountant’s “Add Client” module and  later used as a pattern used by many teams as well for other modules (Intuit calls “plugins” and “widgets”).",
      "Led a team of 5 to build a microservice that drives Find-a-ProAdvisor website. The service was built from scratch using Java/Spring and deployed to Tomcat/Apache/MySQL application architecture. The front-end UI was in Angular. All aspects of development and deployment was handled by the team including getting architectural and network security approval and even the purchase of the machines needed.",
      "Received a patent for “Accountant Client Matching”.  It’s a UX pattern to rank users and to make sure that most users are seen on the search.",
      "Worked on the Siebel/Oracle eCommerce system (eStore). jsp/html/oracle database, siebel"
    ],
    periodAndLocation: "FEBRUARY 2006 - PRESENT,  MOUNTAIN VIEW, CA"
  },
  {
    title: 'Senior Consultant @ Chevron',
    img: require('@site/static/img/Chevron_Banner.png').default,
    experiences: [
      "Systems automation, System management and monitoring tools, Troubleshooting applications and services. Work included a lot of system scripting and building UI dashboards for server monitoring."
    ],
    periodAndLocation: "AUGUST 2003 - FEBRUARY 2006,  SAN RAMON, CA"
  },
  {
    title: 'Senior Consultant @ ICRG',
    img: require('@site/static/img/ICRG_Banner.png').default,
    experiences: [
      "Assigned with a number of companies like Kikkoman, Uplister, Micrel, etc. Worked on mostly coding using Windows technologies like C#."
    ],
    periodAndLocation: "MAY 2000 - AUGUST 2003, SAN MATEO, CA"
  },
  {
    title: 'Senior Consultant @ CIS',
    img: require('@site/static/img/CIS_Banner.png').default,
    experiences: [
      "Built the first version of 'Bayad Center' (Payment Center) where we deployed cash registers across Manila to accept payments for major companies in the Philippines. The payment service still exists: https://www.bayad.com/. During that time, the Internet was not wide-spread and certainly there was no mass deployment of broadband. Yet, we were able to transmit information back to our data center and were able to remotely update the application.",
      "Worked on mobile reader systems. Work included working on Windows printer drivers using C/C++ (worked with hardware team as well), a payment cashier system using Visual Basic, embedded OS changes and communication protocols."
    ],
    periodAndLocation: "MAY 1994 - MAY 1999, MANILA, PHILIPPINES"
  }
];

function Feature({img, title, periodAndLocation, experiences}:FeatureContent): JSX.Element {
  return (
    <div className={styles.featureContainer}>
      <div className={clsx('col col--2')}>
        <div className="text--center">
          <img className={styles.featureBanner} src={img} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{periodAndLocation}</p>
          <div className={styles.featureExperiences}>
            <div className={styles.featureExperienceItem}>
              <ul>
              {experiences.map((experience, idx) => (
                  <li key={idx}>{experience}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="column">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
