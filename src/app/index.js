import React from 'react';

import Theme from 'app/Theme';
import ScrollToTop from "app/ScrollToTop";
import Background from "app/Background";
import Header from 'sections/Header';
import Footer from 'sections/Footer';
import Content from 'sections/Content';
import Router from "app/Router";
import Analytics from "app/Analytics";


export default () => {
    return (
        <Theme>
            <Router>
                <Analytics>
                    <Background>
                        <ScrollToTop/>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </Background>
                </Analytics>
            </Router>
        </Theme>
    )
}
