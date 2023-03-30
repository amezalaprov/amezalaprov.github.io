import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../sections/Contact';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-ubuntu text-primary bg-light-gray md:bg-white', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Contact
            additionalClass={['my-5']}
            socialIconsHeaderText="Sigueme"
            formHeaderText="Contactame"
            nameInputLabel="Nombre"
            emailInputLabel="Email"
            messageInputLabel="Mensaje"
            buttonLabel="Enviar"
            phoneNumber="+123 456 789"
            address="Valdivia - Chile"
            emailAddress="la.provinciana.ana@gmail.com"
        />
        <Footer />
    </main>
);

export default Layout;
