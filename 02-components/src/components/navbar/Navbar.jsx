import React from 'react'
import NavLogoTitle from './NavLogoTitle'
import NavigationMenu from './NavigationMenu'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
      {/* Logo and Title */}
        <div className="logo-title">
          <NavLogoTitle/>
        </div>
        {/* Navigation Menu */}
        <div className="menu">
          <NavigationMenu/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
