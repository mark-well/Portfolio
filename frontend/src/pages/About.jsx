
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Helmet } from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Header />

            <div className='flex flex-col gap-y-8 mt-32 font-montserrat'>
                <section className='info-section about-section pl-8 pr-8'>
                    <h2 className='font-bold text-2xl'>About</h2>
                    <div className='flex flex-col gap-y-8 text-center'>
                        <p className='max-w-3xl'>
                            My name is Mark Well, also known as "Mak Mak," and I'm a first-year college student at Laguna State Polytechnic University.
                            I consider myself a simple and minimalist person, from the way I live to the way I dress.
                        </p>
                        <p className='max-w-3xl'>
                            I’m an introvert who enjoys solitude and silence.
                            Many people misunderstand my being alone as a sign of having problems, but that’s not the case.
                            Being by myself brings me peace—it’s simply who I am, and I want others to accept and understand that.
                        </p>
                    </div>
                </section>

                <section className='info-section education-section bg-[var(--primary-color-light)] pl-8 pr-8'>
                    <h2 className='font-bold text-2xl'>Education</h2>
                    <div className="schools max-w-4xl gap-x-8 gap-y-12 flex justify-center text-center text-base max-sm:flex-col">
                        <div className="lspu flex-1 flex flex-col gap-y-4">
                            <div>
                                <h3 className='font-semibold'>Laguna State Polytechnic University</h3>
                                <p>2023 - 2025</p>
                            </div>
                            <p>I am currently a 3rd year college student at this university, taking computer science as my course major in intelligent system.</p>
                        </div>
                        <div className="minhs flex-1 flex flex-col gap-y-4">
                            <div>
                                <h3 className='font-semibold'>Mabitac Integrated National High School</h3>
                                <p>2017 - 2023</p>
                            </div>
                            <p>Started my high school study in 2017 and graduated in 2023.</p>
                        </div>
                    </div>
                </section>
            </div>

            <section className='socials flex justify-center gap-x-28 mt-44 max-sm:gap-x-8 max-sm:mt-20'>
                <a href='https://www.facebook.com/markwell.fb' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-facebook" size='xl'/></a>
                <a href='https://github.com/mark-well' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-github" size='xl'/></a>
                <a href='https://www.instagram.com/its__merts/' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-instagram" size='xl'/></a>
            </section>

            <Footer className="mt-11"/>
        </>
    );
}

export default About;