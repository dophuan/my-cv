import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My CV</title>
        <meta name="description" content="My about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>About page here</h2>
    </div>
  )
}
