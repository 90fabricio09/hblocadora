import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

const GalleryPage = () => {
    return (
        <div>
            <Header />
            <Gallery />
            <FloatingButtons />
            <Footer />
        </div>
    );
};

export default GalleryPage;
