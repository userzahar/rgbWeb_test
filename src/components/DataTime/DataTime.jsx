import calendar from "../../images/calendar.svg"
import time from "../../images/time.svg"
import { DataStyled, DataButton, DataText } from "./DataTime.styled"

export const DataTime=()=>{
    return <DataStyled>
        <DataButton>
        <img src={calendar} alt="календарь" width="15" height="15"/>
            <DataText>28 декабря</DataText>
        </DataButton>
        <DataButton>
        <img src={time} alt="часы" width="17" height="17" />
            <DataText>3,5 часа</DataText>
        </DataButton>
    </DataStyled>
}