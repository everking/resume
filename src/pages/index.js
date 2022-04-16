import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <h1 className="hero__title">Eric de Guzman</h1>
      <h2>Software Engineer</h2>
      <h3>{siteConfig.tagline}</h3>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.connectLinkedIn}>
          Connect with me through <a target="_blank" href="https://www.linkedin.com/in/ericdg/">LinkedIn</a> 

        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
