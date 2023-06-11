import planet from "../../images/planet.svg"
import zero from "../../images/Zero.svg"
import { FlexThumbStyled } from "../FlexThumb/FlexThumbStyled"

import { GeneralText, InfoSectionThumb,RedText } from "./InfoSection.styled"

export const InfoSection=()=>{
    return <>
    <InfoSectionThumb>
        <img src={planet} alt="planet icon" width="19" height="19"/>
        <p>Вебинар</p>
    </InfoSectionThumb>
    <RedText>FRONT-END</RedText>
    <FlexThumbStyled>
    <img src={zero} alt="напис: с нуля" />
    <p>легкий старт в IT профессии</p>
    </FlexThumbStyled>
    <GeneralText><i>Узнайте какими </i>навыками должен обладать фронтенд разработчик в 2022 году <i>и как начать карьеру </i>в востребованной профессии 
с зарплатой
<span>от 1 000$</span></GeneralText>
    </>
}