import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/Carousel';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <HeroCarousel />
                <Services />
                <About />
                <CTA />
                <Contact />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
};

export default Home;