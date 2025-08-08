import React from 'react';
import Header from '../components/Header';
import SpecialitySection from '../components/SpecialitySection';
import TopDoctor from '../components/TopDoctor';
import TrustedBanner from '../components/TrustedBanner';

const Home = () => {
    return (
        <div>
        <Header/>
        <SpecialitySection/>
        <TopDoctor/>
        <TrustedBanner/>
        </div>
    );
};

export default Home;