import React from 'react'
import Head from '../components/Head'  // Verdant Tongues
import Layout from 'components/Layout' // Design System
import { home, posts } from '../public/assets/data'

import type { ReactElement } from 'react'

// Random Grid Layouts
// https://codesandbox.io/s/5wy3rz5z1x?file=/src/ShowcaseLayout.js:1829-1841

// https://nextjs.org/docs/basic-features/layouts

const data = home.map((item) => {

  return (
    item.title,
    item.description,
    item.image,
    item.link,
    item.linkText,
    item.tags
  )

 });

console.log(data[0])

export default function Page() {
  return (
    <>
      <Head />
      <h1>Page</h1>
      <p>with props</p>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}