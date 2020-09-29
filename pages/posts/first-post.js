import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Our First Post</title>
      </Head>
      <h1>Our First Post!</h1>
      <Link href="/"><a>Back Home</a></Link>
    </Layout>
  )
}