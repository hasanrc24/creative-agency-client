import React from 'react';
import CustomerBrands from './CustomerBrands/CustomerBrands';
import Header from './Header/Header';
import Portfolio from './Portfolo/Portfolio';
import ProvideServices from './ProvideServices/ProvideServices';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <CustomerBrands />
            <ProvideServices />
            <Portfolio />
            <ClientFeedback />
            <Footer />
        </div>
    );
};

export default Home;