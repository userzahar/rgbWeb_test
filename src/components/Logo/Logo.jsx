import LogoSVG from "../../images/Logo.svg"
import { LogoSizeIMG } from "./Logo.styled"
export const Logo=()=>{
    return(<div>
        <LogoSizeIMG src={LogoSVG} alt="logo" />
    </div>)
}
