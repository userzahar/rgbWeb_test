import Kiril from "../../images/Kiril.png";
import surprice from "../../images/surprice.svg"
export const ClientSection =()=>{
    return <>
    <div>
        <img src={Kiril} alt="На фото Кирил с ноутбуком" />
        <div>
            <h6>Кирилл <span>КАСАТОНОВ</span></h6>
            <p>6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями</p>
        </div>
    </div>
    <div>
        <img src={surprice} alt="Подарочная коробка" />
        <div>
            <h6>Бонус за регистрацию</h6>
            <p>PDF-файл "5 преимуществ профессии фронтенд разработчика"</p>
        </div>
    </div>
    </>
}