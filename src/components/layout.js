import React from 'react'
import './layout.css'
import "../pages/index.css"

export const Layout = ({children}) => {
  return (
      <div className="layout">
    {children}
    </div>
  )
}

export default Layout
