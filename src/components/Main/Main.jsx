import { ClientSection } from "../ClientSection/ClientSection"
import { Container } from "../Container/Container"
import { InfoSection } from "../InfoSection/InfoSection"
import { Section } from "../Section/Section"
import {Form} from "../Form/Form"
export const Main=()=>{
    return <main>
        <Section>
            <Container>
                    <InfoSection/>
                    <ClientSection/>
            </Container>

                    <Form></Form>

        </Section>
    </main>
}