

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
            <HeroSection className="px-48 max-sm:px-4"/>
            <h2 className='max-w-full px-48 max-sm:px-4 max-sm:mt-4 max-sm:mb-4 max-sm:text-center'>Currently studying <span className='text-highlight'>Computer Science</span> and working on personal projects to expand my knowledge.</h2>
        </>
    );
}

export default Home;