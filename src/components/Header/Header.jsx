import { Section } from "../Section/Section"
import { DataTime } from "../DataTime/DataTime"
import {Logo} from "../Logo/Logo"

export const Header=()=>{
    return<header>
            <Section>
            <Logo />
            <DataTime />
            </Section>
        </header>
}