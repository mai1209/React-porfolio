import React from 'react'
import Style from '../style/Porfolio.module.css'
import ComponentPorfolio from './ComponentPorfolio'

export default function Porfolio() {
  return (

    <>
    <h3 className={Style.titleContent} >Porfolio</h3>
     <div id='Porfolio' className={Style.container}>
      
        <ComponentPorfolio />
    </div>
    </>
   
  )
}
