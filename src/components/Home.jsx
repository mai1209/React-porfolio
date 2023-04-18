import React from 'react'
import Style from '../style/Home.module.css'






export default function Home() {

   

    return (
        <>
            <div id='Home' className={Style.container}>
                <div className={Style.containerHome}>
                    <div className={Style.containerInfo}>
                        <p className={Style.title}>Welcome</p>
                        <p className={Style.job}> I'am a Front End Developer </p>
                        <p className={Style.location}>base in Santa Fe, Argentina</p>
                    </div>
                    <div className={Style.btnDiv}>
                    <a href="#About" className={Style.move}><img className={Style.btn} src={require("../img/icons8-clasificar-abajo-50.png")} alt="img" /> </a>
                    
                    </div>
                </div>
            </div>

        </>

    )
}
