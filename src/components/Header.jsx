import { useState } from 'react'
import '../style/Header.css'


export default function Header() {

  const [open, setOpen] = useState(false)


  return (
    <div className='header'>
      <div className='container'>
        <div className='container-img'>
          <img className='img-header' src='/' alt="img" />
          <p className='name'>Maira Coria</p>
          <p className='job'>Front End Developer</p>
        </div>
        <div className={`link-header ${open && 'open'}`} >
          <a href="#Home">Home</a>
          <a href="#About">About Me</a>
          <a href="#Skills">Skills</a>
          <a href="/">Resume</a>
          <a href="/">Porfolio</a>
          <a href="/">Contact</a>
        </div>
        <div className='social-media'>
          <a href="/"><img className='icon' src={require("../img/icons8-instagram-50.png")} alt="img" /></a>
          <a href="/"><img className='icon' src={require("../img/icons8-linkedin-50.png")} alt="img" /></a>
          <a href="/"><img className='icon' src={require("../img/icons8-github-50.png")} alt="img" /></a>
          <button className={`button ${open && 'open'}`} onClick={() => setOpen(!open)}> x </button>
        </div>
      </div>
    </div>
  )
}
