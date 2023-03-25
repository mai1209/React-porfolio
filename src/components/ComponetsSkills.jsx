
import Style from '../style/Skills.module.css'
import Components from '../info/Components'

export default function ComponetsSkills() {
    return (
        Components.map((Component) =>
            <div className={Style.Skills}>
                <img src={Component.img} alt="img" />
                <div className={Style.infoSkills}>
                    <h2>{Component.job} </h2>
                    <p>{Component.description} </p>
                </div>
            </div>
        )




    )
}
