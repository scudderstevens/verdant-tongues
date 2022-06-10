import { Component } from 'react'
import Head from '../components/Head'  // Verdant Tongues
import Layout from 'components/Layout' // Design System
import { stringify } from 'querystring';
//import { attributes, react as HomeContent } from './../content/home'

//import type { ReactElement } from 'react'

{/**
// Random Grid Layouts
https://codesandbox.io/s/5wy3rz5z1x?file=/src/ShowcaseLayout.js:1829-1841
https://nextjs.org/docs/basic-features/layouts
*/}

{/* export default class Home extends Component {

  render() {

    //let { timeline, current } = attributes;
    let GA_MEASUREMENT_ID = 'UA-90732209-1'
    console.log(`here `+JSON.stringify(content))
    return (
      <>

        <Head />
        
        <article id="top" className="main me">
          <h1>Page</h1>
          <p>with props</p>
        </article>
      
      </>
    )
  }
} */}
function Home({ title, posts }) {
  console.log(`here `+JSON.stringify(posts))
  return (
    <>
      <Head />
      <h1>{title}</h1>
      <p>with props</p>
      <ul>
      |     { Object.entries(posts) => (
             ^
  45 |       <li>{post.name}</li>
  46 |     ))}
    </ul>
    </>
  )
}

export async function getStaticProps() {

  let res: Object = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ];
  //const res = await fetch('https://.../posts')
  //const posts = await res.json()
  const posts = res
  const title = "Verdant Tongues"
  return {
    props: {
      posts,
      title
    },
  }
}

export default Home

{/* export default function Page() {
 return (
 <>
*      <Head />
*      <h1>Page</h1>
*      <p>with props</p>
 </>
)
}
/ */}

{/* Page.getLayout = function getLayout(page: ReactElement) {
return ( <Layout>{page}</Layout>)
} */}