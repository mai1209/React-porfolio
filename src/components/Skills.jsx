
import Style from '../style/Skills.module.css'
import React from 'react'
import ComponetsSkills from './ComponetsSkills'


export default function Skills() {
    return (
<>

 <h3  className={Style.titleContent} >Skills</h3>
        <div id='Skills' className={Style.container}>
         
          <div className={Style.containerSkills}>
            <ComponetsSkills />
          </div>
          
        </div>


</>
      
    )
}
