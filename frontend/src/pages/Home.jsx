

import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <HeroSection />
            <h2 className='max-w-6/12'>Currently studying <span className='text-highlight'>Computer Science</span> and working on personal projects to expand my knowledge.</h2>
        </>
    );
}

export default Home;