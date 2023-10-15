import React, {  useState } from 'react'
import './App.css'



const NavLinkCustom = ({text,href,setActive,active}) => {
  return <a href={href} onClick={()=>setActive(href)} className={active === href ? "active" : ""}>{text}</a>
}

const Header = () => {
  const [active,setActive] = useState('/#home')

  return (
    <div className="App">
        <header className="header navbar">
        <a href="\" className="logo">Portfolio</a>
        <nav className="navbar">
        <NavLinkCustom href="/#home" text="Home" active={active} setActive={setActive}/>
        <NavLinkCustom href="/#about" text="About" active={active} setActive={setActive}/>
        <NavLinkCustom href="/#services" text="Services" active={active} setActive={setActive}/>
        <NavLinkCustom href="/#portfolio" text="Projects" active={active} setActive={setActive}/>
        <NavLinkCustom href="/#contact" text="Contact" active={active} setActive={setActive} />
      </nav>
        </header>
</div>
  )
}

export default Header