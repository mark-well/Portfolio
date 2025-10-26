
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
                <section className='info-section about-section'>
                    <h2 className='font-bold text-2xl'>About</h2>
                    <div className='flex flex-col gap-y-8 text-justify'>
                        <p className='max-w-3xl'>
                            Hi!, guess what, i'm happy you're here because i want to tell you about me.
                            Behold because i'm about to introduce my self, my name is Mark Well, nickname "mak mak", i'm a 1st year college student at Laguna State Polytechnic University.
                        </p>
                        <p className='max-w-3xl'>
                            I would like to tell you that i'm a very simple person, from my lifestyle to my outfits, I like to be minimalist, additionally i'm an introvert I don't like being
                            around a lot of people and i like to be alone, i want people to understand that this is who i am, my friends sometimes see me alone and they always think if i'm
                            having a problem or if i'm thinking of something, No!. I prefer to be alone and silent, not because you see me alone doesn't mean i have a problem, that's just
                            who i am, and i want people to understand that.
                        </p>
                    </div>
                </section>

                <section className='info-section education-section bg-[var(--primary-color-light)]'>
                    <h2 className='font-bold text-2xl'>Education</h2>
                    <div className="schools max-w-4xl gap-x-8 flex justify-center text-center text-base">
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

            <section className='socials flex justify-center gap-x-28 mt-44'>
                <a href='https://www.facebook.com/markwell.fb' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-facebook" size='2xl'/></a>
                <a href='https://github.com/mark-well' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-github" size='2xl'/></a>
                <a href='https://www.instagram.com/its__merts/' target='_blank'><FontAwesomeIcon icon="fa-brands fa-square-instagram" size='2xl'/></a>
            </section>

            <Footer className="mt-11"/>
        </>
    );
}

export default About;