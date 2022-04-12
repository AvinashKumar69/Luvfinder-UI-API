import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCards from '../components/ProductCards';
import ProductCards222 from '../components/ProductCards222';
import ProductTable from '../components/ProductTable';
import ProductTableFilter from '../components/ProductTableFilter';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProductCards />
            <ProductCards222 />
            <ProductTableFilter />
            <ProductTable />
            <Footer />
        </>
    )
}

export default Home;