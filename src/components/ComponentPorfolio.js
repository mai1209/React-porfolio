import React from 'react'
import Style from '../style/Porfolio.module.css'
import PorfolioInfo from '../info/Porfolio'

export default function ComponentPorfolio() {
  return (
   
      
      PorfolioInfo.map((Porfolio) =>
       <div >
        <div className={Style.Porfolio}> {Porfolio.work} </div>
        <div className={Style.Porfolio_hover}><a className={Style.Link}  href={Porfolio.URl}>{Porfolio.link}</a></div>
         
       </div>
        
      )
        
     
    )


  
}
