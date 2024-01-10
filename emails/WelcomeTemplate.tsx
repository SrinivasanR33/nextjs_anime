import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from "@react-email/components";
const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome to RS Entertainment ✋ </Preview>
            <Body>
                <Container>
                    <Text>Hello {name}</Text>
                    <Link href="https://nextjs-anime-kappa.vercel.app/api">RS Entertainment</Link>
                </Container>
            </Body>
        </Html>
    )
}

export default WelcomeTemplate