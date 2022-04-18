import React, { useState, useEffect, Component } from 'react'
import { render } from 'react-dom'

import './Styles.css'

// https://codesandbox.io/s/5wy3rz5z1x?file=/src/ShowcaseLayout.js
// https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f

// Next.js
// https://nextjs.org/docs/api-reference/next/image
// https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/background.js

let desktopImageSrc : string = `https://verdant.s3.filebase.com/content/Dal-Lake__India_v16x9.jpg`
let mobileImageSrc : string = `https://verdant.s3.filebase.com/content/Dal-Lake__India_v16x9.jpg`

/* function getWindowDimensions() {
  let window: {
    innerWidth: number,
    innerHeight: number
  } = {
    innerWidth:  windowDimensions().innerWidth,
    innerHeight: height
  }
  return window
}; */

// image source
// https://www.jpl.nasa.gov/images/pia25123-dal-lake-india

interface Size {
  width: number | undefined;
  height: number | undefined;
}

/* export const Container = () => { } */

export const Win = () => {

  const imageSrc : string =  1000 >= 650 ? desktopImageSrc : mobileImageSrc;

  return (
    <div className="window" style={{backgroundImage: `url(${imageSrc})` }}>
        <div className="content">
            <h1>India</h1>
            <p>lake Dal</p>
            <p>size.width px / size.height px</p>
        </div>
    </div>
  )

}

/* export const Page = () => { } */
