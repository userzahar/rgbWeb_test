import planet from "../../images/planet.svg"
import zero from "../../images/Zero.svg"
export const InfoSection=()=>{
    return <>
    <div style={{backgroundColor:"pink"}}><img src={planet} alt="planet icon" />
    <p>Вебинар</p>
    </div>
    <h2>FRONT-END</h2>
    <div>
    <img src={zero} alt="напис: с нуля" />
    <p>легкий старт в IT профессии</p>
    </div>
    <p>Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году и как начать карьеру в востребованной профессии 
с зарплатой
<span>от 1 000$</span></p>
    </>
}