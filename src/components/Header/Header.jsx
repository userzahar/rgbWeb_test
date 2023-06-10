import { Section } from "../Section/Section"
import { DataTime } from "../DataTime/DataTime"
import {Logo} from "../Logo/Logo"
import { HeaderContainer } from "../HeaderContainer/HeaderContainer"
import { HeaderStyled } from "./Header.styled"

export const Header=()=>{
    return<HeaderStyled>
            <Section>
                <HeaderContainer>
                    <Logo />
                    <DataTime />
                </HeaderContainer>
            </Section>
        </HeaderStyled>
}