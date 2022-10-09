import Head from 'next/head';
import Alert from '../components/alert';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I work as a frontend developer in Tokyo.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Alert type="success">
          This is the alert instance with type "success".
        </Alert>
        <Alert type="error">
          This is the alert instance with type "error".
        </Alert>
      </section>
    </Layout>
  );
}