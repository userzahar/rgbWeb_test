import { ClientSection } from "../ClientSection/ClientSection"
import { Container } from "../Container/Container"
import { InfoSection } from "../InfoSection/InfoSection"
import { Section } from "../Section/Section"
import {Form} from "../Form/Form"
import { FlexContainer } from "../FlexContainer/FlexContainer"
export const Main=()=>{
    return <main>
        <Section>
            <FlexContainer>
                <Container>
                        <InfoSection/>
                        <ClientSection/>
                </Container>
                        <Form></Form>
            </FlexContainer>
        </Section>
    </main>
}