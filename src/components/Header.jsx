import { useState } from 'react'
import '../style/Header.css'



export default function Header() {

  const [open, setOpen] = useState(false)

  return (
    <div className='header'>
      <div className='container'>
        <div className='container-img'>
          <div className='img-header'></div>
          <p className='name'>Maira Coria</p>
          <p className='job'>Front End Developer</p>
        </div>
        <div className={`link-header ${open && 'open'}`}>
        
          <a href="#Home"  onClick={() => setOpen(!open)}  >Home</a>
          <a href="#About" onClick={() => setOpen(!open)} >About Me</a>
          <a href="#Skills" onClick={() => setOpen(!open)} >Skills</a>
          <a href="#Porfolio" onClick={() => setOpen(!open)} >Porfolio</a>
          <a href="#Contact" onClick={() => setOpen(!open)} >Contact</a>
        </div>
        <div className='social-media'>
          <a href="/"><img className='icon' src={require("../img/icons8-instagram-50.png")} alt="img" /></a>
          <a href="https://www.linkedin.com/in/maira-coria-81844918a/"><img className='icon' src={require("../img/icons8-linkedin-50.png")} alt="img" /></a>
          <a href="https://github.com/mai1209"><img className='icon' src={require("../img/icons8-github-50.png")} alt="img" /></a>
          <button className={`button change1 ${open && 'open'}  ${open && 'change2'}`} onClick={() => setOpen(!open)}  ><img  src={require("../img/icons8-menú-24.png")} alt="img" />  </button>
          <button className={`button change ${open && 'open'} ${open && 'change1'}`} onClick={() => setOpen(!open)}  ><img src={require("../img/icons8-cancelar-24.png")} alt="img" />  </button>
        </div>
      </div>
    </div>
  )
}
