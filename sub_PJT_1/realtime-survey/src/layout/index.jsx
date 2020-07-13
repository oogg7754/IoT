import React from 'react';
import Header from './header';
import Footer from './Footer';
import Drawer from './Drawer';
import Container from '@material-ui/core'
import Wrapper from './styles'

const Layout = props => {
    return (
        <Wrapper>
            <Drawer />
            <Header />
            <Container>
                
            </Container>
            <Footer />
        </Wrapper>
    )