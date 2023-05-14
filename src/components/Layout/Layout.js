import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}