import Kiril from "../../images/Kiril.png";
import surprice from "../../images/surprice.svg"

import {BonusThumbStyled, ClientSectionStyled, ClientThumbStyled, FlexClientThumbStyled} from "./ClientSectionContainer"

export const ClientSection =()=>{
    return <ClientSectionStyled>
    <FlexClientThumbStyled>
        <img src={Kiril} alt="На фото Кирил с ноутбуком" style={{width:"52px", height:"49.27px"}} />
        <ClientThumbStyled>
            <h6>КИРИЛЛ <span>КАСАТОНОВ</span></h6>
            <p>6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями</p>
        </ClientThumbStyled>
    </FlexClientThumbStyled>
    <FlexClientThumbStyled>
        <img src={surprice} alt="Подарочная коробка" style={{width:"37.81px", height:"37.81px"}} />
        <BonusThumbStyled>
            <h6>Бонус за регистрацию</h6>
            <p>PDF-файл "5 преимуществ профессии фронтенд разработчика"</p>
        </BonusThumbStyled>
    </FlexClientThumbStyled>
    </ClientSectionStyled>
}