import React, { Component } from 'react'

// Random Grid Layouts
// https://codesandbox.io/s/5wy3rz5z1x?file=/src/ShowcaseLayout.js:1829-1841

class Layout extends Component {
  
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return ( <React.Fragment>{this.props.children}</React.Fragment> )
  }
  
} export default Layout
export * from './Header'
export * from './Footer'