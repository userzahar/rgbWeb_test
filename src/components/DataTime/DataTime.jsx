import calendar from "../../images/calendar.svg"
import time from "../../images/time.svg"
export const DataTime=()=>{
    return <div style={{backgroundColor:"pink"}}>
        <div>
        <img src={calendar} alt="календарь" />
            <p>28 декабря</p>
        </div>
        <div>
        <img src={time} alt="часы" />
            <p>3,5 часа</p>
        </div>
    </div>
}