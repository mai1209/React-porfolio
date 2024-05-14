import React from 'react'
import Style from '../style/About.module.css'

export default function About() {
    return (
        <div id='About' className={Style.container}>
            <div className={Style.info}>
                <p className={Style.title}>Know Me More</p>
                <p className={Style.subTitle}><font color='green' >I'm Maira Coria </font>, a Full Stack Developer</p>
                <p className={Style.aboutInfo}>I'm from Santa Fe (Capital) - Argentina, I'm 27 years old, I'm a responsible person with a great desire to work, continue to gain experience and develop myself day by day, therefore I'm looking for my first web development job.
                    My programming knowledge is FullStack.
                    My level of oral and written English is intermediate.
                </p>
            </div>
            <div className={Style.infoData}>
                <p className={Style.data}><b>Name:</b> Maira Coria</p>
                <p className={Style.data}><b>Email:</b><font color='green'> mairacoria1209@gmail.com</font></p>
                <p className={Style.data}><b>Age:</b> 27</p>
                <p className={Style.data}><b>From:</b> Santa Fe, Argentina</p>
               <a className={Style.btn}  href='../img/icons8-github-50.png' download >Download  CV</a>
            </div>



        </div>
    )
}
